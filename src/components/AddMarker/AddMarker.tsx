import PlantForm from 'components/PlantForm/PlantForm'
import * as S from './AddMarker.style'

const AddMarker = ({
  latLng,
  addModalOpen,
  setAddModalOpen,
  plants
}: AddMarkerProps) => {
  const OPERATION = 'add'

  // const { windowWidth } = useWidth()

  const params = {
    lat: latLng.lat.toString(),
    lng: latLng.lng.toString(),
    OPERATION,

    markerId: '',
    oldPlantSlug: '',
    newPlantSlug: '',
    setIsLoading: undefined
  }

  return (
    <S.AddMarkerWrapper>
      <S.ModalWrapper>
        <PlantForm
          title="Create new marker"
          modalOpen={addModalOpen}
          plants={plants}
          onPressCancel={() => setAddModalOpen(false)}
          params={params}
        />
      </S.ModalWrapper>
    </S.AddMarkerWrapper>
  )
}

export type AddMarkerProps = {
  latLng: { lat: number; lng: number }
  addModalOpen: boolean
  setAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
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

export default AddMarker
