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

export const DELETE_MARKER = gql``

export const UPDATE_MARKER = gql``
