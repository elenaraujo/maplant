import { Loading } from '@nextui-org/react'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import client from 'graphql/graph'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { LoadingWrapper } from 'templates/Pages/styles'

export default function PlantPage({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <LoadingWrapper>
        <Loading size="xl" color="success" type="points" />
      </LoadingWrapper>
    )
  }
  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES)

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// getStaticPaths -> serve para gerar as urls em build time /about, /trip, /petropolis
// getStaticProps -> serve para buscar dados da página (props) - build time - estático
// getServerSideProps -> serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// deprecado: getInitialProps -> serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
