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
        { name: 'Financial Modeling', icon: BarChart3 },
        { name: 'Investment Analysis', icon: TrendingUp },
        { name: 'Risk Management', icon: Shield },
        { name: 'Budget Planning', icon: Target },
        { name: 'Financial Reporting', icon: FileText },
        { name: 'Valuation Methods', icon: Calculator },
      ]
    },
    operations: {
      title: 'Operations',
      icon: Settings,
      color: 'bg-green-100 text-green-600',
      skills: [
        { name: 'Process Optimization', icon: Zap },
        { name: 'Project Management', icon: Target },
        { name: 'Quality Control', icon: Shield },
        { name: 'Supply Chain', icon: Globe },
        { name: 'Performance Metrics', icon: BarChart3 },
        { name: 'Change Management', icon: Settings },
      ]
    },
    tools: {
      title: 'Tools & Technology',
      icon: Settings,
      color: 'bg-purple-100 text-purple-600',
      skills: [
        { name: 'Excel/Google Sheets', icon: FileText },
        { name: 'Power BI/Tableau', icon: BarChart3 },
        { name: 'SQL', icon: Settings },
        { name: 'Python/R', icon: Settings },
        { name: 'SAP/ERP Systems', icon: Settings },
        { name: 'Microsoft Office Suite', icon: FileText },
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: Users,
      color: 'bg-orange-100 text-orange-600',
      skills: [
        { name: 'Leadership', icon: Users },
        { name: 'Communication', icon: MessageSquare },
        { name: 'Strategic Thinking', icon: Lightbulb },
        { name: 'Problem Solving', icon: Target },
        { name: 'Team Collaboration', icon: Users },
        { name: 'Adaptability', icon: Zap },
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
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <category.icon size={16} className="sm:w-5 sm:h-5" />
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
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-full border border-neutral-200 bg-white shadow-sm text-sm sm:text-base font-medium text-neutral-800"
              >
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${skillCategories[activeTab as keyof typeof skillCategories].color}`}>
                  <skill.icon size={14} className="sm:w-4 sm:h-4" />
                </span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4 sm:mb-6 text-center">Additional Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-primary-600 font-bold text-sm sm:text-lg">CFA</span>
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">CFA Level 1</h4>
                <p className="text-xs sm:text-sm text-neutral-600">Chartered Financial Analyst</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-green-600 font-bold text-sm sm:text-lg">PMP</span>
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">PMP Certified</h4>
                <p className="text-xs sm:text-sm text-neutral-600">Project Management Professional</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">Six</span>
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Six Sigma</h4>
                <p className="text-xs sm:text-sm text-neutral-600">Green Belt Certified</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-orange-600 font-bold text-sm sm:text-lg">AI</span>
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">AI & Analytics</h4>
                <p className="text-xs sm:text-sm text-neutral-600">Machine Learning Basics</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
