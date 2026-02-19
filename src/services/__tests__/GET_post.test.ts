import { describe, it, expect, beforeEach, vi } from 'vitest'
import GET_post from '../posts/GET_post'

beforeEach(() => {
    vi.restoreAllMocks()
})

describe('GET_post', () => {
    it('calls fetch with id and returns data', async () => {
        const mock = { id: 1, title: 'Post' }
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({ ok: true, json: async () => mock } as unknown as Response)
        ) as unknown as typeof fetch

        const data = await GET_post(1)
        expect(globalThis.fetch).toHaveBeenCalledWith(expect.stringContaining('/1'))
        expect(data).toEqual(mock)
    })

    it('returns null on fetch rejection', async () => {
        globalThis.fetch = vi.fn(() => Promise.reject(new Error('network'))) as unknown as typeof fetch

        const data = await GET_post(1)
        expect(data).toBeNull()
    })
})
