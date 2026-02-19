import { describe, it, expect, beforeEach, vi } from 'vitest'
import GET_users from '../users/GET_users'

beforeEach(() => {
    vi.restoreAllMocks()
})

describe('GET_users', () => {
    it('returns data when fetch is ok', async () => {
        const mockData = [{ id: 2, name: 'Alice' }]
        // @ts-ignore
        global.fetch = vi.fn(() =>
            Promise.resolve({ ok: true, json: async () => mockData })
        )

        const data = await GET_users()
        expect(data).toEqual(mockData)
    })

    it('returns null when response is not ok', async () => {
        // @ts-ignore
        global.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 404 }))

        const data = await GET_users()
        expect(data).toBeNull()
    })
})
