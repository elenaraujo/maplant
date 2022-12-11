import React, { useState } from 'react'

import { Button, Modal } from '@nextui-org/react'
import { PencilSquare, Trash } from '@styled-icons/bootstrap'
import UpdatePlantForm from 'components/Forms/ModalUpdatePlantForm'
import Image from 'next/image'
import Link from 'next/link'
import { removeClassname } from 'utils/functions'
import * as S from './PopupContent.style'
import deleteMarker from 'graphql/mutationsApi/deleteMarker'

const PopupContent = ({
  markerId,
  image,
  plantName,
  slug
}: PopupContentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  removeClassname('leaflet-popup-content')

  return (
    <>
      <Modal
        open={isModalOpen && !isModalSuccessOpen}
        closeButton
        onClose={() => setIsModalOpen(false)}
      >
        <UpdatePlantForm
          markerId={markerId}
          oldPlantSlug={slug}
          setIsModalSuccessOpen={setIsModalSuccessOpen}
        />
      </Modal>

      <Modal
        width="500px"
        open={isModalSuccessOpen}
        closeButton
        onClose={() => {
          setIsModalSuccessOpen(false)
          window.location.reload()
        }}
        style={{ height: 150 }}
      >
        <h1>Success</h1>
        <br />
        <p>
          The marker was successfully updated! If your changes doesn&apos;t
          appear immediately just wait a feel seconds and then refresh the page
        </p>
      </Modal>

      <Modal
        width="500px"
        open={isModalDeleteOpen}
        closeButton
        onClose={() => {
          setIsModalDeleteOpen(false)
        }}
        style={{ height: 'fit-content' }}
      >
        <h1>Delete marker?</h1>
        <br />
        <p style={{ padding: '0 20px 0 20px' }}>
          Are you sure you want to delete this marker? This action can&apos;t be
          undone.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: '20px 0 20px 0'
          }}
        >
          <Button color="error" onPress={() => deleteMarker(markerId)}>
            Yes, delete it
          </Button>
          <Button onPress={() => setIsModalDeleteOpen(false)}>Cancel</Button>
        </div>
      </Modal>

      <S.Container>
        <S.ActionsWrapper>
          <Button
            onPress={() => setIsModalOpen(true)}
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
}

export default PopupContent
