import { Card } from '@nextui-org/react'
import Image from 'next/image'

import * as S from './PlantList.style'
import { componentCss as css } from './PlantList.style'
import form from '../../../public/img/form.png'

const PlantList = ({ plants, windowWidth }: PlantListPropTypes) => {
  const c = css(windowWidth)

  return (
    <S.GreenWrapper>
      <S.GreenForm>
        <Image src={form} alt="" layout="fill" />
      </S.GreenForm>

      <S.ListGreenBackground>
        <S.CardsWrapper>
          {plants.map(
            ({
              image,
              plantName,
              slug
            }: {
              image: { url: string }
              plantName: string
              slug: string
            }) => {
              return (
                <Card
                  key={slug}
                  css={{
                    width: c.outterCardWidth,
                    height: c.outterCardHeight,
                    backgroundColor: 'rgba(255, 255, 255, 40%)',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Card
                    onPress={(e) => console.log(e.target)}
                    isPressable
                    css={{
                      width: c.innerCardwidth,
                      height: 'inherit',
                      left: 5
                    }}
                  >
                    <Card.Body
                      css={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: 5
                      }}
                    >
                      <S.ImageWrapper>
                        <Image
                          src={image.url}
                          alt={`Image of the plant ${plantName}`}
                          width={c.imgSize}
                          height={c.imgSize}
                        />
                      </S.ImageWrapper>
                      <S.NameWrapper>
                        <p>{plantName}</p>
                      </S.NameWrapper>
                    </Card.Body>
                  </Card>
                </Card>
              )
            }
          )}
        </S.CardsWrapper>
      </S.ListGreenBackground>
    </S.GreenWrapper>
  )
}

export type PlantListPropTypes = {
  plants: [
    {
      plantName: string
      slug: string
      image: {
        url: string
      }
    }
  ]
  windowWidth: number
}

export default PlantList
