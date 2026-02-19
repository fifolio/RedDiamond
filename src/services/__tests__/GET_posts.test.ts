import { describe, it, expect, beforeEach, vi } from 'vitest'
import GET_posts from '../posts/GET_posts'

beforeEach(() => {
    vi.restoreAllMocks()
})

describe('GET_posts', () => {
    it('returns data when fetch is ok', async () => {
        const mockData = [{ id: 1, title: 'Hello' }]
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({ ok: true, json: async () => mockData } as unknown as Response)
        ) as unknown as typeof fetch

        const data = await GET_posts()
        expect(data).toEqual(mockData)
        expect(globalThis.fetch).toHaveBeenCalled()
    })

    it('returns null when response is not ok', async () => {
        globalThis.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 500 } as unknown as Response)) as unknown as typeof fetch

        const data = await GET_posts()
        expect(data).toBeNull()
    })
})
