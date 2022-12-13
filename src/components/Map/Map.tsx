import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { MapProps } from 'pages/white-orchard'

import AddMarker from 'components/AddMarker/AddMarker'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import PopupContent from 'components/PopupContent/PopupContent'
import { MyLatLngLEAFLET } from 'components/MyLatLngLEAFLET/MyLatLngLEAFLET'

import { getSvgFromSlug } from 'utils/functions'

// Implementar verificação de pattern ao fazer cadastro de location
// para evitar valores diferentes de number positivo ou negativo
const Map = ({ markers, plants }: MapProps) => {
  const [clickedPlace, setClickedPlace] = useState({ lat: 0, lng: 0 })
  const [addModalOpen, setAddModalOpen] = useState(false)

  return (
    <>
      <Header hideWorlds />

      <AddMarker
        latLng={clickedPlace}
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
        plants={plants}
      />
      <MapContainer
        center={[-70, -65]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', margin: 'auto' }}
        // [diagonal inferior direita]
        // [diagonal superior esquerda]
        maxBounds={[
          [-150, 45],
          [0, -180]
        ]}
      >
        <MyLatLngLEAFLET setClickedPlace={setClickedPlace} />

        <TileLayer
          tms
          // minZoom={4}
          maxZoom={6}
          attribution='&copy; <a href="https://github.com/witcher3map/witcher3map-maps">Witcher3map</a> contributors'
          url="https://raw.githubusercontent.com/witcher3map/witcher3map-maps/master/white_orchard/{z}/{x}/{y}.png"
        />

        {markers?.map(({ id, coordinates, plant }: MarkerProps) => {
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
                <PopupContent
                  markerId={id}
                  image={image}
                  plantName={plantName}
                  slug={slug}
                  plants={plants}
                />
              </Popup>
            </Marker>
          )
        })}

        {addModalOpen && (
          <Marker position={clickedPlace} title={'temporaryMarker'}>
            <Popup maxWidth={250} minWidth={230} closeButton={false}>
              Here is where your new marker will be registered
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <Footer />
    </>
  )
}

export type MarkerProps = {
  id: string
  coordinates: { lat: number; lng: number }
  plant: {
    image: { url: string }
    plantName: string
    slug: string
  }
}

export default Map
