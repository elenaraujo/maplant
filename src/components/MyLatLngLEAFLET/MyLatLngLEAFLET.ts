import { useMap } from 'react-leaflet'

export const MyLatLngLEAFLET = ({
  setClickedPlace,
  setAddModalOpen
}: MyLatLngProps) => {
  const map = useMap()
  map.addEventListener('click', (e) => {
    setClickedPlace(e.latlng)
    setAddModalOpen(true)
  })
  return null
}

type MyLatLngProps = {
  setClickedPlace: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >
  setAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
