import { Loading } from '@nextui-org/react'
import {
  GetPlantBySlugQuery,
  GetPlantsSlugQuery
} from 'graphql/generated/graphql'
import { GET_PLANTS_SLUG, GET_PLANT_BY_SLUG } from 'graphql/queries'
import client from 'graphql/graphClient'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PlantPageTemplate, { PlantPageTemplateProps } from 'templates/PlantPages'
import { LoadingWrapper } from 'templates/PlantPages/styles'

export default function PlantPage({
  plantName,
  description,
  imageURL
}: PlantPageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <LoadingWrapper>
        <Loading size="xl" color="success" type="points" />
      </LoadingWrapper>
    )
  }
  return (
    <PlantPageTemplate
      plantName={plantName}
      description={description}
      imageURL={imageURL}
    />
  )
}

export async function getStaticPaths() {
  const { plants } = await client.request<GetPlantsSlugQuery>(GET_PLANTS_SLUG)

  const paths = plants.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { plant } = await client.request<GetPlantBySlugQuery>(
    GET_PLANT_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!plant) return { notFound: true }

  const { plantName, description, image } = plant

  return {
    props: {
      plantName,
      description,
      imageURL: image.url
    }
  }
}
