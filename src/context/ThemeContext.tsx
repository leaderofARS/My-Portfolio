import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '~/context/theme-context'
import type { Theme } from '~/context/theme-context'

const STORAGE_KEY = 'theme-preference'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getInitial = (): Theme => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return 'dark'
  }

  const [theme, setThemeState] = useState<Theme>(getInitial)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme)
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  const setTheme = useCallback((next: Theme) => setThemeState(next), [])
  const toggleTheme = useCallback(() => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')), [])

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
