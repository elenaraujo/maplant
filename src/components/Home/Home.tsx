import Banner from 'components/Banner/Banner'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import PlantList from 'components/PlantList/PlantList'
import { PlantsPropTypes } from 'pages'
import React from 'react'
import { useWidth } from 'utils/hooks'
import * as S from './Home.style'

const Home = ({ plants }: PlantsPropTypes) => {
  const { isMobile, windowWidth } = useWidth()

  return (
    <>
      <Header isMobile={isMobile} />
      <Banner />
      <S.InvadeBannerAreaContainer>
        <S.ContainerWrapper>
          <S.HomeBodyContainer windowWidth={windowWidth}>
            <PlantList plants={plants} windowWidth={windowWidth} />
          </S.HomeBodyContainer>
        </S.ContainerWrapper>
        <Footer />
      </S.InvadeBannerAreaContainer>
    </>
  )
}

export default Home
