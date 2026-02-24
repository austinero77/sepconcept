// import PageWrap from '../components/PageWrap';
// import { motion } from "framer-motion";

import React from 'react';
import { motion } from "framer-motion";
import PageWrap from '../components/PageWrap';
import { Lightbulb, Target, ShieldCheck, Users, Quote } from 'lucide-react';
import SepAboutPic from '../assets/sep-about.jpg';



export default function AboutPage() {
    const coreValues = [
        {
            icon: Lightbulb,
            title: "Creativity",
            desc: "We think boldly, design beautifully, and communicate purposefully to ensure your brand stands out."
        },
        {
            icon: Target,
            title: "Excellence",
            desc: "Every project reflects our uncompromising commitment to premium quality and cinematic precision."
        },
        {
            icon: ShieldCheck,
            title: "Professionalism",
            desc: "We honor timelines, respect visions, and uphold the highest standards of integrity in every production."
        },
        {
            icon: Users,
            title: "Collaboration",
            desc: "We co-create with our clients, treating every project as a partnership to achieve shared greatness."
        }
    ];

    return (
        <PageWrap>
            <section className="py-20 px-6 max-w-7xl mx-auto">
                {/* 1. HERO & NARRATIVE SPLIT - Tight Layout */}
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-yellow-500 uppercase tracking-tighter leading-[0.9] mb-8">
                            About <br /> SEPCONCEPT
                        </h1>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
                            <p className="text-white font-medium text-xl border-l-2 border-yellow-500 pl-6">
                                SEP Concept is a premium media creative agency devoted to transforming visions into exceptional visual experiences.
                            </p>
                            <p>
                                Our name <span className="text-yellow-500 font-bold">(SEP) Secure Elegant Production</span> is not just an acronym; it's our identity and our promise. We deliver sophisticated, secure, and impactful media solutions tailored to elevate your brand.
                            </p>
                            <p>
                                From photography and videography to content creation, branding, and social media management, we provide all-in-one services designed to engage audiences, tell stories, and drive results. Whether you're an individual, a startup, or a large organization, we bring your ideas to life with creative intelligence and digital finesse.
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. CINEMATIC IMAGE PLACEHOLDER - Fills the desktop gap */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl mt-12 lg:mt-0"
                    >
                        <img
                            src={SepAboutPic}
                            alt="SEP Concept Cinematic Gear"
                            // className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                            className="w-full h-full object-cover saturate-[1.1] brightness-95 transition-all duration-1000"

                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </motion.div>
                </div>

                {/* 3. THE OBJECTIVE - Impact Statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-zinc-950 p-10 md:p-16 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden group"
                >
                    <Quote className="absolute -top-4 -left-4 w-32 h-32 text-yellow-500/5 rotate-12" />
                    <div className="relative z-10">
                        <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">The Strategic Objective</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-3xl">
                            To drive visibility, engagement, and measurable impact while building a sustainable creative ecosystem.
                        </h2>
                    </div>
                </motion.div>

                {/* 4. MISSION & VISION GRID */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
                        <h3 className="text-yellow-500 text-xs font-black uppercase tracking-[0.3em] mb-6">Our Mission</h3>
                        <p className="text-gray-300 text-xl leading-relaxed">
                            To empower individuals and businesses by delivering world-class visual content and digital experiences that <span className="text-white font-bold uppercase">captivate, communicate, and convert.</span>
                        </p>
                    </div>
                    <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
                        <h3 className="text-yellow-500 text-xs font-black uppercase tracking-[0.3em] mb-6">Our Vision</h3>
                        <p className="text-gray-300 text-xl leading-relaxed">
                            To become the world’s most trusted creative powerhouse, known for delivering <span className="text-white font-bold uppercase">secure elegant productions</span> that empower brands to achieve greatness.
                        </p>
                    </div>
                </div>

                {/* 5. CORE VALUES */}
                <div className="pt-20 border-t border-white/5">
                    <h2 className="text-4xl font-bold text-white uppercase tracking-tighter mb-16">Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((val, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, borderColor: 'rgba(234, 179, 8, 0.3)' }}
                                className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 transition-all duration-500"
                            >
                                <val.icon className="text-yellow-500 mb-6" size={28} strokeWidth={1.5} />
                                <h4 className="text-white font-bold text-xl mb-3">{val.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrap>
    );
}



function AboutPage2() {
    const coreValues = [
        {
            icon: Lightbulb,
            title: "Creativity",
            desc: "We think boldly, design beautifully, and communicate purposefully to ensure your brand stands out."
        },
        {
            icon: Target,
            title: "Excellence",
            desc: "Every project reflects our uncompromising commitment to premium quality and cinematic precision."
        },
        {
            icon: ShieldCheck,
            title: "Professionalism",
            desc: "We honor timelines, respect visions, and uphold the highest standards of integrity in every production."
        },
        {
            icon: Users,
            title: "Collaboration",
            desc: "We co-create with our clients, treating every project as a partnership to achieve shared greatness."
        }
    ];

    return (
        <PageWrap>
            <section className="py-20 px-6 max-w-7xl mx-auto">
                {/* 1. TIGHTER HERO SECTION */}
                <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-6xl font-black text-yellow-500 uppercase tracking-tighter leading-[0.9]">
                            About SEPCONCEPT
                        </h1>
                        <p className="mt-6 text-white text-xl md:text-2xl font-medium tracking-tight">
                            Secure Elegant Production: <span className="text-gray-500 font-light">Our identity, our promise, and your competitive advantage.</span>
                        </p>
                    </motion.div>

                    {/* Intro text pulled UP to the side of the headline on desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed lg:pt-4 border-l border-yellow-500/20 pl-8"
                    >
                        SEP Concept is a premium creative agency devoted to transforming visions into exceptional experiences. We deliver sophisticated, secure, and impactful media solutions tailored to elevate your brand.
                    </motion.div>
                </div>

                {/* 2. THE OBJECTIVE - High Impact Callout */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-zinc-950 p-10 md:p-16 rounded-[3rem] border border-white/5 mb-24 relative overflow-hidden group"
                >
                    <Quote className="absolute -top-4 -left-4 w-32 h-32 text-yellow-500/5 rotate-12" />
                    <div className="relative z-10">
                        <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">The Strategic Objective</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-4xl">
                            "To drive visibility, engagement, and measurable impact while building a sustainable creative ecosystem."
                        </h2>
                    </div>
                </motion.div>

                {/* 3. MISSION & VISION GRID */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
                        <h3 className="text-yellow-500 text-xs font-black uppercase tracking-[0.3em] mb-6">Our Mission</h3>
                        <p className="text-gray-300 text-xl leading-relaxed">
                            Empowering brands by delivering world-class visual content that <span className="text-white font-bold">captivates, communicates, and converts.</span>
                        </p>
                    </div>
                    <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
                        <h3 className="text-yellow-500 text-xs font-black uppercase tracking-[0.3em] mb-6">Our Vision</h3>
                        <p className="text-gray-300 text-xl leading-relaxed">
                            To become the world’s most trusted creative powerhouse, known for <span className="text-white font-bold">secure elegant productions</span> that achieve greatness.
                        </p>
                    </div>
                </div>

                {/* 4. CORE VALUES - Clean Sophisticated Grid */}
                <div className="pt-20 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Core Values</h2>
                        <p className="text-gray-500 max-w-xs text-sm">The principles that guide every frame we capture and every brand we build.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((val, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, borderColor: 'rgba(234, 179, 8, 0.3)' }}
                                className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 transition-all duration-500"
                            >
                                <val.icon className="text-yellow-500 mb-6" size={28} strokeWidth={1.5} />
                                <h4 className="text-white font-bold text-xl mb-3">{val.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrap>
    );
}


// export default function AboutPage() {
//     return (
//         <PageWrap>
//             <section className="py-24 px-6 max-w-6xl mx-auto">
//                 <h2 className="text-4xl font-bold text-yellow-500 mb-8">About SEPCONCEPT</h2>
//                 <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed">
//                     <p>
//                         SEP Concept is a premium media creative agency devoted to transforming visions into exceptional visual experiences. Our name (SEP)Secure Elegant Production is not just an acronym; it's our identity and our promise. We deliver sophisticated, secure, and impactful media solutions tailored to elevate your brand.
//                         From photography and videography to content creation, branding, and social media management, we provide all-in-one services designed to engage audiences, tell stories, and drive results. Whether you're an individual, a startup, or a large organization, we bring your ideas to life with creative intelligence and digital finesse.
//                     </p>
//                     <p>
//                         Our goal is not only to create visually compelling content but to drive visibility, engagement, growth and measurable impact while building a sustainable creative ecosystem.
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-3 gap-8 mt-12">
//                     <div>
//                         <h3 className="text-yellow-500 font-semibold mb-3">Mission</h3>
//                         <p className="text-gray-400">To empower individuals and businesses by delivering world-class visual content and digital experiences that captivate, communicate, and convert.</p>
//                     </div>
//                     <div>
//                         <h3 className="text-yellow-500 font-semibold mb-3">Vision</h3>
//                         <p className="text-gray-400">To become World most trusted creative powerhouse, known for delivering secure, elegant productions that leave a lasting impression and empower brands to achieve greatness.</p>
//                     </div>
//                     <div>
//                         <h3 className="text-yellow-500 font-semibold mb-3">Core Values</h3>
//                         <p className="text-gray-400">Creativity, Excellence, Professionalism, Collaboration.</p>
//                     </div>
//                 </div>
//             </section>
//         </PageWrap>
//     );
// }


function AboutPage1() {
    const coreValues = [
        {
            icon: Lightbulb,
            title: "Creativity",
            desc: "We think boldly, design beautifully, and communicate purposefully to ensure your brand stands out."
        },
        {
            icon: Target,
            title: "Excellence",
            desc: "Every project reflects our uncompromising commitment to premium quality and cinematic precision."
        },
        {
            icon: ShieldCheck,
            title: "Professionalism",
            desc: "We honor timelines, respect visions, and uphold the highest standards of integrity in every production."
        },
        {
            icon: Users,
            title: "Collaboration",
            desc: "We co-create with our clients, treating every project as a partnership to achieve shared greatness."
        }
    ];

    return (
        <PageWrap>
            <section className="py-24 px-6 max-w-7xl mx-auto">
                {/* HERO HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 border-b border-white/5 pb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-yellow-500 uppercase tracking-tighter mb-6">
                        About <br /> SEPCONCEPT
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl font-light">
                        Secure Elegant Production: Our identity, our promise, and your competitive advantage.
                    </p>
                </motion.div>

                {/* THE STORY & IMAGE */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            SEP Concept is a premium creative agency devoted to transforming visions into exceptional visual experiences. We deliver sophisticated, secure, and impactful media solutions tailored to elevate your brand.
                        </p>
                        <p>
                            From photography and videography to strategic digital visibility, we provide all-in-one services designed to engage audiences and drive measurable results. We bring your ideas to life with creative intelligence and digital finesse.
                        </p>
                        {/* THE OBJECTIVE SECTION */}
                        <div className="pt-8">
                            <h3 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">The Objective</h3>
                            <p className="text-white font-medium italic">
                                "Our goal is not only to create visually compelling content but to drive visibility, engagement, growth and measurable impact while building a sustainable creative ecosystem."
                            </p>
                        </div>
                    </div>

                    {/* IN-HOUSE PHOTO PLACEHOLDER */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com"
                            alt="SEP Concept Production"
                            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>
                </div>

                {/* MISSION & VISION - High Contrast Layout */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    <div className="p-12 rounded-[2.5rem] bg-zinc-950 border border-yellow-500/10 hover:border-yellow-500/30 transition-all">
                        <h3 className="text-yellow-500 text-2xl font-bold mb-4 uppercase tracking-tight">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            To empower individuals and businesses by delivering world-class visual content and digital experiences that captivate, communicate, and convert.
                        </p>
                    </div>
                    <div className="p-12 rounded-[2.5rem] bg-zinc-950 border border-yellow-500/10 hover:border-yellow-500/30 transition-all">
                        <h3 className="text-yellow-500 text-2xl font-bold mb-4 uppercase tracking-tight">Our Vision</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            To become the world’s most trusted creative powerhouse, known for delivering secure, elegant productions that empower brands to achieve greatness.
                        </p>
                    </div>
                </div>

                {/* CORE VALUES - Dynamic Grid */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center md:text-left uppercase">Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((val, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-all"
                            >
                                <val.icon className="text-yellow-500 mb-6" size={32} />
                                <h4 className="text-white font-bold text-xl mb-3">{val.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrap>
    );
}
