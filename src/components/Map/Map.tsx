import PlantForm from 'components/PlantForm/PlantForm'
import PopupContent from 'components/PopupContent/PopupContent'
import { MapProps } from 'pages/map'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { getSvgFromSlug } from 'utils/functions'

const MyContainer = () => {
  const map = useMap()
  map.addEventListener('click', (e) => console.log(e.latlng))
  return null
}

// Implementar verificação de pattern ao fazer cadastro de location
// para evitar valores diferentes de number positivo ou negativo
const Map = ({ markers }: MapProps) => {
  return (
    <>
      <PlantForm />
      <MapContainer
        center={[-70, -65]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '106em', margin: 'auto' }}
        // [diagonal inferior direita]
        // [diagonal superior esquerda]
        maxBounds={[
          [-150, 45],
          [0, -180]
        ]}
      >
        <MyContainer />
        <TileLayer
          tms
          minZoom={3}
          maxZoom={6}
          attribution='&copy; <a href="https://github.com/witcher3map/witcher3map-maps">Witcher3map</a> contributors'
          url="https://raw.githubusercontent.com/witcher3map/witcher3map-maps/master/white_orchard/{z}/{x}/{y}.png"
        />
        {markers?.map(({ coordinates, plant }: MarkerProps) => {
          const { lat, lng } = coordinates
          const { plantName, slug, image } = plant

          return (
            <Marker
              key={`marker-${slug}-${lat}-${lng}`}
              position={[lat, lng]}
              title={plantName}
              icon={getSvgFromSlug(slug)}
            >
              <Popup maxWidth={250} minWidth={230} closeButton={false}>
                <PopupContent image={image} plantName={plantName} slug={slug} />
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}

export type MarkerProps = {
  coordinates: { lat: number; lng: number }
  plant: {
    image: { url: string }
    plantName: string
    slug: string
  }
}

export default Map
