// Career.tsx
"use client";

import { useState, useRef } from "react";

interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    posted: string;
    description: string;
    requirements: string[];
}

const JOBS: Job[] = [
    {
        id: 1,
        title: "Sales Associate",
        department: "Sales",
        location: "Delhi-NCR & Beyond",
        type: "Full-time",
        experience: "2 years",
        posted: "2025-04-01",
        description:
            "Join our dynamic team in Delhi-NCR and take your career to the next level.",
        requirements: [
            "Minimum 2 years of proven sales experience in flooring, lighting, construction, or similar fields.",
            "Strong presentation and negotiation skills.",
            "Fluency in English AND a second language (additional languages are a big plus).",
        ],
    },
    {
        id: 2,
        title: "Accounts Executive",
        department: "Finance",
        location: "Delhi",
        type: "Full-time",
        experience: "2 years",
        posted: "2025-03-28",
        description:
            "Oversee Accounts Receivable and Accounts Payable functions to ensure timely collections and vendor payments.",
        requirements: [
            "Minimum Diploma in Accountancy or equivalent.",
            "At least 2 years of experience in the accounting field.",
            "Proficiency in Tally ERP or similar software.",
        ],
    },
];

const DEPARTMENTS = ["All", "Sales", "Finance", "IT", "Documentation"];
const LOCATIONS = ["All", "Delhi-NCR & Beyond", "Delhi", "Remote"];
const TYPES = ["All", "Full-time", "Part-time", "Contract"];

export default function CareerInfo() {
    const [selectedDept, setSelectedDept] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [showDetails, setShowDetails] = useState(false);
    const [showApply, setShowApply] = useState(false);

    const jobsRef = useRef<HTMLDivElement | null>(null);
    const cultureRef = useRef<HTMLDivElement | null>(null);

    const filteredJobs = JOBS.filter((job) => {
        return (
            (selectedDept === "All" || job.department === selectedDept) &&
            (selectedLocation === "All" || job.location === selectedLocation) &&
            (selectedType === "All" || job.type === selectedType) &&
            (job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.description.toLowerCase().includes(search.toLowerCase()))
        );
    });

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            {/* ---------------- HERO ---------------- */}
            <div className="max-w-6xl mx-auto text-center mb-16 mt-20 px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
                    Your Next Big Opportunity Starts Here
                </h1>

                <p className="text-base sm:text-lg text-gray-900 max-w-3xl mx-auto mb-10">
                    We're not just building products — we're building the future. Join a passionate team of dreamers, creators, and doers.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
                    <button
                        onClick={() => scrollToSection(jobsRef)}
                        className="px-6 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-lg transition w-full sm:w-auto"
                    >
                        View Open Positions
                    </button>

                    <button
                        onClick={() => scrollToSection(cultureRef)}
                        className="px-6 py-3 bg-secondary border border-secondary text-white hover:bg-secondary-500 font-medium rounded-lg transition w-full sm:w-auto"
                    >
                        Learn About Our Culture
                    </button>
                </div>
            </div>

            {/* ---------------- FILTER SECTION ---------------- */}
            <div ref={jobsRef} className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto mb-10 bg-white p-4 md:p-6 rounded-lg shadow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-secondary-500"
                        />

                        <select
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-secondary-500"
                        >
                            {DEPARTMENTS.map((dept) => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>

                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-secondary-500"
                        >
                            {LOCATIONS.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>

                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-secondary-500"
                        >
                            {TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* ---------------- JOB CARDS ---------------- */}
                <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-1">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
                            >
                                <div className="p-5 sm:p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-semibold text-primary uppercase">
                                            {job.title}
                                        </h3>
                                        <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                                            {job.type}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                                        <span>{job.department}</span> •
                                        <span>{job.location}</span> •
                                        <span>{job.experience}</span>
                                    </div>

                                    <p className="text-gray-700 mb-3">{job.description}</p>

                                    <h4 className="text-sm font-semibold mb-1">Key Requirements:</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                                        {job.requirements.map((req, i) => (
                                            <li key={i}>{req}</li>
                                        ))}
                                    </ul>

                                    <p className="text-xs text-gray-500 mb-4">
                                        Posted {new Date(job.posted).toLocaleDateString()}
                                    </p>

                                    <div className="flex gap-3">
                                        <button
                                            className="flex-1 py-2 border border-secondary text-primary hover:text-white rounded-md hover:bg-secondary transition"
                                            onClick={() => {
                                                setSelectedJob(job);
                                                setShowDetails(true);
                                            }}
                                        >
                                            View Details
                                        </button>

                                        <button
                                            className="flex-1 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition"
                                            onClick={() => {
                                                setSelectedJob(job);
                                                setShowApply(true);
                                            }}
                                        >
                                            Quick Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 py-10">
                            No jobs found.
                        </p>
                    )}
                </div>
            </div>

            {/* ---------------- FULL DETAILS POPUP ---------------- */}
            {showDetails && selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white max-w-xl w-full p-6 rounded-lg shadow-lg relative animate-fadeIn">
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
                            onClick={() => setShowDetails(false)}
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-primary mb-2">
                            {selectedJob.title}
                        </h2>

                        <p className="text-sm text-gray-600 mb-4">
                            {selectedJob.department} • {selectedJob.location} • {selectedJob.experience}
                        </p>

                        <p className="text-gray-700 mb-4">{selectedJob.description}</p>

                        <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                            {selectedJob.requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>

                        <button
                            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition"
                            onClick={() => {
                                setShowDetails(false);
                                setShowApply(true);
                            }}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            )}

            {/* ---------------- APPLY FORM POPUP ---------------- */}
            {showApply && selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative animate-fadeIn">
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
                            onClick={() => setShowApply(false)}
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-primary mb-4">
                            Apply for {selectedJob.title}
                        </h2>

                        <form className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg" />
                            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg" />
                            <input type="file" className="w-full px-4 py-2 border rounded-lg" />
                            <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-lg h-24"></textarea>

                            <button
                                type="submit"
                                className="w-full py-3 bg-secondary text-white rounded-lg hover:bg-secondary-600 transition"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
