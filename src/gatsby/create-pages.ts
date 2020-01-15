import { GatsbyNode } from 'gatsby';
import * as path from 'path';

export interface IEdge {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

export interface INode {
  node: {
    excerpt: string
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      published: string;
      description: string;
    };
  };
}

export interface IContext {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
}

interface IQueryResult {
  allMarkdownRemark: {
    edges: IEdge[];
  };
}

/**
 * Gatsby exposes interfaces for every lifecycle hook
 */
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);

  /**
   * Pass the query structure generic for complete type-check coverage
   */
  const result = await graphql<IQueryResult>(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___published], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                published
                description
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};