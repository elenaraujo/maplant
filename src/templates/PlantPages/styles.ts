import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`
export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--large);
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30em;
`

export const Body = styled.div`
  p {
    font-size: var(--small);
    line-height: var(--medium);
  }
`
