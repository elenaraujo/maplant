import { Button } from '@nextui-org/react'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper/LinkWrapper'
import { MutationCreateMarkerArgs } from 'graphql/generated/graphql'
import client from 'graphql/graph'
import { CREATE_MARKER } from 'graphql/mutations'

const createMarker = async () => {
  try {
    const data = await client.request<MutationCreateMarkerArgs>(CREATE_MARKER, {
      lat: '-75.73730278940472',
      lng: '-92.24121093750001',
      plantSlug: 'cortinarius'
    })
    console.log(data)
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2))
  }

  return
}

export default function Home() {
  return (
    <>
      <h1>Essa é a página inicial de lista de plantas</h1>
      <Button onPress={createMarker}>Clique aqui para enviar</Button>

      <LinkWrapper href="/map">
        <InfoOutline size={32} aria-label="Map" />
      </LinkWrapper>
    </>
  )
}
