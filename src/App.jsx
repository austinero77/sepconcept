import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Camera, Video, Megaphone, Palette, Globe, Users, Phone, Award, Shield, Zap, Share2, PenTool, Presentation, Clapperboard, DraftingCompass, SwatchBook, MessageCircle, HandHeart, RollerCoaster, GraduationCap, Blocks, Projector, ArrowRight } from "lucide-react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";



/* ================= NAV ================= */

// const NavItem = ({ to, children }) => (
//   <Link to={to} className="hover:text-yellow-500 transition-colors duration-300">
//     {children}
//   </Link>
// );

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-yellow-600/20">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold tracking-widest">
//           <span className="text-yellow-500">SEP</span>CONCEPT
//         </Link>

//         <nav className="hidden md:flex gap-8 text-sm">
//           <NavItem to="/">Home</NavItem>
//           <NavItem to="/about">About</NavItem>
//           <NavItem to="/services">Services</NavItem>
//           <NavItem to="/portfolio">Portfolio</NavItem>
//           {/* <NavItem to="/process">Process</NavItem> */}
//           <NavItem to="/contact">Contact</NavItem>
//         </nav>

//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-black border-t border-yellow-600/20 px-6 pb-6 flex flex-col gap-4">
//           <NavItem to="/">Home</NavItem>
//           <NavItem to="/about">About</NavItem>
//           <NavItem to="/services">Services</NavItem>
//           <NavItem to="/portfolio">Portfolio</NavItem>
//           {/* <NavItem to="/process">Process</NavItem> */}
//           <NavItem to="/contact">Contact</NavItem>
//         </div>
//       )}
//     </header>
//   );
// }

/* ================= LAYOUT ================= */

// function PageWrap({ children }) {
//   return (
//     <div className="bg-black text-white font-sans min-h-screen">
//       <Navbar />
//       <main className="pt-24">{children}</main>
//       <Footer />
//     </div>
//   );
// }

/* ================= HOME PAGE (RICH & PROFESSIONAL) ================= */

