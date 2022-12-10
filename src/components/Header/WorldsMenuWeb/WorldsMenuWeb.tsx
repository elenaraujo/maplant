import * as S from './WorldsMenuWeb.style'
import BadgeWeb from './BadgeWeb/BadgeWeb'
import Link from 'next/link'

const WorldsMenuWeb = () => {
  return (
    <S.WorldsLinksWrapper>
      <Link href="/white-orchard" passHref>
        <S.AvailableWorld>White Orchard</S.AvailableWorld>
      </Link>

      <BadgeWeb>
        <S.World>Velen & Novigrad</S.World>
      </BadgeWeb>

      <BadgeWeb>
        <S.World>Skellige</S.World>
      </BadgeWeb>

      <BadgeWeb>
        <S.World>Kaer Morhen</S.World>
      </BadgeWeb>

      <BadgeWeb>
        <S.World>Toussaint</S.World>
      </BadgeWeb>
    </S.WorldsLinksWrapper>
  )
}

export default WorldsMenuWeb
