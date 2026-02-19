import { render, screen } from '@testing-library/react'
import Navigation from '../Navigation'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

describe('Navigation', () => {
    it('renders navigation links', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        )

        const homeLink = screen.getByRole('link', { name: 'DataCenter' }) as HTMLAnchorElement
        const postsLink = screen.getByRole('link', { name: 'Posts' }) as HTMLAnchorElement
        const usersLink = screen.getByRole('link', { name: 'Users' }) as HTMLAnchorElement
        expect(homeLink.getAttribute('href')).toBe('/')
        expect(postsLink.getAttribute('href')).toBe('/posts')
        expect(usersLink.getAttribute('href')).toBe('/users')
    })
})