function HomePageInitial() {

  // Animation variant for a consistent "Fade Up" feel
  // const fadeUp = {
  //   initial: { opacity: 0, y: 30 },
  //   whileInView: { opacity: 1, y: 0 },
  //   viewport: { once: true, margin: "-100px" },
  //   transition: { duration: 0.7, ease: "easeOut" }
  // };

  const stableFade = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }, // NO MARGIN - this stops the flickering
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <PageWrap>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070')] bg-cover bg-center opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            SEP CONCEPT Media Agency  <span className="text-yellow-500">Secure Elegant Production</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            SEPCONCEPT is a premium creative media agency delivering high‑end photography, cinematic media production, brand storytelling, and digital visibility for events, organizations and public figures.
          </p>
          <div className="mt-10 flex gap-6 justify-center">
            <Link to="/portfolio" className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-2xl hover:scale-105 transition">View Portfolio</Link>
            <Link to="/contact" className="px-8 py-3 border border-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black transition">Book Appointment</Link>
          </div>
        </motion.div>
      </section>

      {/* POSITIONING */}
      {/* <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">A Premium Creative Media Agency Since 2021</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            SEP Concept Media Agency has evolved from a creative production brand into a full‑service media and digital visibility agency. We combine creative excellence with strategic execution to help brands and events stand out and perform.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our core strength is professional event photography and media coverage, supported by videography, branding, content creation, social media management, sponsored advertising and publicity campaigns.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Award, t: "Premium Quality" },
            { icon: Shield, t: "Secure Delivery" },
            { icon: Zap, t: "Fast Turnaround" },
            { icon: Users, t: "Client Collaboration" },
          ].map((f, i) => (
            <div key={i} className="border border-yellow-600/20 rounded-2xl p-6">
              <f.icon className="text-yellow-500 mb-3" />
              <div className="font-semibold">{f.t}</div>
            </div>
          ))}
        </div>
      </section> */}
      {/* checks */}

      {/* POSITIONING - Animated Container */}
      <motion.section
        {...stableFade}
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">A Premium Creative Media Agency Since 2021</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            SEP Concept Media Agency has evolved from a creative production brand into a full‑service media and digital visibility agency. We combine creative excellence with strategic execution to help brands and events stand out and perform.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our core strength is professional event photography and media coverage, supported by videography, branding, content creation, social media management, sponsored advertising and publicity campaigns.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Award, t: "Premium Quality" },
            { icon: Shield, t: "Secure Delivery" },
            { icon: Zap, t: "Fast Turnaround" },
            { icon: Users, t: "Client Collaboration" },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="border border-yellow-600/20 rounded-2xl p-6 bg-zinc-900/10"
            >
              <f.icon className="text-yellow-500 mb-3" />
              <div className="font-semibold">{f.t}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* checks */}

      {/* 2. THE PROCESS */}
      {/* <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.2 }}
                className="relative p-8 bg-black border border-white/5 rounded-3xl"
              >
                <div className="text-5xl font-black text-yellow-500/10 absolute top-4 right-6">0{i + 1}</div>
                <h3 className="text-xl font-bold text-yellow-500 mb-3">{s}</h3>
                <p className="text-gray-400 text-sm">Our seamless workflow ensures high-standard execution from start to finish.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* THE PROCESS - Already has animation logic */}
      {/* <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...stableFade} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 bg-black border border-white/5 rounded-3xl"
              >
                <div className="text-5xl font-black text-yellow-500/10 absolute top-4 right-6">0{i + 1}</div>
                <h3 className="text-xl font-bold text-yellow-500 mb-3">{s}</h3>
                <p className="text-gray-400 text-sm">Our seamless workflow ensures high-standard execution from start to finish.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* THE PROCESS - Simplified grid animation */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...stableFade} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
              <div key={i} className="relative p-8 bg-black border border-white/5 rounded-3xl">
                <div className="text-5xl font-black text-yellow-500/10 absolute top-4 right-6">0{i + 1}</div>
                <h3 className="text-xl font-bold text-yellow-500 mb-3">{s}</h3>
                <p className="text-gray-400 text-sm">Strategic execution and brand alignment.</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CORE SERVICES PREVIEW */}
      {/* <section className="py-20 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-500 mb-10">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Event Photography & Coverage",
              "Videography & Brand Films",
              "Design & Brand Identity",
              "Content Creation",
              "Social Media Management",
              "Sponsored Advertising",
            ].map((t, i) => (
              <div key={i} className="border border-yellow-600/20 rounded-2xl p-8 bg-black/60">
                <div className="font-semibold text-lg mb-2">{t}</div>
                <p className="text-gray-400 text-sm">Executed with creative direction, technical precision and brand strategy alignment.</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="text-yellow-500 hover:underline">Explore all services →</Link>
          </div>
        </div>
      </section> */}

      {/* CORE SERVICES PREVIEW - Staggered Reveal */}
      <section className="py-20 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...stableFade} className="text-3xl font-bold text-yellow-500 mb-10">Core Capabilities</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Event Photography & Coverage",
              "Videography & Brand Films",
              "Design & Brand Identity",
              "Content Creation",
              "Social Media Management",
              "Sponsored Advertising",
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(234,179,8,0.4)" }}
                className="border border-yellow-600/20 rounded-2xl p-8 bg-zinc-950 transition-colors"
              >
                <div className="font-semibold text-lg mb-2">{t}</div>
                <p className="text-gray-400 text-sm">Executed with creative direction, technical precision and brand strategy alignment.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      {/* <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        {[
          ["2021", "Founded"],
          ["Multi‑Service", "Media Agency"],
          ["Event Focused", "Coverage Experts"],
          ["Gold Standard", "Creative Quality"],
        ].map(([a, b], i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-yellow-500">{a}</div>
            <div className="text-gray-400 text-sm">{b}</div>
          </div>
        ))}
      </section> */}

      {/* TRUST STRIP - Simple Fade In */}
      <motion.section
        {...stableFade}
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center"
      >
        {[
          ["2021", "Founded"],
          ["Multi‑Service", "Media Agency"],
          ["Event Focused", "Coverage Experts"],
          ["Premium Standard", "Creative Quality"],
        ].map(([a, b], i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-yellow-500">{a}</div>
            <div className="text-gray-400 text-sm">{b}</div>
          </div>
        ))}
      </motion.section>
    </PageWrap>
  );
}



