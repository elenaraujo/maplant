import { useState } from 'react'
import { Button, Loading } from '@nextui-org/react'

import updateMarker from 'graphql/mutationsApi/updateMarker'
import createMarker from 'graphql/mutationsApi/createMarker'
import { useWidth } from 'utils/hooks'

const ButtonsGroup = ({ onPressCancel, params }: ButtonsGroupProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const { windowWidth } = useWidth()

  params.setIsLoading = setIsLoading

  const onPressSave = async () => {
    switch (params.OPERATION) {
      case 'update':
        setIsLoading(true)
        await updateMarker(
          params.markerId,
          params.oldPlantSlug,
          params.newPlantSlug
        )
        if (typeof window !== 'undefined') {
          window.location.reload()
        }
        break

      case 'add':
        setIsLoading(true)
        await createMarker(params.lat, params.lng, params.newPlantSlug)
        if (typeof window !== 'undefined') {
          window.location.reload()
        }
        break

      default:
        break
    }
  }

  return (
    <>
      <Button
        onPress={onPressSave}
        color="warning"
        size="sm"
        style={{
          backgroundColor:
            windowWidth < 639 ? 'var(--gold)' : 'var(--background)',
          color: 'var(--brown)',
          fontFamily: 'Poppins',
          fontWeight: 600,
          margin: windowWidth < 639 ? '20px 0 10px 0' : '60px 0 10px 0',
          width: windowWidth < 639 ? '75%' : 'auto'
        }}
      >
        {isLoading && <Loading type="points" color="currentColor" size="sm" />}
        {!isLoading && 'Save'}
      </Button>

      <Button
        disabled={isLoading}
        onPress={onPressCancel}
        color="warning"
        size={windowWidth < 639 ? 'xs' : 'sm'}
        light
        style={{
          color: 'var(--brown)',
          fontFamily: 'Poppins',
          fontWeight: 600
        }}
      >
        Cancel
      </Button>
    </>
  )
}

export type ActionsParams = {
  markerId: string
  oldPlantSlug: string
  OPERATION: string | 'add' | 'update'
  newPlantSlug: string
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined
  lat: string
  lng: string
}

type ButtonsGroupProps = {
  onPressCancel: () => void
  params: ActionsParams
}

export default ButtonsGroup
