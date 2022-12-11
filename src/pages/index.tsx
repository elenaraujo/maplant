import dynamic from 'next/dynamic'
import { GetPlantsCardInfoQuery } from 'graphql/generated/graphql'
import client from 'graphql/graphClient'
import { GET_PLANTS_CARD_INFO } from 'graphql/queries'
import { GetStaticProps } from 'next'

const NoSSRHome = dynamic(() => import('components/Home/Home'), { ssr: false })

const HomePage = ({ plants }: PlantsPropTypes) => {
  return <NoSSRHome plants={plants} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { plants } = await client.request<GetPlantsCardInfoQuery>(
    GET_PLANTS_CARD_INFO
  )

  if (!plants) return { notFound: true }

  return {
    props: {
      plants
    }
  }
}

export type PlantsPropTypes = {
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

export default HomePage
