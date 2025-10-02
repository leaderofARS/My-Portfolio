import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="text-white/70">This page could not be found.</p>
      <Link to="/" className="text-primary underline">
        Go home
      </Link>
    </section>
  )
}
