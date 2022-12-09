import { gql } from 'graphql-request'

export const CREATE_MARKER = gql`
  mutation createMarker($lat: String!, $lng: String!, $plantSlug: String!) {
    createMarker(
      data: {
        coordinates: { lat: $lat, lng: $lng }
        plant: { connect: { slug: $plantSlug } }
      }
    ) {
      id
    }
  }
`

export const PUBLISH_MARKER = gql`
  mutation publishMarker($markerId: ID!) {
    publishMarker(where: { id: $markerId }, to: PUBLISHED) {
      id
    }
  }
`

export const DELETE_MARKER = gql`
  mutation deleteMarker($markerId: ID!) {
    deleteMarker(where: { id: $markerId }) {
      id
    }
  }
`

export const DISCONNECT_MARKER = gql`
  mutation disconnectMarker($markerId: ID!) {
    updateMarker(
      where: { id: $markerId }
      data: { plant: { disconnect: true } }
    ) {
      id
      plant {
        slug
      }
    }
  }
`

export const CONNECT_MARKER = gql`
  mutation connectMarker($markerId: ID!, $newPlantSlug: String!) {
    updateMarker(
      where: { id: $markerId }
      data: { plant: { connect: { slug: $newPlantSlug } } }
    ) {
      id
      plant {
        slug
      }
    }
  }
`

export const PUBLISH_PLANT = gql`
  mutation publishPlant($plantSlug: String!) {
    publishPlant(where: { slug: $plantSlug }, to: PUBLISHED) {
      id
    }
  }
`
