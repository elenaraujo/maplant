import dynamic from 'next/dynamic'
import { places } from 'utils/mocks'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

const MapPage = () => <Map places={places} />

export default MapPage
