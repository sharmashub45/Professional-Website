'use client'

import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, Award } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlights = [
    {
      icon: Target,
      title: 'AI & Automation',
      description: 'Specializing in applying AI and automation to solve finance and business challenges',
    },
    {
      icon: TrendingUp,
      title: 'Financial Analysis',
      description: 'Expert in financial & data analysis with performance tracking systems',
    },
    {
      icon: Users,
      title: 'Technology Integration',
      description: 'Bridging finance expertise with technology for data-driven decisions',
    },
    {
      icon: Award,
      title: 'Python & Trading',
      description: 'Exploring quantitative trading strategies and backtesting using Python',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-neutral-600">
              An MBA in Finance with expertise in operations, HR leadership, and consulting, now focused on applying AI and automation to solve challenges in finance and business strategy.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Profile Summary */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="card">
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4">Professional Summary</h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4">
                  I am an MBA in Finance with a background in operations, HR leadership, and consulting, now focused on applying AI and automation to solve challenges in finance and business strategy.
                </p>
                <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4">
                  My work spans financial & data analysis, performance tracking systems, and AI-driven automation tools. I bring a unique mix of finance expertise and technology integration skills to help organizations make data-driven, efficient, and scalable decisions.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">Currently, I am:</h4>
                  <ul className="text-sm sm:text-base text-neutral-600 space-y-1">
                    <li>• Exploring quantitative trading & backtesting strategies using Python.</li>
                    <li>• Building AI-enabled tools to improve decision-making and performance management.</li>
                  </ul>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Years Experience</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-1">20+</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Projects Completed</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Team Members Led</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-1">25%</div>
                  <div className="text-xs sm:text-sm text-neutral-600">Avg. Efficiency Gain</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Key Highlights */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-heading font-semibold">Key Strengths</h3>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="card flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 sm:mb-2 text-sm sm:text-base">{highlight.title}</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4 sm:mb-6 text-center">Professional Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-primary-600 font-bold text-lg sm:text-xl">I</span>
                </div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Integrity</h4>
                <p className="text-xs sm:text-sm text-neutral-600">Maintaining the highest ethical standards in all professional endeavors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-primary-600 font-bold text-lg sm:text-xl">E</span>
                </div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Excellence</h4>
                <p className="text-xs sm:text-sm text-neutral-600">Committed to delivering exceptional results and continuous improvement</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-primary-600 font-bold text-lg sm:text-xl">C</span>
                </div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Collaboration</h4>
                <p className="text-xs sm:text-sm text-neutral-600">Building strong relationships and fostering teamwork for shared success</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
