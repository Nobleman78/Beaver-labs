"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isActive?: boolean }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

function smoothScrollTo(href: string): boolean {
  const hashMatch = href.match(/#(.+)$/);
  if (!hashMatch) return false;
  const id = hashMatch[1];
  const el = document.getElementById(id);
  if (!el) return false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenis = (window as any).__lenis;
  if (lenis) {
    lenis.scrollTo(`#${id}`, { duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
  return true;
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isActive?: boolean }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute right-0 top-full mt-2 flex flex-col gap-2 bg-zinc-900/90 backdrop-blur-md p-3 rounded-2xl border border-white/10"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (smoothScrollTo(item.href)) e.preventDefault();
                    setOpen(false);
                  }}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full transition-[background-color,border-color,box-shadow] duration-300",
                    item.isActive
                      ? "bg-[#7370FF]/25 shadow-[0_0_14px_rgba(115,112,255,0.45)] border border-[#7370FF]/40 text-white"
                      : "bg-white/5 border border-white/8 text-zinc-400 hover:text-white hover:bg-white/12"
                  )}
                >
                  <div className="h-5 w-5 flex items-center justify-center">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isActive?: boolean }[];
  className?: string;
}) => {
  return (
    <div className={cn("hidden md:flex h-14 items-center gap-2 rounded-2xl px-2", className)}>
      {items.map((item) => (
        <IconContainer key={item.title} {...item} />
      ))}
    </div>
  );
};

function IconContainer({
  title,
  icon,
  href,
  isActive,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (smoothScrollTo(href)) e.preventDefault();
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative w-10 h-10 flex items-center justify-center rounded-full transition-[background-color,border-color,box-shadow] duration-300",
          isActive
            ? "bg-[#7370FF]/20 shadow-[0_0_14px_rgba(115,112,255,0.45)] border border-[#7370FF]/35 text-white"
            : "bg-white/8 border border-white/8 hover:bg-white/15 hover:border-white/15 text-zinc-400 hover:text-white"
        )}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -6, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -2, x: "-50%" }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 left-1/2 w-fit rounded-md border border-white/10 bg-zinc-900/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold whitespace-pre text-white shadow-xl z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-5 h-5 flex items-center justify-center transition-colors duration-300">
          {icon}
        </div>
      </div>
    </Link>
  );
}
