import { PencilSquare, Trash } from '@styled-icons/bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { removeClassname } from 'utils/functions'
import * as S from './PopupContent.style'

const PopupContent = ({ image, plantName, slug }: PopupContentProps) => {
  removeClassname('leaflet-popup-content')

  return (
    <S.Container>
      <S.ActionsWrapper>
        <Link href="/" passHref>
          <S.IconWrapper>
            <PencilSquare />
          </S.IconWrapper>
        </Link>

        <Link href="/" passHref>
          <S.IconWrapper>
            <Trash />
          </S.IconWrapper>
        </Link>
      </S.ActionsWrapper>
      <S.Wrapper>
        <S.ImgWrapper>
          <Image
            src={image.url}
            alt={`Image of ${plantName} plant`}
            width={64}
            height={64}
          />
        </S.ImgWrapper>
        <S.TxtWrapper>
          <S.PlantName>{plantName}</S.PlantName>
          <Link href={`/${slug}`} passHref>
            <S.PlantLink>Ver mais</S.PlantLink>
          </Link>
        </S.TxtWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

type PopupContentProps = {
  image: { url: string }
  plantName: string
  slug: string
}

export default PopupContent
