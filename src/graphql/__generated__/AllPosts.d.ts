/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AllPosts
// ====================================================

export interface AllPosts_edges_node_fields {
  slug: string | null;
}

export interface AllPosts_edges_node_frontmatter {
  published: any | null;
  title: string | null;
  description: string | null;
}

export interface AllPosts_edges_node {
  excerpt: string | null;
  fields: AllPosts_edges_node_fields | null;
  frontmatter: AllPosts_edges_node_frontmatter | null;
}

export interface AllPosts_edges {
  node: AllPosts_edges_node;
}

export interface AllPosts {
  edges: AllPosts_edges[];
}
