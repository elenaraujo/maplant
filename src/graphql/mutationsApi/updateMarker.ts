import client from '../graphClient'
import { UPDATE_MARKER } from 'graphql/mutations'

const updateMarker = async (id: string) => {
  try {
    await client.request(UPDATE_MARKER, {
      id
    })
    console.log('Marker successfully updated')
  } catch (error) {
    console.error('Error when trying to update marker')
    console.error(error)
  }
}

export default updateMarker
