'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GraduationCap, Award, ExternalLink, X } from 'lucide-react'

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    name: string
    url: string
  }>(null)

  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Professional-Website' : ''
    return `${basePath}${path}`
  }

  const education = [
    {
      id: 1,
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Finance and Strategy & Consulting (Minor)',
      institution: 'K J Somaiya Institute of Management',
      location: 'Mumbai, India',
      period: '2017 - 2019',
      gpa: '8.5/10',
      description: 'Specialized in Finance with focus on investment analysis, risk management, and financial modeling. Gained comprehensive understanding of financial markets, corporate finance, and strategic business management.',
      achievements: [
        'Specialized in Finance with comprehensive business management training',
        'Developed expertise in financial analysis and strategic planning',
        'Gained practical experience in investment analysis and risk management',
        'Built strong foundation in corporate finance and business strategy'
      ],
      relevant_courses: [
        'Advanced Financial Management',
        'Investment Analysis & Portfolio Management',
        'Risk Management & Derivatives',
        'Corporate Finance',
        'Financial Modeling & Valuation',
        'Strategic Business Management'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Mechanical Engineering',
      institution: 'Swami Keshvanand Institute of Technology',
      location: 'Jaipur, India',
      period: '2013 - 2017',
      gpa: '8.2/10',
      description: 'Strong foundation in mechanical engineering with focus on systems design, operations management, and analytical problem-solving. Developed technical and analytical skills that complement business management.',
      achievements: [
        'Comprehensive understanding of mechanical systems and operations',
        'Developed analytical and problem-solving skills',
        'Gained experience in project management and system optimization',
        'Built strong foundation in quantitative analysis'
      ],
      relevant_courses: [
        'Mechanical Systems Design',
        'Operations Research',
        'Engineering Mathematics',
        'Industrial Engineering',
        'Project Management',
        'System Analysis & Optimization'
      ]
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'Data Analytics',
      issuer: 'Professional Certification',
      date: 'Completed',
      status: 'Verified',
      description: 'Applied data analysis concepts to business and finance use cases.',
      skills: ['Data Analytics', 'Business Insights', 'Reporting'],
      credentialUrl: '/certifications/certificate-data-analytics.pdf'
    },
    {
      id: 2,
      name: 'VBA-Excel',
      issuer: 'Professional Certification',
      date: 'Completed',
      status: 'Verified',
      description: 'Built practical VBA skills for automating workflows and improving productivity.',
      skills: ['VBA', 'Automation', 'Excel Macros'],
      credentialUrl: '/certifications/certificate-vba.pdf'
    },
    {
      id: 3,
      name: 'Investment Banking',
      issuer: 'Professional Certification',
      date: 'Completed',
      status: 'Verified',
      description: 'Covered core investment banking and valuation concepts for financial decision-making.',
      skills: ['Investment Banking', 'Valuation', 'Corporate Finance'],
      credentialUrl: '/certifications/certificate-investment-banking.pdf'
    },
    {
      id: 4,
      name: 'Generative AI Mastermind by Outskill',
      issuer: 'Professional Certification',
      date: 'Completed',
      status: 'Verified',
      description: 'Professional learning certification validating domain-specific knowledge.',
      skills: ['Professional Development', 'Applied Learning'],
      credentialUrl: '/certifications/certificate-shubham-sharma.pdf'
    },
    {
      id: 5,
      name: 'IFRS',
      issuer: 'Professional Certification',
      date: 'Completed',
      status: 'Verified',
      description: 'Demonstrated understanding of IFRS fundamentals and reporting framework.',
      skills: ['IFRS', 'Financial Reporting', 'Accounting Standards'],
      credentialUrl: '/certifications/certificate-ifrs.pdf'
    },
    {
      id: 6,
      name: 'Power BI',
      issuer: 'Professional Certification',
      date: 'Completed',
      status: 'Verified',
      description: 'Developed skills for building dashboards and visual analytics in Power BI.',
      skills: ['Power BI', 'Dashboards', 'Data Visualization'],
      credentialUrl: '/certifications/certificate-power-bi.pdf'
    },
    {
      id: 7,
      name: 'Financial Modeling & Valuation',
      issuer: 'Professional Certification',
      date: 'Completed',
      status: 'Verified',
      description: 'Focused on practical financial modeling and valuation for business analysis.',
      skills: ['Financial Modeling', 'Valuation', 'Excel'],
      credentialUrl: '/certifications/certificate-fmv.pdf'
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
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 font-medium mb-1">
                    {edu.specialization}
                  </p>
                  <p className="text-neutral-700">
                    {edu.institution}
                  </p>
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

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate({
                          name: cert.name,
                          url: getAssetPath(cert.credentialUrl)
                        })
                      }
                      className="inline-flex items-center gap-2 mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </button>
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
                  <span className="text-sm font-medium">Actively adding certifications in analytics and finance tools</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] mx-auto overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-200">
              <h4 className="text-sm sm:text-base font-semibold text-neutral-900 truncate pr-4">
                {selectedCertificate.name}
              </h4>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close certificate viewer"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={selectedCertificate.url}
              title={`${selectedCertificate.name} certificate`}
              className="w-full flex-1"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Education
