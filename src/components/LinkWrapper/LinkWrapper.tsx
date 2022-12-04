import Link from 'next/link'
import * as S from './LinkWrapper.style'

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

export default LinkWrapper
