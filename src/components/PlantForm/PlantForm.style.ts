import styled from 'styled-components'

export const OptionsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MyModal = styled.div`
  position: absolute;
  padding-top: 40px;
  width: 300px;
  height: 300px;
  left: 5vw;
  top: 5vh;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 40%);
`

// export const MyModal = styled.div`
//   position: fixed;
//   padding-top: 40px;
//   width: 300px;
//   height: 300px;
//   left: ${(props: { isUpdate: boolean }) => (props.isUpdate ? '100px' : '5vw')};
//   top: ${(props: { isUpdate: boolean }) => (props.isUpdate ? '40px' : '5vw')};
//   border-radius: 20px;
//   background-color: rgba(255, 255, 255, 40%);
// `

export const MyH2 = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 25px;
  font-weight: 700;
`
