import client from 'graphql/graphClient'
import { CREATE_MARKER, PUBLISH_MARKER } from 'graphql/mutations'

const createMarker = async (lat: string, lng: string, plantSlug: string) => {
  let data
  try {
    data = await client.request(CREATE_MARKER, {
      lat,
      lng,
      plantSlug
    })
    console.log('Successfully created marker. Trying to publish it...')
  } catch (error) {
    console.error('Error when trying to create marker')
    console.error(error)
  }

  if (data?.createMarker?.id) {
    try {
      console.log('Trying to publish marker...')
      await client.request(PUBLISH_MARKER, {
        markerId: data.createMarker.id
      })
      console.log('Marker successfully published')
      window.location.reload()
      // TODO: Caso o novo marcador cadastrado continue demorando muito a aparecer
      // adicionar um contador de 10 segundos na tela antes de tentar fazer o reload
    } catch (error) {
      console.error('Error when trying to publish the created marker')
      console.error(error)
    }
  }
}

export default createMarker
