import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const WidthLimiter = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  max-width: 1280px;
`

export const GeraltsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;

  @media (max-width: 639px) {
    height: fit-content;
    display: flex;
    align-self: end;
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
    align-self: center;
    width: 75%;
  }
`

export const CreditsP = styled.p`
  color: var(--gold);
  text-align: center;

  @media (max-width: 639px) {
    font-size: 8px;
  }
`

export const CreditsP2 = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--gold);
  text-align: center;

  @media (max-width: 639px) {
    gap: 3px;
    font-size: 8px;
  }
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

  @media (max-width: 639px) {
    gap: 7px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
