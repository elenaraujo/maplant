import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

export default function Home() {
  return (
    <>
      <h1>Essa é a página inicial de lista de plantas</h1>
      <LinkWrapper href="/map">
        <InfoOutline size={32} aria-label="Map" />
      </LinkWrapper>
    </>
  )
}
