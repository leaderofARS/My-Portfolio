import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  GitBranch, 
  Award, 
  Calendar,
  TrendingUp,
  Users,
  Coffee,
  Target
} from 'lucide-react'
import { Card, CardContent } from '~/components/Card'

interface StatItem {
  id: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  value: number
  label: string
  description: string
  color: string
  gradient: string
  suffix?: string
  prefix?: string
  details: {
    breakdown?: { label: string; value: number | string }[]
    achievement?: string
    timeframe?: string
  }
}

const statsData: StatItem[] = [
  {
    id: 'experience',
    icon: Calendar,
    value: 2,
    label: 'Years Experience',
    description: 'Building software solutions',
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
    suffix: '+',
    details: {
      breakdown: [
        { label: 'Frontend Development', value: '2 years' },
        { label: 'Blockchain Development', value: '1.5 years' },
        { label: 'AI/ML Projects', value: '1 year' }
      ],
      achievement: 'Started coding journey in 2022',
      timeframe: 'Continuous learning since 2022'
    }
  },
  {
    id: 'projects',
    icon: Code2,
    value: 15,
    label: 'Projects Completed',
    description: 'Full-stack applications built',
    color: 'text-green-500',
    gradient: 'from-green-500 to-emerald-500',
    suffix: '+',
    details: {
      breakdown: [
        { label: 'Web Applications', value: 8 },
        { label: 'Blockchain DApps', value: 4 },
        { label: 'AI/ML Projects', value: 3 }
      ],
      achievement: 'Featured in university showcase',
      timeframe: 'Last 2 years'
    }
  },
  {
    id: 'commits',
    icon: GitBranch,
    value: 250,
    label: 'Commits This Year',
    description: 'Code contributions & updates',
    color: 'text-purple-500',
    gradient: 'from-purple-500 to-pink-500',
    suffix: '+',
    details: {
      breakdown: [
        { label: 'Personal Projects', value: 180 },
        { label: 'Open Source', value: 45 },
        { label: 'University Work', value: 25 }
      ],
      achievement: 'Consistent daily coding',
      timeframe: '2024 contributions'
    }
  },
  {
    id: 'certifications',
    icon: Award,
    value: 5,
    label: 'Certifications',
    description: 'Professional achievements',
    color: 'text-orange-500',
    gradient: 'from-orange-500 to-red-500',
    details: {
      breakdown: [
        { label: 'Blockchain', value: 2 },
        { label: 'Cloud Computing', value: 1 },
        { label: 'AI/ML', value: 2 }
      ],
      achievement: 'Industry-recognized credentials',
      timeframe: 'Earned 2023-2024'
    }
  },
  {
    id: 'technologies',
    icon: TrendingUp,
    value: 12,
    label: 'Technologies Mastered',
    description: 'Programming languages & frameworks',
    color: 'text-teal-500',
    gradient: 'from-teal-500 to-blue-500',
    suffix: '+',
    details: {
      breakdown: [
        { label: 'Languages', value: 4 },
        { label: 'Frameworks', value: 5 },
        { label: 'Tools & Platforms', value: 3 }
      ],
      achievement: 'Full-stack proficiency',
      timeframe: 'Continuously expanding'
    }
  },
  {
    id: 'coffee',
    icon: Coffee,
    value: 500,
    label: 'Cups of Coffee',
    description: 'Fuel for coding sessions',
    color: 'text-amber-600',
    gradient: 'from-amber-600 to-yellow-500',
    suffix: '+',
    details: {
      breakdown: [
        { label: 'Morning Boost', value: '2 cups/day' },
        { label: 'Late Night Coding', value: '1 cup/session' },
        { label: 'Weekend Projects', value: '3-4 cups' }
      ],
      achievement: 'Powered by caffeine',
      timeframe: 'This year alone'
    }
  }
]

const StatsSection = memo(() => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null)
  const [hoveredStat, setHoveredStat] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statsData.map((stat, index) => (
          <StatCard
            key={stat.id}
            stat={stat}
            index={index}
            isSelected={selectedStat === stat.id}
            isHovered={hoveredStat === stat.id}
            onClick={() => setSelectedStat(selectedStat === stat.id ? null : stat.id)}
            onHover={() => setHoveredStat(stat.id)}
            onLeave={() => setHoveredStat(null)}
          />
        ))}
      </div>

      {/* Detailed View */}
      <AnimatePresence mode="wait">
        {selectedStat && (
          <DetailedStatView 
            stat={statsData.find(s => s.id === selectedStat)!}
            onClose={() => setSelectedStat(null)}
          />
        )}
      </AnimatePresence>

      {/* Quick Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        <InsightCard
          icon={Target}
          title="Current Focus"
          description="Building scalable blockchain solutions and AI-powered applications"
          color="text-blue-500"
        />
        <InsightCard
          icon={TrendingUp}
          title="Growth Rate"
          description="150% increase in project complexity over the past year"
          color="text-green-500"
        />
        <InsightCard
          icon={Users}
          title="Collaboration"
          description="Active contributor to 3 open-source projects"
          color="text-purple-500"
        />
      </motion.div>
    </div>
  )
})

const StatCard = memo(({ 
  stat, 
  index, 
  isSelected, 
  isHovered,
  onClick, 
  onHover, 
  onLeave 
}: {
  stat: StatItem
  index: number
  isSelected: boolean
  isHovered: boolean
  onClick: () => void
  onHover: () => void
  onLeave: () => void
}) => {
  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card 
        variant="glass" 
        className={`relative overflow-hidden transition-all duration-300 ${
          isSelected ? 'ring-2 ring-primary' : ''
        } ${isHovered ? 'shadow-lg' : ''}`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <CardContent className="p-4 text-center space-y-3 relative z-10">
          {/* Icon */}
          <motion.div
            animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
            className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} p-3 flex items-center justify-center`}
          >
            <Icon size={24} className="text-white" />
          </motion.div>

          {/* Value */}
          <div className="space-y-1">
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.prefix}{stat.value}{stat.suffix}
            </div>
            <p className="text-sm font-medium text-foreground">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </div>

          {/* Click indicator */}
          <motion.div
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            className="text-xs text-primary font-medium"
          >
            Click for details
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
})

const DetailedStatView = memo(({ stat, onClose }: { stat: StatItem; onClose: () => void }) => {
  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card variant="glass" className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`} />
        
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.gradient} p-4 flex items-center justify-center`}>
                <Icon size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Breakdown */}
            {stat.details.breakdown && (
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Breakdown</h4>
                <div className="space-y-2">
                  {stat.details.breakdown.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/30"
                    >
                      <span className="text-sm">{item.label}</span>
                      <span className={`font-semibold ${stat.color}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="space-y-4">
              {stat.details.achievement && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Achievement</h4>
                  <p className="text-muted-foreground">{stat.details.achievement}</p>
                </div>
              )}
              {stat.details.timeframe && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Timeframe</h4>
                  <p className="text-muted-foreground">{stat.details.timeframe}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})

const InsightCard = memo(({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  color: string
}) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -2 }}
    transition={{ duration: 0.2 }}
  >
    <Card variant="glass" className="h-full">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Icon size={20} className={color} />
          <h4 className="font-semibold">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
))

StatsSection.displayName = 'StatsSection'
StatCard.displayName = 'StatCard'
DetailedStatView.displayName = 'DetailedStatView'
InsightCard.displayName = 'InsightCard'

export { StatsSection }