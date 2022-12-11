import styled from 'styled-components'
import { WidthLimiterProps } from './Banner'

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 790px;
  width: 100%;

  object-fit: cover;
  position: relative;

  @media (max-width: 640px) {
    height: 400px;
  }
`
export const WidthLimiter = styled.div`
  width: ${({ windowWidth }: WidthLimiterProps) => (windowWidth * 70) / 100}px;
  max-width: 1280px;
  height: 100%;

  @media (max-width: 939px) {
    width: 100%;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 474px;
  height: 100%;
  position: relative;

  @media (max-width: 939px) {
    margin-left: 60px;
    width: 350px;
  }

  @media (max-width: 640px) {
    margin-left: 30px;
    width: 200px;
  }
`
