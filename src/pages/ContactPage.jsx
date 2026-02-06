
import PageWrap from '../components/PageWrap';
import { Phone } from "lucide-react";
// import ReactDOM from "react-dom/client";

export default function ContactPage() {
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
                    <div>Email: sepconcept001@gmail.com</div>
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


