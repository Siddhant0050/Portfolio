import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";

const Profile = ({ isDark }) => {
  const [activeQuote, setActiveQuote] = useState(0);

  const slides = [
    {
      text: "Make it work, make it right, make it fast.",
      author: "Kent Beck",
      img: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800",
    },
    {
      text: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    },
    {
      text: "Design is how it works.",
      author: "Steve Jobs",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const sectionTitle =
    "text-[#c5a358] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.6em] md:tracking-[0.8em] mb-12 md:mb-20 block text-center";

  return (
    <div
      className={`transition-colors duration-500 pt-10 md:pt-20 overflow-x-hidden ${
        isDark ? "bg-[#050505] text-white" : "bg-[#fcfcfc] text-black"
      }`}
    >
      {/* --- HOME SECTION --- */}
      <section
        id="home"
        className="min-h-[90vh] flex flex-col justify-center items-center px-6 text-center relative"
      >
        <h2 className="text-[#c5a358] font-semibold text-[10px] uppercase tracking-[0.8em] md:tracking-[1.2em] mb-8 md:mb-10">
          Software Engineer
        </h2>

        <div className="relative w-full max-w-4xl h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out flex flex-col items-center justify-center transform-gpu ${
                index === activeQuote
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.img}
                  alt="background"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale opacity-30 transition-opacity duration-700"
                />
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? "bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"
                      : "bg-gradient-to-b from-[#fcfcfc] via-transparent to-[#fcfcfc]"
                  }`}
                ></div>
              </div>

              <div className="z-10 px-6 md:px-12">
                <p className="text-xl md:text-4xl font-serif-stylish italic tracking-wide leading-tight md:leading-relaxed">
                  "{slide.text}"
                </p>
                <div className="w-10 h-px bg-[#c5a358] mx-auto my-6 md:my-8 opacity-60"></div>
                <span className="text-[#c5a358] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em]">
                  — {slide.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] md:text-[12px] tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-40 font-medium mt-12 md:mt-16">
          Siddhant Sunil Yadav
        </p>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        id="experience"
        className="py-24 md:py-48 max-w-5xl mx-auto px-6 md:px-8"
      >
        <span className={sectionTitle}>Professional Tenure</span>
        <div className="space-y-16 md:y-24">
          {[
            {
              date: "Jun 2024 — Nov 2025",
              role: "Java Developer",
              company: "Tech Mahindra",
              points: [
                "Developed scalable backend applications using Java and Spring Boot.",
                "Designed secure REST APIs with JWT-based authentication.",
                "Optimized SQL queries in PostgreSQL for better performance.",
                "Applied multithreading for robust, concurrent applications.",
              ],
            },
            {
              date: "Jan 2024 — Jun 2024",
              role: "Java Developer Intern",
              company: "Utterwise Technologies",
              points: [
                "Built REST APIs and integrated backend with PostgreSQL.",
                "Handled debugging and exception handling for stability.",
                "Verified API logic using Postman testing.",
              ],
            },
            {
              date: "May 2023 — Aug 2023",
              role: "Web Developer Intern",
              company: "Intellect Logic",
              desc: "Developed responsive UI using HTML, CSS, and JS, integrating frontend components with backend APIs.",
            },
          ].map((exp, idx) => (
            <div
              key={idx}
              className={`border-l ${isDark ? "border-white/10" : "border-black/10"} pl-8 md:pl-12 relative group`}
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-[#c5a358] shadow-[0_0_15px_rgba(197,163,88,0.5)]"></div>
              <span className="text-[9px] font-bold opacity-40 uppercase tracking-[0.3em]">
                {exp.date}
              </span>
              <h4 className="text-2xl md:text-4xl font-serif-stylish italic mt-3 group-hover:text-[#c5a358] transition-colors">
                {exp.role}
              </h4>
              <p className="text-[#c5a358] text-[11px] font-bold tracking-[0.2em] uppercase mt-1">
                {exp.company}
              </p>
              {exp.points ? (
                <ul
                  className={`text-sm md:text-base font-light mt-6 space-y-2 md:space-y-3 leading-relaxed opacity-80`}
                >
                  {exp.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm md:text-base font-light mt-6 opacity-80 leading-relaxed">
                  {exp.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section
        id="education"
        className={`py-24 md:py-48 px-6 md:px-8 ${isDark ? "bg-[#080808]" : "bg-[#f9f9f9]"} border-y ${isDark ? "border-white/[0.03]" : "border-black/[0.03]"}`}
      >
        <div className="max-w-5xl mx-auto">
          <span className={sectionTitle}>Academic Foundation</span>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-4">
              <Icons.GraduationCap
                className="text-[#c5a358] opacity-50"
                size={28}
              />
              <span className="text-[#c5a358] text-[10px] font-bold tracking-[0.3em] uppercase">
                2022 — 2024
              </span>
              <h4 className="text-2xl md:text-3xl font-serif-stylish italic">
                Master of MCA
              </h4>
              <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest">
                MIT World Peace University, Pune
              </p>
            </div>
            <div className="space-y-4">
              <Icons.Award className="text-[#c5a358] opacity-50" size={28} />
              <span className="text-[#c5a358] text-[10px] font-bold tracking-[0.3em] uppercase">
                2019 — 2022
              </span>
              <h4 className="text-2xl md:text-3xl font-serif-stylish italic">
                Bachelor of BCA
              </h4>
              <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest">
                Degree College of Physical Education, HVPM, Amravati
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section
        id="skills"
        className="py-24 md:py-48 max-w-6xl mx-auto px-6 md:px-8"
      >
        <span className={sectionTitle}>Technical Arsenal</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c5a358]/20 border border-[#c5a358]/10">
          {[
            { cat: "Languages", tech: "Java, JavaScript, SQL" },
            {
              cat: "Backend",
              tech: "Spring Boot, REST APIs, JWT, Microservices",
            },
            {
              cat: "Core Java",
              tech: "OOP, Collections, Streams, Multithreading",
            },
            { cat: "Frontend", tech: "React.js, HTML, CSS, Tailwind" },
            { cat: "Database", tech: "PostgreSQL, SQL, Indexing" },
            { cat: "Tools", tech: "Git, Maven, Postman, VS Code" },
          ].map((s, i) => (
            <div
              key={i}
              className={`p-10 md:p-16 transition-all ${isDark ? "bg-[#050505] hover:bg-[#0a0a0a]" : "bg-white hover:bg-slate-50"} text-center`}
            >
              <h5 className="text-[9px] font-bold text-[#c5a358] uppercase tracking-[0.3em] mb-4">
                {s.cat}
              </h5>
              <p className="text-xs md:text-sm font-medium opacity-70">
                {s.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className={`py-24 md:py-48 px-6 md:px-8 ${isDark ? "bg-[#080808]" : "bg-[#f9f9f9]"}`}
      >
        <div className="max-w-6xl mx-auto">
          <span className={sectionTitle}>Selected Works</span>
          <div className="grid md:grid-cols-2 gap-8 md:gap-px bg-[#c5a358]/20 border border-[#c5a358]/10 overflow-hidden">
            {[
              {
                title: "Amit IT Academy",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
                desc: "Full-stack platform with React & Spring Boot. Features role-based access and student enrollment modules.",
              },
              {
                title: "SSY Academics",
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
                desc: "High-performance academic system focusing on multithreaded data handling and secure API design.",
              },
            ].map((proj, i) => (
              <div
                key={i}
                className={`group p-8 md:p-16 transition-all ${isDark ? "bg-[#050505]" : "bg-white"}`}
              >
                <div className="aspect-[16/10] overflow-hidden mb-8 md:mb-12 rounded-sm">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="text-2xl md:text-4xl font-serif-stylish italic mb-4">
                  {proj.title}
                </h4>
                <p className="text-xs md:text-sm font-light leading-relaxed opacity-60 mb-6">
                  {proj.desc}
                </p>
                <div className="w-10 h-px bg-[#c5a358] opacity-30 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 md:py-32 text-center px-6">
        <span className={sectionTitle}>Inquiry</span>
        <h3 className="text-3xl md:text-6xl font-serif-stylish italic mb-12 md:mb-16 leading-tight">
          Let's Build the <br className="hidden md:block" />
          <span className="text-[#c5a358]">Next Era.</span>
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center">
          <a href="mailto:yadavsiddhant10@gmail.com" className="group">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40 block mb-2">
              Email Channel
            </span>
            <span className="text-base md:text-xl font-medium border-b border-[#c5a358]/20 group-hover:border-[#c5a358] transition-all">
              yadavsiddhant10@gmail.com
            </span>
          </a>
          <a
            href="https://wa.me/919359562815"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40 block mb-2">
              Connection
            </span>
            <div className="flex items-center gap-2 border-b border-[#c5a358]/20 group-hover:border-[#c5a358] transition-all">
              <Icons.MessageSquare size={14} className="text-[#c5a358]" />
              <span className="text-base md:text-xl font-medium">
                +91 9359562815
              </span>
            </div>
          </a>
        </div>
      </section>

      <footer
        className={`py-12 border-t ${isDark ? "border-white/5" : "border-black/5"} text-center`}
      >
        <p className="text-[9px] font-bold tracking-[0.4em] opacity-30 uppercase px-6 leading-loose">
          © 2026 Siddhant Sunil Yadav • Engineered for Performance
        </p>
      </footer>
    </div>
  );
};

export default Profile;
