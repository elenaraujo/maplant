import React from 'react'
import * as S from './Home.style'

const Home = ({ children }: any) => {
  return <S.HomeWrapper>{children}</S.HomeWrapper>
}

type HomePropTypes = {
  children: {
    Header: JSX.Element
    Banner: JSX.Element
  }
}

export default Home
