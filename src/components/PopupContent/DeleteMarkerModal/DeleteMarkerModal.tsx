import { Button, Loading, Modal } from '@nextui-org/react'
import deleteMarker from 'graphql/mutationsApi/deleteMarker'
import { useState } from 'react'
import { useWidth } from 'utils/hooks'

import * as S from './DeleteMarkerModal.style'

type DeleteMarkerModalProps = {
  markerId: string
  isModalDeleteOpen: boolean
  setIsModalDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteMarkerModal = ({
  markerId,
  isModalDeleteOpen,
  setIsModalDeleteOpen
}: DeleteMarkerModalProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const { isMobile } = useWidth()

  return (
    <Modal
      width={isMobile ? '320px' : '500px'}
      open={isModalDeleteOpen}
      closeButton
      onClose={() => {
        setIsModalDeleteOpen(!isModalDeleteOpen)
      }}
      style={{ height: 'fit-content', alignItems: 'center' }}
    >
      <h1>Delete marker?</h1>
      <br />
      <p style={{ padding: '0 20px 0 20px' }}>
        Are you sure you want to delete this marker? This action can&apos;t be
        undone.
      </p>
      <S.ButtonsGroup>
        <Button
          flat
          size={isMobile ? 'sm' : 'md'}
          style={{
            backgroundColor: 'var(--dark-blue)',
            color: 'var(--white)'
          }}
          onPress={async () => {
            setIsLoading(!isLoading)
            await deleteMarker(markerId)

            if (typeof window !== 'undefined') {
              window.location.reload()
            }
          }}
        >
          {isLoading && (
            <Loading type="points" color="currentColor" size="sm" />
          )}
          {!isLoading && 'Yes, delete it'}
        </Button>
        <Button
          disabled={isLoading}
          size={isMobile ? 'sm' : 'md'}
          bordered
          style={{
            color: 'var(--dark-blue)',
            borderColor: 'var(--dark-blue)',
            marginLeft: '5px'
          }}
          onPress={() => {
            setIsModalDeleteOpen(!isModalDeleteOpen)
          }}
        >
          Cancel
        </Button>
      </S.ButtonsGroup>
    </Modal>
  )
}

export default DeleteMarkerModal
