import React, { useState } from 'react'

import { Button } from '@nextui-org/react'
import { PencilSquare, Trash } from '@styled-icons/bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { removeClassname } from 'utils/functions'
import * as S from './PopupContent.style'

import UpdateMarker from 'components/UpdateMarker/UpdateMarker'
import DeleteMarkerModal from './DeleteMarkerModal/DeleteMarkerModal'

const PopupContent = ({
  markerId,
  image,
  plantName,
  slug,
  plants
}: PopupContentProps) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
  removeClassname('leaflet-popup-content')

  return (
    <>
      <UpdateMarker
        markerId={markerId}
        modalOpen={isModalUpdateOpen}
        setModalOpen={setIsModalUpdateOpen}
        oldPlantSlug={slug}
        plants={plants}
      />

      <DeleteMarkerModal
        markerId={markerId}
        isModalDeleteOpen={isModalDeleteOpen}
        setIsModalDeleteOpen={setIsModalDeleteOpen}
      />

      <S.Container>
        <S.ActionsWrapper>
          <Button
            onPress={() => setIsModalUpdateOpen(!isModalUpdateOpen)}
            style={{ ...S.StyledButton }}
          >
            <S.IconWrapper>
              <PencilSquare />
            </S.IconWrapper>
          </Button>

          <Button
            onPress={() => setIsModalDeleteOpen(true)}
            style={{ ...S.StyledButton }}
          >
            <S.IconWrapper>
              <Trash />
            </S.IconWrapper>
          </Button>
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
    </>
  )
}

type PopupContentProps = {
  markerId: string
  image: { url: string }
  plantName: string
  slug: string
  plants: [
    {
      plantName: string
      slug: string
      image: {
        url: string
      }
    }
  ]
}

export default PopupContent
