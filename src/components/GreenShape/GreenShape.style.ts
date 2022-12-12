import styled from 'styled-components'

export const GreenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const ListGreenBackground = styled.div`
  position: relative;
  width: inherit;
  height: fit-content;
  background-color: var(--soft-green);
  padding: 0px 30px 100px 30px;
  min-height: 400px;

  @media (max-width: 639px) {
    padding: 0px 5px 50px 5px;
  }
`
