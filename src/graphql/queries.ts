import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query GetPages {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_MARKERS = gql`
  query getPlant {
    markers {
      name
      slug
      description {
        html
      }
      gallery {
        id
      }
      coordinates
    }
  }
`
