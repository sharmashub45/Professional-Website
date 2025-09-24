'use client'

import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Calendar, Briefcase, CheckCircle, Eye } from 'lucide-react'

const Hero = () => {
  // Helper function to get correct asset path for GitHub Pages
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Professional-Website' : ''
    return `${basePath}${path}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV
    const link = document.createElement('a')
    link.href = getAssetPath('/Shubham_Sharma_CV.pdf')
    link.download = 'Shubham_Sharma_CV.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-neutral-50 to-primary-50 pt-20 sm:pt-24">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight"
              >
                <span className="gradient-text">Hi, I'm Shubham Sharma</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-medium"
              >
                Finance Professional | AI & Automation in Business
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-neutral-500 max-w-2xl"
              >
                Driving smarter financial decisions through data, strategy, and intelligent automation.
              </motion.p>
            </motion.div>

            {/* Modern Info Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <MapPin size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Available Nationwide</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <CheckCircle size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Open to Opportunities</span>
              </motion.button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Download Resume</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <Briefcase size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">View My Work</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image & Highlight Cards */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={getAssetPath("/Profile picture.png")}
                  alt="Shubham Sharma"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTgwIDI0MEM4MCAyMDAgMTIwIDE4MCAxNjAgMTgwQzIwMCAxODAgMjQwIDIwMCAyNDAgMjQwVjI4MEg4MFYyNDBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K'
                  }}
                />
              </div>
            </motion.div>

            {/* Modern Floating Cards - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="hidden md:block absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-3 lg:p-4 w-48 lg:w-52 z-20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md">
                  <Briefcase className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-base lg:text-lg">5+ Years</p>
                  <p className="text-xs lg:text-sm text-neutral-600">Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="hidden md:block absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-3 lg:p-4 w-48 lg:w-52 z-20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-green-600 font-bold text-base lg:text-lg">MBA</span>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-base lg:text-lg">Finance</p>
                  <p className="text-xs lg:text-sm text-neutral-600">Specialization</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
