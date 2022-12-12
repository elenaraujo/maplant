import { Button, Modal } from '@nextui-org/react'
import deleteMarker from 'graphql/mutationsApi/deleteMarker'

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
  return (
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
      <S.ButtonsGroup>
        <Button
          flat
          style={{
            backgroundColor: 'var(--dark-blue)',
            color: 'var(--white)'
          }}
          onPress={() => deleteMarker(markerId)}
        >
          Yes, delete it
        </Button>
        <Button
          bordered
          style={{
            color: 'var(--dark-blue)',
            borderColor: 'var(--dark-blue)'
          }}
          onPress={() => setIsModalDeleteOpen(false)}
        >
          Cancel
        </Button>
      </S.ButtonsGroup>
    </Modal>
  )
}

export default DeleteMarkerModal
