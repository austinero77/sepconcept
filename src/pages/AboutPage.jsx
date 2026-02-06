import PageWrap from '../components/PageWrap';
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <PageWrap>
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-yellow-500 mb-8">About SEPCONCEPT</h2>
                <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed">
                    <p>
                        SEP Concept is a fast‑growing creative brand that has evolved into a full‑service media agency delivering innovative, strategic and result‑driven solutions for brands, organizations, events and individuals.
                    </p>
                    <p>
                        Our goal is not only to create visually compelling content but to drive visibility, engagement, growth and measurable impact while building a sustainable creative ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div>
                        <h3 className="text-yellow-500 font-semibold mb-3">Mission</h3>
                        <p className="text-gray-400">Deliver world‑class visual content and digital experiences that captivate, communicate and convert.</p>
                    </div>
                    <div>
                        <h3 className="text-yellow-500 font-semibold mb-3">Vision</h3>
                        <p className="text-gray-400">To become one of the world’s most trusted creative powerhouses for secure elegant productions.</p>
                    </div>
                    <div>
                        <h3 className="text-yellow-500 font-semibold mb-3">Core Values</h3>
                        <p className="text-gray-400">Creativity, Excellence, Professionalism, Collaboration.</p>
                    </div>
                </div>
            </section>
        </PageWrap>
    );
}