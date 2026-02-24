import { Camera, Video, Megaphone, PenTool, Clapperboard, HandHeart, RollerCoaster, GraduationCap, Blocks, Projector } from "lucide-react";
import PageWrap from '../components/PageWrap';
import { motion } from "framer-motion";
import ServicePortraitPic from '../assets/service-portrait.jpeg';





export default function ServicesPage() {


    const services = [
        { title: "Professional Photography", icon: Camera },
        { title: "Videography", icon: Video },
        { title: "Content Creation", icon: Clapperboard },
        { title: "Design & Branding", icon: PenTool },
        { title: "Social Media Management", icon: HandHeart },
        { title: "Sponsored Ads", icon: Megaphone },
        { title: "Event Publicity & Promotion", icon: Projector },
        { title: "PR & Brand Consulting", icon: RollerCoaster },
        { title: "Training & Mentorship", icon: GraduationCap },
        { title: "Website Design & Management", icon: Blocks },
    ];

    return (
        <PageWrap>
            {/* Add a subtle header background similar to your home hero */}
            {/* <section className="pt-32 pb-20 px-6 bg-zinc-950/50"> */}

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">

                {/* Cinematic header background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2070')] bg-cover bg-center opacity-40" />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />


                {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com')] bg-cover bg-center opacity-30 pointer-events-none" /> */}

                <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Text and Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-7xl mx-auto"
                    >
                        {/* <h1 className="text-6xl font-bold text-yellow-500 mb-4">Our Expertise</h1> */}
                        <h1 className="text-5xl md:text-6xl font-black text-yellow-500 mb-6 leading-tight uppercase tracking-tighter">
                            Our Expertise
                        </h1>
                        <p className="text-gray-400 max-w-4xl text-lg">We provide end-to-end media solutions designed to elevate your brand's digital presence.</p>
                    </motion.div>

                    {/* Right Side: Portrait Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square md:aspect-auto h-full rounded-3xl overflow-hidden shadow-2xl justify-self-end"
                    // className="hidden md:block justify-self-end"
                    // className="hidden md:flex justify-end"
                    >
                        {/* <div className="relative w-84 h-90 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl"> */}
                        <div className="max-w-md w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black">
                            <img
                                src={ServicePortraitPic}
                                alt="SEPConcept Team Member"
                                className="object-cover w-full h-full filter brightness-75 hover:brightness-90 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    </motion.div>
                </div>

            </section>




            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            // whileHover={{ y: -10 }} // Interaction: Card lifts on hover
                            whileHover={{
                                y: -10,
                                backgroundColor: "rgba(234, 179, 8, 0.05)", // Subtle yellow tint
                                boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }} // Animation: Fades in as you scroll
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group border border-yellow-600/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-yellow-500/50 transition-all cursor-default"
                        >
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                                <s.icon className="text-yellow-500 group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Strategic media execution focused on high-conversion brand storytelling and cinematic quality.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </PageWrap>
    );

    // return (
    //   <PageWrap>
    //     <section className="py-24 px-6 max-w-7xl mx-auto">
    //       <h2 className="text-4xl font-bold text-yellow-500 mb-10">Services</h2>
    //       <div className="grid md:grid-cols-3 gap-8">
    //         {services.map((s, i) => (
    //           <div key={i} className="border border-yellow-600/20 rounded-2xl p-8 bg-zinc-950">
    //             <div className="font-semibold mb-2">{s}</div>
    //             <p className="text-gray-400 text-sm">High‑standard execution aligned with brand and campaign objectives.</p>
    //           </div>
    //         ))}
    //       </div>
    //     </section>
    //   </PageWrap>
    // );
}