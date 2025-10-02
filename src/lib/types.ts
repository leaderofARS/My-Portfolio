export type UrlString = string

export type Stat = {
  id: string
  label: string
  value: number
}

export type Skill = {
  id: string
  name: string
  level: number // 0-100
  category: string
}

export type Certificate = {
  id: string
  title: string
  issuer: string
  issueDate: string
  image: UrlString
  file?: UrlString
}

export type Project = {
  id: string
  title: string
  summary: string
  description?: string
  tags: string[]
  tech: string[]
  repo?: UrlString
  demo?: UrlString
  cover: UrlString
  slug: string
  featured?: boolean
  status?: 'completed' | 'in-progress' | 'planned'
  date?: string
  stars?: number
}
