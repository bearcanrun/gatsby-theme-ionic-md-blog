import * as React from 'react'
import * as Gatsby from 'gatsby'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import { Layout } from '../layout'

describe('Layout', () => {
  const siteTitle = 'Gatsby Starter Ionic - Layout'

  afterEach(cleanup)

  it('renders without crashing', () => {
    const { getByText } = render(
      <Layout title={siteTitle}>
        <h1>Renders</h1>
      </Layout>,
    )
    expect(getByText('Renders')).toBeInTheDocument()
  })

  it('passes data and children props', () => {
    const { getByText, queryAllByTestId } = render(
      <Layout title={siteTitle}>
        <h1>Passes props</h1>
      </Layout>,
    )
    expect(queryAllByTestId('banner').length).toBe(1)
    expect(queryAllByTestId('contentinfo').length).toBe(1)
    expect(getByText('Gatsby Starter Ionic - Layout')).toBeInTheDocument()
    expect(getByText('Passes props')).toBeInTheDocument()
  })
})
