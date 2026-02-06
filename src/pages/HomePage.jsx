import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Award, Shield, Zap, Users, ArrowRight,
    Camera, Video, Palette, Sparkles, Share2, Megaphone
} from "lucide-react";
import PageWrap from '../components/PageWrap';

// Move PageWrap import here if you have it in a separate file
// import PageWrap from '../components/PageWrap'; 

// export default function HomePage() {
//     const containerVars = {
//         initial: { opacity: 0 },
//         whileInView: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1, delayChildren: 0.1 }
//         },
//         viewport: { once: true, amount: 0.2 }
//     };

//     const itemVars = {
//         initial: { opacity: 0, y: 20 },
//         whileInView: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
//         }
//     };

//     const capabilities = [
//         {
//             title: "Event Photography & Coverage",
//             icon: Camera,
//             desc: "Capturing high-energy moments with a focus on lighting, composition, and emotional impact."
//         },
//         {
//             title: "Videography & Brand Films",
//             icon: Video,
//             desc: "Cinematic storytelling that brings your brand’s mission to life through high-definition motion."
//         },
//         {
//             title: "Design & Brand Identity",
//             icon: Palette,
//             desc: "Crafting visual languages that communicate prestige, authority, and modern elegance."
//         },
//         {
//             title: "Content Creation",
//             icon: Sparkles,
//             desc: "Besproke digital assets designed to captivate your audience and drive organic engagement."
//         },
//         {
//             title: "Social Media Management",
//             icon: Share2,
//             desc: "Strategic curation and community growth tailored to the unique voice of your organization."
//         },
//         {
//             title: "Sponsored Advertising",
//             icon: Megaphone,
//             desc: "Targeted ad campaigns engineered for maximum visibility and high-conversion performance."
//         }
//     ];

//     return (
//         <PageWrap>
//             {/* 1. HERO SECTION (As previously designed) */}
//             <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com')] bg-cover bg-center opacity-25 pointer-events-none" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black pointer-events-none" />
//                 <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative max-w-5xl">
//                     <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
//                         SEP CONCEPT <br /> <span className="text-yellow-500">Media Agency</span>
//                     </h1>
//                     <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">Premium creative media production, brand storytelling, and digital visibility.</p>
//                     <div className="flex gap-6 justify-center">
//                         <Link to="/portfolio" className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-full">Portfolio</Link>
//                         <Link to="/contact" className="px-10 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">Book Now</Link>
//                     </div>
//                 </motion.div>
//             </section>

//             {/* 2. CORE CAPABILITIES (The Rich Grid) */}
//             <section className="py-32 bg-black px-6">
//                 <motion.div
//                     variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
//                     className="max-w-7xl mx-auto"
//                 >
//                     <motion.h2 variants={itemVars} className="text-4xl font-bold text-white mb-16">
//                         Core <span className="text-yellow-500">Capabilities</span>
//                     </motion.h2>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {capabilities.map((item, i) => (
//                             <motion.div
//                                 key={i}
//                                 variants={itemVars}
//                                 whileHover={{ y: -10, backgroundColor: "rgba(234, 179, 8, 0.03)" }}
//                                 className="border border-white/5 rounded-[2.5rem] p-10 bg-zinc-900/10 hover:border-yellow-500/20 transition-all cursor-default"
//                             >
//                                 <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl mb-8 flex items-center justify-center text-yellow-500">
//                                     <item.icon size={28} strokeWidth={1.5} />
//                                 </div>
//                                 <div className="font-bold text-2xl mb-4 leading-tight text-white">{item.title}</div>
//                                 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>
//             </section>

//             {/* 3. TRUST STRIP (Consistent with new look) */}
//             <motion.section
//                 variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
//                 className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-white/5"
//             >
//                 {[
//                     ["2021", "Founded"],
//                     ["Multi‑Service", "Media Agency"],
//                     ["Event Focused", "Coverage Experts"],
//                     ["Gold Standard", "Creative Quality"],
//                 ].map(([a, b], i) => (
//                     <motion.div key={i} variants={itemVars}>
//                         <div className="text-4xl font-black text-yellow-500 mb-2 tracking-tighter">{a}</div>
//                         <div className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">{b}</div>
//                     </motion.div>
//                 ))}
//             </motion.section>
//         </PageWrap>
//     );
// }

