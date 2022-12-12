import styled from 'styled-components'

export const Content = styled.section``

type WidthLimiterProps = { windowWidth: number }
export const WidthLimiter = styled.div`
  width: ${({ windowWidth }: WidthLimiterProps) => (windowWidth * 70) / 100}px;
  max-width: 1280px;
  display: inline-flex;

  @media (max-width: 939px) {
    width: 80%;
  }

  @media (max-width: 639px) {
    width: 90%;
  }

  @media (max-width: 339px) {
    width: 100%;
  }
`

export const InvadeBannerAreaContainer = styled.div`
  position: relative;
  bottom: 150px;

  @media (max-width: 639px) {
    bottom: 30px;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30em;
`

export const Body = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: inherit;
`

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const BannerContainer = styled.div`
  opacity: 35%;
  height: 508px;
  width: 100%;
  position: relative;

  @media (max-width: 639px) {
    height: 208px;
  }
`

export const TitleWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  gap: 30px;
  align-items: center;
  margin-top: 10vh;
  font-size: 24px;
  color: var(--brown);
  text-align: center;

  @media (max-width: 639px) {
    margin-top: 5vh;
    gap: 10px;
  }

  @media (max-width: 339px) {
    gap: 0px;
  }
`

export const H1Custom = styled.h1`
  font-size: 46px;
  color: var(--brown);

  @media (max-width: 639px) {
    font-size: 24px;
  }

  @media (max-width: 339px) {
    font-size: 20px;
  }
`

export const Paragraph = styled.p`
  color: var(--gold);
  font-size: 18px;

  @media (max-width: 639px) {
    font-size: 14px;
  }
`

export const PlantData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  margin-top: 19vh;

  @media (max-width: 639px) {
    margin-top: 15vh;
  }
`

export const ValueText = styled.span`
  font-size: 20px;
  color: var(--brown);
  font-weight: 600;

  @media (max-width: 639px) {
    font-size: 16px;
  }
`

export const ValuesText = styled.span`
  font-size: 16px;
  color: var(--brown);
  text-align: justify;

  @media (max-width: 639px) {
    font-size: 14px;
  }
`
