import Banner from 'components/Banner/Banner'
import Header from 'components/Header/Header'
import Home from 'components/Home/Home'
import { GetPlantsCardInfoQuery } from 'graphql/generated/graphql'
import client from 'graphql/graphClient'
import { GET_PLANTS_CARD_INFO } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

const HomePage = ({ plants }: HomePropTypes) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth >= 940 ? false : true)
  }, [setIsMobile])

  return (
    <Home>
      <Header isMobile={isMobile} />
      <Banner />
    </Home>
  )
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

type HomePropTypes = {
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
