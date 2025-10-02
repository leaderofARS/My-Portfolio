import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Nav } from '~/components/Nav'
import { Footer } from '~/components/Footer'
import { ThemeProvider } from '~/context/ThemeContext'
import { useTheme } from '~/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import { Button } from '~/components/Button'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  const handleToggle = () => {
    console.log('Theme toggle clicked, current theme:', theme)
    toggleTheme()
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border hover:bg-accent"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  )
}

function Shell() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <ThemeToggle />

      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  )
}

export function MainLayout() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  )
}
