import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '~/context/theme-context'
import type { Theme } from '~/context/theme-context'

const STORAGE_KEY = 'theme-preference'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getInitial = (): Theme => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'light' || stored === 'dark') return stored
    } catch (error) {
      console.warn('localStorage not available:', error)
    }
    return 'dark'
  }

  const [theme, setThemeState] = useState<Theme>(getInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (error) {
      console.warn('Could not save theme to localStorage:', error)
    }
    
    const root = document.documentElement
    console.log('Setting theme to:', theme)
    
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    console.log('Setting theme to:', next)
    setThemeState(next)
  }, [])
  
  const toggleTheme = useCallback(() => {
    setThemeState((currentTheme) => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
      console.log('Toggling theme from', currentTheme, 'to', newTheme)
      return newTheme
    })
  }, [])

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
