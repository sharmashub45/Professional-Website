'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const experiences = [
    {
      id: 1,
      title: 'Strategic Consultant',
      company: 'Comptech Compressors',
      location: 'India',
      period: 'Apr 2025 – Present',
      type: 'Full-time',
      description: 'Leading strategic initiatives focused on AI-driven automation and performance optimization.',
      achievements: [
        'Designed and built a Performance Tracking & Management Web App (Django + React) for real-time financial & operational reporting',
        'Conducted quantitative & qualitative studies to analyze efficiency and cost optimization opportunities',
        'Developed Comptech Genie AI chatbot to automate product queries and customer interactions'
      ],
      skills: ['Django', 'React', 'AI Development', 'Performance Analytics', 'Strategic Consulting']
    },
    {
      id: 2,
      title: 'HR & Operations Manager',
      company: 'Comptech Compressors',
      location: 'India',
      period: 'Jan 2021 – Oct 2021',
      type: 'Full-time',
      description: 'Managed HR operations and operational efficiency improvements.',
      achievements: [
        'Overhauled workflows and productivity metrics to improve resource utilization and reduce operational inefficiencies',
        'Introduced performance management frameworks aligned with financial outcomes'
      ],
      skills: ['Operations Management', 'HR Leadership', 'Performance Management', 'Process Optimization', 'Workflow Design']
    },
    {
      id: 3,
      title: 'Talent Manager',
      company: 'Rayqube Future Tech',
      location: 'India',
      period: 'Jun 2019 – Dec 2019',
      type: 'Full-time',
      description: 'Managed talent acquisition and administrative operations.',
      achievements: [
        'Managed budgeting, resource allocation, and process automation in HR & admin',
        'Negotiated with Govt. of Rajasthan (Dept. of IT) to secure and manage a major corporate event presence'
      ],
      skills: ['Talent Management', 'Budget Management', 'Government Relations', 'Process Automation', 'Event Management']
    },
    {
      id: 4,
      title: 'External Relations Manager',
      company: 'WeddingsOnly.in',
      location: 'India',
      period: 'Feb 2019 – May 2019',
      type: 'Full-time',
      description: 'Worked on business strategy and revenue growth initiatives.',
      achievements: [
        'Worked on business strategy, pitch decks, and revenue growth models directly with the CEO',
        'Enhanced UI/UX user flows for better customer conversion'
      ],
      skills: ['Business Strategy', 'Revenue Growth', 'Pitch Decks', 'UI/UX', 'Customer Conversion']
    },
    {
      id: 5,
      title: 'Vice President Talent Management',
      company: 'AIESEC Jaipur',
      location: 'Jaipur, India',
      period: '2015 – 2017',
      type: 'Leadership',
      description: 'Led talent management and leadership development initiatives.',
      achievements: [
        'Designed HR & L&D systems that scaled chapter performance to a historic 501 exchanges (first time crossing 300 in 22 years)',
        'Experience in analytics, auditing, and leadership development across multiple chapters'
      ],
      skills: ['Leadership Development', 'HR Systems', 'Analytics', 'Auditing', 'Chapter Management']
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
            <div className="hidden md:block absolute left-8 top-8 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200" style={{height: 'calc(100% - 2rem)'}}></div>

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
