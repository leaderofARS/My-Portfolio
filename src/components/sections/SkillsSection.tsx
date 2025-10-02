import { memo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/Card'
import { Badge } from '~/components/ui/Badge'
import { Progress } from '~/components/Progress'
import { techIcons } from '~/constants/techIcons'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  gradient: string
  skills: Skill[]
}

const skillsData = [
  {
    title: 'Programming Languages',
    gradient: 'from-foreground to-primary',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'Solidity', level: 60 },
    ]
  },
  {
    title: 'Frontend Development',
    gradient: 'from-foreground to-primary',
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Framer Motion', level: 70 },
    ]
  },
  {
    title: 'Backend & Tools',
    gradient: 'from-foreground to-primary',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Smart Contract', level: 80 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'AI/ML', level: 75 },
    ]
  }
]

const SkillsSection = memo(() => (
  <>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((category) => (
        <SkillCard key={category.title} category={category} />
      ))}
    </div>

    <motion.div 
      className="mt-8"
      whileHover={{ scale: 1.01, y: -3 }}
      transition={{ duration: 0.3 }}
    >
      <Card variant="glass" padding="lg" className="group cursor-pointer">
        <CardHeader>
          <motion.div whileHover={{ scale: 1.05 }}>
            <CardTitle className="text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Currently Learning
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'Docker', 'AWS', 'GraphQL', 'Three.js', 'Rust', 'Web3'].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    y: [0, -3, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.2 
                  }}
                >
                  <Badge 
                    variant="secondary" 
                    animate 
                    className="cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </>
))

const SkillCard = memo(({ category }: { category: SkillCategory }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <Card variant="glass" padding="lg" className="h-full group cursor-pointer">
      <CardHeader>
        <motion.div whileHover={{ scale: 1.05 }}>
          <CardTitle className={`text-lg bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
            {category.title}
          </CardTitle>
        </motion.div>
      </CardHeader>
      <CardContent className="space-y-4">
        {category.skills.map((skill: Skill, skillIndex: number) => (
          <SkillItem key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </CardContent>
    </Card>
  </motion.div>
))

const SkillItem = memo(({ skill, index }: { skill: Skill, index: number }) => {
  const IconComponent = techIcons[skill.name as keyof typeof techIcons]
  
  return (
    <motion.div 
      className="space-y-2 p-2 rounded-lg hover:bg-accent/30 transition-colors"
      whileHover={{ x: 5 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          {IconComponent && (
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              <IconComponent size={18} />
            </motion.div>
          )}
          <span className="font-medium">{skill.name}</span>
        </div>
        <motion.span 
          className="text-primary font-semibold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <Progress value={skill.level} />
    </motion.div>
  )
})

SkillsSection.displayName = 'SkillsSection'
SkillCard.displayName = 'SkillCard'
SkillItem.displayName = 'SkillItem'

export { SkillsSection }