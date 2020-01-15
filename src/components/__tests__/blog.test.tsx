import * as React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import { BlogList, BlogItem } from '../blog'

import { noPosts, allPosts, aPost } from '../../../__mocks__/blog.fixture'

describe('Blog', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const { queryByTestId } = render(<BlogList edges={noPosts} />)
    expect(queryByTestId('blogList')).toBeVisible
  })

  it('displays placeholder with no posts', () => {
    const { getByText } = render(<BlogList edges={noPosts} />)
    expect(getByText('No posts found')).toBeInTheDocument()
  })
})

describe('Blog Item', () => {
  const post = {
    title: aPost.frontmatter.title,
    slug: aPost.fields.slug,
    date: aPost.frontmatter.published,
    excerpt: aPost.excerpt,
  }
  afterEach(cleanup)

  it('renders without crashing', () => {
    const { queryByTestId } = render(<BlogItem post={post} />)
    expect(queryByTestId('blogItem')).toBeVisible
  })

  it('displays item title, date and excerpt', () => {
    const { getByText } = render(<BlogItem post={post} />)
    expect(getByText('Blog Post 3')).toBeInTheDocument()
    expect(getByText('December 15, 2019')).toBeInTheDocument()
    expect(getByText('Excerpt for blog post 3')).toBeInTheDocument()
  })
})
