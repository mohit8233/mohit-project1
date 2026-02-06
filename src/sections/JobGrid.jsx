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
          <div key={job.id}
            className='bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition border'>

            {/* Category Tag */}
            <span className={`inline-block mb-4 text-xs font-semibold px-4 py-1 rounded-full
  ${categoryColors[job.category] || "bg-slate-100 text-slate-600"}`}>{job.category}</span>

            {/* Title */}
            <h3 className='text-lg font-bold text-gray-900 leading-snug mb-3 hover:text-blue-500'>
              {job.title}
            </h3>

            {/* Meta */}
            <div className='flex items-center text-sm text-gray-500 gap-4 mb-6'>
              <span>📍{job.location}</span>
              <span>💼 {job.type} </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default JobGrid