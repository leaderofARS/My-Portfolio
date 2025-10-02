import { render, screen } from '@testing-library/react'
import { Button } from '~/components/Button'

it('renders a button', () => {
  render(<Button>Click</Button>)
  expect(screen.getByRole('button', { name: /click/i })).toBeInTheDocument()
})
