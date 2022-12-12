import { useState } from 'react'
import { Button, Loading } from '@nextui-org/react'

import * as S from './ButtonsGroup.style'

import updateMarker from 'graphql/mutationsApi/updateMarker'
import createMarker from 'graphql/mutationsApi/createMarker'

const ButtonsGroup = ({ onPressCancel, params }: ButtonsGroupProps) => {
  const [isLoading, setIsLoading] = useState(false)

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
        break

      case 'add':
        setIsLoading(true)
        await createMarker(params.lat, params.lng, params.newPlantSlug)
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
        style={S.SaveButtonStyle}
      >
        {isLoading && <Loading type="points" color="currentColor" size="sm" />}
        {!isLoading && 'Save'}
      </Button>

      <Button
        onPress={onPressCancel}
        color="warning"
        size="sm"
        light
        style={S.CancelButtonStyle}
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
