import styled from 'styled-components'

export const AddMarkerWrapper = styled.div`
  width: fit-content;
  position: absolute;
  z-index: 8888;
`

export const AddButtonContainer = styled.div`
  position: absolute;
  left: 88vw;
  top: 5vh;

  @media (max-width: 2300px) {
    left: 86vw;
    top: 5vh;
  }

  @media (max-width: 2200px) {
    left: 84vw;
    top: 5vh;
  }

  @media (max-width: 939px) {
    left: 67vw;
    top: 2vh;
  }

  @media (max-width: 639px) {
    left: 58vw;
    top: 2vh;
  }

  @media (max-width: 300px) {
    left: 43vw;
    top: 2vh;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 5px;
`

export const ModalWrapper = styled.div`
  display: flex;
`
