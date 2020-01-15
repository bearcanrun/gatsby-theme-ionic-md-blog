import { graphql } from 'gatsby'

export const AllPostsFragment = graphql`
  fragment AllPosts on MarkdownRemarkConnection {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          published(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
