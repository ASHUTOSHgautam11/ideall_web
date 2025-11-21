"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactDetails() {
    const [activeTab, setActiveTab] = useState<"india" | "asia">("india");

    return (
        <div className="w-full max-w-7xl mx-auto py-6 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* LEFT COLUMN ----------------------------------------------------------- */}
                <div className="col-span-1 space-y-6">
                    {/* ASIA HQ CARD (swapped position visually) */}
                    <div className="border rounded-xl p-6 shadow-sm bg-white">
                        <h3 className="flex items-center gap-2 text-xl font-semibold text-secondary">
                            <MapPin className="text-secondary" /> Ideall Solutionz Singapore PTE LTD
                        </h3>
                        <p className="mt-3 text-gray-700 leading-relaxed ml-7">
                            71 Excalibur Centre #06-06<br />
                            Singapore 408571<br />
                        </p>

                        <p className="flex items-center gap-2 mt-4 text-gray-700">
                            <Phone className="text-secondary" size={18} /> Tel: +(65) 63254142
                        </p>
                        <p className="flex items-center gap-2 mt-4 text-gray-700">
                            <Phone className="text-secondary" size={18} /> Fax: +(65) 63254840
                        </p>

                        <p className="flex items-center gap-2 mt-2 text-gray-700">
                            <Mail className="text-secondary" size={18} /> sales@ideallss.com
                        </p>
                    </div>

                    {/* INDIA HQ CARD (swapped position visually) */}
                    <div className="border rounded-xl p-6 shadow-sm bg-white">
                        <h3 className="flex items-center gap-2 text-xl font-semibold text-secondary">
                            <MapPin className="text-secondary" />BELGOTEX INDIA PRIVATE LIMITED
                        </h3>

                        <p className="mt-3 text-gray-700 leading-relaxed ml-7">
                           Trapezoid Signia Park, 9th floor, Unit number 904, Plot A-27A, Sector-62, <br />
                            Noida, Uttar Pradesh, India - 201301
                        </p>
                        <p className="flex items-center gap-2 mt-4 text-gray-700">
                            <Phone className="text-secondary" size={18} /> +65 63254142
                        </p>
                        <p className="flex items-center gap-2 mt-2 text-gray-700">
                            <Mail className="text-secondary" size={18} /> Email:
                            sales@belgotexsimachi.com
                        </p>
                    </div>

                    {/* BUTTON */}
                    <div className="pt-4">
                        <button className="w-full bg-[#26245a] hover:bg-[#1b1a45] text-white py-3 rounded-lg font-semibold transition">
                            Explore Belgotex World
                        </button>
                    </div>

                </div>

                {/* RIGHT COLUMN ---------------------------------------------------------- */}
                <div className="col-span-2">

                    {/* Tabs */}
                    <div className="flex w-full mb-6">
                        <button
                            onClick={() => setActiveTab("india")}
                            className={`w-1/2 py-3 font-semibold border rounded-l-lg border-gray-300 ${activeTab === "india"
                                ? "bg-[#26245a] text-white"
                                : "bg-white text-gray-700"
                                }`}
                        > Asia HQ

                        </button>

                        <button
                            onClick={() => setActiveTab("asia")}
                            className={`w-1/2 py-3 font-semibold border rounded-r-lg border-gray-300 ${activeTab === "asia"
                                ? "bg-[#26245a] text-white"
                                : "bg-white text-gray-700"
                                }`}
                        > India HQ

                        </button>
                    </div>

                    {/* MAP + STREET VIEW GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* MAP ------------------------------------------------------ */}
                        <div className="h-[350px] border rounded-lg overflow-hidden shadow">
                            {activeTab === "india" ? (
                                // 🔄 SWAPPED: INDIA TAB NOW SHOWS ASIA MAP
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.749636913784!2d103.89314359678956!3d1.326158100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f61790530f%3A0xed61a573020f2cdd!2sIdeall%20Solutionz%20Singapore%20Pte.%20Ltd.!5e0!3m2!1sen!2sin!4v1763615818341!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                // 🔄 SWAPPED: ASIA TAB NOW SHOWS INDIA MAP
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.749636913784!2d103.89314359678956!3d1.326158100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f61790530f%3A0xed61a573020f2cdd!2sIdeall%20Solutionz%20Singapore%20Pte.%20Ltd.!5e0!3m2!1sen!2sin!4v1763615818341!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>

                        {/* STREET VIEW ------------------------------------------------ */}
                        <div className="h-[350px] border rounded-lg overflow-hidden shadow">
                            {activeTab === "india" ? (
                                // 🔄 SWAPPED: INDIA SHOWS ASIA STREET VIEW
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!4v1763615973408!6m8!1m7!1smOGo0P9bQdHixArCAOG_LQ!2m2!1d1.326180162731951!2d103.8978924402578!3f150.85073941346909!4f23.296424318361773!5f0.7820865974627469"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                // 🔄 SWAPPED: ASIA SHOWS INDIA STREET VIEW
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sSingaporeStreetViewID!2m2!1d1.289!2d103.851!3f17!4f0!5f0.7820865974627469"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
