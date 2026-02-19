import { describe, it, expect, beforeEach, vi } from 'vitest'
import GET_user from '../users/GET_user'

beforeEach(() => {
    vi.restoreAllMocks()
})

describe('GET_user', () => {
    it('calls fetch with id and returns data', async () => {
        const mock = { id: 2, name: 'Bob' }
        // @ts-ignore
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({ ok: true, json: async () => mock })
        )

        const data = await GET_user(2)
        expect(globalThis.fetch).toHaveBeenCalledWith(expect.stringContaining('/2'))
        expect(data).toEqual(mock)
    })

    it('returns null on fetch rejection', async () => {
        // @ts-ignore
        globalThis.fetch = vi.fn(() => Promise.reject(new Error('network')))

        const data = await GET_user(2)
        expect(data).toBeNull()
    })
})
