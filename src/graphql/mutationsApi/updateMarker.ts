import client from '../graphClient'
import {
  CONNECT_MARKER,
  PUBLISH_MARKER,
  PUBLISH_PLANT
} from 'graphql/mutations'

const updateMarker = async (
  markerId: string,
  oldPlantSlug: string,
  newPlantSlug: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true)

    console.log('Trying to connect marker to the new plant...')
    await client.request(CONNECT_MARKER, { markerId, newPlantSlug })
    console.log('Successfully connected')

    console.log('Trying to publish marker...')
    await client.request(PUBLISH_MARKER, { markerId })
    console.log('Successfully published marker')

    console.log('Trying to publish old plant...')
    await client.request(PUBLISH_PLANT, { plantSlug: oldPlantSlug })
    console.log('Successfully published old plant')

    setIsLoading(false)

    return 'ok'
  } catch (error) {
    setIsLoading(false)
    console.error('Error when trying to update marker')
    console.error(error)
  }
}

export default updateMarker
