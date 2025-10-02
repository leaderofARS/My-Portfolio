import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Star } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './Card'
import { Badge } from './ui/Badge'
import { Button } from './Button'
import type { Project } from '~/lib/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card variant="glass" hover className="group overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Overlay Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.featured && (
              <Badge variant="default" size="sm">
                <Star size={12} className="mr-1" />
                Featured
              </Badge>
            )}
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            {project.status && (
              <Badge variant={project.status === 'completed' ? 'success' : 'warning'} size="sm">
                {project.status}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" size="sm">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>

          {/* Project Stats */}
          {(project.stars || project.date) && (
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {project.date && (
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {project.date}
                </div>
              )}
              {project.stars && (
                <div className="flex items-center gap-1">
                  <Star size={12} />
                  {project.stars}
                </div>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-2">
          {project.demo && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                Live Demo
              </a>
            </Button>
          )}
          {project.repo && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github size={14} />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
