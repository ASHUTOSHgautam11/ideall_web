'use client';

import { useState } from 'react';
import HeroVideoSection from '../components/HeroVideoSection';

// Mock job data
const JOBS = [
  {
    id: 1,
    title: 'Sales Associate',
    department: 'Sales',
    location: 'Delhi-NCR & Beyond',
    type: 'Full-time',
    experience: '2 years',
    posted: '2025-04-01',
    description:
      'Join our dynamic team in Delhi-NCR and take your career to the next level.',
    requirements: [
      'Minimum 2 years of proven sales experience in flooring, lighting, construction, or similar fields.',
      'Strong presentation and negotiation skills.',
      'Fluency in English AND a second language (additional languages are a big plus).',
    ],
  },
  {
    id: 2,
    title: 'Accounts Executive',
    department: 'Finance',
    location: 'Delhi',
    type: 'Full-time',
    experience: '2 years',
    posted: '2025-03-28',
    description:
      'Oversee Accounts Receivable and Accounts Payable functions to ensure timely collections and vendor payments.',
    requirements: [
      'Minimum Diploma in Accountancy or equivalent.',
      'At least 2 years of experience in the accounting field.',
      'Proficiency in Tally ERP or similar software.',
    ],
  },
];

const DEPARTMENTS = ['All', 'Sales', 'Finance', 'IT', 'Documentation'];
const LOCATIONS = ['All', 'Delhi-NCR & Beyond', 'Delhi', 'Remote'];
const TYPES = ['All', 'Full-time', 'Part-time', 'Contract'];

export default function Career() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [search, setSearch] = useState('');

  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showApply, setShowApply] = useState(false);

  const filteredJobs = JOBS.filter(
    (job) =>
      (selectedDept === 'All' || job.department === selectedDept) &&
      (selectedLocation === 'All' || job.location === selectedLocation) &&
      (selectedType === 'All' || job.type === selectedType) &&
      (job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      {/* Hero Section */}
      <HeroVideoSection
        heading="Join Our Team & Shape the Future"
        description="We are looking for passionate individuals who want to make a difference. Discover opportunities to grow your career while building products that impact millions of users worldwide."
        videoSrc="/assets/video/video4.mp4"
      />

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 mt-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Join Our Team & Shape the Future
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          We're looking for passionate individuals who want to make a difference. Discover opportunities to grow your career while building products that impact millions of users worldwide.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View Open Positions
          </button>
          <button className="px-6 py-3 bg-secondary border border-secondary text-white hover:bg-secondary-500 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Learn About Our Culture
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-10 bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Cards */}
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="p-6">
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
                    className="flex-1 py-2 border border-primary text-primary hover:text-white rounded-md hover:bg-primary-500 transition"
                    onClick={() => {
                      setSelectedJob(job);
                      setShowDetails(true);
                    }}
                  >
                    View Details
                  </button>
                  <button
                    className="flex-1 py-2 bg-primary text-white rounded-md hover:bg-primary-500 transition"
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
          ))}

          {filteredJobs.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10">
              No jobs found.
            </p>
          )}
        </div>
      </div>

      {/* View Details Modal */}
      {showDetails && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowDetails(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-sm text-gray-600 mb-4">
              Department: {selectedJob.department} | Location: {selectedJob.location}
            </p>

            <p className="text-gray-700 mb-3">{selectedJob.description}</p>

            <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
              {selectedJob.requirements.map((req: string, i: number) => (
                <li key={i}>{req}</li>
              ))}
            </ul>

            <button
              className="w-full py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-600 transition"
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

      {/* Quick Apply Modal */}
      {showApply && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowApply(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">
              Apply for {selectedJob.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Department: {selectedJob.department} | Location: {selectedJob.location}
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Resume (PDF/DOC)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-1 w-full text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cover Letter
                </label>
                <textarea
                  rows={3}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-600 transition"
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