export default function HomePage() {
    const containerVars = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        },
        viewport: { once: true, amount: 0.2 }
    };

    const itemVars = {
        initial: { opacity: 0, y: 20 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    const capabilities = [
        {
            title: "Event Photography & Coverage",
            icon: Camera,
            desc: "Capturing high-energy moments with a focus on lighting, composition, and emotional impact."
        },
        {
            title: "Videography & Brand Films",
            icon: Video,
            desc: "Cinematic storytelling that brings your brand’s mission to life through high-definition motion."
        },
        {
            title: "Design & Brand Identity",
            icon: Palette,
            desc: "Crafting visual languages that communicate prestige, authority, and modern elegance."
        },
        {
            title: "Content Creation",
            icon: Sparkles,
            desc: "Besproke digital assets designed to captivate your audience and drive organic engagement."
        },
        {
            title: "Social Media Management",
            icon: Share2,
            desc: "Strategic curation and community growth tailored to the unique voice of your organization."
        },
        {
            title: "Sponsored Advertising",
            icon: Megaphone,
            desc: "Targeted ad campaigns engineered for maximum visibility and high-conversion performance."
        }
    ];

    return (
        <PageWrap>
            {/* 1. HERO SECTION (As previously designed) */}
            {/* <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com')] bg-cover bg-center opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black pointer-events-none" />
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                        SEP CONCEPT <br /> <span className="text-yellow-500">Media Agency</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">Premium creative media production, brand storytelling, and digital visibility.</p>
                    <div className="flex gap-6 justify-center">
                        <Link to="/portfolio" className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-full">Portfolio</Link>
                        <Link to="/contact" className="px-10 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">Book Now</Link>
                    </div>
                </motion.div>
            </section> */}


            <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
                {/* <div className="absolute inset-0 bg- bg-cover bg-center opacity-25 pointer-events-none" /> */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070')] bg-cover bg-center opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    // className="relative max-w-5xl"
                    className="relative max-w-5xl z-10"
                >



                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-yellow-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Secure • Elegant • Production</motion.span>
                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">
                        SEP CONCEPT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Media Agency</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A premium creative media agency delivering high‑end photography, cinematic media production, brand storytelling, and digital visibility.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-6 justify-center">
                        <Link to="/portfolio" className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all">View Portfolio</Link>
                        <Link to="/contact" className="px-10 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">Book Appointment</Link>
                    </div>
                </motion.div>
            </section>

            {/* 2. POSITIONING & ICON GRID */}
            <motion.section
                variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center"
            >
                <motion.div variants={itemVars}>
                    <h2 className="text-4xl font-bold text-white mb-8">A Premium Creative Media Agency <span className="text-yellow-500">Since 2021</span></h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        SEP Concept has evolved into a full‑service media and digital visibility powerhouse. We combine creative excellence with strategic execution to help brands stand out.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Our core strength is professional event photography and media coverage, supported by videography, branding, and social media management.
                    </p>
                    <Link to="/about" className="group text-yellow-500 font-bold flex items-center gap-2 uppercase text-sm tracking-widest">
                        Learn More <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                    {[
                        { icon: Award, t: "Premium Quality" },
                        { icon: Shield, t: "Secure Delivery" },
                        { icon: Zap, t: "Fast Turnaround" },
                        { icon: Users, t: "Client Focus" },
                    ].map((f, i) => (
                        <motion.div key={i} variants={itemVars} whileHover={{ scale: 1.05 }} className="border border-white/5 rounded-[2rem] p-8 bg-zinc-900/20 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
                            <f.icon className="text-yellow-500 mb-4" size={32} />
                            <div className="font-bold text-white leading-tight">{f.t}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* 3. THE PROCESS */}
            {/* <section className="py-32 bg-zinc-950 px-6">
                <motion.div
                    variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={itemVars} className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
                        <div className="h-1 w-16 bg-yellow-500 mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
                            <motion.div key={i} variants={itemVars} className="relative p-10 bg-black border border-white/5 rounded-3xl group overflow-hidden">
                                <div className="text-4xl font-black text-white/5 absolute top-4 left-6 group-hover:text-yellow-500/10 transition-colors">0{i + 1}</div>
                                <h3 className="text-xl font-bold text-yellow-500 mb-2 relative z-10">{s}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Strategic media execution focused on brand growth.</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section> */}

            {/* THE PROCESS SECTION */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    {
                        step: "Inquiry",
                        desc: "Initial consultation to understand your vision, goals, and event requirements."
                    },
                    {
                        step: "Planning",
                        desc: "Strategic creative direction and logistics mapping for a seamless production."
                    },
                    {
                        step: "Coverage",
                        desc: "On-site execution using high-end gear and professional artistic precision."
                    },
                    {
                        step: "Delivery",
                        desc: "Careful post-production and secure digital delivery of your premium media."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        variants={itemVars}
                        className="relative p-10 bg-black border border-white/5 rounded-3xl group overflow-hidden"
                    >
                        <div className="text-4xl font-black text-white/5 absolute top-4 left-6 group-hover:text-yellow-500/10 transition-colors">
                            0{i + 1}
                        </div>
                        <h3 className="text-xl font-bold text-yellow-500 mb-2 relative z-10">
                            {item.step}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>




            {/* 2. CORE CAPABILITIES (The Rich Grid) */}
            <section className="py-32 bg-black px-6">
                <motion.div
                    variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <motion.h2 variants={itemVars} className="text-4xl font-bold text-white mb-16">
                        Core <span className="text-yellow-500">Services</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {capabilities.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVars}
                                whileHover={{ y: -10, backgroundColor: "rgba(234, 179, 8, 0.03)" }}
                                className="border border-white/5 rounded-[2.5rem] p-10 bg-zinc-900/10 hover:border-yellow-500/20 transition-all cursor-default"
                            >
                                <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl mb-8 flex items-center justify-center text-yellow-500">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <div className="font-bold text-2xl mb-4 leading-tight text-white">{item.title}</div>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <div className="mt-10">
                    <Link to="/services" className="text-yellow-500 hover:underline">Explore all services →</Link>
                </div>
            </section>




            {/* 3. TRUST STRIP (Consistent with new look) */}
            {/* <motion.section
                variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-white/5"
            >
                {[
                    ["2021", "Founded"],
                    ["Multi‑Service", "Media Agency"],
                    ["Event Focused", "Coverage Experts"],
                    ["Gold Standard", "Creative Quality"],
                ].map(([a, b], i) => (
                    <motion.div key={i} variants={itemVars}>
                        <div className="text-4xl font-black text-yellow-500 mb-2 tracking-tighter">{a}</div>
                        <div className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">{b}</div>
                    </motion.div>
                ))}
            </motion.section> */}

            {/* 5. TRUST STRIP (RE-ADDED) */}
            <motion.section
                variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                // className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-white/5"
                className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center"
            >
                {[
                    ["2021", "Founded"],
                    ["Multi‑Service", "Media Agency"],
                    ["Event Focused", "Coverage Experts"],
                    ["Premium Standard", "Creative Quality"],
                ].map(([a, b], i) => (
                    <motion.div key={i} variants={itemVars}>
                        <div className="text-2xl font-black text-yellow-500 mb-2">{a}</div>
                        <div className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">{b}</div>
                    </motion.div>
                ))}
            </motion.section>

        </PageWrap>
    );
}

function HomePageNero() {
    // PREMIUM ANIMATION VARIANTS
    const containerVars = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        },
        viewport: { once: true, amount: 0.2 }
    };

    const itemVars = {
        initial: { opacity: 0, y: 20 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    return (
        <PageWrap>
            {/* 1. HERO SECTION */}
            <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com')] bg-cover bg-center opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative max-w-5xl"
                >
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-yellow-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Secure • Elegant • Production</motion.span>
                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">
                        SEP CONCEPT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Media Agency</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A premium creative media agency delivering high‑end photography, cinematic media production, brand storytelling, and digital visibility.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-6 justify-center">
                        <Link to="/portfolio" className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all">View Portfolio</Link>
                        <Link to="/contact" className="px-10 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">Book Appointment</Link>
                    </div>
                </motion.div>
            </section>

            {/* 2. POSITIONING & ICON GRID */}
            <motion.section
                variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center"
            >
                <motion.div variants={itemVars}>
                    <h2 className="text-4xl font-bold text-white mb-8">A Premium Creative Media Agency <span className="text-yellow-500">Since 2021</span></h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        SEP Concept has evolved into a full‑service media and digital visibility powerhouse. We combine creative excellence with strategic execution to help brands stand out.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Our core strength is professional event photography and media coverage, supported by videography, branding, and social media management.
                    </p>
                    <Link to="/about" className="group text-yellow-500 font-bold flex items-center gap-2 uppercase text-sm tracking-widest">
                        Learn More <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                    {[
                        { icon: Award, t: "Premium Quality" },
                        { icon: Shield, t: "Secure Delivery" },
                        { icon: Zap, t: "Fast Turnaround" },
                        { icon: Users, t: "Client Focus" },
                    ].map((f, i) => (
                        <motion.div key={i} variants={itemVars} whileHover={{ scale: 1.05 }} className="border border-white/5 rounded-[2rem] p-8 bg-zinc-900/20 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
                            <f.icon className="text-yellow-500 mb-4" size={32} />
                            <div className="font-bold text-white leading-tight">{f.t}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* 3. THE PROCESS */}
            <section className="py-32 bg-zinc-950 px-6">
                <motion.div
                    variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={itemVars} className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
                        <div className="h-1 w-16 bg-yellow-500 mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
                            <motion.div key={i} variants={itemVars} className="relative p-10 bg-black border border-white/5 rounded-3xl group overflow-hidden">
                                <div className="text-4xl font-black text-white/5 absolute top-4 left-6 group-hover:text-yellow-500/10 transition-colors">0{i + 1}</div>
                                <h3 className="text-xl font-bold text-yellow-500 mb-2 relative z-10">{s}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Strategic media execution focused on brand growth.</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* 4. CORE SERVICES PREVIEW */}
            <section className="py-32 bg-black px-6">
                <motion.div
                    variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <motion.h2 variants={itemVars} className="text-4xl font-bold text-white">Core <span className="text-yellow-500">Services</span></motion.h2>
                        {/* <motion.div variants={itemVars}>
              <Link to="/services" className="text-yellow-500 hover:underline flex items-center gap-2">Explore all services <ArrowRight size={18} /></Link>
            </motion.div> */}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Event Photography & Coverage", "Videography & Brand Films", "Design & Brand Identity",
                            "Content Creation", "Social Media Management", "Sponsored Advertising"
                        ].map((t, i) => (
                            <motion.div key={i} variants={itemVars} whileHover={{ y: -10 }} className="border border-white/5 rounded-[2.5rem] p-10 bg-zinc-900/10 hover:bg-zinc-900/40 transition-all cursor-default">
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl mb-8 flex items-center justify-center text-yellow-500 font-bold">{i + 1}</div>
                                <div className="font-bold text-2xl mb-4 leading-tight">{t}</div>
                                <p className="text-gray-500 text-sm leading-relaxed">Executed with creative direction, technical precision and strategy alignment.</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <div className="mt-10">
                    <Link to="/services" className="text-yellow-500 hover:underline">Explore all services →</Link>
                </div>
                {/* <motion.div variants={itemVars}>
          <Link to="/services" className="text-yellow-500 hover:underline flex items-center gap-2">Explore all services <ArrowRight size={18} /></Link>
        </motion.div> */}
            </section>


            {/* 5. TRUST STRIP (RE-ADDED) */}
            <motion.section
                variants={containerVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}
                // className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-white/5"
                className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center"
            >
                {[
                    ["2021", "Founded"],
                    ["Multi‑Service", "Media Agency"],
                    ["Event Focused", "Coverage Experts"],
                    ["Premium Standard", "Creative Quality"],
                ].map(([a, b], i) => (
                    <motion.div key={i} variants={itemVars}>
                        <div className="text-2xl font-black text-yellow-500 mb-2">{a}</div>
                        <div className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">{b}</div>
                    </motion.div>
                ))}
            </motion.section>




        </PageWrap>
    );
}
