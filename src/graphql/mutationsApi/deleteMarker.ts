import client from '../graphClient'
import { DELETE_MARKER } from 'graphql/mutations'

const deleteMarker = async (id: string) => {
  try {
    await client.request(DELETE_MARKER, {
      id
    })
    console.log('Marker successfully deleted')
  } catch (error) {
    console.error('Error when trying to delete marker')
    console.error(error)
  }
}

export default deleteMarker
