'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Globe, 
  Shield,
  Zap,
  Target,
  Lightbulb,
  MessageSquare
} from 'lucide-react'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('finance')

  const skillCategories = {
    finance: {
      title: 'Finance',
      icon: Calculator,
      color: 'bg-blue-100 text-blue-600',
      skills: [
        { name: 'Financial Modeling', level: 95, icon: BarChart3 },
        { name: 'Investment Analysis', level: 90, icon: TrendingUp },
        { name: 'Risk Management', level: 85, icon: Shield },
        { name: 'Budget Planning', level: 92, icon: Target },
        { name: 'Financial Reporting', level: 88, icon: FileText },
        { name: 'Valuation Methods', level: 87, icon: Calculator },
      ]
    },
    operations: {
      title: 'Operations',
      icon: Settings,
      color: 'bg-green-100 text-green-600',
      skills: [
        { name: 'Process Optimization', level: 93, icon: Zap },
        { name: 'Project Management', level: 89, icon: Target },
        { name: 'Quality Control', level: 86, icon: Shield },
        { name: 'Supply Chain', level: 84, icon: Globe },
        { name: 'Performance Metrics', level: 91, icon: BarChart3 },
        { name: 'Change Management', level: 82, icon: Settings },
      ]
    },
    tools: {
      title: 'Tools & Technology',
      icon: Settings,
      color: 'bg-purple-100 text-purple-600',
      skills: [
        { name: 'Excel/Google Sheets', level: 95, icon: FileText },
        { name: 'Power BI/Tableau', level: 88, icon: BarChart3 },
        { name: 'SQL', level: 82, icon: Settings },
        { name: 'Python/R', level: 78, icon: Settings },
        { name: 'SAP/ERP Systems', level: 85, icon: Settings },
        { name: 'Microsoft Office Suite', level: 92, icon: FileText },
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: Users,
      color: 'bg-orange-100 text-orange-600',
      skills: [
        { name: 'Leadership', level: 90, icon: Users },
        { name: 'Communication', level: 94, icon: MessageSquare },
        { name: 'Strategic Thinking', level: 89, icon: Lightbulb },
        { name: 'Problem Solving', level: 91, icon: Target },
        { name: 'Team Collaboration', level: 93, icon: Users },
        { name: 'Adaptability', level: 87, icon: Zap },
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'bg-green-500'
    if (level >= 80) return 'bg-blue-500'
    if (level >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <section id="skills" className="section-padding bg-white">
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
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-neutral-600">
              A comprehensive skill set developed through years of experience and continuous learning.
            </p>
          </motion.div>

          {/* Skill Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <category.icon size={20} />
                <span>{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${skillCategories[activeTab as keyof typeof skillCategories].color}`}>
                      <skill.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{skill.name}</h3>
                      <p className="text-sm text-neutral-500">{getLevelText(skill.level)}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-neutral-700">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                  />
                </div>

                {/* Skill Description */}
                <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors">
                  {activeTab === 'finance' && 'Advanced financial analysis and modeling expertise'}
                  {activeTab === 'operations' && 'Proven track record in operational excellence'}
                  {activeTab === 'tools' && 'Proficient in industry-standard tools and technologies'}
                  {activeTab === 'soft' && 'Strong interpersonal and leadership capabilities'}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="text-xl font-heading font-semibold mb-6 text-center">Additional Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold text-lg">CFA</span>
                </div>
                <h4 className="font-semibold mb-1">CFA Level 1</h4>
                <p className="text-sm text-neutral-600">Chartered Financial Analyst</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-lg">PMP</span>
                </div>
                <h4 className="font-semibold mb-1">PMP Certified</h4>
                <p className="text-sm text-neutral-600">Project Management Professional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-lg">Six</span>
                </div>
                <h4 className="font-semibold mb-1">Six Sigma</h4>
                <p className="text-sm text-neutral-600">Green Belt Certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold text-lg">AI</span>
                </div>
                <h4 className="font-semibold mb-1">AI & Analytics</h4>
                <p className="text-sm text-neutral-600">Machine Learning Basics</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
