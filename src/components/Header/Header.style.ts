import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 157px;
  width: 100%;
  background-color: var(--green);

  @media (max-width: 640px) {
    height: 127px;
  }
`

export const WidthLimiter = styled.div`
  width: 1280px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
`

export const ImgWrapper = styled.div`
  height: 100%;
  width: 254px;
  display: flex;
  padding: 30px 0 20px 46px;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 170px;
    height: 100%;
    padding: 30px 0 20px 25px;
  }
`
