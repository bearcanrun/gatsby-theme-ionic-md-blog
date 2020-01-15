import React from 'react'
import labels from '../../../content/website/labels'
import { DeepPropertyAccess } from '../../utils/deep-property-access'
import { INode } from '../../gatsby/create-pages'

import BlogItem from './blog-item'

import { BlogPageQuery_allMarkdownRemark } from '../../pages/__generated__/BlogPageQuery'

const { get } = DeepPropertyAccess

const BlogList: React.SFC<BlogPageQuery_allMarkdownRemark> = ({ edges }) => {
  if (edges.length > 0) {
    return (
      <ul data-testid="blogList">
        {edges.map(({ node }) => {
          const title = get(node, 'frontmatter', 'title') || labels.notAvailable,
            slug = get(node, 'fields', 'slug') || labels.notAvailable,
            date = get(node, 'frontmatter', 'published') || labels.notAvailable,
            excerpt = get(node, 'excerpt') || ''

          const post = { title, slug, date, excerpt }

          return <BlogItem post={post} />
        })}
      </ul>
    )
  } else {
    return (
      <div>
        <p>
          <strong>No posts found</strong>
        </p>
      </div>
    )
  }
}

export default BlogList
