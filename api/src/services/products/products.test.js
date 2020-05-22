import { products } from './products'

describe('products', () => {
  it('returns true', () => {
    expect(true).toBe(true)
  })
  it('returns true', () => {
    const data = products()
    expect(data).toMatchObject([])
  })
})
