import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../../utils/typography'

interface IBlogItem {
  post: {
    title: string
    slug: string
    date: string
    excerpt: string
  }
}

const BlogItem = ({ post }: IBlogItem) => (
  <li data-testid="blogItem">
    <article key={post.slug}>
      <header>
        <h2
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={post.slug}>
            {post.title}
          </Link>
        </h2>
        <small>{post.date}</small>
      </header>
      <section>
        <p />
        {post.excerpt}
      </section>
    </article>
  </li>
)

export default BlogItem
