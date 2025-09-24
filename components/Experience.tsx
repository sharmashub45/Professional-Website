'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const experiences = [
    {
      id: 1,
      title: 'Senior Financial Analyst',
      company: 'TechCorp Solutions',
      location: 'Mumbai, India',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading financial analysis and strategic planning initiatives for a growing technology company.',
      achievements: [
        'Improved financial forecasting accuracy by 25% through advanced modeling techniques',
        'Led cross-functional team of 8 members in implementing new financial systems',
        'Reduced operational costs by 15% through process optimization and automation',
        'Developed comprehensive budget models that supported 30% revenue growth',
        'Mentored 3 junior analysts and established best practices for financial reporting',
        'Collaborated with C-suite executives on strategic planning and investment decisions'
      ],
      skills: ['Financial Modeling', 'Strategic Planning', 'Team Leadership', 'Process Optimization', 'Data Analysis']
    },
    {
      id: 2,
      title: 'Operations Manager',
      company: 'Global Finance Ltd',
      location: 'Delhi, India',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Managed day-to-day operations and implemented efficiency improvements across multiple departments.',
      achievements: [
        'Streamlined operational processes resulting in 20% efficiency improvement',
        'Implemented new quality control systems reducing errors by 30%',
        'Led digital transformation initiative affecting 200+ employees',
        'Managed vendor relationships and negotiated contracts saving $500K annually',
        'Developed and executed training programs for 50+ team members',
        'Achieved 95% customer satisfaction rating through improved service delivery'
      ],
      skills: ['Operations Management', 'Process Improvement', 'Vendor Management', 'Team Development', 'Quality Control']
    },
    {
      id: 3,
      title: 'Financial Analyst',
      company: 'Startup Ventures',
      location: 'Bangalore, India',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Provided financial analysis and support for early-stage startup companies.',
      achievements: [
        'Created financial models for 10+ startup companies seeking funding',
        'Conducted market research and competitive analysis for investment decisions',
        'Prepared investor presentations and pitch decks',
        'Assisted in due diligence processes for potential acquisitions',
        'Developed KPI dashboards for tracking business performance',
        'Supported fundraising efforts that resulted in $2M+ in capital raised'
      ],
      skills: ['Financial Modeling', 'Market Research', 'Investment Analysis', 'Presentation Skills', 'Due Diligence']
    },
    {
      id: 4,
      title: 'Finance Intern',
      company: 'Investment Bank Partners',
      location: 'Mumbai, India',
      period: '2018 - 2019',
      type: 'Internship',
      description: 'Gained hands-on experience in investment banking and financial analysis.',
      achievements: [
        'Assisted in preparation of financial statements and reports',
        'Conducted research on market trends and industry analysis',
        'Supported senior analysts in client presentations',
        'Learned advanced Excel and financial modeling techniques',
        'Participated in due diligence processes for M&A transactions',
        'Contributed to team projects that improved department efficiency by 10%'
      ],
      skills: ['Financial Reporting', 'Market Analysis', 'Excel', 'Research', 'Client Relations']
    }
  ]

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

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

  return (
    <section id="experience" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-neutral-600">
              A journey of growth, learning, and impactful contributions across diverse roles and industries.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <Building className="text-primary-600" size={20} />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 card"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-heading font-semibold text-neutral-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-base md:text-lg text-primary-600 font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-neutral-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} className="md:w-4 md:h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} className="md:w-4 md:h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-neutral-600 mb-4">{exp.description}</p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 md:px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs md:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="border-t border-neutral-200 pt-4">
                      <button
                        onClick={() => toggleExpanded(exp.id)}
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                      >
                        <span>
                          {expandedItems.includes(exp.id) ? 'Hide' : 'Show'} Key Achievements
                        </span>
                        {expandedItems.includes(exp.id) ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>

                      {expandedItems.includes(exp.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-2"
                        >
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-start space-x-3 text-sm text-neutral-600"
                            >
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
