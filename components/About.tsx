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
      title: 'Strategic Planning',
      description: 'Expert in developing comprehensive financial strategies and operational plans',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Proven track record of improving efficiency and driving growth',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Experienced in leading cross-functional teams and mentoring professionals',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Recognized for excellence in finance and operations management',
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
              A dedicated finance professional with a passion for driving organizational success through strategic thinking and innovative solutions.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Summary */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-heading font-semibold mb-4">Professional Summary</h3>
                <p className="text-neutral-600 mb-4">
                  As an MBA Finance graduate with extensive experience in financial analysis and operations management, 
                  I bring a unique blend of analytical rigor and strategic vision to every project. My expertise spans 
                  across financial modeling, process optimization, and team leadership.
                </p>
                <p className="text-neutral-600">
                  I am passionate about leveraging data-driven insights to solve complex business challenges and 
                  drive sustainable growth. My approach combines technical expertise with strong interpersonal 
                  skills, making me an effective leader and collaborator.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">5+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">20+</div>
                  <div className="text-sm text-neutral-600">Projects Completed</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-sm text-neutral-600">Team Members Led</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">25%</div>
                  <div className="text-sm text-neutral-600">Avg. Efficiency Gain</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Key Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-heading font-semibold">Key Strengths</h3>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="card flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">{highlight.title}</h4>
                    <p className="text-neutral-600 text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="text-xl font-heading font-semibold mb-6 text-center">Professional Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">I</span>
                </div>
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-sm text-neutral-600">Maintaining the highest ethical standards in all professional endeavors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">E</span>
                </div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-neutral-600">Committed to delivering exceptional results and continuous improvement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">C</span>
                </div>
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-sm text-neutral-600">Building strong relationships and fostering teamwork for shared success</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
