import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 157px;
  width: 100%;
  background-color: var(--green);
`

export const WidthLimiter = styled.div`
  width: 1280px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
`

export const ImgWrapper = styled.div`
  height: 157px;
  width: 224px;
  display: flex;
  padding: 30px 0 30px 46px;

  @media (max-width: 640px) {
    width: 170px;
    height: 157px;
    padding: 40px 0 40px 25px;
  }
`
