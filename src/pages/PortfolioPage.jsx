
import PageWrap from '../components/PageWrap';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronUp } from 'lucide-react';


export default function PortfolioPage() {
    const CLOUD_NAME = "dngjp8clk";
    const [activeCategory, setActiveCategory] = useState("Captures");
    const [selectedImg, setSelectedImg] = useState(null);
    const [showTopBtn, setShowTopBtn] = useState(false);

    // 1. DYNAMIC LENGTH: Set these to your current Cloudinary counts
    const CAPTURE_COUNT = 45;
    const BRAND_COUNT = 24;

    const portfolioData = [
        ...Array.from({ length: CAPTURE_COUNT }, (_, i) => ({
            id: `cap-${i}`, type: "Captures", name: `sep_capture-${i + 1}`
        })),
        ...Array.from({ length: BRAND_COUNT }, (_, i) => ({
            id: `brd-${i}`, type: "Branding", name: `sep_brand-${i + 1}`
        }))
    ];

    const filteredItems = portfolioData.filter(item => item.type === activeCategory);

    // FIX: Back Button closes Lightbox instead of leaving page
    useEffect(() => {
        if (selectedImg) {
            window.history.pushState({ lightbox: true }, "");
        }
        const handlePopState = () => setSelectedImg(null);
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [selectedImg]);

    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <PageWrap>
            <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
                {/* <h2 className="text-5xl font-black text-yellow-500 mb-12 uppercase tracking-tighter">Portfolio</h2> */}

                <h2 className="text-5xl font-black text-yellow-500 mb-6">Our Work</h2>
                <p className="text-gray-400 max-w-3xl text-lg">
                    A curated selection of SEP premium projects delivered with cinematic precision.
                </p>

                {/* CATEGORY FILTER - NOW TRULY STICKY */}
                <div className="sticky top-[70px] z-[40] bg-black/90 backdrop-blur-xl -mx-6 px-6 py-6 mb-16 overflow-x-auto scrollbar-hide border-b border-white/5">
                    <div className="flex gap-4 min-w-max">
                        {["Captures", "Branding"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-10 py-3 rounded-full border transition-all text-xs font-bold uppercase tracking-[0.2em] ${activeCategory === cat
                                    ? "bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                                    : "border-white/10 text-gray-500 hover:border-yellow-500/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => {
                            const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_800/${item.name}.jpg`;
                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    onClick={() => setSelectedImg(url.replace('w_800', 'w_1600'))}
                                    className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 group relative cursor-zoom-in"
                                >
                                    <img src={url} alt={item.type} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">View Project</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* LIGHTBOX OVERLAY */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    >
                        {/* Area to click to close */}
                        <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedImg(null)} />

                        <button
                            onClick={() => setSelectedImg(null)}
                            className="absolute top-10 right-10 z-[110] text-white hover:text-yellow-500 transition-colors p-2"
                        >
                            <X size={44} />
                        </button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                            src={selectedImg} className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain relative z-[105]"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* BACK TO TOP */}
            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="fixed bottom-10 right-10 z-[50] p-4 bg-yellow-500 text-black rounded-full shadow-2xl"
                    >
                        <ChevronUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </PageWrap>
    );
}

///

//  function PortfolioPage() {
//     const CLOUD_NAME = "dngjp8clk";
//     const [activeCategory, setActiveCategory] = useState("All");
//     const [selectedImg, setSelectedImg] = useState(null); // Track enlarged image
//     const [showTopBtn, setShowTopBtn] = useState(false);

//     const CAPTURE_COUNT = 50;
//     const BRAND_COUNT = 25;

//     // const portfolioData = [
//     //     ...Array.from({ length: 46 }, (_, i) => ({ id: i + 1, type: "Captures", name: `sep_capture-${i + 1}` })),
//     //     ...Array.from({ length: 25 }, (_, i) => ({ id: i + 51, type: "Branding", name: `sep_brand-${i + 1}` }))
//     // ];

//     const portfolioData = [
//         ...Array.from({ length: CAPTURE_COUNT }, (_, i) => ({
//             id: `cap-${i}`, type: "Captures", name: `sep_capture-${i + 1}`
//         })),
//         ...Array.from({ length: BRAND_COUNT }, (_, i) => ({
//             id: `brd-${i}`, type: "Branding", name: `sep_brand-${i + 1}`
//         }))
//     ];


//     // sep_brand- , sep_capture-

//     const filteredItems = activeCategory === "All"
//         ? portfolioData
//         : portfolioData.filter(item => item.type === activeCategory);

//     // 2. BACK TO TOP LOGIC
//     useEffect(() => {
//         const handleScroll = () => setShowTopBtn(window.scrollY > 400);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//     return (
//         <PageWrap>
//             <section className="py-24 px-6 max-w-7xl mx-auto">
//                 <h2 className="text-5xl font-black text-yellow-500 mb-12 uppercase tracking-tighter">Portfolio</h2>

//                 {/* CATEGORY FILTER */}
//                 <div className="flex gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
//                     {["All", "Captures", "Branding"].map((cat) => (
//                         <button
//                             key={cat}
//                             onClick={() => setActiveCategory(cat)}
//                             className={`px-10 py-3 rounded-full border transition-all text-xs font-bold uppercase tracking-[0.2em] ${activeCategory === cat ? "bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "border-white/10 text-gray-500 hover:border-yellow-500/50"
//                                 }`}
//                         >
//                             {cat}
//                         </button>
//                     ))}
//                 </div>

//                 {/* MASONRY-STYLE GRID */}
//                 <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     <AnimatePresence mode="popLayout">
//                         {filteredItems.map((item) => {
//                             const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_800/${item.name}.jpg`;

//                             return (
//                                 <motion.div
//                                     key={item.id}
//                                     layout
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     exit={{ opacity: 0, scale: 0.9 }}
//                                     onClick={() => setSelectedImg(url.replace('w_800', 'w_1600'))} // Open high-res version
//                                     className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 group relative cursor-zoom-in"
//                                 >
//                                     <img src={url} alt={item.type} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
//                                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                                         <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">View Project</span>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </AnimatePresence>
//                 </motion.div>
//             </section>

//             {/* LIGHTBOX OVERLAY */}
//             <AnimatePresence>
//                 {selectedImg && (
//                     <motion.div
//                         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                         onClick={() => setSelectedImg(null)}
//                         className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
//                     >
//                         <button className="absolute top-10 right-10 text-white hover:text-yellow-500 transition-colors"><X size={40} /></button>
//                         <motion.img
//                             initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
//                             src={selectedImg} className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
//                         />
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </PageWrap>
//     );
// }



