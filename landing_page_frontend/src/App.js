import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";

/**
 * --- PUBLIC_INTERFACE
 * Main App component: Handles SPA + feedback page lightweight routing.
 */
function App() {
  // Simple state to switch view between landing/feedback.
  const [feedbackMode, setFeedbackMode] = useState(false);

  useEffect(() => {
    document.title = "Gradify Resume Builder – Craft a Stunning Resume in Minutes!";
    // Hash-based feedback route for /#feedback, or ?feedback for fallback
    function routeChangeListener() {
      const hash = window.location.hash || "";
      const search = window.location.search || "";
      setFeedbackMode(
        hash.includes("feedback") || search.includes("feedback")
      );
    }
    window.addEventListener("hashchange", routeChangeListener);
    window.addEventListener("popstate", routeChangeListener);
    routeChangeListener();
    return () => {
      window.removeEventListener("hashchange", routeChangeListener);
      window.removeEventListener("popstate", routeChangeListener);
    };
  }, []);

  if (feedbackMode) {
    // Show Feedback modal
    return <Feedback onBack={() => { window.location.hash = ""; setFeedbackMode(false); }} />;
  }

  // PUBLIC_INTERFACE
  // Feature icons as SVGs
  const featureIcons = [
    {
      title: "Real-time Preview",
      icon: (
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="5" width="18" height="14" rx="3" strokeWidth="2" />
          <path d="M9 17h6M9 13h6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Multiple Templates",
      icon: (
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="7" y="3" width="14" height="14" rx="2" strokeWidth="2" />
          <rect x="3" y="7" width="14" height="14" rx="2" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Export as PDF",
      icon: (
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <path d="M3 9h18M9 21V9" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  // PUBLIC_INTERFACE
  // Testimonials data
  const testimonials = [
    {
      name: "Sarah P.",
      role: "Marketing Student",
      text: "This is hands down the cleanest and easiest resume builder I’ve used. The real-time preview is fantastic!",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "James R.",
      role: "Product Manager",
      text: "Loved the modern templates. My resume landed me two interviews within a week!",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Emily K.",
      role: "Graduate",
      text: "Exporting as PDF was flawless. Beautiful design and super intuitive to use!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  // PUBLIC_INTERFACE
  // Timeline steps
  const steps = [
    {
      title: "Start Building",
      text: "Pick a template, add your details, and let the builder do the rest.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M8 12l2 2l4-4" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Preview Instantly",
      text: "See changes as you type – with instant, responsive previews.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="5" y="4" width="14" height="16" rx="2" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Download & Share",
      text: "When finished, export as PDF and start your career journey.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 17v-8m0 0l-4 4m4-4l4 4" strokeWidth="2" />
          <rect x="4" y="19" width="16" height="2" rx="1" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  // PUBLIC_INTERFACE
  // SEO meta tags component
  const MetaTags = () => (
    <>
      <meta name="description" content="Premium, modern, and instant Resume Builder. Build, preview, and export your resume in minutes with beautiful templates. Try live, free." />
      <meta name="keywords" content="resume builder, online resume, modern resume, PDF export, templates, career" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Gradify Resume Builder" />
      <meta property="og:description" content="Create a stunning, professional resume in minutes with real-time preview and export as PDF. Try now, free!" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://gradifyresume.com/og-hero.jpg" />
      <meta property="og:url" content="https://gradifyresume.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gradifyresume" />
    </>
  );

  /**
   * PUBLIC_INTERFACE
   * Hero Section – headline, tagline, CTAs, animated gradient + spotlight, glassmorphism card
   */
  function Hero() {
    return (
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 select-none overflow-hidden">
        {/* Gradient background + animated spotlight */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-slate-900 to-accent opacity-80 animate-gradient-xy"></div>
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] translate-x-[-50%] translate-y-[-60%] backdrop-blur-2xl rounded-full pointer-events-none spotlight-bg"></div>
        </div>
        {/* Glassmorphism card */}
        <div className="w-full md:w-auto max-w-2xl mx-auto py-12 px-6 md:px-16 bg-white/20 border border-white/30 rounded-3xl shadow-xl backdrop-blur-lg glass-card anim-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight animate-text-shine">
            Craft Your <span className="text-accent">Future</span> with a Stunning Resume
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8">
            Build modern, professional resumes instantly. Real-time preview. Multiple templates. <span className="text-primary font-semibold">100% FREE</span>.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="cta-btn btn-primary glass-card px-7 py-3 text-lg font-semibold rounded-full shadow-lg bg-primary text-white hover:bg-accent focus:ring-4 duration-300 ring-accent anim-pulse"
            >
              Build Your Resume
            </a>
            <a
              href="#"
              className="cta-btn btn-secondary glass-card px-7 py-3 text-lg font-semibold rounded-full shadow border-2 border-primary text-primary bg-white/40 hover:bg-primary hover:text-white focus:ring-1 ring-primary duration-300"
            >
              Try Live Demo
            </a>
          </div>
        </div>
      </section>
    );
  }

  /**
   * PUBLIC_INTERFACE
   * Features Section – glass cards w/ icons
   */
  function Features() {
    return (
      <section className="py-14 bg-slate-50 dark:bg-black/80">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-slate-900 dark:text-white">
            Premium Features for Effortless Resume Creation
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {featureIcons.map((f) => (
              <div
                key={f.title}
                className="glass-card border border-white/30 bg-white/30 dark:bg-slate-800/50 backdrop-blur-md text-center rounded-2xl px-4 py-7 shadow-lg hover:scale-105 transition-all duration-300 anim-fade-in"
              >
                <div className="flex items-center justify-center mb-4">{f.icon}</div>
                <div className="text-lg font-semibold text-slate-800 dark:text-white">{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /**
   * PUBLIC_INTERFACE
   * How it works Section – timeline
   */
  function HowItWorks() {
    return (
      <section className="py-16 px-3 bg-transparent relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-slate-900 dark:text-white">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 mt-10 items-center justify-between relative">
          {steps.map((s, idx) => (
            <div key={s.title} className="flex flex-col items-center flex-1 relative">
              {/* Timeline line */}
              {idx < steps.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 h-1 w-full translate-y-[-50%] bg-gradient-to-r from-primary/80 via-accent/40 to-accent/0 z-0"></span>
              )}
              <div className="flex items-center justify-center mb-3 z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-slate-950 glass-card border border-primary/30 shadow-lg">
                  {s.icon}
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-primary">{s.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 max-w-[200px] text-center text-base">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /**
   * PUBLIC_INTERFACE
   * Animated floating testimonials carousel
   */
  function Testimonials() {
    return (
      <section className="relative bg-gradient-to-b from-slate-50/60 to-white dark:from-black dark:to-slate-900/80 pb-16 pt-12 overflow-visible">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-7 text-center text-slate-900 dark:text-white">
            What Our Users Say
          </h2>
          <div className="relative w-full flex flex-col md:flex-row gap-7 md:justify-center items-center anim-fade-in-up">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`glass-card flex-shrink-0 w-full md:w-[310px] p-6 rounded-2xl shadow-xl border border-white/30 transition-all anim-bounce-float`}
                style={{
                  animationDelay: `${0.3 * idx}s`,
                  animationDirection: idx % 2 === 0 ? "normal" : "reverse",
                }}
              >
                <div className="flex justify-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-2 border-accent shadow-xl mb-3"
                  />
                </div>
                <blockquote className="text-lg italic text-slate-700 dark:text-slate-200 mb-2">"{t.text}"</blockquote>
                <div className="text-primary font-medium">{t.name}</div>
                <div className="text-xs text-slate-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /**
   * PUBLIC_INTERFACE
   * Sticky Footer – social icons, links
   */
  function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full z-30 bg-white/60 dark:bg-black/50 backdrop-blur-lg border-t border-slate-200 dark:border-slate-700 shadow-sm py-3 px-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-xs text-slate-600 dark:text-white/60">
            &copy; {new Date().getFullYear()} Gradify Resume. All rights reserved.
          </div>
          <nav className="flex gap-3 items-center">
            <a
              className="hover:text-primary text-slate-700 dark:text-slate-200 transition-colors duration-200"
              href="#features"
            >
              Features
            </a>
            <a
              className="hover:text-primary text-slate-700 dark:text-slate-200 transition-colors duration-200"
              href="#"
            >
              How it works
            </a>
            {/* Feedback link */}
            <a
              className="hover:text-accent text-primary font-semibold px-4 py-1 rounded-lg transition-colors duration-200 ml-2 bg-white/50 dark:bg-black/40 shadow"
              href="#feedback"
              aria-label="Send Feedback"
            >
              <span role="img" aria-label="feedback" className="mr-1">💬</span> Feedback
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="hover:text-accent ml-2"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 3.6a9 9 0 01-2.6.7 4.5 4.5 0 001.96-2.49c-.88.52-1.85.9-2.89 1.1A4.48 4.48 0 0012 2C9.52 2 7.5 4.19 8.1 6.6a12.8 12.8 0 01-9.3-4.64s-1.56 2.87.87 4.62A4.36 4.36 0 012 9.13c-.42-.01-.82-.05-1.24-.12.19 2.44 2.38 4.34 5.09 4.39A8.72 8.72 0 012 16.2 12.36 12.36 0 008.28 18c7.5 0 11.61-6.48 11.61-12.1 0-.18-.01-.36-.02-.54A8.02 8.02 0 0022 4.3a8.04 8.04 0 01-2.31.63z"/>
              </svg>
            </a>
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="hover:text-primary ml-2"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1.75C5.29 1.75 0 6.81 0 12.73c0 4.91 3.18 9.07 7.6 10.55.56.1.77-.25.77-.54v-1.9c-3.09.69-3.74-1.41-3.74-1.41-.51-1.28-1.24-1.62-1.24-1.62-1-.65.08-.64.08-.64 1.11.08 1.7 1.17 1.7 1.17.99 1.7 2.6 1.21 3.23.92.1-.7.38-1.21.7-1.49-2.45-.27-5.03-1.27-5.03-5.65 0-1.25.43-2.28 1.14-3.08-.11-.27-.5-1.35.11-2.81 0 0 .93-.31 3.06 1.15A10.28 10.28 0 0112 7.14c.94.004 1.89.13 2.77.38 2.13-1.46 3.06-1.15 3.06-1.15.61 1.46.22 2.54.11 2.81.71.8 1.13 1.83 1.13 3.08 0 4.39-2.59 5.38-5.05 5.65.39.35.74 1.05.74 2.13v3.17c0 .29.22.65.78.54C20.82 21.8 24 17.64 24 12.73c0-5.92-5.29-10.98-12-10.98z"/>
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <main className="font-sans bg-custom-gradient min-h-screen relative transition-colors duration-500">
      <MetaTags />
      {/* Floating accent */}
      <div className="fixed -top-[220px] -left-[100px] w-[450px] h-[450px] bg-accent/20 blur-3xl pointer-events-none z-0 opacity-80 animate-float-xy" />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;

/**
 * Tailwind CSS required color classes:
 *  text-primary -> text-[#8B5CF6]
 *  text-accent  -> text-[#38BDF8]
 *  bg-primary   -> bg-[#8B5CF6]
 *  bg-accent    -> bg-[#38BDF8]
 *
 * Custom utility classes and animations must be defined in index.css.
 */
