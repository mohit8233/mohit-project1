import React from 'react'


const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 py-24">

          {/* Layout */}
          <div className="max-w-3xl text-left text-white">

            {/* Text */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build Your Career with  
              <span className="text-blue-400"> JobFinder</span>
            </h1>

            <p className="mt-5 text-xl text-white/90">
              Discover thousands of verified jobs from top companies across India.
            </p>

            <p className="mt-3 text-md text-white/80">
              Search by job title and location, apply in one click, and start your
              journey towards a better future.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/90">
              <span>✅ 10,000+ Jobs</span>
              <span>🏢 1,500+ Companies</span>
              <span>👥 50,000+ Candidates</span>
            </div>

            {/* Search Box */}
            <div className="mt-10 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Job Title */}
                <input
                  type="text"
                  placeholder="Job title (e.g. React Developer)"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* Location */}
                <input
                  type="text"
                  placeholder="Location (e.g. Bangalore)"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* Button */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition">
                  Search Jobs
                </button>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-6 text-white/80 text-sm">
              Trusted by startups and enterprises • Free for job seekers • Fast hiring
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
