import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";

/**
 * --- PUBLIC_INTERFACE
 * Main App component: Handles SPA + feedback modal and landing layout.
 */
function App() {
  // Landing or Feedback page routing state
  const [feedbackMode, setFeedbackMode] = useState(false);

  useEffect(() => {
    document.title = "linki.me – LinkedIn ➡️ Website in One Click";
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
    return <Feedback onBack={() => { window.location.hash = ""; setFeedbackMode(false); }} />;
  }

  // PUBLIC_INTERFACE
  // Navigation bar per design notes
  function Header() {
    return (
      <header className="w-full px-7 py-6 flex items-center justify-between" style={{maxWidth:1120, margin:'0 auto'}}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-wide text-[#262626] select-none">💼 linki.me</span>
        </div>
        <nav className="flex items-center gap-8">
          <a className="text-[15px] font-medium text-[#4D4D4D] hover:underline underline-offset-2 transition" href="#features">Features</a>
          <a href="#" className="ml-2 px-5 py-2 rounded-xl shadow hover:shadow-md transition bg-black text-white font-bold text-[15px] focus:outline-none focus-visible:ring-2 ring-[#121212]">Login</a>
        </nav>
      </header>
    );
  }

  // PUBLIC_INTERFACE
  // The two-section main grid (Hero + PreviewCard)
  function MainLayout() {
    return (
      <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
        {/* Nav/Header */}
        <Header />
        {/* Sections */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-3 py-12 gap-y-12 lg:gap-y-0" style={{minHeight:'calc(100vh - 80px)'}}>
          {/* Left/Hero */}
          <section className="w-full max-w-lg flex flex-col items-start text-left px-4 sm:px-0">
            <div className="mb-4 text-[#4D4D4D] text-[20px] font-medium leading-tight tracking-normal">Just 1 click & you’re online!</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#262626] leading-tight mb-3 tracking-tight">
              LinkedIn <span className="inline-block align-middle">➡️</span> Website<br />
              <span className="block text-2xl md:text-[2.1rem] text-[#262626] font-bold tracking-wide" style={{marginTop:8}}>in one click</span>
            </h1>
            <div className="my-4 text-[17px] text-[#4D4D4D] font-normal">Turn your resume/contacts into a professional website.</div>
            {/* CTA */}
            <a href="#" className="mt-1 mb-3 text-[17px] font-semibold bg-black text-white px-10 py-4 rounded-2xl shadow-md hover:bg-[#262626] transition-all focus-visible:ring-2 ring-[#121212]">Upload Resume</a>
            <a href="#" className="block text-[#262626] text-[15px] font-medium underline underline-offset-2 hover:text-black transition">Take a demo</a>
          </section>
          {/* Right/Preview Card */}
          <section className="w-full max-w-md lg:ml-20 flex justify-center px-4 sm:px-0">
            <PreviewCard />
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  // --- PUBLIC_INTERFACE
  // Strong card design for resume preview (right column)
  function PreviewCard() {
    return (
      <div className="bg-white shadow-xl rounded-[18px] border border-[#E6E7EB] w-full max-w-md px-10 py-8 flex flex-col gap-2" style={{minWidth:310}}>
        {/* Header: Avatar + Name */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[24px] leading-none font-bold text-[#262626] mb-1">Jordan Taylor</div>
            <div className="text-[15px] font-medium text-[#4D4D4D]">Product Designer</div>
          </div>
          <img className="rounded-full w-14 h-14 object-cover border-2 border-[#F8F9FB] shadow" src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile"/>
        </div>
        {/* Divider */}
        <div className="border-t border-[#F1F2F4] mb-5" />
        {/* About */}
        <section className="mb-3">
          <div className="uppercase tracking-wide text-xs font-semibold text-[#7A869A] mb-1">About</div>
          <div className="text-[16px] text-[#4D4D4D] leading-relaxed">Creative designer with 5+ years experience in web and product design. Passionate about user experience and minimal aesthetics.</div>
        </section>
        {/* Divider */}
        <div className="border-t border-[#F1F2F4] my-2" />
        {/* Experience */}
        <section className="mb-2">
          <div className="uppercase tracking-wide text-xs font-semibold text-[#7A869A] mb-1">Work Experience</div>
          <div className="flex flex-col gap-1">
            <div>
              <span className="font-semibold text-[#262626]">Lead Designer</span>{" "}
              <span className="text-xs text-[#7A869A]">@ Creativo Inc</span>
              <div className="text-[15px] text-[#4D4D4D]">2020–Present</div>
            </div>
            <div>
              <span className="font-semibold text-[#262626]">UX Designer</span>{" "}
              <span className="text-xs text-[#7A869A]">@ InnovateXYZ</span>
              <div className="text-[15px] text-[#4D4D4D]">2017–2020</div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <div className="border-t border-[#F1F2F4] my-2" />
        {/* Education */}
        <section>
          <div className="uppercase tracking-wide text-xs font-semibold text-[#7A869A] mb-1">Education</div>
          <div>
            <div className="font-semibold text-[#262626]">B.A. Design</div>
            <div className="text-[15px] text-[#4D4D4D]">University of Webtopia, 2013–2017</div>
          </div>
        </section>
      </div>
    );
  }

  // --- PUBLIC_INTERFACE
  // Footer, minimal version for white card layout
  function Footer() {
    return (
      <footer className="w-full flex justify-center items-center py-7 px-3 mt-10 border-t border-[#ECEDEF] text-[#7A869A] text-xs font-medium bg-transparent" style={{marginTop:120}}>
        © {new Date().getFullYear()} linki.me – All rights reserved.
      </footer>
    );
  }

  // PUBLIC_INTERFACE
  // SEO meta tags component (minimal for demo)
  const MetaTags = () => (
    <>
      <meta name="description" content="Just 1 click & you're online – LinkedIn ➡️ Website. Turn your resume or contacts into a professional website instantly with linki.me." />
      <meta name="keywords" content="resume website, linkedin to website, online website builder, digital CV, instant portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="linki.me – LinkedIn to Website" />
      <meta property="og:description" content="Create a professional, modern website in one click. Try linki.me free!" />
      <meta property="og:type" content="website" />
    </>
  );

  // MAIN RENDER
  return (
    <main className="font-sans bg-[#F8F9FB] min-h-screen w-full">
      <MetaTags />
      <MainLayout />
    </main>
  );
}

export default App;
