import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BlogSidebar from './BlogSidebar'

describe('BlogSidebar', () => {
  it('renders the about section', () => {
    render(<BlogSidebar />)
    expect(screen.getByText('About This Blog')).toBeInTheDocument()
    expect(screen.getByText(/Welcome to our blog/)).toBeInTheDocument()
  })

  it('renders all categories', () => {
    render(<BlogSidebar />)
    const categories = ['Web Development', 'Design', 'JavaScript', 'React', 'CSS', 'Performance']

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
  })

  it('renders categories section heading', () => {
    render(<BlogSidebar />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
  })

  it('renders recent activity section', () => {
    render(<BlogSidebar />)
    expect(screen.getByText('Recent Activity')).toBeInTheDocument()
  })

  it('renders recent activity items', () => {
    render(<BlogSidebar />)

    expect(screen.getByText('New post published')).toBeInTheDocument()
    expect(screen.getByText('Comment on "React Tips"')).toBeInTheDocument()
    expect(screen.getByText('Post updated')).toBeInTheDocument()
    expect(screen.getByText('New subscriber')).toBeInTheDocument()
  })

  it('renders user names in recent activity', () => {
    render(<BlogSidebar />)

    // Avatar components will contain the first letter of each name
    const avatars = screen.getAllByText(/^[A-Z]$/)
    expect(avatars.length).toBeGreaterThanOrEqual(4)
  })

  it('renders newsletter section', () => {
    render(<BlogSidebar />)

    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()
  })

  it('renders email input field', () => {
    render(<BlogSidebar />)

    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders subscribe button', () => {
    render(<BlogSidebar />)

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i })
    expect(subscribeButton).toBeInTheDocument()
  })

  it('has sticky positioning class', () => {
    const { container } = render(<BlogSidebar />)
    const sidebarDiv = container.firstChild as HTMLElement

    expect(sidebarDiv.className).toContain('sticky')
  })
})
