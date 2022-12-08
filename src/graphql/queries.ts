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

// TODO:A API do Hygraph implementa um limite de fetch de 100 itens desde o dia 14/06/2022
// Doc: https://hygraph.com/docs/api-reference/content-api/pagination#paginate-query-results
// Para exibir mais de 100 marcadores será necessário implementar um esquema de paginação.
export const GET_MARKERS = gql`
  query GetMarkers {
    markers(first: 100) {
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
