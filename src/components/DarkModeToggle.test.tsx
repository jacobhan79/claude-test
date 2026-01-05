import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import DarkModeToggle from './DarkModeToggle'

describe('DarkModeToggle', () => {
  beforeEach(() => {
    // Reset DOM state before each test
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    // Clean up after each test
    document.documentElement.classList.remove('dark')
  })

  it('renders the toggle button', () => {
    render(<DarkModeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('renders light mode icon by default', () => {
    render(<DarkModeToggle />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('title', 'Switch to dark mode')
  })

  it('toggles dark mode class on root element when clicked', () => {
    render(<DarkModeToggle />)
    const button = screen.getByRole('button')

    // Initially not in dark mode
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    // Click to enable dark mode
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    // Click again to disable dark mode
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('updates button title when toggling', () => {
    render(<DarkModeToggle />)
    const button = screen.getByRole('button')

    // Initially shows "Switch to dark mode"
    expect(button).toHaveAttribute('title', 'Switch to dark mode')

    // After clicking, should show "Switch to light mode"
    fireEvent.click(button)
    expect(button).toHaveAttribute('title', 'Switch to light mode')

    // After clicking again, should show "Switch to dark mode"
    fireEvent.click(button)
    expect(button).toHaveAttribute('title', 'Switch to dark mode')
  })

  it('detects initial dark mode state from DOM', () => {
    // Set dark mode before rendering
    document.documentElement.classList.add('dark')

    render(<DarkModeToggle />)
    const button = screen.getByRole('button')

    // Should detect existing dark mode
    expect(button).toHaveAttribute('title', 'Switch to light mode')
  })

  it('has correct accessibility classes', () => {
    render(<DarkModeToggle />)
    const button = screen.getByRole('button')

    expect(button.className).toContain('cursor-pointer')
    expect(button.className).toContain('transition-colors')
  })

  it('is keyboard accessible', () => {
    render(<DarkModeToggle />)
    const button = screen.getByRole('button')

    // Button should be focusable
    button.focus()
    expect(button).toHaveFocus()
  })
})
