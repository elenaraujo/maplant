import Image from 'next/image'
import * as S from './GreenShape.style'
import form from '../../../public/img/form.png'

const GreenShape = ({ children }: GreenShapeProps) => {
  return (
    <S.GreenWrapper>
      <S.GreenForm>
        <Image src={form} alt="" layout="fill" />
      </S.GreenForm>

      <S.ListGreenBackground>{children}</S.ListGreenBackground>
    </S.GreenWrapper>
  )
}

type GreenShapeProps = {
  children: JSX.Element | JSX.Element[]
}

export default GreenShape
