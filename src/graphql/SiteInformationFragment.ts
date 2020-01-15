import { graphql } from 'gatsby'

export const SiteInformationFragment = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
    }
  }
`
