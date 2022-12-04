import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const MyContainer = () => {
  const map = useMap()
  map.addEventListener('click', (e) => console.log(e.latlng))
  return null
}

const Map = ({ places }: MapProps) => {
  return (
    <>
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
        {places?.map(({ id, name, description, location }) => {
          const { y, x } = location

          return (
            <Marker key={`place-${id}`} position={[y, x]} title={name}>
              <Popup>{description}</Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}

export type Place = {
  id: string
  name: string
  slug: string
  description: string
  location: {
    y: number
    x: number
  }
}

export type MapProps = {
  places?: Place[]
}

export default Map
