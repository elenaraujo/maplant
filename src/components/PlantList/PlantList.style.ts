import styled from 'styled-components'

export const GreenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListGreenBackground = styled.div`
  position: relative;
  width: inherit;
  height: fit-content;
  background-color: var(--soft-green);
  padding: 0px 30px 100px 30px;

  @media (max-width: 639px) {
    padding: 0px 30px 50px 30px;
  }
`

export const GreenForm = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  bottom: -2px;

  @media (max-width: 639px) {
    height: 100px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 30px 40px;
  width: inherit;

  @media (max-width: 639px) {
    height: fit-content;
    padding-top: 0;
    gap: 10px 5px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 639px) {
    margin-left: 5px;
    min-width: 24px;
  }
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 639px) {
    font-size: 12px;
    margin-left: 10px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    margin-left: 10px;
  }
`

export const componentCss = (windowWidth: number) => {
  if (windowWidth < 639) {
    return {
      imgSize: 44,
      outterCardWidth: 140,
      innerCardwidth: 130,
      outterCardHeight: 70
    }
  }

  if (windowWidth < 1000) {
    return {
      imgSize: 64,
      outterCardWidth: 210,
      innerCardwidth: 200,
      outterCardHeight: 70
    }
  }

  return {
    imgSize: 99,
    outterCardWidth: 310,
    innerCardwidth: 300,
    outterCardHeight: 117
  }
}
