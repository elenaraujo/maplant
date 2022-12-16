import { Modal } from '@nextui-org/react'
import PlantForm from 'components/PlantForm/PlantForm'

const UpdateMarker = ({
  markerId,
  modalOpen,
  setModalOpen,
  oldPlantSlug,
  plants
}: UpdateMarkerProps) => {
  const OPERATION = 'update'

  const params = {
    markerId,
    oldPlantSlug,
    OPERATION,

    lat: '',
    lng: '',
    newPlantSlug: '',
    setIsLoading: undefined
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      open={modalOpen}
      preventClose
      closeButton={false}
      style={{
        backgroundColor: 'transparent',
        display: 'inherit'
      }}
    >
      <PlantForm
        title="Update marker"
        modalOpen={modalOpen}
        plants={plants}
        onPressCancel={() => setModalOpen(false)}
        params={params}
      />
    </Modal>
  )
}

type UpdateMarkerProps = {
  markerId: string
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  oldPlantSlug: string
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

export default UpdateMarker
