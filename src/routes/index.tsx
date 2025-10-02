import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '~/layouts/MainLayout'
import Home from '~/pages/Home'
import About from '~/pages/About'
import Skills from '~/pages/Skills'
import Stats from '~/pages/Stats'
import Contact from '~/pages/Contact'
import NotFound from '~/pages/NotFound'

const Projects = lazy(() => import('~/pages/Projects'))
const Certificates = lazy(() => import('~/pages/Certificates'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'stats', element: <Stats /> },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<div className="p-8">Loading Projects…</div>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: 'certificates',
        element: (
          <Suspense fallback={<div className="p-8">Loading Certificates…</div>}>
            <Certificates />
          </Suspense>
        ),
      },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
