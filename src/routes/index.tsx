import { createHashRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '~/layouts/MainLayout'
import Home from '~/pages/Home'
import NotFound from '~/pages/NotFound'

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
