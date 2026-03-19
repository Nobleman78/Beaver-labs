'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { manrope } from '@/components/utils/font';
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import { Marquee } from '@/components/ui/marquee';

/* ─── animation helpers ─── */
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
    },
});

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── data ─── */
const chapters: {
    id: string;
    title: string;
    region: string;
    flag: string;
    subtitle: string;
    projects: {
        number: string;
        name: string;
        tagline: string;
        description: string;
        built: string[];
        industry: string;
        location: string;
        url: string;
        accentHex: string;
        accentBg: string;
        accentText: string;
        accentBorder: string;
    }[];
}[] = [
        {
            id: 'I',
            title: 'Voices from the Hills',
            region: 'Chittagong Hill Tracts, Bangladesh',
            flag: '🇧🇩',
            subtitle:
                'Where our roots run deep. The Chittagong Hill Tracts is home to resilient indigenous communities whose voices the world deserves to hear. We built the digital infrastructure that lets them speak, without compromise.',
            projects: [
                {
                    number: '01',
                    name: 'SPaRC Voice',
                    tagline: 'Empowering indigenous women to reclaim their voice.',
                    description:
                        'SPaRC is an indigenous women-led feminist NGO dismantling patriarchy in the Chittagong Hill Tracts. They work to protect the social, cultural, economic, and spiritual rights of women and girls, including survivors of conflict and gender-based violence. We built their digital platform to amplify their reach, manage programs, and mobilize communities across Bangladesh and beyond.',
                    built: ['Web Platform', 'CMS', 'Resource Library', 'Program Management'],
                    industry: 'NGO / Human Rights',
                    location: 'Chittagong Hill Tracts, Bangladesh',
                    url: 'https://www.sparcvoice.org/',
                    accentHex: '#7370FF',
                    accentBg: 'bg-[#7370FF]/5',
                    accentText: 'text-[#7370FF]',
                    accentBorder: 'border-[#7370FF]/20',
                },
                {
                    number: '02',
                    name: 'CHT Vanguard',
                    tagline: 'The frontline digital news outlet of the Hill Tracts.',
                    description:
                        'CHT Vanguard is a bilingual digital news platform we built from the ground up in 2024, giving the Chittagong Hill Tracts its own credible media voice. Covering Rangamati, Khagrachari, and Bandarban with local depth and global reach, the platform supports Bengali and English, dark mode, and a full editorial content architecture.',
                    built: ['News Platform', 'Editorial CMS', 'Bilingual Support', 'Dark Mode'],
                    industry: 'Digital Journalism / Media',
                    location: 'Chittagong Hill Tracts, Bangladesh',
                    url: 'https://www.chtvanguard.com/',
                    accentHex: '#7370FF',
                    accentBg: 'bg-[#7370FF]/5',
                    accentText: 'text-[#7370FF]',
                    accentBorder: 'border-[#7370FF]/20',
                },
                {
                    number: '03',
                    name: 'Boichitro',
                    tagline: "An indigenous marketplace rooted in community.",
                    description:
                        "Boichitro (বৈচিত্র, meaning diversity) is a social enterprise connecting indigenous artisans and farmers from the CHT to broader markets. In its early stages, we came alongside the team, contributing to the platform's foundation and helping shape the digital experience that brings their vision to life.",
                    built: ['Early-Stage Support', 'Platform Contribution', 'E-Commerce'],
                    industry: 'Social Enterprise / E-Commerce',
                    location: 'Bangladesh',
                    url: 'https://boichitro.shop/',
                    accentHex: '#7370FF',
                    accentBg: 'bg-[#7370FF]/5',
                    accentText: 'text-[#7370FF]',
                    accentBorder: 'border-[#7370FF]/20',
                },
            ],
        },
        {
            id: 'II',
            title: 'Empowering Livelihoods',
            region: 'Australia',
            flag: '🇦🇺',
            subtitle:
                'Halfway across the world, the same conviction. From grain farmers in the Australian outback to pharmaceutical cleanroom specialists in Melbourne, we build technology that respects the people doing the real work.',
            projects: [
                {
                    number: '04',
                    name: 'GrainX',
                    tagline: 'Empowering Australian farmers from the inside out.',
                    description:
                        "GrainX is a grain trading marketplace connecting Australian farmers, buyers, and agents for faster, more transparent deals. We worked closely with their team to develop internal solutions that streamlined their operations, so the people behind it could focus on what matters most: getting grain growers a fair deal.",
                    built: ['Internal Tooling', 'Workflow Solutions', 'AgriTech'],
                    industry: 'AgriTech / Grain Trading',
                    location: 'Australia',
                    url: 'https://play.google.com/store/apps/details?id=com.grainx.mobile',
                    accentHex: '#7370FF',
                    accentBg: 'bg-[#7370FF]/5',
                    accentText: 'text-[#7370FF]',
                    accentBorder: 'border-[#7370FF]/20',
                },
                {
                    number: '05',
                    name: 'CSOCS',
                    tagline: 'Precision cleaning. Melbourne\'s trusted name since 1995.',
                    description:
                        "CSOCS has been keeping Melbourne's most demanding environments spotlessly clean for over 25 years: pharmaceutical cleanrooms, sterile labs, and offices. We designed and built their full digital presence from scratch, a professional B2B website that brings that expertise online and puts them in front of the clients they deserve.",
                    built: ['Website Design & Build', 'Service Showcase', 'Lead Generation', 'SEO'],
                    industry: 'Commercial / Pharmaceutical Services',
                    location: 'Melbourne, Victoria, Australia',
                    url: 'https://www.csocs.com.au/',
                    accentHex: '#7370FF',
                    accentBg: 'bg-[#7370FF]/5',
                    accentText: 'text-[#7370FF]',
                    accentBorder: 'border-[#7370FF]/20',
                },
            ],
        },
        {
            id: 'III',
            title: 'Digital Futures',
            region: 'Global',
            flag: '🌏',
            subtitle:
                'For the builders, the creatives, and the dreamers operating on a global stage. We craft digital experiences that are as bold and ambitious as the people behind them.',
            projects: [
                {
                    number: '06',
                    name: 'Arcade Digital',
                    tagline: 'Elite video editing. Global reach.',
                    description:
                        'Arcade Digital is a premium video editing and content creation agency transforming raw footage into world-class content: Reels, Shorts, Real Estate, Streams, Promos, and beyond. They needed a website that felt as elite as their output. We delivered a dark, cinematic platform that showcases their portfolio and converts visitors into clients.',
                    built: ['Agency Website', 'Portfolio Showcase', 'Dark UI', 'Client Acquisition Flow'],
                    industry: 'Video Production / Creative Agency',
                    location: 'Global',
                    url: 'https://www.arcadedigital.net/',
                    accentHex: '#7370FF',
                    accentBg: 'bg-[#7370FF]/5',
                    accentText: 'text-[#7370FF]',
                    accentBorder: 'border-[#7370FF]/20',
                },
                {
                    number: '07',
                    name: 'Arnob Chakma',
                    tagline: 'A Bangladeshi designer building for Web3 from the US.',
                    description:
                        "Arnob Chakma is a US-based digital architect and brand designer of Bangladeshi-indigenous heritage, with work spanning Web3, DeFi, fintech, and gaming startups. His work speaks for itself. His platform needed to as well. We built his personal brand website: a statement portfolio that demonstrates his design mastery and tells his story on his own terms.",
                    built: ['Portfolio Website', 'Personal Brand Platform', 'Case Studies', 'Booking Integration'],
                    industry: 'Design / Web3 / Personal Brand',
                    location: 'United States',
                    url: 'https://www.atarnob.com/',
                    accentHex: '#7370FF',
                    accentBg: 'bg-[#7370FF]/5',
                    accentText: 'text-[#7370FF]',
                    accentBorder: 'border-[#7370FF]/20',
                },
            ],
        },
    ];

