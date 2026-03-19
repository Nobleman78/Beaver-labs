"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface WebGLShaderProps {
  className?: string
}

export function WebGLShader({ className = "" }: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: Record<string, { value: unknown }> | null
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const container = canvas.parentElement
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    // Brand #625DF5 = rgb(0.384, 0.365, 0.961) — pure purple, no rainbow
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        // Single wave — no chromatic split, keeps it brand-clean
        float wave = p.y + sin((p.x + time) * xScale) * yScale;
        float line = 0.006 / abs(wave);

        // A second offset wave for depth
        float wave2 = p.y + sin((p.x + time * 0.7 + 1.8) * xScale * 0.8) * yScale * 0.6;
        float line2 = 0.003 / abs(wave2);

        float intensity = line + line2;

        // Brand purple bg: #0d0b1a
        vec3 bg = vec3(0.051, 0.043, 0.102);
        // Brand line color: #625DF5 with a slight violet highlight
        vec3 lineCol = vec3(0.384 * intensity, 0.365 * intensity, 0.961 * intensity);

        gl_FragColor = vec4(bg + lineCol, 1.0);
      }
    `

    const getSize = () => ({
      width: container ? container.offsetWidth : window.innerWidth,
      height: container ? container.offsetHeight : window.innerHeight,
    })

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      const { width, height } = getSize()

      refs.uniforms = {
        resolution: { value: [width, height] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.36 },
        distortion: { value: 0.04 },
      }

      const positions = new THREE.BufferAttribute(
        new Float32Array([
          -1, -1, 0,
           1, -1, 0,
          -1,  1, 0,
           1, -1, 0,
          -1,  1, 0,
           1,  1, 0,
        ]),
        3
      )
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)

      handleResize()
    }

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value = (refs.uniforms.time.value as number) + 0.007
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      const { width, height } = getSize()
      refs.renderer.setSize(width, height, false)
      refs.uniforms.resolution.value = [width, height]
    }

    initScene()
    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      window.removeEventListener("resize", handleResize)
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) refs.mesh.material.dispose()
      }
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
