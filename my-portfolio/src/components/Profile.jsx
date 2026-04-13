import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";

const Profile = ({ isDark }) => {
  const [activeQuote, setActiveQuote] = useState(0);

  const slides = [
    {
      text: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman",
      img: "https://images.unsplash.com/photo-1510519133417-2407ebdfc417?q=80&w=1200",
    },
    {
      text: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    },
    {
      text: "Design is how it works.",
      author: "Steve Jobs",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const sectionTitle =
    "text-[#c5a358] font-bold text-[11px] uppercase tracking-[0.8em] mb-20 block text-center";

  return (
    <div
      className={`transition-colors duration-500 pt-20 ${isDark ? "bg-[#050505] text-white" : "bg-[#fcfcfc] text-black"}`}
    >
      {/* --- HOME SECTION WITH IMAGE QUOTE SLIDER --- */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden"
      >
        {/* Background Decorative Text
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
          <h1 className="text-[20vw] font-black">Siddhant</h1>
        </div> */}

        <h2 className="text-[#c5a358] font-semibold text-[11px] uppercase tracking-[1.2em] mb-10">
          Software Engineer
        </h2>

        {/* --- IMAGE & QUOTE SLIDER CONTAINER --- */}
        <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden rounded-sm">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out flex flex-col items-center justify-center ${
                index === activeQuote
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              {/* Slide Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.img}
                  alt="background"
                  className="w-full h-full object-cover grayscale opacity-20"
                />
                <div
                  className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" : "bg-gradient-to-b from-[#fcfcfc] via-transparent to-[#fcfcfc]"}`}
                ></div>
              </div>

              {/* Slide Content */}
              <div className="z-10 px-8">
                <p className="text-xl md:text-3xl font-serif-stylish italic tracking-wide leading-relaxed">
                  "{slide.text}"
                </p>
                <div className="w-12 h-px bg-[#c5a358] mx-auto my-6"></div>
                <span className="text-[#c5a358] text-[10px] font-bold uppercase tracking-[0.6em]">
                  — {slide.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[12px] tracking-[0.6em] uppercase opacity-40 font-medium mt-16">
          Siddhant Sunil Yadav
        </p>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-48 max-w-5xl mx-auto px-8">
        <span className={sectionTitle}>Professional Tenure</span>
        <div className="space-y-20">
          <div
            className={`border-l-2 ${isDark ? "border-white/5" : "border-black/5"} pl-12 relative group`}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#c5a358] shadow-[0_0_20px_rgba(197,163,88,0.3)]"></div>
            <span className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em]">
              2024 — Present
            </span>
            <h4 className="text-4xl font-serif-stylish italic mt-4 group-hover:text-[#c5a358] transition-colors">
              Java Developer Intern
            </h4>
            <p className="text-[#c5a358] text-[12px] font-bold tracking-[0.2em] uppercase mt-2">
              Utterwise Technologies
            </p>
            <p
              className={`text-base font-light mt-8 max-w-2xl leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Architecting scalable RESTful ecosystems and optimizing Spring
              Boot backend performance. Focusing on high-concurrency data
              integrity and enterprise security.
            </p>
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section
        id="education"
        className={`py-48 px-8 ${isDark ? "bg-[#080808]" : "bg-[#f9f9f9]"} border-y ${isDark ? "border-white/[0.03]" : "border-black/[0.03]"}`}
      >
        <div className="max-w-5xl mx-auto">
          <span className={sectionTitle}>Academic Foundation</span>
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <Icons.GraduationCap
                className="text-[#c5a358] opacity-40"
                size={32}
              />
              <span className="text-[#c5a358] text-[11px] font-bold tracking-[0.4em] uppercase">
                2022 — 2024
              </span>
              <h4 className="text-4xl font-serif-stylish italic leading-tight">
                Master of MCA
              </h4>
              <p className="text-[11px] font-bold opacity-30 uppercase tracking-[0.2em]">
                MIT World Peace University, Pune
              </p>
            </div>
            <div className="space-y-6">
              <Icons.Award className="text-[#c5a358] opacity-40" size={32} />
              <span className="text-[#c5a358] text-[11px] font-bold tracking-[0.4em] uppercase">
                2019 — 2022
              </span>
              <h4 className="text-4xl font-serif-stylish italic leading-tight">
                Bachelor of BCA
              </h4>
              <p className="text-[11px] font-bold opacity-30 uppercase tracking-[0.2em]">
                DCPE, Amravati
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-48 max-w-6xl mx-auto px-8">
        <span className={sectionTitle}>Technical Arsenal</span>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#c5a358]/10 border border-[#c5a358]/10 overflow-hidden">
          {[
            { cat: "Backend", tech: "Java, Spring Boot" },
            { cat: "Frontend", tech: "React.js, Tailwind" },
            { cat: "Database", tech: "PostgreSQL, MySQL" },
            { cat: "Tools", tech: "Git, Docker, AWS" },
          ].map((s, i) => (
            <div
              key={i}
              className={`p-16 transition-all duration-500 ${isDark ? "bg-[#050505] hover:bg-[#0a0a0a]" : "bg-white hover:bg-slate-50"} text-center group`}
            >
              <h5 className="text-[10px] font-bold text-[#c5a358] uppercase tracking-[0.4em] mb-4">
                {s.cat}
              </h5>
              <p className="text-sm font-medium opacity-60 tracking-wide">
                {s.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className={`py-48 px-8 ${isDark ? "bg-[#080808]" : "bg-[#f9f9f9]"} border-y ${isDark ? "border-white/[0.03]" : "border-black/[0.03]"}`}
      >
        <div className="max-w-6xl mx-auto">
          <span className={sectionTitle}>Selected Works</span>
          <div className="grid md:grid-cols-2 gap-px bg-[#c5a358]/20 border border-[#c5a358]/20 overflow-hidden">
            {[
              {
                title: "AmitIT Academy",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
                desc: "Enterprise Student Management ecosystem with high-performance Java backend.",
              },
              {
                title: "Internal Systems",
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
                desc: "Integrated employee resource tracking focused on data security and real-time visualization.",
              },
            ].map((proj, i) => (
              <div
                key={i}
                className={`group p-12 md:p-16 transition-all duration-700 ${isDark ? "bg-[#050505]" : "bg-white"}`}
              >
                <div className="aspect-[16/10] overflow-hidden mb-12">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s]"
                  />
                </div>
                <div className="space-y-6">
                  <h4 className="text-4xl font-serif-stylish italic">
                    {proj.title}
                  </h4>
                  <p
                    className={`text-sm font-light leading-relaxed max-w-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {proj.desc}
                  </p>
                  <div className="w-12 h-px bg-[#c5a358] opacity-40 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="py-32 text-center px-8 relative overflow-hidden"
      >
        <span className={sectionTitle}>Inquiry</span>

        {/* Scaled down heading for better balance */}
        <h3 className="text-4xl md:text-6xl font-serif-stylish italic mb-12 leading-tight">
          Let's Build the <br />
          <span className="text-[#c5a358]">Next Era.</span>
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 items-center">
          {/* Email Block */}
          <a href="mailto:yadavsiddhant10@gmail.com" className="group">
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-40 group-hover:text-[#c5a358] group-hover:opacity-100 transition-all block mb-2">
              Email Channel
            </span>
            <span className="text-lg md:text-xl font-medium tracking-tight border-b border-[#c5a358]/10 group-hover:border-[#c5a358] transition-all pb-1">
              yadavsiddhant10@gmail.com
            </span>
          </a>

          {/* Minimalist Vertical Divider */}
          <div
            className={`hidden md:block w-px h-10 ${isDark ? "bg-white/10" : "bg-black/10"}`}
          ></div>

          {/* Refined Mobile/Connect Block */}
          <a
            href="https://wa.me/919359562815"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-40 group-hover:text-[#c5a358] group-hover:opacity-100 transition-all block mb-2">
              Connection
            </span>
            <div className="flex items-center gap-2 justify-center border-b border-[#c5a358]/10 group-hover:border-[#c5a358] transition-all pb-1">
              <Icons.MessageSquare
                size={14}
                className="text-[#c5a358] opacity-60"
              />
              <span className="text-lg md:text-xl font-medium tracking-tight">
                +91 9359562815
              </span>
            </div>
          </a>
        </div>
      </section>

      <footer
        className={`py-20 border-t ${isDark ? "border-white/5" : "border-black/5"} text-center`}
      >
        <p className="text-[10px] font-bold tracking-[0.6em] opacity-20 uppercase">
          © 2026 Siddhant Sunil Yadav • Engineered for Performance
        </p>
      </footer>
    </div>
  );
};

export default Profile;
