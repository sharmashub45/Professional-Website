'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, ChevronDown, ChevronUp, TrendingUp, Users, DollarSign, Target } from 'lucide-react'

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([])

  const projects = [
    {
      id: 1,
      title: 'Financial Analytics Dashboard',
      category: 'Finance & Analytics',
      period: '2023',
      status: 'Completed',
      description: 'Developed a comprehensive financial analytics dashboard for real-time monitoring of key performance indicators and financial metrics.',
      problem: 'Manual financial reporting processes were time-consuming and prone to errors, leading to delayed decision-making.',
      solution: 'Created an automated dashboard using Power BI and Excel VBA that consolidates data from multiple sources and provides real-time insights.',
      results: [
        'Reduced reporting time by 70% (from 8 hours to 2.5 hours weekly)',
        'Improved data accuracy by 95% through automated calculations',
        'Enabled real-time decision making for management team',
        'Saved $50K annually in manual labor costs'
      ],
      technologies: ['Power BI', 'Excel VBA', 'SQL', 'Python', 'Azure'],
      metrics: {
        efficiency: '+70%',
        accuracy: '+95%',
        cost_savings: '$50K',
        time_saved: '5.5 hours/week'
      },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'Process Optimization Initiative',
      category: 'Operations',
      period: '2022',
      status: 'Completed',
      description: 'Led a cross-functional team to optimize operational processes across multiple departments, resulting in significant efficiency improvements.',
      problem: 'Inefficient processes were causing delays, increased costs, and poor customer satisfaction across the organization.',
      solution: 'Implemented Lean Six Sigma methodology to identify bottlenecks, redesign processes, and establish continuous improvement culture.',
      results: [
        'Improved operational efficiency by 25%',
        'Reduced processing time by 40%',
        'Increased customer satisfaction scores by 30%',
        'Achieved $200K in annual cost savings'
      ],
      technologies: ['Six Sigma', 'Process Mapping', 'Data Analysis', 'Change Management'],
      metrics: {
        efficiency: '+25%',
        time_reduction: '40%',
        satisfaction: '+30%',
        cost_savings: '$200K'
      },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'Investment Portfolio Analysis Tool',
      category: 'Finance',
      period: '2023',
      status: 'In Progress',
      description: 'Building an advanced portfolio analysis tool that provides risk assessment, performance tracking, and optimization recommendations.',
      problem: 'Lack of sophisticated tools for portfolio analysis and risk management in the investment team.',
      solution: 'Developing a Python-based tool with machine learning capabilities for portfolio optimization and risk assessment.',
      results: [
        'Expected 20% improvement in portfolio performance',
        'Automated risk assessment reducing analysis time by 60%',
        'Enhanced decision-making through predictive analytics',
        'Scalable solution for multiple portfolio types'
      ],
      technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Streamlit', 'APIs'],
      metrics: {
        performance: '+20% (expected)',
        time_saved: '60%',
        automation: '90%',
        scalability: 'Multi-portfolio'
      },
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'Digital Transformation Strategy',
      category: 'Strategy & Innovation',
      period: '2021-2022',
      status: 'Completed',
      description: 'Developed and implemented a comprehensive digital transformation strategy that modernized business operations and improved customer experience.',
      problem: 'Outdated systems and processes were hindering growth and customer satisfaction in a rapidly evolving digital landscape.',
      solution: 'Created a phased digital transformation roadmap focusing on technology adoption, process automation, and cultural change.',
      results: [
        'Digitized 80% of manual processes',
        'Improved customer response time by 50%',
        'Increased employee productivity by 35%',
        'Generated $300K in additional revenue'
      ],
      technologies: ['Strategy Development', 'Change Management', 'Process Automation', 'Cloud Computing'],
      metrics: {
        digitization: '80%',
        response_time: '+50%',
        productivity: '+35%',
        revenue: '+$300K'
      },
      links: {
        demo: '#',
        github: '#'
      }
    }
  ]

  const toggleExpanded = (id: number) => {
    setExpandedProjects(prev => 
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700'
      case 'In Progress':
        return 'bg-blue-100 text-blue-700'
      case 'Planned':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-neutral-100 text-neutral-700'
    }
  }

  return (
    <section id="projects" className="section-padding bg-white">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-neutral-600">
              A showcase of impactful projects that demonstrate my expertise in finance, operations, and strategic thinking.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-heading font-semibold text-neutral-900">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium mb-1">{project.category}</p>
                    <p className="text-sm text-neutral-500">{project.period}</p>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-neutral-600 mb-4">{project.description}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(project.metrics).slice(0, 4).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center p-3 bg-neutral-50 rounded-lg">
                      <div className="text-lg font-bold text-primary-600">{value}</div>
                      <div className="text-xs text-neutral-600 capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                <div className="border-t border-neutral-200 pt-4">
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors mb-4"
                  >
                    <span>
                      {expandedProjects.includes(project.id) ? 'Hide' : 'Show'} Project Details
                    </span>
                    {expandedProjects.includes(project.id) ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {expandedProjects.includes(project.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      {/* Problem Statement */}
                      <div>
                        <h5 className="font-semibold text-neutral-900 mb-2 flex items-center space-x-2">
                          <Target size={16} />
                          <span>Problem</span>
                        </h5>
                        <p className="text-sm text-neutral-600">{project.problem}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h5 className="font-semibold text-neutral-900 mb-2 flex items-center space-x-2">
                          <TrendingUp size={16} />
                          <span>Solution</span>
                        </h5>
                        <p className="text-sm text-neutral-600">{project.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h5 className="font-semibold text-neutral-900 mb-2 flex items-center space-x-2">
                          <DollarSign size={16} />
                          <span>Key Results</span>
                        </h5>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-2 text-sm text-neutral-600">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Links */}
                      <div className="flex space-x-4 pt-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.links.demo}
                          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>View Demo</span>
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.links.github}
                          className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-700 font-medium transition-colors"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Interested in Collaborating?
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and challenges. Let's discuss how we can create something amazing together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
