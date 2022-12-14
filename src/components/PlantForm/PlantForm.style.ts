import styled from 'styled-components'

export const OptionsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 639px) {
    margin-top: 15px;
  }
`

type isUpdateProps = { isUpdate: boolean }

export const MyModal = styled.div`
  position: ${({ isUpdate }: isUpdateProps) =>
    isUpdate ? 'static' : 'absolute'};
  padding-top: 40px;
  width: 300px;
  height: 360px;
  left: 5vw;
  top: 5vh;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 70%);

  @media (max-width: 639px) {
    padding-top: 20px;
    background-color: rgba(255, 255, 255, 100%);

    left: ${({ isUpdate }: isUpdateProps) => (isUpdate ? '0' : '28vw')};
    top: ${({ isUpdate }: isUpdateProps) => (isUpdate ? '0' : '2vh')};

    width: 268px;
    height: 250px;
  }
`

export const MyH2 = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 25px;
  font-weight: 700;

  @media (max-width: 639px) {
    font-size: 20px;
  }
`

export const P = styled.p`
  text-align: center;
  font-size: 14px;
  width: 80%;
  margin-top: 10px;

  @media (max-width: 639px) {
    font-size: 12px;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
