/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation createMarker($lat: String!, $lng: String!, $plantSlug: String!) {\n    createMarker(\n      data: {\n        coordinates: { lat: $lat, lng: $lng }\n        plant: { connect: { slug: $plantSlug } }\n      }\n    ) {\n      id\n    }\n  }\n": types.CreateMarkerDocument,
    "\n  mutation publishMarker($markerId: ID!) {\n    publishMarker(where: { id: $markerId }, to: PUBLISHED) {\n      id\n    }\n  }\n": types.PublishMarkerDocument,
    "\n  query GetPlant {\n    plants {\n      plantName\n      slug\n      description\n      value\n      image {\n        url\n      }\n      note\n      merchants {\n        text\n        image {\n          url\n        }\n      }\n      alchemicalItems {\n        name\n        image {\n          url\n        }\n      }\n    }\n  }\n": types.GetPlantDocument,
    "\n  query GetPlantBySlug($slug: String!) {\n    plant(where: { slug: $slug }) {\n      plantName\n      slug\n      description\n      value\n      image {\n        url\n      }\n      note\n      merchants {\n        text\n        image {\n          url\n        }\n      }\n      alchemicalItems {\n        name\n        image {\n          url\n        }\n      }\n    }\n  }\n": types.GetPlantBySlugDocument,
    "\n  query GetMarkers {\n    markers {\n      coordinates\n      plant {\n        plantName\n        slug\n        image {\n          url\n        }\n      }\n    }\n  }\n": types.GetMarkersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createMarker($lat: String!, $lng: String!, $plantSlug: String!) {\n    createMarker(\n      data: {\n        coordinates: { lat: $lat, lng: $lng }\n        plant: { connect: { slug: $plantSlug } }\n      }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createMarker($lat: String!, $lng: String!, $plantSlug: String!) {\n    createMarker(\n      data: {\n        coordinates: { lat: $lat, lng: $lng }\n        plant: { connect: { slug: $plantSlug } }\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation publishMarker($markerId: ID!) {\n    publishMarker(where: { id: $markerId }, to: PUBLISHED) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation publishMarker($markerId: ID!) {\n    publishMarker(where: { id: $markerId }, to: PUBLISHED) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPlant {\n    plants {\n      plantName\n      slug\n      description\n      value\n      image {\n        url\n      }\n      note\n      merchants {\n        text\n        image {\n          url\n        }\n      }\n      alchemicalItems {\n        name\n        image {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPlant {\n    plants {\n      plantName\n      slug\n      description\n      value\n      image {\n        url\n      }\n      note\n      merchants {\n        text\n        image {\n          url\n        }\n      }\n      alchemicalItems {\n        name\n        image {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPlantBySlug($slug: String!) {\n    plant(where: { slug: $slug }) {\n      plantName\n      slug\n      description\n      value\n      image {\n        url\n      }\n      note\n      merchants {\n        text\n        image {\n          url\n        }\n      }\n      alchemicalItems {\n        name\n        image {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPlantBySlug($slug: String!) {\n    plant(where: { slug: $slug }) {\n      plantName\n      slug\n      description\n      value\n      image {\n        url\n      }\n      note\n      merchants {\n        text\n        image {\n          url\n        }\n      }\n      alchemicalItems {\n        name\n        image {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMarkers {\n    markers {\n      coordinates\n      plant {\n        plantName\n        slug\n        image {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMarkers {\n    markers {\n      coordinates\n      plant {\n        plantName\n        slug\n        image {\n          url\n        }\n      }\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;