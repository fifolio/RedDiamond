import { render, screen } from '@testing-library/react'
import PageHeader from '../PageHeader'
import { describe, expect, it } from 'vitest'

describe('PageHeader', () => {
  it('renders title and subtitle', () => {
    render(<PageHeader title="Hello" subtitle="Sub text" />)

    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Sub text')).toBeInTheDocument()
  })
})
