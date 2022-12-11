import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const InvadeBannerAreaContainer = styled.div`
  position: relative;
  top: -150px;

  @media (max-width: 939px) {
    top: -150px;
  }

  @media (max-width: 639px) {
    top: -100px;
  }
`

type WidthLimiterProps = { windowWidth: number }
export const HomeBodyContainer = styled.div`
  width: ${({ windowWidth }: WidthLimiterProps) => (windowWidth * 70) / 100}px;
  max-width: 1280px;

  display: flex;
  justify-content: center;

  @media (max-width: 939px) {
    width: ${({ windowWidth }: WidthLimiterProps) =>
      (windowWidth * 90) / 100}px;
  }

  @media (max-width: 639px) {
    width: 90%;
  }

  @media (max-width: 339px) {
    width: 100%;
  }
`
