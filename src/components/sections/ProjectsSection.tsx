import { useState, useMemo, memo } from 'react'

import { Card, CardContent } from '~/components/Card'
import { Button } from '~/components/Button'
import { Badge } from '~/components/ui/Badge'
import projects from '~/data/projects.json'

interface Project {
  id: string
  title: string
  summary: string
  cover: string
  tech: string[]
  tags: string[]
  demo?: string
  repo?: string
}

const ProjectsSection = memo(() => {
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [])
  const [selected, setSelected] = useState<string | 'all'>('all')

  const visible = useMemo(
    () => (selected === 'all' ? projects : projects.filter((p) => p.tags.includes(selected))),
    [selected],
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        <FilterButton
          isSelected={selected === 'all'}
          onClick={() => setSelected('all')}
          label="All"
        />
        {allTags.map((tag) => (
          <FilterButton
            key={tag}
            isSelected={selected === tag}
            onClick={() => setSelected(tag)}
            label={tag}
          />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
})

const FilterButton = memo(
  ({ isSelected, onClick, label }: { isSelected: boolean; onClick: () => void; label: string }) => (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        isSelected
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  ),
)

const ProjectCard = memo(({ project }: { project: Project }) => (
  <Card variant="glass" hover className="overflow-hidden">
    <div className="aspect-video overflow-hidden">
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <CardContent className="p-6">
      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech: string) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        {project.demo && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        {project.repo && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.repo} target="_blank" rel="noreferrer">
              View Code
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
))

ProjectsSection.displayName = 'ProjectsSection'
FilterButton.displayName = 'FilterButton'
ProjectCard.displayName = 'ProjectCard'

export { ProjectsSection }
