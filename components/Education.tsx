'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Finance',
      institution: 'Indian Institute of Management (IIM)',
      location: 'Ahmedabad, India',
      period: '2017 - 2019',
      gpa: '8.5/10',
      description: 'Specialized in Finance with focus on investment analysis, risk management, and financial modeling. Completed thesis on "Impact of Digital Transformation on Financial Services".',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'President of Finance Club',
        'Won National Business Case Competition',
        'Published research paper in Finance Journal'
      ],
      relevant_courses: [
        'Advanced Financial Management',
        'Investment Analysis & Portfolio Management',
        'Risk Management & Derivatives',
        'Corporate Finance',
        'Financial Modeling & Valuation',
        'International Finance'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science Engineering',
      institution: 'Delhi Technological University',
      location: 'Delhi, India',
      period: '2013 - 2017',
      gpa: '8.2/10',
      description: 'Strong foundation in computer science with focus on data structures, algorithms, and software engineering. Developed analytical and problem-solving skills.',
      achievements: [
        'University Merit Scholarship',
        'Final Year Project Award',
        'Active member of Coding Club',
        'Participated in multiple hackathons'
      ],
      relevant_courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Machine Learning Basics'
      ]
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'Chartered Financial Analyst (CFA)',
      issuer: 'CFA Institute',
      date: '2021',
      status: 'Level 1 Passed',
      description: 'Comprehensive understanding of investment analysis, portfolio management, and ethical standards in finance.',
      skills: ['Investment Analysis', 'Portfolio Management', 'Ethics', 'Quantitative Methods']
    },
    {
      id: 2,
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      date: '2020',
      status: 'Certified',
      description: 'Demonstrated competency in project management processes, tools, and techniques.',
      skills: ['Project Planning', 'Risk Management', 'Stakeholder Management', 'Quality Control']
    },
    {
      id: 3,
      name: 'Six Sigma Green Belt',
      issuer: 'American Society for Quality',
      date: '2019',
      status: 'Certified',
      description: 'Process improvement methodology focusing on reducing defects and improving quality.',
      skills: ['Process Improvement', 'Statistical Analysis', 'Quality Control', 'DMAIC Methodology']
    },
    {
      id: 4,
      name: 'Financial Modeling & Valuation',
      issuer: 'Corporate Finance Institute',
      date: '2020',
      status: 'Completed',
      description: 'Advanced Excel-based financial modeling techniques for valuation and analysis.',
      skills: ['Excel Modeling', 'DCF Valuation', 'LBO Modeling', 'M&A Analysis']
    },
    {
      id: 5,
      name: 'Data Analysis with Python',
      issuer: 'Coursera - University of Michigan',
      date: '2021',
      status: 'Completed',
      description: 'Comprehensive course on data analysis using Python, pandas, and statistical methods.',
      skills: ['Python', 'Pandas', 'Statistical Analysis', 'Data Visualization']
    },
    {
      id: 6,
      name: 'Advanced Excel for Business',
      issuer: 'LinkedIn Learning',
      date: '2020',
      status: 'Completed',
      description: 'Master advanced Excel functions, pivot tables, and automation for business analysis.',
      skills: ['Advanced Excel', 'Pivot Tables', 'VBA', 'Data Analysis']
    }
  ]

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
    <section id="education" className="section-padding bg-neutral-50">
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
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-neutral-600">
              A strong academic foundation complemented by industry-recognized certifications and continuous learning.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-primary-600" size={24} />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ scale: 1.02 }}
                  className="card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-neutral-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 font-medium mb-2">
                        {edu.specialization}
                      </p>
                      <p className="text-lg font-medium text-neutral-700 mb-2">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-4">{edu.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-neutral-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-neutral-900 mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant_courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Certifications</h3>
              </div>

              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.02 }}
                    className="card"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-neutral-600 mb-2">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {cert.status}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-600 mb-3">{cert.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Continuous Learning Section */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-3">Continuous Learning</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Committed to staying updated with industry trends and emerging technologies through continuous learning and professional development.
                </p>
                <div className="flex items-center space-x-2 text-primary-600">
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">Currently pursuing CFA Level 2</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
