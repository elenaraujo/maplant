import client from '../graphClient'
import { DELETE_MARKER } from 'graphql/mutations'

const deleteMarker = async (markerId: string) => {
  try {
    await client.request(DELETE_MARKER, {
      markerId
    })
    console.log('Marker successfully deleted')
    window.location.reload()
    // TODO: Revisar necessidade de timeout em prod
    // await setTimeout(() => {
    //   window.location.reload()
    // }, 2000)
  } catch (error) {
    console.error('Error when trying to delete marker')
    console.error(error)
  }
}

export default deleteMarker
