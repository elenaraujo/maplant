import { Button } from '@nextui-org/react'
import PlantForm from 'components/PlantForm/PlantForm'
import * as S from './AddMarker.style'

const AddMarker = ({
  latLng,
  addModalOpen,
  setAddModalOpen,
  plants
}: AddMarkerProps) => {
  const OPERATION = 'add'

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
      <S.AddButtonContainer>
        <Button
          size={'lg'}
          onPress={() => setAddModalOpen(!addModalOpen)}
          color="error"
          style={{ backgroundColor: 'var(--red)' }}
        >
          {addModalOpen ? 'Close modal' : 'Add marker'}
        </Button>
      </S.AddButtonContainer>
      <PlantForm
        title="Create new marker"
        modalOpen={addModalOpen}
        plants={plants}
        onPressCancel={() => setAddModalOpen(!addModalOpen)}
        params={params}
      />
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