function HomePageTooSimple() {
  // Optimized: Single transition object for the whole page
  const sectionVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <PageWrap>
      {/* 1. HERO - Optimized Background Layers */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com')] bg-cover bg-center opacity-20 pointer-events-none"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            SEP CONCEPT <br />
            <span className="text-yellow-500">Secure Elegant Production</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A premium creative media agency delivering high‑end photography and cinematic storytelling for events and global brands.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <Link to="/portfolio" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:scale-105 transition-transform">View Portfolio</Link>
            <Link to="/contact" className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">Book Appointment</Link>
          </div>
        </motion.div>
      </section>

      {/* 2. POSITIONING - Animated as one single unit */}
      <motion.section
        variants={sectionVariant}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">Premium Creative Media Since 2021</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            We combine creative excellence with strategic execution to help brands stand out. Our core strength is professional event coverage supported by digital visibility campaigns.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[{ icon: Award, t: "Quality" }, { icon: Shield, t: "Secure" }, { icon: Zap, t: "Fast" }, { icon: Users, t: "Expert" }].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                <f.icon size={20} className="text-yellow-500" />
                <span className="font-medium text-sm">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl bg-zinc-900 overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com" alt="Work" className="object-cover w-full h-full opacity-60" />
        </div>
      </motion.section>

      {/* 3. THE PROCESS - Background change to Zinc-950 */}
      <section className="py-24 bg-zinc-950 px-6">
        <motion.div
          variants={sectionVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <div className="h-1 w-12 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
              <div key={i} className="p-8 bg-black rounded-3xl border border-white/5">
                <div className="text-yellow-500 font-black text-2xl mb-2">0{i + 1}</div>
                <div className="font-bold text-lg">{s}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. CORE SERVICES - Clean Cards */}
      <motion.section
        variants={sectionVariant}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-yellow-500 mb-12">Core Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Event Photography", "Videography", "Design & Branding",
            "Content Creation", "Social Media", "Sponsored Advertising"
          ].map((t, i) => (
            <div key={i} className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-yellow-500/20 transition-all">
              <h3 className="font-bold text-xl mb-4">{t}</h3>
              <p className="text-gray-500 text-sm">Strategic media execution aligned with your specific brand goals.</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 5. TRUST STRIP */}
      <section className="py-20 border-t border-white/5 bg-black">
        <motion.div
          variants={sectionVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[["2021", "Founded"], ["100+", "Projects"], ["Gold", "Standard"], ["24/7", "Support"]].map(([a, b], i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-yellow-500">{a}</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">{b}</div>
            </div>
          ))}
        </motion.div>
      </section>
    </PageWrap>
  );
}

function HomePage3() {
  // 1. The "Rich" staggered variant
  const containerVars = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // This creates the "one-by-one" look automatically
        delayChildren: 0.2
      }
    },
    viewport: { once: true, amount: 0.2 }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for "expensive" movement
    }
  };

  return (
    <PageWrap>
      {/* HERO - Cinematic Entrance */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com')] bg-cover bg-center opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            SEP CONCEPT <br />
            <span className="text-yellow-500 italic">Secure Elegant Production</span>
          </h1>
          {/* ... Hero buttons ... */}
        </motion.div>
      </section>

      {/* THE PROCESS - Staggered Reveal */}
      <section className="py-32 bg-zinc-950 px-6">
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVars} className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">Our Methodology</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
              <motion.div
                key={i}
                variants={itemVars} // Each item now follows the parent's stagger
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-10 bg-black border border-white/5 rounded-[2rem] overflow-hidden"
              >
                <div className="absolute -right-0 -top-0 text-6xl font-black text-white/5 group-hover:text-yellow-500/10 transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">{s}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  High-standard execution aligned with strategic brand objectives.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CORE SERVICES - Professional Grid */}
      <section className="py-32 bg-black px-6">
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 variants={itemVars} className="text-4xl font-bold text-yellow-500 mb-16 text-center md:text-left">
            Core Capabilities
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Event Photography", "Videography", "Design & Branding",
              "Content Creation", "Social Media", "Sponsored Advertising"
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={itemVars}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="p-12 rounded-[2.5rem] border border-yellow-500/10 bg-zinc-900/20 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-2xl mb-8 opacity-80" />
                <h3 className="font-bold text-2xl mb-4">{t}</h3>
                <p className="text-gray-500 leading-relaxed">
                  Executed with technical precision and brand strategy alignment.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageWrap>
  );
}








// function HomePage() {
//   return (
//     <PageWrap>
//       {/* 1. HERO - Dark & Cinematic */}
//       <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070')] bg-cover bg-center opacity-30" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />

