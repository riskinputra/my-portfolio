import { render, screen, within } from '@testing-library/react'
import Navbar from '../Navbar'
import '@testing-library/jest-dom'

describe('Navbar', () => {
  it('render a navbar instance', () => {
    render(<Navbar />)
    const navbar = screen.getByTestId("navbar")

    expect(navbar).toBeInTheDocument()
  })
  it('should have a logo', () => {
    render(<Navbar />)
    const navbarLogo = screen.getByTestId("navbar-logo")

    expect(navbarLogo).toBeInTheDocument()
  })
  it('should render list of 4 menus', () => {
    render(<Navbar />)
    const navbarMenus = screen.getByRole("list")
    const { getAllByRole } = within(navbarMenus)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(4)
  })
})
