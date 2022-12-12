import styled from 'styled-components'

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

  @media (max-width: 1000px) {
    font-size: 18px;
    margin-left: 10px;
  }

  @media (max-width: 639px) {
    font-size: 10px;
    margin-left: 5px;
    padding-right: 5px;
  }
`

export const componentCss = (windowWidth: number) => {
  if (windowWidth < 639) {
    return {
      imgSize: 44,
      outterCardWidth: 130,
      innerCardwidth: 120,
      outterCardHeight: 60
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
