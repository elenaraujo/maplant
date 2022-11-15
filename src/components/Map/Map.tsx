import { MapContainer, TileLayer } from 'react-leaflet'

const Map = () => {
  return (
    <>
      <h1>Maplant</h1>
      <MapContainer
        center={[-70, -65]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        maxBounds={[
          [-150, -65],
          [0, -70]
        ]}
      >
        <TileLayer
          tms
          minZoom={3}
          maxZoom={6}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://raw.githubusercontent.com/witcher3map/witcher3map-maps/master/white_orchard/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  )
}

export default Map
