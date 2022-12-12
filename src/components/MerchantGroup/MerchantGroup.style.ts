import Image from 'next/image'
import styled from 'styled-components'

export const MerchantsWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 60px;
  margin-top: 50px;
  width: inherit;

  @media (max-width: 639px) {
  }
`

export const MerchantsContainer = styled.div`
  align-self: center;
  max-width: 800px;
  width: 800px;

  @media (max-width: 1000px) {
    width: 500px;
    max-width: 500px;
  }

  @media (max-width: 639px) {
    width: 100%;
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 206px;
`

export const CustomImage = styled(Image)`
  border-radius: 20px;
`

export const Text = styled.span`
  font-size: 14px;
  color: var(--gold);
`
