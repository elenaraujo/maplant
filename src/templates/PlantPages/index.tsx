import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { useWidth } from '../../utils/hooks'
import Image from 'next/image'
import * as S from './styles'

import banner from '../../../public/img/banner.png'
import GreenShape from 'components/GreenShape/GreenShape'
import AlchemicalItems from 'components/AlchemicalItems/AlchemicalItems'
import MerchantGroup from 'components/MerchantGroup/MerchantGroup'

export type PlantPageTemplateProps = {
  plant: {
    plantName: string
    slug: string
    description: string
    value: { buy: number; base: number; sell: 1 }
    image: { url: string }
    note: [string]
    merchants: [{ text: string; image: { url: string } }]
    alchemicalItems: [{ name: string; image: { url: string } }]
  }
}

const PlantPageTemplate = ({ plant }: PlantPageTemplateProps) => {
  const { windowWidth } = useWidth()

  const { plantName, description, image, alchemicalItems, merchants, value } =
    plant

  const { buy, base, sell } = value

  return (
    <>
      <Header hideWorlds />
      <S.BannerWrapper>
        <S.BannerContainer>
          <Image
            src={banner}
            alt="Background image of Continent, The Witcher's world"
            layout="fill"
            objectFit="cover"
          />
        </S.BannerContainer>

        <S.TitleWrapper>
          <Image
            src={image.url}
            alt={`Image of ${plantName} plant`}
            width={64}
            height={64}
          />

          <S.H1Custom>{plantName}</S.H1Custom>

          <Image
            src={image.url}
            alt={`Image of ${plantName} plant`}
            width={64}
            height={64}
          />
        </S.TitleWrapper>

        <S.Value>
          <S.ValueText>Value</S.ValueText>
          <S.ValuesText>
            <b>Buy:</b> {buy || 0} 💰
            <b>Base:</b> {base || 0} 💰
            <b>Sell:</b> {sell || 0}
          </S.ValuesText>
        </S.Value>
      </S.BannerWrapper>

      <S.InvadeBannerAreaContainer>
        <S.Body>
          <S.WidthLimiter windowWidth={windowWidth}>
            <GreenShape>
              <S.PlantData>
                <S.Paragraph>{description}</S.Paragraph>

                <AlchemicalItems alchemicalItems={alchemicalItems} />
                {!!merchants.length && (
                  <>
                    <S.Paragraph>
                      It can be purchased from the following merchants:
                    </S.Paragraph>

                    <MerchantGroup merchants={merchants} />
                  </>
                )}
              </S.PlantData>
            </GreenShape>
          </S.WidthLimiter>
        </S.Body>
        <Footer />
      </S.InvadeBannerAreaContainer>
    </>
  )
}

export default PlantPageTemplate
