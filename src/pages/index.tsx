import Home from 'components/Home/Home'
import { GetPlantsCardInfoQuery } from 'graphql/generated/graphql'
import client from 'graphql/graphClient'
import { GET_PLANTS_CARD_INFO } from 'graphql/queries'
import { GetStaticProps } from 'next'

const HomePage = ({ plants }: PlantsPropTypes) => {
  return <Home plants={plants} />
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
