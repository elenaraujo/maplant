import { gql } from 'graphql-request'

export const GET_PLANT = gql`
  query GetPlant {
    plants {
      plantName
      slug
      description
      value
      image {
        url
      }
      note
      merchants {
        text
        image {
          url
        }
      }
      alchemicalItems {
        name
        image {
          url
        }
      }
    }
  }
`

export const GET_PLANT_BY_SLUG = gql`
  query GetPlantBySlug($slug: String!) {
    plant(where: { slug: $slug }) {
      plantName
      slug
      description
      value
      image {
        url
      }
      note
      merchants {
        text
        image {
          url
        }
      }
      alchemicalItems {
        name
        image {
          url
        }
      }
    }
  }
`

export const GET_MARKERS = gql`
  query GetMarkers {
    markers {
      coordinates
      plant {
        plantName
        slug
        image {
          url
        }
      }
    }
  }
`
