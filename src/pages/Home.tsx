import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'
import { setTitle } from '~/lib/seo'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/Card'
import { Button } from '~/components/Button'
import { Badge } from '~/components/ui/Badge'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/Avatar'

import { StatCounter } from '~/components/StatCounter'
import { SectionReveal } from '~/components/SectionReveal'
import { Progress } from '~/components/Progress'

export default function Home() {
  useEffect(() => setTitle('Home · Abhay'), [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              className="space-y-8"
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
                <Button size="lg" asChild>
                  <Link to="/projects">
                    View My Work
                    <ArrowRight size={18} />
                  </Link>
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
                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
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
              className="flex justify-center lg:justify-end"
            >
              <Card variant="glass" className="p-8 max-w-sm w-full">
                <div className="text-center space-y-6">
                  <Avatar size="2xl" className="mx-auto" animate>
                    <AvatarImage src="/api/placeholder/150/150" alt="Abhay" />
                    <AvatarFallback className="text-2xl font-bold">AS</AvatarFallback>
                  </Avatar>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Abhay Ravindra Shanbhag</h3>
                    <p className="text-muted-foreground">IoT & Cybersecurity Student</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      REVA University, Bangalore
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Experience</span>
                      <span className="font-medium">2+ Years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Projects</span>
                      <span className="font-medium">15+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Specialization</span>
                      <span className="font-medium">Blockchain</span>
                    </div>
                  </div>
                </div>
              </Card>
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
      <SectionReveal className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-xl text-muted-foreground">
                Passionate about building trustworthy, scalable, and efficient software systems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card variant="glass" padding="lg">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold">Background</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a developer passionate about building trustworthy, scalable, and efficient
                    software systems. My core focus areas are blockchain, AI, IoT, and
                    cybersecurity, blending strong backend logic with intuitive frontend
                    experiences.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass" padding="lg">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold">Interests</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Outside academics, I explore competitive programming (C++/DSA), cryptography,
                    and system design, along with writing about tech and engineering insights. I'm
                    passionate about eliminating fraud and strengthening security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Skills Section */}
      <SectionReveal className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
              <p className="text-xl text-muted-foreground">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card variant="glass" padding="lg">
                <CardHeader>
                  <CardTitle className="text-lg">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Python', level: 90 },
                    { name: 'C++', level: 85 },
                    { name: 'JavaScript', level: 70 },
                    { name: 'Solidity', level: 60 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card variant="glass" padding="lg">
                <CardHeader>
                  <CardTitle className="text-lg">Frontend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'React', level: 80 },
                    { name: 'TypeScript', level: 75 },
                    { name: 'Tailwind CSS', level: 85 },
                    { name: 'Framer Motion', level: 70 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card variant="glass" padding="lg">
                <CardHeader>
                  <CardTitle className="text-lg">Backend & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Node.js', level: 65 },
                    { name: 'MongoDB', level: 80 },
                    { name: 'Git/GitHub', level: 90 },
                    { name: 'AI/ML', level: 75 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card variant="glass" padding="lg">
                <CardHeader>
                  <CardTitle className="text-lg">Currently Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Docker', 'AWS', 'GraphQL', 'Three.js', 'Rust', 'Web3'].map(
                      (tech) => (
                        <Badge key={tech} variant="secondary" animate>
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Stats Section */}
      <SectionReveal className="py-20">
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
              <StatCounter value={1000} label="Commits This Year" />
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just
                having a chat about technology and innovation.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get In Touch
                  <Mail size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">
                  View My Work
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
