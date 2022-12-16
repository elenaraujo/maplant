import { Button } from '@nextui-org/react'
import PlantForm from 'components/PlantForm/PlantForm'
import { useWidth } from 'utils/hooks'
import * as S from './AddMarker.style'

const AddMarker = ({
  latLng,
  addModalOpen,
  setAddModalOpen,
  plants
}: AddMarkerProps) => {
  const OPERATION = 'add'

  const { windowWidth } = useWidth()

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
      <S.AddButtonContainer hidden={addModalOpen && windowWidth < 639}>
        <Button
          size={windowWidth < 639 ? 'sm' : 'lg'}
          onPress={() => setAddModalOpen(!addModalOpen)}
          color="error"
          style={{ backgroundColor: 'var(--red)' }}
        >
          {addModalOpen ? 'Close modal' : 'Add marker'}
        </Button>
      </S.AddButtonContainer>
      <S.ModalWrapper className="bolinha">
        <PlantForm
          title="Create new marker"
          modalOpen={addModalOpen}
          plants={plants}
          onPressCancel={() => setAddModalOpen(!addModalOpen)}
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
