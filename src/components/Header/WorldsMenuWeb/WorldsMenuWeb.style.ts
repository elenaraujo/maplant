import styled from 'styled-components'

export const WorldsLinksWrapper = styled.div`
  color: var(--gold);
  font-size: 18px;
  font-weight: 400;
  margin-top: 65px;
  margin-right: 50px;
  white-space: nowrap;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`

export const AvailableWorld = styled.a`
  margin-left: 30px;
  text-decoration: none;
  color: var(--gold);
`

export const World = styled.span`
  margin-left: 25px;
  color: var(--gray);
`
