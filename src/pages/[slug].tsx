import { Loading } from '@nextui-org/react'
import { GetPlantBySlugQuery, GetPlantQuery } from 'graphql/generated/graphql'
import { GET_PLANT, GET_PLANT_BY_SLUG } from 'graphql/queries'
import client from 'graphql/graph'
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
  const { plants } = await client.request<GetPlantQuery>(GET_PLANT)

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

// getStaticPaths -> serve para gerar as urls em build time /about, /trip, /petropolis
// getStaticProps -> serve para buscar dados da página (props) - build time - estático
// getServerSideProps -> serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// deprecado: getInitialProps -> serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
