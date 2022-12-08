import { useState } from 'react'
import createMarker from 'graphql/mutationsApi/createMarker'
import { Button } from '@nextui-org/react'

const PlantForm = () => {
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [plantSlug, setPlantSlug] = useState('arenaria')

  // TODO: Adicionar forma de obter nomes e slugs de plantas
  // para não precisar criar as options 1 a 1.
  return (
    <>
      <form>
        <label>
          Lat:
          <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
        <label>
          Lng:
          <input
            type="text"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>

        <label>
          Planta:
          <select
            value={plantSlug}
            onChange={(e) => setPlantSlug(e.target.value)}
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
        <Button onPress={() => createMarker(lat, lng, plantSlug)}>
          Clique aqui para enviar
        </Button>
      </form>
    </>
  )
}

export default PlantForm
