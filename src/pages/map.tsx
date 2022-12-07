import client from 'graphql/graph'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { GET_MARKERS } from 'graphql/queries'
import { GetMarkersQuery } from 'graphql/generated/graphql'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

const MapPage = ({ markers }: MapProps) => {
  return <Map markers={markers} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { markers } = await client.request<GetMarkersQuery>(GET_MARKERS, {
    slug: `${params?.slug}`
  })

  if (!markers) return { notFound: true }

  return {
    props: {
      markers
    }
  }
}

export type MapProps = {
  markers: [
    {
      coordinates: { lat: number; lng: number }
      plant: {
        image: { url: string }
        plantName: string
        slug: string
      }
    }
  ]
}

export default MapPage