//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-4xl">
//           <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-4 block">Est. 2021</span>
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
//             SEP CONCEPT <br /> <span className="text-yellow-500">Media Agency</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//             Secure Elegant Production. Delivering premium photography and cinematic storytelling for global brands.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/portfolio" className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105">View Portfolio</Link>
//             <Link to="/contact" className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">Book Appointment</Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* 2. THE PROCESS - (Moved here) */}
//       <section className="py-24 bg-zinc-950 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
//             <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
//               <motion.div
//                 key={i}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -20 }}
//                 transition={{ delay: i * 0.2 }}
//                 className="relative p-8 bg-black border border-white/5 rounded-3xl"
//               >
//                 <div className="text-5xl font-black text-yellow-500/10 absolute top-4 right-6">0{i + 1}</div>
//                 <h3 className="text-xl font-bold text-yellow-500 mb-3">{s}</h3>
//                 <p className="text-gray-400 text-sm">Our seamless workflow ensures high-standard execution from start to finish.</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. CORE SERVICES PREVIEW - Styled as Cards */}
//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-4">Core Capabilities</h2>
//               <p className="text-gray-400">Tailored creative solutions for every platform.</p>
//             </div>
//             <Link to="/services" className="text-yellow-500 hover:text-yellow-400 font-semibold flex items-center gap-2 transition-all">
//               Explore All Services <span className="text-xl">→</span>
//             </Link>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "Event Photography & Coverage",
//               "Videography & Brand Films",
//               "Design & Brand Identity",
//               "Content Creation",
//               "Social Media Management",
//               "Sponsored Advertising",
//             ].map((t, i) => (
//               <div key={i} className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-yellow-500/30 transition-all duration-500">
//                 <div className="w-10 h-10 bg-yellow-500/10 rounded-lg mb-6 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
//                   {/* You can add icons here later */}
//                 </div>
//                 <div className="font-bold text-xl mb-3">{t}</div>
//                 <p className="text-gray-400 text-sm leading-relaxed">Precision-focused production aligned with your strategic brand objectives.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. TRUST STRIP - Minimalist Stat Counter */}
//       <section className="py-20 border-t border-white/5 bg-black">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
//           {[
//             ["2021", "Founded"],
//             ["100+", "Projects"],
//             ["24/7", "Support"],
//             ["Gold", "Standard"],
//           ].map(([a, b], i) => (
//             <div key={i} className="text-center">
//               <div className="text-3xl font-bold text-yellow-500 mb-1">{a}</div>
//               <div className="text-gray-500 text-xs uppercase tracking-widest font-medium">{b}</div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </PageWrap>
//   );
// }


/* ================= ABOUT PAGE ================= */

// function AboutPage() {
//   return (
//     <PageWrap>
//       <section className="py-24 px-6 max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-yellow-500 mb-8">About SEPCONCEPT</h2>
//         <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed">
//           <p>
//             SEP Concept is a fast‑growing creative brand that has evolved into a full‑service media agency delivering innovative, strategic and result‑driven solutions for brands, organizations, events and individuals.
//           </p>
//           <p>
//             Our goal is not only to create visually compelling content but to drive visibility, engagement, growth and measurable impact while building a sustainable creative ecosystem.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mt-12">
//           <div>
//             <h3 className="text-yellow-500 font-semibold mb-3">Mission</h3>
//             <p className="text-gray-400">Deliver world‑class visual content and digital experiences that captivate, communicate and convert.</p>
//           </div>
//           <div>
//             <h3 className="text-yellow-500 font-semibold mb-3">Vision</h3>
//             <p className="text-gray-400">To become one of the world’s most trusted creative powerhouses for secure elegant productions.</p>
//           </div>
//           <div>
//             <h3 className="text-yellow-500 font-semibold mb-3">Core Values</h3>
//             <p className="text-gray-400">Creativity, Excellence, Professionalism, Collaboration.</p>
//           </div>
//         </div>
//       </section>
//     </PageWrap>
//   );
// }

/* ================= SERVICES PAGE ================= */

// function ServicesPage() {


//   const services = [
//     { title: "Professional Photography", icon: Camera },
//     { title: "Videography", icon: Video },
//     { title: "Content Creation", icon: Clapperboard },
//     { title: "Design & Branding", icon: PenTool },
//     { title: "Social Media Management", icon: HandHeart },
//     { title: "Sponsored Ads", icon: Megaphone },
//     { title: "Event Publicity & Promotion", icon: Projector },
//     { title: "PR & Brand Consulting", icon: RollerCoaster },
//     { title: "Training & Mentorship", icon: GraduationCap },
//     { title: "Website Design & Management", icon: Blocks },
//   ];

