import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import UsersCard from '../UsersCard'

describe('UsersCard', () => {
    it('renders and links to /users', () => {
        render(
            <MemoryRouter>
                <UsersCard />
            </MemoryRouter>
        )

        expect(screen.getByText('Users')).toBeInTheDocument()
        const link = screen.getByRole('link') as HTMLAnchorElement
        expect(link.getAttribute('href')).toBe('/users')
    })
})
