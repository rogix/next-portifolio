import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-lg font-medium whitespace-nowrap">Rogix</div>
          <div className="w-full h-px mx-10 bg-gray-600/30"></div>
          <nav className="flex space-x-12">
            <a
              href="#about"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 pb-10 px-40 h-screen flex flex-col justify-between"
      >
        <div className="h-[calc(100vh-100px)] flex flex-col justify-between">
          {/* Profile and intro section */}
          <div className="flex items-start space-x-8 mt-10">
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-cover aspect-square"
            />
            <div className="text-gray-400 text-sm leading-relaxed pt-1 max-w-md">
              I build high-quality products
              <br />
              and user-friendly interfaces
              <br />
              with a focus on user experience
            </div>
          </div>

          {/* Main headline */}
          <div className="mb-20">
            <h1 className="text-7xl lg:text-8xl font-bold leading-[0.9] mb-4">
              Software Engineer
            </h1>
            <h2 className="text-7xl lg:text-8xl font-bold leading-[0.9]">
              <span className="text-gray-400 text-5xl lg:text-8xl font-normal">
                and
              </span>{" "}
              Other Things
            </h2>
          </div>
        </div>
        {/* Location and availability */}
        <div className="flex justify-between items-center">
          <div className="text-gray-400 text-sm whitespace-nowrap">
            São Paulo, BR
          </div>
          <div className="w-[60%] h-px mx-10 bg-gray-600/30"></div>
          <div className="text-right">
            <div className="flex items-center justify-end space-x-2">
              <span className="text-sm whitespace-nowrap">UTC-3 (BRT)</span>
            </div>
          </div>
          <div className="w-[60%] h-px mx-10 bg-gray-600/30"></div>
          <div className="text-right text-[#00e0b7] whitespace-nowrap">
            <a href="https://blog.rogix.dev" className="hover:text-gray-300 transition-colors">
              BLOG
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 h-screen max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-screen flex flex-col justify-between pt-10 pb-20">
              <p className="text-3xl leading-relaxed">
                I've been working in the software industry for the past 8 years.
                My main focus is building high-quality software and
                user-friendly interfaces. I'm also interested in building
                products that help people live better lives. I'm currently
                working at GFT Technology as a Frontend Developer.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <span>BOOK A CALL</span>
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
                  href="#"
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <span>X</span>
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
            <div className="flex justify-center">
              <div className="relative w-96 h-96 rounded-full overflow-hidden">
                {/* Subtle background particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-[#00e0b7] rounded-full opacity-20 animate-float-subtle"
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
                  <div className="absolute top-12 left-12 w-12 h-12 border border-[#00e0b7]/15 rounded-lg animate-pulse-very-slow"></div>
                  <div className="absolute bottom-16 right-16 w-8 h-8 border border-[#00e0b7]/10 rounded-full animate-pulse-very-slow"></div>
                </div>
                
                {/* Subtle central element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 border border-[#00e0b7]/20 rounded-full animate-pulse-very-slow"></div>
                    <div className="absolute inset-2 w-12 h-12 bg-gradient-to-r from-[#00e0b7]/5 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          {/* Left side - Introductory text and CTA links */}
          {/* Main headline */}
          <div className="max-w-3xl mb-12">
            <p className="text-gray-400 text-5xl leading-normal font-bold">
              I have{" "}
              <span className="text-white font-bold">
                8 years of experience
              </span>{" "}
              building high-quality software and user-friendly interfaces
            </p>
          </div>

          {/* CTA Links */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="flex flex-col space-y-4 h-full justify-end">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors w-fit"
              >
                <span>Download CV</span>
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
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors w-fit"
              >
                <span>Connect with Linkedin</span>
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

            {/* Right side - Experience list */}
            <div className="space-y-8 col-span-2">
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
              ].map((exp, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 py-6 border-b border-gray-700 last:border-b space-y-4 first:border-t"
                >
                  <div className="text-white font-bold text-lg">
                    {exp.company}
                  </div>
                  <div className="text-gray-400 text-lg text-left">
                    {exp.role}
                  </div>
                  <div className="text-gray-400 text-lg text-right">
                    {exp.dates}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 h-screen flex flex-col justify-between max-w-7xl mx-auto pt-24"
      >
        <h2 className="text-8xl font-bold mb-6">
          <span className="text-gray-400">Let's</span> Connect
        </h2>

        <section className="w-full">
          <p className="text-gray-400 text-lg mb-5 max-w-2xl">
            Feel free to contact me if having any questions.
            <br />
            I'm available for new projects or just for chatting.
          </p>

          <div className="flex flex-col sm:flex-row mb-16 w-full">
            <button className="flex-1 px-20 py-10 bg-[#2a2a2a] text-white hover:text-amber-100 transition-colors w-full">
              Linkedin
            </button>
            <button className="flex-1 px-20 py-10 bg-[#3a3a3a] text-white hover:text-amber-100 transition-colors w-full">
              Send an Email
            </button>
            <button className="flex-1 px-20 py-10 bg-[#4a4a4a] text-white hover:text-amber-100 transition-colors w-full">
              Follow on X
            </button>
          </div>
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <div>Rogix, 2025</div>
            <div className="flex space-x-4">
              <a
                href="https://x.com/_rogmx"
                className="hover:text-white transition-colors"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/rogmxp/"
                className="hover:text-white transition-colors"
              >
                in
              </a>
              <a
                href="https://github.com/rogix"
                className="hover:text-white transition-colors"
              >
                github
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
