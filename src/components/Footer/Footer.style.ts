import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  align-items: center;
  flex-direction: row;
  min-height: 421px;
  background-color: var(--green);

  @media (max-width: 639px) {
    min-height: fit-content;
    padding-top: 20px;
    align-items: center;
  }
`

export const GeraltsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;

  @media (max-width: 639px) {
    height: fit-content;
  }
`

export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  padding-right: 40px;

  @media (max-width: 639px) {
    height: fit-content;
    padding-top: 0;
    font-size: 10px;
  }
`

export const CreditsP = styled.p`
  color: var(--gold);
  text-align: center;
`

export const CreditsP2 = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--gold);
  text-align: center;
`

export const aLink = styled.a`
  color: var(--gold);
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-bottom: 50px;
`
