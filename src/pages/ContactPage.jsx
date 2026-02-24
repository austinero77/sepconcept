

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Instagram, MapPin, Send, CheckCircle, X } from "lucide-react";
import PageWrap from '../components/PageWrap';




export default function ContactPage() {
    // Formspree ID
    const FORMSPREE_URL = "https://formspree.io/f/xbdaqlak";

    const contactInfo = [
        { icon: Mail, label: "Email Us", value: "sepconcept001@gmail.com", href: "mailto:sepconcept001@gmail.com" },
        { icon: Phone, label: "Call Us", value: "08106890578", href: "tel:+2348106890578" },
        { icon: Instagram, label: "Follow Us", value: "@sepconceptofficial_", href: "https://www.instagram.com/sepconceptofficial_" },
        { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: "#" },
    ];

    // States for handling the form flow
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.target);

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus("success");
                setShowSuccess(true);
                e.target.reset(); // Clear the form
            } else {
                setStatus("error");
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            alert("Network error. Please check your connection.");
        }
    };

    return (
        <PageWrap>
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* LEFT SIDE: CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-4xl font-black text-yellow-500 uppercase tracking-tighter mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                                Ready to elevate your brand? Send us a message or book an appointment for your next project.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target={item.icon === Instagram ? "_blank" : "_self"}
                                    rel="noreferrer"
                                    className="group p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-yellow-500/30 transition-all"
                                >
                                    <item.icon className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform" size={24} />
                                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">{item.label}</div>
                                    <div className="text-white font-medium truncate">{item.value}</div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: THE FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="grid gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase ml-2">Your Name</label>
                                    <input name="name" required className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 text-white focus:border-yellow-500 transition-colors outline-none" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase ml-2">Email Address</label>
                                    <input name="email" type="email" required className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 text-white focus:border-yellow-500 transition-colors outline-none" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Project Service</label>
                                <select name="service" className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 text-white focus:border-yellow-500 transition-colors outline-none appearance-none">
                                    <option>Event Photography</option>
                                    <option>Videography</option>
                                    <option>Branding & Design</option>
                                    <option>Social Media Management</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Project Brief</label>
                                <textarea name="message" required className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 text-white focus:border-yellow-500 transition-colors outline-none min-h-[150px]" placeholder="Tell us about your event or brand goals..." />
                            </div>

                            <button type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-yellow-500 text-black font-black py-5 rounded-2xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                                {status === "loading" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Request
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* SUCCESS SCREEN MODAL */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                                className="bg-zinc-900 border border-white/10 p-10 md:p-16 rounded-[3rem] max-w-lg w-full text-center relative"
                            >
                                <button
                                    onClick={() => { setShowSuccess(false); setStatus("idle"); }}
                                    className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                                >
                                    <X size={30} />
                                </button>

                                <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle size={48} className="text-yellow-500" />
                                </div>

                                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Request Received</h3>
                                <p className="text-gray-400 leading-relaxed mb-10">
                                    Thank you for reaching out to SEP Concept. Our team will review your brief and get back to you within 24 hours.
                                </p>

                                <button
                                    onClick={() => { setShowSuccess(false); setStatus("idle"); }}
                                    className="w-full py-4 bg-yellow-500 text-black font-bold rounded-2xl hover:bg-yellow-400 transition-all uppercase tracking-widest text-xs"
                                >
                                    Back to Contact
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* WHATSAPP FLOAT */}
                <a
                    href="https://wa.me/2348106890578"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] z-50 hover:scale-110 transition-transform"
                >
                    <Phone size={28} />
                </a>
            </section>
        </PageWrap>
    );
}


function ContactPage1() {
    return (
        <PageWrap>
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-yellow-500 mb-10">Book Appointment</h2>
                <form className="grid gap-6">
                    <input className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" placeholder="Name" />
                    <input className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" placeholder="Email" />
                    <input className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" placeholder="Phone" />
                    <textarea className="bg-zinc-900 border border-yellow-600/30 rounded-xl p-4" rows={5} placeholder="Project Details" />
                    <button className="bg-yellow-500 text-black font-semibold py-4 rounded-2xl">Submit Request</button>
                </form>

                <div className="mt-10 text-gray-400 text-sm space-y-2">
                    <div>Email: sepconcept@gmail.com</div>
                    <div>Phone: 08106890578, 09079344707</div>
                    <div>Instagram: @sepconceptofficial_</div>
                </div>

                {/* <a href="https://wa.me/2348106890578" className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg">
                    <Phone />
                </a> */}

                <a
                    href="https://wa.me/2348106890578"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
                >
                    <Phone />
                </a>
            </section>
        </PageWrap>
    );
}


