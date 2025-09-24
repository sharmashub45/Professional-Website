'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-neutral-400">
                © 2025 Shubham Sharma. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://linkedin.com/in/shubham-sharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:shubham.sharma@email.com"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Email
              </a>
              <a 
                href="/Shubham_Sharma_CV.pdf"
                download
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
