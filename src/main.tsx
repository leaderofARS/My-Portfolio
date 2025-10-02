import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { useEffect, useState } from 'react'
import { Loader } from '~/components/Loader'

export function Root() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])
  return (
    <StrictMode>
      <App />
      {loading ? <Loader /> : null}
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)
