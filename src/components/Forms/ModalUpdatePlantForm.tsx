import { Button, Loading } from '@nextui-org/react'
import updateMarker from 'graphql/mutationsApi/updateMarker'
import { useState } from 'react'

type UpdatePlantFormType = {
  markerId: string
  oldPlantSlug: string
  setIsModalSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdatePlantForm = ({
  markerId,
  oldPlantSlug,
  setIsModalSuccessOpen
}: UpdatePlantFormType) => {
  const [newPlantSlug, setNewPlantSlug] = useState('arenaria')
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <h1 style={{ marginBottom: 20 }}>Escolha uma nova planta</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form>
          <label>
            Planta nova:
            <select
              value={newPlantSlug}
              onChange={(e) => setNewPlantSlug(e.target.value)}
            >
              <option value="arenaria">Arenaria</option>
              <option value="balisse-fruit">Balisse fruit</option>
              <option value="berbercane-fruit">Berbercane fruit</option>
              <option value="blowball">Blowball</option>
              <option value="bryonia">Bryonia</option>
              <option value="buckthorn">Buckthorn</option>
              <option value="celandine">Celandine</option>
              <option value="cortinarius">Cortinarius</option>
              <option value="crows-eye">Crow&apos;s eye</option>
              <option value="fools-parsley-leaves">
                Fool&apos;s parsley leaves
              </option>
              <option value="hellebore-petals">Hellebore petals</option>
              <option value="honeysuckle">Honeysuckle</option>
              <option value="hop-umbels">Hop umbels</option>
              <option value="ribleaf">Ribleaf</option>
              <option value="verbena">Verbena</option>
              <option value="white-myrtle-petals">White myrtle petals</option>
              <option value="wolfsbane">Wolfsbane</option>
            </select>
          </label>
          <Button
            onPress={async () => {
              const res = await updateMarker(
                markerId,
                oldPlantSlug,
                newPlantSlug,
                setIsLoading
              )

              if (res) setIsModalSuccessOpen(true)
            }}
            size="sm"
            style={{ margin: '20px 0 20px 0' }}
            disabled={isLoading}
          >
            {isLoading && (
              <Loading type="points" color="currentColor" size="sm" />
            )}
            {!isLoading && 'Clique aqui para atualizar o marker'}
          </Button>
        </form>
      </div>
    </>
  )
}

export default UpdatePlantForm
