import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * Feedback Modal/Page Component
 * Feedback modal centered on animated gradient background, as per design tokens in landing_page_design_notes.md.
 * - Back link (top left)
 * - Bold header, instructions with emoji
 * - Grouped fields: suggestion textarea, feedback type dropdown, optional email
 * - Accent (green) full-width submit button
 * - Glass/dark card modal, on gradient bg
 */
export default function Feedback({ onBack }) {
  // Controlled form state
  const [suggestion, setSuggestion] = useState("");
  const [feedbackType, setFeedbackType] = useState("General");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  // Handles form submission (placeholder - could integrate actual service)
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setSuggestion("");
    setFeedbackType("General");
    setEmail("");
  }

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-tr from-primary via-black to-accent items-center justify-center py-12 px-3 select-none relative transition-colors duration-500">
      {/* Floating accent bg */}
      <div className="fixed -top-[180px] -left-[110px] w-[410px] h-[410px] bg-accent/30 blur-3xl pointer-events-none z-0 opacity-80 animate-float-xy" />
      {/* Centered card/modal */}
      <div className="glass-card dark bg-[#18181b]/95 border border-white/10 shadow-2xl rounded-3xl max-w-md w-full py-10 px-7 relative flex flex-col animate-fade-in-up">
        {/* Back link */}
        <button
          className="absolute top-5 left-5 flex items-center text-accent hover:underline hover:text-primary text-base font-medium transition-colors"
          onClick={onBack}
          aria-label="Go back"
          type="button"
        >
          <span className="mr-2">&#8592;</span>
          Back
        </button>

        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1 text-center">
          Feedback
        </h1>
        {/* Emoji/Instruction */}
        <div className="mb-5 text-center text-lg text-accent">
          We’d love your thoughts! <span role="img" aria-label="sparkle">✨</span>
        </div>
        <form className="w-full flex flex-col gap-5 mt-2" onSubmit={handleSubmit} autoComplete="off" spellCheck="false">
          {/* Suggestion textarea */}
          <div>
            <label htmlFor="suggestion" className="block text-base font-semibold text-white mb-1">
              What’s your suggestion or feedback?
            </label>
            <textarea
              id="suggestion"
              required
              className="w-full min-h-[90px] rounded-xl bg-[#232336] dark:bg-[#242835] text-base px-4 py-3 border border-accent/30 text-white focus:ring-2 focus:ring-accent/40 placeholder:text-slate-400 mt-2 resize-none"
              placeholder="Type your thoughts here…"
              value={suggestion}
              onChange={e => setSuggestion(e.target.value)}
              maxLength={600}
              style={{ letterSpacing: "0.01em" }}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {/* Dropdown */}
            <div className="flex-1 min-w-[140px]">
              <label htmlFor="type" className="block text-sm font-medium text-white mb-1">
                Type
              </label>
              <select
                id="type"
                value={feedbackType}
                onChange={e => setFeedbackType(e.target.value)}
                className="w-full rounded-lg bg-[#252a2e] dark:bg-[#18181b] border border-white/15 px-3 py-2 text-white shadow-sm focus:ring-2 focus:ring-accent"
                style={{ letterSpacing: "0.01em" }}
              >
                <option>General</option>
                <option>Feature Request</option>
                <option>Bug</option>
                <option>Praise</option>
                <option>Other</option>
              </select>
            </div>
            {/* Optional email */}
            <div className="flex-1 min-w-[140px]">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email <span className="text-slate-500 text-xs">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="off"
                className="w-full rounded-lg bg-[#252a2e] dark:bg-[#18181b] border border-white/15 px-3 py-2 text-white shadow-sm focus:ring-2 focus:ring-accent"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* Accent submit button full width */}
          <button
            type="submit"
            className="mt-3 w-full bg-gradient-to-r from-accent via-primary to-accent text-white font-bold text-lg py-3 rounded-xl shadow-lg transition-all duration-200 hover:bg-primary focus:ring-2 focus:ring-accent/60 active:scale-98"
            style={{ boxShadow: "0 5px 24px -5px #38bdf860" }}
            disabled={submitted}
          >
            {submitted ? "Submitted!" : "Send Feedback"}
          </button>
        </form>
        {/* Submission confirmation */}
        {submitted && (
          <div className="text-center text-green-400 font-semibold mt-3 animate-fade-in-up">
            Thank you for your feedback!
          </div>
        )}
      </div>
    </div>
  );
}
