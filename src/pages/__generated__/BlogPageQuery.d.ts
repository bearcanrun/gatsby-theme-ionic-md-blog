/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPageQuery
// ====================================================

export interface BlogPageQuery_site_siteMetadata {
  title: string | null;
}

export interface BlogPageQuery_site {
  siteMetadata: BlogPageQuery_site_siteMetadata | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges_node_fields {
  slug: string | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges_node_frontmatter {
  published: any | null;
  title: string | null;
  description: string | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges_node {
  excerpt: string | null;
  fields: BlogPageQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: BlogPageQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface BlogPageQuery_allMarkdownRemark_edges {
  node: BlogPageQuery_allMarkdownRemark_edges_node;
}

export interface BlogPageQuery_allMarkdownRemark {
  edges: BlogPageQuery_allMarkdownRemark_edges[];
}

export interface BlogPageQuery {
  site: BlogPageQuery_site | null;
  allMarkdownRemark: BlogPageQuery_allMarkdownRemark;
}
