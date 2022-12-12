import { Card } from '@nextui-org/react'
import Image from 'next/image'
import GreenShape from 'components/GreenShape/GreenShape'

import * as S from './PlantList.style'
import { componentCss as css } from './PlantList.style'
import { useRouter } from 'next/router'

const PlantList = ({ plants, windowWidth }: PlantListPropTypes) => {
  const router = useRouter()
  const c = css(windowWidth)

  return (
    <GreenShape>
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
                style={{
                  width: c.outterCardWidth,
                  height: c.outterCardHeight,
                  backgroundColor: 'rgba(255, 255, 255, 40%)',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Card
                  onPress={() => router.push(`/${slug}`)}
                  isPressable
                  style={{
                    width: c.innerCardwidth,
                    height: 'inherit',
                    left: 5
                  }}
                >
                  <Card.Body
                    style={{
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
    </GreenShape>
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
