import Image from 'next/image'
import * as S from './Banner.style'

import banner from '../../../public/img/banner.png'
import title from '../../../public/img/title.svg'
import { useEffect, useState } from 'react'

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(1024)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [setWindowWidth])

  return (
    <div>
      <S.ImgWrapper>
        <Image
          src={banner}
          alt="Background image of Continent, The Witcher's world"
          layout="fill"
          objectFit="cover"
        />
        <S.WidthLimiter windowWidth={windowWidth}>
          <S.TitleWrapper>
            <Image src={title} layout="fill" />
          </S.TitleWrapper>
        </S.WidthLimiter>
      </S.ImgWrapper>
    </div>
  )
}

export type WidthLimiterProps = { windowWidth: number }

export default Banner
