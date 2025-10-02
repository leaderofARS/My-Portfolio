import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'
import { setTitle } from '~/lib/seo'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/Card'
import { Button } from '~/components/Button'
import { Badge } from '~/components/ui/Badge'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/Avatar'
import { ContactForm } from '~/components/ContactForm'
import { techIcons } from '~/constants/techIcons'

import { StatCounter } from '~/components/StatCounter'
import { SectionReveal } from '~/components/SectionReveal'
import { Progress } from '~/components/Progress'
import projects from '~/data/projects.json'
import certificates from '~/data/certificates.json'

// Projects Section Component
function ProjectsSection() {
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
  const [selected, setSelected] = useState<string | 'all'>('all')
  const visible = useMemo(
    () => (selected === 'all' ? projects : projects.filter((p) => p.tags.includes(selected))),
    [selected],
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selected === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`}
          onClick={() => setSelected('all')}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selected === tag
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
            onClick={() => setSelected(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <Card key={project.id} variant="glass" hover className="overflow-hidden">
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
                {project.tech.map((tech) => (
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
        ))}
      </div>
    </div>
  )
}

// Certificates Section Component
function CertificatesSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map((cert) => (
        <Card key={cert.id} variant="glass" hover className="overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
            <p className="text-muted-foreground mb-1">{cert.issuer}</p>
            <p className="text-sm text-muted-foreground mb-4">
              {new Date(cert.issueDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {cert.file && (
              <Button variant="outline" size="sm" asChild>
                <a href={cert.file} download>
                  <Download size={16} />
                  Download
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function Home() {
  useEffect(() => setTitle('Home · Abhay'), [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 pl-28"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Badge variant="outline" className="text-primary border-primary/50">
                    <Calendar size={12} className="mr-1" />
                    Available for opportunities
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  Hi, I'm <span className="text-gradient">Abhay</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-muted-foreground font-medium"
                >
                  Building secure, intelligent digital systems
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                >
                  B.Tech student in IoT & Cybersecurity with blockchain specialization at REVA
                  University. Passionate about Python, Solidity, AI, and creating trustworthy,
                  scalable software systems.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('projects')
                    if (element) {
                      const headerOffset = 80
                      const elementPosition = element.offsetTop
                      const offsetPosition = elementPosition - headerOffset
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                    }
                  }}
                >
                  View My Work
                  <ArrowRight size={18} />
                </Button>
                <Button variant="outline" size="lg">
                  <Download size={18} />
                  Download CV
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 pt-4"
              >
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: 'https://github.com/leaderofARs', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhay-ravindra-shanbhag-900ab5330/', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:arsabhayrs@gmail.com', label: 'Email' },
                  ].map((social) => {
                    const Icon = social.icon
                    return (
                      <Button key={social.label} variant="ghost" size="sm" asChild>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon size={18} />
                        </motion.a>
                      </Button>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Avatar & Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-center lg:pr-8 lg:-ml-14"
            >
              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                <Card
                  variant="glass"
                  className="p-8 w-80 relative overflow-hidden group cursor-pointer"
                >
                  {/* Interactive Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="text-center space-y-6 relative z-10">
                    {/* Interactive Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Avatar size="2xl" className="mx-auto" animate>
                        <AvatarImage
                          src="/images/abhay_sitting3.jpg"
                          alt="Abhay Ravindra Shanbhag"
                        />
                        <AvatarFallback className="text-2xl font-bold">AS</AvatarFallback>
                      </Avatar>
                    </motion.div>

                    {/* Animated Name and Title */}
                    <motion.div
                      className="space-y-2"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.h3
                        className="text-xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        Abhay Ravindra Shanbhag
                      </motion.h3>
                      <motion.p
                        className="text-muted-foreground"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        IoT & Cybersecurity Student
                      </motion.p>
                      <motion.div
                        className="flex items-center justify-center gap-1 text-sm text-muted-foreground"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <MapPin size={14} />
                        </motion.div>
                        REVA University, Bangalore
                      </motion.div>
                    </motion.div>

                    {/* Interactive Stats */}
                    <div className="space-y-3">
                      <motion.div
                        className="flex justify-between text-sm p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <span>Experience</span>
                        <motion.span
                          className="font-medium text-primary"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          2+ Years
                        </motion.span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between text-sm p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <span>Projects</span>
                        <motion.span
                          className="font-medium text-primary"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          15+
                        </motion.span>
                      </motion.div>
                    </div>

                    {/* Interactive Specializations */}
                    <div className="space-y-2">
                      <motion.h4
                        className="text-sm font-semibold text-muted-foreground"
                        whileHover={{ scale: 1.05 }}
                      >
                        Specializations
                      </motion.h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['Blockchain', 'AI', 'Cyber'].map((spec, index) => (
                          <motion.div
                            key={spec}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                              y: [0, -3, 0],
                              rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                              {spec}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Social Links */}
                    <motion.div
                      className="flex justify-center gap-3 pt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {[
                        {
                          icon: Github,
                          href: 'https://github.com/leaderofARs',
                          color: 'hover:text-white hover:bg-gray-800',
                        },
                        {
                          icon: Linkedin,
                          href: 'https://www.linkedin.com/in/abhay-ravindra-shanbhag-900ab5330/',
                          color: 'hover:text-blue-400',
                        },
                        {
                          icon: Mail,
                          href: 'mailto:arsabhayrs@gmail.com',
                          color: 'hover:text-green-400',
                        },
                      ].map((social, index) => {
                        const Icon = social.icon
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full bg-muted/50 text-muted-foreground transition-all duration-200 ${social.color}`}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                              y: [0, -2, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          >
                            <Icon size={16} />
                          </motion.a>
                        )
                      })}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <SectionReveal id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-xl text-muted-foreground">Abhay Ravindra Shanbhag</p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              {/* Box 1 - Background */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card
                  variant="glass"
                  padding="lg"
                  className="h-full group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="space-y-4 relative z-10">
                    <motion.h3
                      className="text-xl font-semibold bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      Background
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed text-sm"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      A B.Tech student in IoT & Cybersecurity (Blockchain specialization) at REVA
                      University. My journey started with a deep curiosity for how systems interact,
                      scale, and secure themselves in unpredictable environments. Over time, I've
                      grown into a developer who values clarity, reliability, and efficiency in
                      every line of code.
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Box 2 - Core Focus */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card
                  variant="glass"
                  padding="lg"
                  className="h-full group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="space-y-4 relative z-10">
                    <motion.h3
                      className="text-xl font-semibold bg-gradient-to-r from-foreground to-green-500 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      Core Focus
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed text-sm"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      My work lies at the intersection of blockchain, AI, IoT, and cybersecurity —
                      engineering solutions that are both performant and resilient. I enjoy
                      designing secure architectures, writing clean, maintainable code, and building
                      user-friendly interfaces that don't compromise on trust or scalability. My
                      goal is to create systems that stand strong in real-world conditions, from
                      smart contracts to AI-powered applications.
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Box 3 - Interests & Vision */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card
                  variant="glass"
                  padding="lg"
                  className="h-full group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="space-y-4 relative z-10">
                    <motion.h3
                      className="text-xl font-semibold bg-gradient-to-r from-foreground to-orange-500 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      Interests & Vision
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed text-sm"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Outside of academics, I challenge myself with competitive programming
                      (C++/DSA), experiment with cryptography and Rust, and explore system design
                      philosophies. I'm passionate about eliminating fraud, advancing security, and
                      shaping digital trust for the future. I also enjoy writing about technology
                      and sharing engineering insights to inspire collaboration and learning.
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Skills Section */}
      <SectionReveal id="skills" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
              <p className="text-xl text-muted-foreground">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                <Card variant="glass" padding="lg" className="h-full group cursor-pointer">
                  <CardHeader>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <CardTitle className="text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Programming Languages
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Python', level: 90, color: 'bg-yellow-500' },
                      { name: 'C++', level: 85, color: 'bg-blue-500' },
                      { name: 'JavaScript', level: 70, color: 'bg-yellow-400' },
                      { name: 'Solidity', level: 60, color: 'bg-gray-600' },
                    ].map((skill, index) => {
                      const IconComponent = techIcons[skill.name as keyof typeof techIcons]
                      return (
                        <motion.div
                          key={skill.name}
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
                    })}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                <Card variant="glass" padding="lg" className="h-full group cursor-pointer">
                  <CardHeader>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <CardTitle className="text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Frontend Development
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'React', level: 80, color: 'bg-blue-400' },
                      { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
                      { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
                      { name: 'Framer Motion', level: 70, color: 'bg-purple-500' },
                    ].map((skill, index) => {
                      const IconComponent = techIcons[skill.name as keyof typeof techIcons]
                      return (
                        <motion.div
                          key={skill.name}
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
                    })}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                <Card variant="glass" padding="lg" className="h-full group cursor-pointer">
                  <CardHeader>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <CardTitle className="text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Backend & Tools
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Node.js', level: 65, color: 'bg-green-500' },
                      { name: 'Smart Contract', level: 80, color: 'bg-green-600' },
                      { name: 'Git/GitHub', level: 90, color: 'bg-gray-800' },
                      { name: 'AI/ML', level: 75, color: 'bg-orange-500' },
                    ].map((skill, index) => {
                      const IconComponent = techIcons[skill.name as keyof typeof techIcons]
                      return (
                        <motion.div
                          key={skill.name}
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
                    })}
                  </CardContent>
                </Card>
              </motion.div>
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
                            rotate: [0, 1, -1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2,
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
          </div>
        </div>
      </SectionReveal>

      {/* Stats Section */}
      <SectionReveal id="stats" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">By the Numbers</h2>
              <p className="text-xl text-muted-foreground">A snapshot of my journey so far</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value={2} label="Years Experience" />
              <StatCounter value={15} label="Projects Completed" />
              <StatCounter value={5} label="Certifications" />
              <StatCounter value={250} label="Commits This Year" />
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Projects Section */}
      <SectionReveal id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">
                A showcase of my recent work and contributions
              </p>
            </div>
            <ProjectsSection />
          </div>
        </div>
      </SectionReveal>

      {/* Certificates Section */}
      <SectionReveal id="certificates" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
              <p className="text-xl text-muted-foreground">
                Professional certifications and achievements
              </p>
            </div>
            <CertificatesSection />
          </div>
        </div>
      </SectionReveal>

      {/* Contact Section */}
      <SectionReveal id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
                  <p className="text-xl text-muted-foreground">
                    I'm always open to discussing new opportunities, interesting projects, or just
                    having a chat about technology and innovation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">arsabhayrs@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Bangalore, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById('projects')
                      if (element) {
                        const headerOffset = 80
                        const elementPosition = element.offsetTop
                        const offsetPosition = elementPosition - headerOffset
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                      }
                    }}
                  >
                    View My Work
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <div className="flex justify-center lg:justify-center lg:-ml-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
