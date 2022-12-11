import Link from 'next/link'
import * as S from './Footer.style'

const ARef = ({ url, text }: { url: string; text: string }) => (
  <b>
    <Link href={url} passHref>
      <S.aLink target="blank">{text}</S.aLink>
    </Link>
  </b>
)

export default ARef
