import Image from 'next/image'
import * as S from './Banner.style'

import banner from '../../../public/img/banner2.png'

const Banner = () => {
  return (
    <div>
      <S.ImgWrapper>
        <Image
          src={banner}
          alt="Background image of Continent, The Witcher's world"
          height={775}
          objectFit={'cover'}
        />
      </S.ImgWrapper>
      <h1>Oi</h1>
      <h1>Oi</h1>
    </div>
  )
}

export default Banner
