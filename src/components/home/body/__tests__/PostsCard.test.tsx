import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import PostsCard from '../PostsCard'

describe('PostsCard', () => {
    it('renders and links to /posts', () => {
        render(
            <MemoryRouter>
                <PostsCard />
            </MemoryRouter>
        )

        expect(screen.getByText('Posts')).toBeInTheDocument()
        const link = screen.getByRole('link') as HTMLAnchorElement
        expect(link.getAttribute('href')).toBe('/posts')
    })
})