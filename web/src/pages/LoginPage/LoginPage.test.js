import { render, cleanup } from '@testing-library/react'

import LoginPage from './LoginPage'

describe('LoginPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LoginPage />)
    }).not.toThrow()
  })
})
