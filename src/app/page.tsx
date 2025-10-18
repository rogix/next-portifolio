"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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
          <a href="#" className="text-lg font-medium whitespace-nowrap">
            rogix
          </a>
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
            <a
              href="#about"
              className="text-xs md:text-sm hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-xs md:text-sm hover:text-gray-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-xs md:text-sm hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 md:pt-20 pb-10 px-4 max-w-7xl mx-auto h-[calc(100vh-400px)] md:h-screen flex flex-col justify-between"
      >
        <div className="h-[calc(100vh-500px)] md:h-screen flex flex-col justify-between">
          {/* Profile and intro section */}
          <div className="flex items-start space-x-4 md:space-x-8 mt-6 md:mt-10">
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={60}
              height={60}
              className="md:w-20 md:h-20 rounded-full object-cover aspect-square"
            />
            <div className="text-gray-400 text-xs md:text-sm leading-relaxed pt-1 max-w-md">
              &ldquo;There&apos;s a tremendous amount of craftsmanship between a great idea and a great product… and it&apos;s that process that is the magic.&rdquo;
              <br />
              Steve Jobs
            </div>
          </div>

          {/* Main headline */}
          <div className="mb-10 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-4">
              Software Engineer
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
              <span className="text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-normal">
                and
              </span>{" "}
              Product{" "}
              <span className="relative inline-block">
                Designer
                <div className="absolute top-3/5 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
              </span>
            </h2>
          </div>
        </div>
        {/* Location and availability */}
        <div className="flex justify-between items-start md:items-center">
          <div className="text-gray-400 text-xs md:text-sm whitespace-nowrap">
            São Paulo, BR
          </div>
          <div className="hidden md:block w-[60%] h-px mx-10 bg-gray-600/30"></div>
          <div className="text-left md:text-right">
            <div className="flex items-center space-x-2">
              <span className="text-xs md:text-sm whitespace-nowrap">
                UTC-3 (BRT)
              </span>
            </div>
          </div>
          <div className="hidden md:block w-[60%] h-px mx-10 bg-gray-600/30"></div>
          <div className="text-left md:text-right text-[#00e0b7] whitespace-nowrap">
            <a
              href="https://blog.rogix.dev"
              target="_blank"
              className="hover:text-emerald-500 transition-colors text-xs md:text-sm flex items-center space-x-2"
            >
              <div className="w-2 h-2 bg-[#00e0b7] rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base">BLOG</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-8 md:py-16 px-4 md:min-h-screen max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:min-h-screen flex flex-col justify-between pt-6 md:pt-10 pb-10 md:pb-20">
            <p className="text-lg md:text-3xl leading-relaxed">
              Hi! Great to have you here. I&apos;m a software engineer and
              product designer based in Brazil. I&apos;ve been working in the
              software industry for over 8 years. My greatest passion is
              building high-quality products with a focus on user experience.
              I&apos;m currently working at GFT Technology as a Fullstack
              Developer.
            </p>
            <div className="flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 hidden md:flex">
              <a
                href="https://www.linkedin.com/in/rogmxp/"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
              >
                <span className="text-sm md:text-base">LINKEDIN</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/rogix"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
              >
                <span className="text-sm md:text-base">GITHUB</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center mt-8 lg:mt-0">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border border-[#00e0b7]/5">
              {/* Subtle background particles */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-[#00e0b7] rounded-full  opacity-20 animate-float-subtle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 8}s`,
                      animationDuration: `${8 + Math.random() * 4}s`,
                    }}
                  />
                ))}
              </div>

              {/* Minimal geometric accents */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 md:top-12 md:left-12 w-8 h-8 md:w-12 md:h-12 border border-[#00e0b7]/35 rounded-lg animate-pulse-very-slow"></div>
                <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 w-6 h-6 md:w-8 md:h-8 border border-[#00e0b7]/30 rounded-full animate-pulse-very-slow"></div>
              </div>

              {/* Subtle central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 border border-[#00e0b7]/40 rounded-full animate-pulse-very-slow"></div>
                  <div className="absolute inset-2 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-[#00e0b7]/25 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-10 md:py-20 bg-[#0f0f0f] max-w-7xl mx-auto px-4"
      >
        {/* Left side - Introductory text and CTA links */}
        {/* Main headline */}
        <div className="max-w-3xl mb-8 md:mb-12 hidden md:block">
          <p className="text-gray-400 text-2xl md:text-5xl leading-normal font-bold">
            For the last <span className="text-white font-bold">8 years</span> I
            have worked on a variety of projects, from small startups to large
            enterprises.
          </p>
        </div>

        {/* CTA Links */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-start">
          <div className="flex flex-col space-y-4 h-full justify-end mb-8 lg:mb-0">
            <a
              href="/rogerio-resume.pdf"
              target="_blank"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors w-fit"
            >
              <span className="text-sm md:text-base">Download CV</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rogmxp/"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors w-fit"
            >
              <span className="text-sm md:text-base">
                Connect with Linkedin
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-5xl md:mb-12 block md:hidden">
            My experiences
          </div>

          {/* Right side - Experience list */}
          <div className="space-y-6 md:space-y-8 col-span-1 lg:col-span-2">
            {[
              {
                company: "GFT Technology",
                role: "Frontend Developer",
                dates: "2025 → Present",
              },
              {
                company: "Datum",
                role: "Software Engineer",
                dates: "2024 → 2025",
              },
              {
                company: "ILEGRA",
                role: "Software Engineer",
                dates: "2021 → 2024",
              },
              {
                company: "Por A Mais B",
                role: "Developer",
                dates: "2019 → 2021",
              },
              { company: "IBGE", role: "Developer", dates: "2017 → 2019" },
              {
                company: "Freelancer",
                role: "Developer",
                dates: "2016 → 2017",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 py-4 md:py-6 border-b border-gray-700 last:border-b space-y-2 md:space-y-0 first:border-t"
              >
                <div className="text-white font-bold text-base md:text-lg">
                  {exp.company}
                </div>
                <div className="text-gray-400 text-sm md:text-lg">
                  {exp.role}
                </div>
                <div className="text-gray-400 text-sm md:text-lg md:text-right">
                  {exp.dates}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-8 md:py-16 px-4 md:px-6 min-h-screen flex flex-col justify-between max-w-7xl mx-auto pt-16 md:pt-24"
      >
        <h2 className="text-4xl md:text-8xl font-bold mb-4 md:mb-6">
          <span className="text-gray-400">Let&apos;s</span> Connect
        </h2>

        <section className="w-full">
          <p className="text-gray-400 text-base md:text-lg mb-5 max-w-2xl">
            Feel free to contact me if having any questions.
            <br />
            I&apos;m available for new projects or just for chatting.
          </p>

          <div className="flex flex-col sm:flex-row mb-8 md:mb-16 w-full space-y-4 sm:space-y-0 sm:space-x-0">
            <a
              href="https://www.linkedin.com/in/rogmxp/"
              className="flex-1 px-8 md:px-20 py-6 md:py-10 bg-[#2e2d2d] text-white hover:text-amber-100 transition-colors w-full text-sm md:text-center"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/rogix"
              className="flex-1 px-8 md:px-20 py-6 md:py-10 bg-[#2a2a2a] text-white hover:text-amber-100 transition-colors w-full text-sm md:text-center"
            >
              Github
            </a>
            <a
              href="/contact"
              className="flex-1 px-8 md:px-20 py-6 md:py-10 bg-[#3a3a3a] text-white hover:text-amber-100 transition-colors w-full text-sm md:text-center items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <span className="text-sm md:text-base mr-2">Send me an email</span>
              </div>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-400 text-xs md:text-sm space-y-4 sm:space-y-0">
            <div>rogix, 2025</div>
            <div className="flex space-x-4">
              <a
                href="/contact"
                className="hover:text-white transition-colors"
              >
                email
              </a>
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
                href="https://x.com/r0g1x"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                twitter
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
        </section>
      </section>
    </div>
  );
}
