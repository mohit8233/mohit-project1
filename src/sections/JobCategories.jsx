import React, { useState } from "react";

const jobsData = [
  {
    id: 1,
    title: "User Experience Designer - Employee Solutions",
    location: "New York, USA",
    type: "Full Time",
    company: "Globe Solution Ltd.",
    time: "2h ago",
    category: "Creative",
  },
  {
    id: 2,
    title: "Foreign Language Research Analyst (Chinese)",
    location: "New York, USA",
    type: "Full Time",
    company: "Globe Solution Ltd.",
    time: "2h ago",
    category: "Finance",
  },
  {
    id: 3,
    title: "Medical Assistant, East Valley Primary Care",
    location: "New York, USA",
    type: "Full Time",
    company: "Globe Solution Ltd.",
    time: "2h ago",
    category: "Medical",
  },
  {
    id: 4,
    title: "Marketing Manager",
    location: "Delhi, India",
    type: "Full Time",
    company: "AdWorld Pvt Ltd",
    time: "1h ago",
    category: "Marketing",
  },
  {
    id: 5,
    title: "React Developer",
    location: "Remote",
    type: "Full Time",
    company: "TechSoft",
    time: "30m ago",
    category: "IT",
  },
  {
    id: 6,
    title: "HR Executive",
    location: "Delhi, India",
    type: "Full Time",
    company: "PeopleCorp",
    time: "3h ago",
    category: "Corporate",
  },
  {
    id: 7,
    title: "Accountant",
    location: "Noida, India",
    type: "Full Time",
    company: "FinEdge",
    time: "5h ago",
    category: "Finance",
  },
  {
    id: 8,
    title: "Graphic Designer",
    location: "Remote",
    type: "Internship",
    company: "DesignPro",
    time: "1d ago",
    category: "Creative",
  },
];

const categories = [
  "All",
  "Creative",
  "IT",
  "Marketing",
  "Corporate",
  "Finance",
  "Medical",
];

const JobCategories = () => {
  const [ activeCategory, setActiveCategory] = useState("All");

  const filteredJobs =
    activeCategory === "All"
      ? jobsData.slice(0, 8)
      : jobsData.filter(job => job.category === activeCategory).slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
       <h2 className="text-3xl font-bold text-center mb-8">
        Find Jobs By Category
      </h2>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-14 border-b">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-4 text-sm font-semibold transition relative
              ${activeCategory === cat 
                ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-blue-600"
                : "text-gray-400 hover:text-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map(job => (
          <div
            key={job.id}
            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition border"
          >
            {/* Category Tag */}
            <span className="inline-block mb-4 text-xs font-semibold px-4 py-1 rounded-full 
              bg-blue-50 text-blue-600">
              {job.category}
            </span>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
              {job.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center text-sm text-gray-500 gap-4 mb-6">
              <span>📍 {job.location}</span>
              <span>💼 {job.type}</span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="font-semibold text-gray-700">
                {job.company}
              </span>
              <span className="text-xs text-gray-400">{job.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
