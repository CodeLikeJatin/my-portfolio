'use client'

import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-xl font-semibold tracking-wide">
            Jatin.dev
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-indigo-400 mb-4 tracking-widest uppercase text-sm">
              Aspiring Software Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building modern digital experiences for the future.
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              I'm Jatin — a student developer passionate about creating clean,
              interactive, and scalable web applications using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-4 bg-white text-black rounded-2xl font-medium hover:scale-105 transition">
                View Projects
              </button>

              <a
                href="#contact"
                className="px-7 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition inline-block"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-[32px] p-8 shadow-2xl">

              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-4 font-mono text-sm">

                <div>
                  <span className="text-indigo-400">$</span>{' '}
                  <span className="text-zinc-300">whoami</span>
                </div>

                <div className="text-zinc-500">
                  Jatin / Frontend Developer
                </div>

                <div>
                  <span className="text-indigo-400">$</span>{' '}
                  <span className="text-zinc-300">skills</span>
                </div>

                <div className="text-zinc-500">
                  Html • Css 
                </div>

                <div>
                  <span className="text-indigo-400">$</span>{' '}
                  <span className="text-zinc-300">status</span>
                </div>

                <div className="text-green-400">
                  Available for internships
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-28"
      >
        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-semibold mb-6">
              About Me
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              I'm a student entering college and exploring the world of software
              engineering. I enjoy building interactive web interfaces, learning
              modern frameworks, and improving my design and development skills.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-semibold mb-6">
              Education
            </h2>

            <div className="space-y-4 text-zinc-400">
              <p>Completed Class 12</p>
              <p>Starting college soon</p>
              <p>Focused on frontend & full-stack development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-28"
      >
        <h2 className="text-4xl font-bold mb-14">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            'HTML',
            'CSS',
          ].map((skill) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={skill}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 text-center"
            >
              <p className="text-lg font-medium">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      {/* Learning Journey */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-28"
      >
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-4xl font-bold">
            Current Learning Journey
          </h2>

          <p className="text-zinc-500">
            Building skills every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Development
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Learning modern frontend technologies like React, Next.js, and Tailwind CSS to build responsive and interactive interfaces.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              UI/UX Design
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Exploring clean user interfaces, modern layouts, animations, and professional design systems.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Future Goals
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Preparing to build full-stack projects, contribute to open source, and gain internship experience during college.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-28"
      >
        <div className="bg-[#111111] border border-white/10 rounded-[40px] p-12 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Let's work together
          </h2>

          <p className="text-zinc-400 text-lg mb-10">
            Open to internships, collaborations, and exciting opportunities.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jatincodes.dev@gmail.com"
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-black rounded-2xl font-medium hover:scale-105 transition"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Jatin. All rights reserved.
      </footer>
    </main>
  )
}