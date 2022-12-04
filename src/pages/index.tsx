import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
        <h1>Esssa é a página inicial de lista de plantas</h1>
      </LinkWrapper>
    </>
  )
}
