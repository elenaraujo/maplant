import { useMap } from 'react-leaflet'

export const MyLatLngLEAFLET = ({ setClickedPlace }: MyLatLngProps) => {
  const map = useMap()
  map.addEventListener('click', (e) => {
    setClickedPlace(e.latlng)
  })

  return null
}

type MyLatLngProps = {
  setClickedPlace: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >
}
