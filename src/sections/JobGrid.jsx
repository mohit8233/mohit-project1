import React, { useState } from 'react'
import category from '../Data/categories';
import jobsData from '../Data/jobData';


const categoryColors = {
  Creative: "bg-pink-100 text-pink-600",
  IT: "bg-indigo-100 text-indigo-600",
  Marketing: "bg-yellow-100 text-yellow-600",
  Corporate: "bg-gray-100 text-gray-700",
  Finance: "bg-green-100 text-green-600",
  Medical: "bg-red-100 text-red-600",
  All: "bg-blue-100 text-blue-600",
};

/* 🏢 COMPANY SVG LOGO LINKS */
const companyLogos = {
  "Globe Solution Ltd.": "https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo1.svg",
  "AdWorld Pvt Ltd": "https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo2.svg",
  "TechSoft": "https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo3.svg",
  "PeopleCorp": "https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo5.svg",
  "FinEdge": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEVda6ew_pUdVd9PT3G8RDG9ir5_5BJcSIg&s",
  "DesignPro": "https://img.freepik.com/premium-vector/bull-modern-logo_91719-138.jpg?semt=ais_hybrid&w=740&q=80",
};


const JobGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredJobs =
    activeCategory === "All"
      ? jobsData.slice(0, 8)
      : jobsData.filter(job => job.category === activeCategory).slice(0, 8);
  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <h2 className='text-3xl font-bold text-center  mb-8'>
        Find Jobs By Category
      </h2>
      {/* Category Tabs */}
      <div className='flex flex-wrap justify-center gap-6 mb-14 border-b'>
        {category.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`pb-4 text-lg font-semibold transition relative
          ${activeCategory === cat ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] "
                : "text-gray-400 hover:text-gray-700"
              }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredJobs.map(job => (
         <div
  key={job.id}
  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition border"
>
  {/* Category Tag */}
  <span className={`inline-block mb-4 text-xs font-semibold px-4 py-1 rounded-full 
    ${categoryColors[job.category] || "bg-slate-100 text-slate-600"}`}>
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
    <div className="flex items-center gap-2">
      <img
        src={companyLogos[job.company] || "https://www.svgrepo.com/show/508699/building.svg"}
        alt={job.company}
        className="w-6 h-6 object-contain"
      />
      <span className="font-semibold text-gray-700">{job.company}</span>
    </div>
    <span className="text-xs text-gray-400">{job.time}</span>
  </div>

  {/* Apply Button */}
  <div className="mt-4 flex justify-end">
    <button
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg 
      hover:bg-green-700 transition"
      onClick={() => alert(`Applied to ${job.title} at ${job.company}`)}
    >
      Apply
      <span className="text-sm">→</span>
    </button>
  </div>
</div>

        ))}
      </div>
         <button 
         className='mx-auto mt-6 relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg transition-all duration-300 group'>
          {/* Sliding background */}
  <span className="absolute inset-0 bg-blue-400 transform -translate-x-full 
    group-hover:translate-x-0 transition-transform duration-300"></span>

  {/* Content */}
  <span className="relative z-10 flex items-center gap-2">
    Find More
    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
  </span>
         </button>
    </section>
  )
}

export default JobGrid