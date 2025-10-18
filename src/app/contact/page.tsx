"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min(scrollTop / docHeight, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <Link href="/" className="text-lg font-medium whitespace-nowrap">
            rogix
          </Link>
          <div
            className="hidden md:block w-full h-px mx-10 relative overflow-hidden rounded-full"
            style={{
              backgroundColor: `rgba(156, 163, 175, ${
                0.3 - scrollProgress * 0.2
              })`,
            }}
          >
            <div
              className="absolute top-0 left-0 h-full bg-[#d3d3d3] transition-all duration-500 ease-out rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          <nav className="flex space-x-6 md:space-x-12">
            <Link
              href="/#about"
              className="text-xs md:text-sm hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#experience"
              className="text-xs md:text-sm hover:text-gray-300 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-xs md:text-sm hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 md:pt-24 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-8 md:pt-16 pb-0">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 md:mb-6">
            <span className="text-gray-400">Let&apos;s</span> Connect
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl">
            Feel free to contact me if you have any questions.
            <br />
            I&apos;m available for new projects or just for chatting.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="py-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Send me a message
            </h2>
            <ContactForm />
          </div>
        </section>

        {/* Additional Contact Methods */}
        <section className="py-8 md:py-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Other ways to reach me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.linkedin.com/in/rogmxp/"
              target="_blank"
              className="p-6 bg-[#2e2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">LinkedIn</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connect with me professionally
              </p>
            </a>

            <a
              href="https://github.com/rogix"
              target="_blank"
              className="p-6 bg-[#2e2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-[#333] rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">GitHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Check out my code and projects
              </p>
            </a>

            <a
              href="/rogerio-resume.pdf"
              target="_blank"
              className="p-6 bg-[#2e2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-[#00e0b7] rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Resume</span>
              </div>
              <p className="text-gray-400 text-sm">
                Download my CV
              </p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-16 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-400 text-xs md:text-sm space-y-4 sm:space-y-0">
            <div>rogix, 2025</div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/rogmxp/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                linkedin
              </a>
              <a
                href="https://github.com/rogix"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                github
              </a>
              <a
                href="https://blog.rogix.dev"
                className="hover:text-white transition-colors"
              >
                blog
              </a>
              <a
                href="https://x.com/_rogmx"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                X
              </a>
              <a
                href="https://bsky.app/profile/rogix.bsky.social"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                bluesky
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
