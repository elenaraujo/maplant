import dynamic from 'next/dynamic'
import { GET_MARKERS, GET_PLANTS_SLUG_AND_NAME } from 'graphql/queries'
import { GetMarkersQuery } from 'graphql/generated/graphql'
import client from 'graphql/graphClient'
import { GetStaticProps } from 'next'

const NoSSRMap = dynamic(() => import('components/Map/Map'), { ssr: false })

const WhiteOrchardMap = ({ markers, plants }: MapProps) => {
  return <NoSSRMap markers={markers} plants={plants} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { markers } = await client.request<GetMarkersQuery>(GET_MARKERS, {
    slug: `${params?.slug}`
  })

  const { plants } = await client.request(GET_PLANTS_SLUG_AND_NAME)

  if (!markers || !plants) return { notFound: true }

  return {
    props: {
      markers,
      plants
    }
  }
}

export type MapProps = {
  markers: [
    {
      id: string
      coordinates: { lat: number; lng: number }
      plant: {
        image: { url: string }
        plantName: string
        slug: string
      }
    }
  ]
  plants: [
    {
      plantName: string
      slug: string
      image: {
        url: string
      }
    }
  ]
}

export default WhiteOrchardMap
