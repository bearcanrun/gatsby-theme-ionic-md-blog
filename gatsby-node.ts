/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// import { GatsbyNode } from 'gatsby';

interface NodeProps {
  page: any,
  actions: any,
}

export { createPages } from './src/gatsby/create-pages';
export { addSlugToPage as onCreateNode } from './src/gatsby/add-slug-to-page';

// Making typescript --isolatedModules happy...
export const onCreatePage = ({ page, actions }: NodeProps) => {
  if (process.env.NODE_ENV !== `production` && page.path === `/404/`) {
    const { createPage } = actions
    // Make the 404 page match everything client side.
    // This will be used as fallback if more specific pages are not found
    page.matchPath = `/*`
    createPage(page)
  }
}