/* ─── sub-components ─── */
function ProjectCard({
    project,
    index,
    featured = false,
}: {
    project: (typeof chapters)[0]['projects'][0];
    index: number;
    featured?: boolean;
}) {
    return (
        <motion.div
            variants={fadeUp(index * 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`group relative bg-white border border-zinc-200 rounded-[2rem] overflow-hidden hover:border-[#7370FF]/40 hover:shadow-2xl hover:shadow-[#7370FF]/5 hover:-translate-y-1.5 transition-all duration-700 cursor-pointer ${featured ? 'md:col-span-2' : ''}`}
        >
            {/* Card visual header */}
            <div
                className="relative h-28 md:h-36 w-full overflow-hidden"
                style={{
                    background: `radial-gradient(ellipse at 80% 40%, ${project.accentHex}18 0%, transparent 65%),
                                 linear-gradient(135deg, ${project.accentHex}0a 0%, transparent 55%)`,
                }}
            >
                {/* Dot grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${project.accentHex}30 1px, transparent 1px)`,
                        backgroundSize: '22px 22px',
                    }}
                />
                {/* Faint watermark initial */}
                <span
                    className={`${manrope.className} absolute right-6 bottom-0 translate-y-1/4 text-[110px] font-extrabold leading-none select-none pointer-events-none`}
                    style={{ color: `${project.accentHex}10` }}
                >
                    {project.name.charAt(0)}
                </span>
                {/* Hover glow sweep */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: `linear-gradient(120deg, ${project.accentHex}08 0%, ${project.accentHex}14 50%, transparent 100%)`,
                    }}
                />
            </div>

            <div className={`p-6 md:p-10 ${featured ? 'md:flex md:gap-14' : ''}`}>
                {/* Left column (featured) / full content (normal) */}
                <div className={featured ? 'md:flex-1' : ''}>
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${project.accentBg} ${project.accentText} ${project.accentBorder}`}>
                                {project.industry}
                            </span>
                            <span className="flex items-center gap-1 text-[11px] font-medium text-zinc-500 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-full">
                                <FiMapPin size={10} />
                                {project.location}
                            </span>
                        </div>
                    </div>

                    {/* Name + tagline */}
                    <h3
                        className={`${manrope.className} text-zinc-900 text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#7370FF] transition-colors duration-500 tracking-tight leading-tight`}
                    >
                        {project.name}
                    </h3>
                    <p
                        className={`${manrope.className} text-base font-medium mb-5 italic`}
                        style={{ color: project.accentHex }}
                    >
                        {project.tagline}
                    </p>

                    {/* Description */}
                    <p className={`${manrope.className} text-zinc-500 text-[15px] leading-relaxed mb-7 line-clamp-3 md:line-clamp-none`}>
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.built.map((tag) => (
                            <span
                                key={tag}
                                className={`${manrope.className} text-[11px] font-semibold bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={featured ? 'md:self-end' : ''}>
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${manrope.className} inline-flex items-center gap-2 text-sm font-semibold text-[#7370FF] hover:gap-3 transition-all duration-300 group/link`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Visit Project
                        <span className="w-7 h-7 rounded-full bg-[#7370FF]/10 flex items-center justify-center group-hover/link:bg-[#7370FF] transition-colors duration-300">
                            <FiArrowUpRight size={13} className="text-[#7370FF] group-hover/link:text-white transition-colors duration-300" />
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

function ChapterSection({ chapter, index }: { chapter: (typeof chapters)[0]; index: number }) {
    return (
        <section className="mb-28 md:mb-36">
            {/* Chapter header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                className="mb-12 md:mb-16"
            >
                <div className="flex items-center gap-4 mb-5">
                    {/* Roman numeral */}
                    <span className={`${manrope.className} text-[80px] md:text-[100px] font-extrabold text-zinc-100 leading-none select-none`}>
                        {chapter.id}
                    </span>
                    <div className="flex-1 h-px bg-zinc-200" />
                    <span className={`${manrope.className} text-sm font-semibold text-zinc-400 flex items-center gap-1.5`}>
                        <FiMapPin size={12} />
                        {chapter.region} {chapter.flag}
                    </span>
                </div>
                <h2 className={`${manrope.className} text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-4`}>
                    {chapter.title}
                </h2>
                <p className={`${manrope.className} text-zinc-500 text-base md:text-lg max-w-2xl leading-relaxed line-clamp-2 md:line-clamp-none`}>
                    {chapter.subtitle}
                </p>
            </motion.div>

            {/* Cards grid */}
            <div
                className={`grid grid-cols-1 gap-5 md:gap-6 ${chapter.projects.length === 3 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}
            >
                {chapter.projects.map((project, i) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                        index={i}
                        featured={chapter.projects.length === 3 && i === 0}
                    />
                ))}
            </div>
        </section>
    );
}

/* ─── page ─── */
export default function ProjectsPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <div className={`min-h-screen bg-white ${manrope.className}`}>
            {/* ── HERO ── */}
            <section ref={heroRef} className="relative pt-40 pb-20 px-6 md:px-10 xl:px-0 overflow-hidden">
                {/* Glow orbs */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7370FF]/6 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-40 left-1/4 w-[300px] h-[200px] bg-[#9C99FF]/8 blur-[80px] rounded-full pointer-events-none" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Label */}
                    <motion.div
                        variants={fadeUp(0)}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#7370FF]" />
                        <span className="text-[13px] font-semibold tracking-widest uppercase text-[#7370FF]">
                            Our Work
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUp(0.1)}
                        initial="hidden"
                        animate="visible"
                        className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold text-zinc-900 tracking-[-0.025em] leading-[1.05] mb-6 max-w-4xl"
                    >
                        We build for those
                        <br />
                        <span className="text-[#7370FF]">who matter most.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        animate="visible"
                        className="text-zinc-500 text-base md:text-xl max-w-2xl leading-relaxed mb-8 line-clamp-3 md:line-clamp-none"
                    >
                        From the indigenous hills of Bangladesh to the grain fields of Australia and the
                        design studios of the United States, every project we take on is a story of real
                        impact for real people. This is that story.
                    </motion.p>

                    {/* Location pills */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-3"
                    >
                        {[
                            { flag: '🇧🇩', label: 'Bangladesh' },
                            { flag: '🇦🇺', label: 'Australia' },
                            { flag: '🇺🇸', label: 'United States' },
                            { flag: '🌏', label: 'Global' },
                        ].map((loc) => (
                            <motion.div
                                key={loc.label}
                                variants={fadeUp(0)}
                                className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-2"
                            >
                                <span className="text-base">{loc.flag}</span>
                                <span className="text-sm font-semibold text-zinc-700">{loc.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── MARQUEE STRIP ── */}
            <div className="border-y border-[#7370FF]/15 bg-[#7370FF]/4 py-6 mb-16 overflow-hidden"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <Marquee className="[--duration:28s] [--gap:0rem]" repeat={4}>
                    {['SPaRC Voice', 'CHT Vanguard', 'Boichitro', 'GrainX', 'CSOCS', 'Arcade Digital', 'Arnob Chakma'].map((name) => (
                        <span
                            key={name}
                            className={`${manrope.className} text-base font-bold text-zinc-700 uppercase tracking-[0.12em] px-8 shrink-0 flex items-center gap-8`}
                        >
                            {name}
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7370FF]" />
                        </span>
                    ))}
                </Marquee>
            </div>

            {/* ── CHAPTERS ── */}
            <div className="px-6 md:px-10 xl:px-0 max-w-7xl mx-auto">
                {chapters.map((chapter, i) => (
                    <ChapterSection key={chapter.id} chapter={chapter} index={i} />
                ))}
            </div>

            {/* ── CLOSING STATEMENT ── */}
            <section className="px-6 md:px-10 xl:px-0 max-w-7xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                    className="relative bg-zinc-950 rounded-[2.5rem] px-10 md:px-16 py-16 md:py-20 overflow-hidden"
                >
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#7370FF]/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-[#9C99FF]/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#7370FF]" />
                            <span className="text-[13px] font-semibold tracking-widest uppercase text-[#7370FF]">
                                Your Turn
                            </span>
                        </div>
                        <h2 className={`${manrope.className} text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5`}>
                            Your story deserves
                            <br />
                            to be told.
                        </h2>
                        <p className={`${manrope.className} text-zinc-400 text-lg leading-relaxed mb-10`}>
                            We&apos;re still writing our story. But if you have something worth building,
                            we&apos;d love to be part of it.
                        </p>
                        <Link
                            href="/contact"
                            className={`${manrope.className} inline-flex items-center gap-2.5 bg-[#7370FF] hover:bg-[#625df5] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(115,112,255,0.35)]`}
                        >
                            Start a conversation
                            <FiArrowUpRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
