
import PageWrap from '../components/PageWrap';
import { motion } from "framer-motion";

export default function PortfolioPage() {
    const gallery = new Array(16).fill(0);
    return (
        <PageWrap>
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-yellow-500 mb-6">Portfolio</h2>
                <p className="text-gray-400 mb-12 max-w-3xl">Selected event, studio, wedding and brand projects delivered with elegance and technical precision.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {gallery.map((_, i) => (
                        <div key={i} className="aspect-square bg-zinc-800 rounded-xl" />
                    ))}
                </div>
            </section>
        </PageWrap>
    );
}