//   return (
//     <PageWrap>
//       {/* Add a subtle header background similar to your home hero */}
//       <section className="pt-32 pb-20 px-6 bg-zinc-950/50">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-7xl mx-auto"
//         >
//           <h1 className="text-5xl font-bold text-yellow-500 mb-4">Our Expertise</h1>
//           <p className="text-gray-400 max-w-2xl text-lg">We provide end-to-end media solutions designed to elevate your brand's digital presence.</p>
//         </motion.div>
//       </section>

//       <section className="py-20 px-6 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               // whileHover={{ y: -10 }} // Interaction: Card lifts on hover
//               whileHover={{
//                 y: -10,
//                 backgroundColor: "rgba(234, 179, 8, 0.05)", // Subtle yellow tint
//                 boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }} // Animation: Fades in as you scroll
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="group border border-yellow-600/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-yellow-500/50 transition-all cursor-default"
//             >
//               <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
//                 <s.icon className="text-yellow-500 group-hover:text-black" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">{s.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Strategic media execution focused on high-conversion brand storytelling and cinematic quality.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </PageWrap>
//   );

//   // return (
//   //   <PageWrap>
//   //     <section className="py-24 px-6 max-w-7xl mx-auto">
//   //       <h2 className="text-4xl font-bold text-yellow-500 mb-10">Services</h2>
//   //       <div className="grid md:grid-cols-3 gap-8">
//   //         {services.map((s, i) => (
//   //           <div key={i} className="border border-yellow-600/20 rounded-2xl p-8 bg-zinc-950">
//   //             <div className="font-semibold mb-2">{s}</div>
//   //             <p className="text-gray-400 text-sm">High‑standard execution aligned with brand and campaign objectives.</p>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </section>
//   //   </PageWrap>
//   // );
// }

/* ================= PORTFOLIO PAGE ================= */

// function PortfolioPage() {
//   const gallery = new Array(16).fill(0);
//   return (
//     <PageWrap>
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-yellow-500 mb-6">Portfolio</h2>
//         <p className="text-gray-400 mb-12 max-w-3xl">Selected event, studio, wedding and brand projects delivered with elegance and technical precision.</p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {gallery.map((_, i) => (
//             <div key={i} className="aspect-square bg-zinc-800 rounded-xl" />
//           ))}
//         </div>
//       </section>
//     </PageWrap>
//   );
// }

/* ================= PROCESS PAGE ================= */

// function ProcessPage() {
//   return (
//     <PageWrap>
//       <section className="py-24 px-6 max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-yellow-500 mb-12">Our Process</h2>
//         <div className="grid md:grid-cols-4 gap-8">
//           {["Inquiry", "Planning", "Coverage", "Delivery"].map((s, i) => (
//             <div key={i} className="border border-yellow-600/20 rounded-2xl p-6">
//               <div className="text-yellow-500 font-bold mb-2">0{i + 1}</div>
//               <div className="font-semibold">{s}</div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </PageWrap>
//   );
// }

/* ================= CONTACT PAGE ================= */

// function ContactPage() {
//   return (
//     <PageWrap>
//       <section className="py-24 px-6 max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-yellow-500 mb-10">Book Appointment</h2>
//         <form className="grid gap-6">
//           <input className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" placeholder="Name" />
//           <input className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" placeholder="Email" />
//           <input className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" placeholder="Phone" />
//           <textarea className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" rows={5} placeholder="Project Details" />
//           <button className="bg-yellow-500 text-black font-semibold py-4 rounded-2xl">Submit Request</button>
//         </form>

//         <div className="mt-10 text-gray-400 text-sm space-y-2">
//           <div>Email: sepconcept001@gmail.com</div>
//           <div>Phone: 08106890578, 09079344707</div>
//           <div>Instagram: @sepconceptofficial_</div>
//         </div>

//         <a href="https://wa.me/2348106890578" className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg">
//           <Phone />
//         </a>
//       </section>
//     </PageWrap>
//   );
// }

/* ================= FOOTER ================= */

// function Footer() {
//   return (
//     <footer className="border-t border-yellow-600/20 py-10 text-center text-gray-500 text-sm">
//       © {new Date().getFullYear()} SEPCONCEPT — Secure Elegant Production. All rights reserved.
//     </footer>
//   );
// }

/* ================= APP ================= */

// export default function SepconceptWebsite() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/portfolio" element={<PortfolioPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </Router>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/services" element={<ServicesPage />} />
//       <Route path="/portfolio" element={<PortfolioPage />} />
//       <Route path="/contact" element={<ContactPage />} />
//     </Routes>
//   </Router>
// );

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

