import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, BarChart3, Mail, FolderOpen, Award } from 'lucide-react'
import { Button } from './Button'
import { classNames } from '~/lib/utils'

// Section navigation items for home page
const sectionNavItems = [
  { to: '#hero', label: 'Home', icon: Home },
  { to: '#about', label: 'About', icon: User },
  { to: '#skills', label: 'Skills', icon: Code },
  { to: '#stats', label: 'Stats', icon: BarChart3 },
  { to: '#projects', label: 'Projects', icon: FolderOpen },
  { to: '#certificates', label: 'Certificates', icon: Award },
  { to: '#contact', label: 'Contact', icon: Mail },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'stats', 'projects', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 120 // Account for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for fixed header
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.header
        className={classNames(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass shadow-lg' : 'bg-transparent',
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16 relative">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0"
            >
              <NavLink to="/" className="text-xl font-bold text-gradient">
                Abhay Ravindra Shanbhag
              </NavLink>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center gap-1">
              {sectionNavItems.map((item) => {
                const Icon = item.icon
                const sectionId = item.to.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <button
                    key={item.to}
                    onClick={() => handleSectionClick(sectionId)}
                    className={classNames(
                      'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2',
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                    )}
                  >
                    <Icon size={16} />
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                        layoutId="activeTab"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden absolute right-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-40 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {sectionNavItems.map((item) => {
                    const Icon = item.icon
                    const sectionId = item.to.replace('#', '')
                    const isActive = activeSection === sectionId

                    return (
                      <button
                        key={item.to}
                        onClick={() => handleSectionClick(sectionId)}
                        className={classNames(
                          'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left',
                          isActive
                            ? 'text-primary bg-primary/10 border border-primary/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                        )}
                      >
                        <Icon size={18} />
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  )
}
