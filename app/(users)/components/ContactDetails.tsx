"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { Printer } from "lucide-react";

export default function ContactDetails() {
    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* LEFT SIDE INFO -------------------------------------------------- */}
                <div className="col-span-1 space-y-6">

                    {/* LOCATION CARD */}
                    <div className="rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-gray-200 border">
                        <h3 className="flex items-center gap-2 text-xl font-semibold text-[#26245a]">
                            <MapPin className="text-secondary" /> Ideall Solutionz Singapore PTE LTD
                        </h3>

                        <p className="mt-3 text-gray-700 leading-relaxed ml-7">
                            71 Ubi Crescent #06-06 <br />
                            Excalibur Centre <br />
                            Singapore 408571
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">

                        {/* PHONE */}
                        <a href="tel:+6563254142">
                            <div className="rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-200">
                                <p className="flex items-center gap-2 text-gray-700">
                                    <Phone className="text-secondary" size={18} /> Tel: +(65) 63254142
                                </p>
                            </div>
                        </a>

                        {/* FAX */}
                        <a href="fax:+6563254840">
                            <div className="rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-200">
                                <p className="flex items-center gap-2 text-gray-700">
                                    <Printer className="text-secondary" size={18} />
                                    Fax: +(65) 63254840
                                </p>
                            </div>
                        </a>

                        {/* EMAIL */}
                        <a href="mailto:sales@ideallss.com">
                            <div className="rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-200">
                                <p className="flex items-center gap-2 text-gray-700">
                                    <Mail className="text-secondary" size={18} /> sales@ideallss.com
                                </p>
                            </div>
                        </a>

                    </div>


                    {/* READY TO GET STARTED CARD */}
                    <div className="rounded-xl p-6 bg-primary shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-primary/30">
                        <h3 className="text-lg font-semibold text-white">
                            Ready to Get Started?
                        </h3>

                        <p className="text-white mt-2 leading-relaxed">
                            Contact our team today to discuss your specific requirements and learn
                            how we can help optimize your procurement process.
                        </p>

                        <p className="text-gray-200 mt-2 text-sm">
                            Response time: Within 24 hours
                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE ------------------------------------------------------ */}
                <div className="col-span-2 space-y-6">

                    {/* HEADING BAR */}
                    <div className="w-full bg-secondary text-white py-3 text-center rounded-lg font-bold text-lg tracking-wide shadow-lg">
                        Explore Our Location & 3D View
                    </div>

                    {/* MAPS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* NORMAL MAP */}
                        <div className="h-[400px] border-gray-300 border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.749636913784!2d103.89314359678956!3d1.326158100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f61790530f%3A0xed61a573020f2cdd!2sIdeall%20Solutionz%20Singapore%20Pte.%20Ltd.!5e0!3m2!1sen!2sin!4v1763615818341!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* STREET VIEW */}
                        <div className="h-[400px] border-gray-300 border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!4v1763615973408!6m8!1m7!1smOGo0P9bQdHixArCAOG_LQ!2m2!1d1.326180162731951!2d103.8978924402578!3f150.85!4f23.29!5f0.7820865974627469"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>

                    {/* HELP BOX SECTION */}
                    <div className="w-full bg-[#f4f5f9] rounded-2xl py-14 px-6 text-center shadow-md hover:shadow-xl transition-all">

                        <h3 className="text-xl font-semibold text-[#26245a]">
                            Need Quick Help?
                        </h3>

                        <p className="text-gray-600 mt-1">
                            Reach us directly via WhatsApp or live chat
                        </p>

                        {/* Buttons Wrapper */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/6592331033"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-6 py-3 rounded-lg transition"
                            >
                                Start WhatsApp Chat
                            </a>

                            <a
                                href="https://wa.me/6592331033/?call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-6 py-3 rounded-lg transition"
                            >
                                WhatsApp Support Call
                            </a>


                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
}
