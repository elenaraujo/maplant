import Image from 'next/image'
import * as S from './AlchemicalItems.style'

const AlchemicalItems = ({ alchemicalItems }: AlchemicalItemsProps) => {
  return (
    <S.AlchemicalGroup>
      {alchemicalItems.map(({ name, image }) => {
        return (
          <S.TransparencyWrapper key={name}>
            <S.AlchemicalItemCardWrapper>
              <S.Img>
                <S.ImageWrapper>
                  <Image
                    key={name}
                    src={image.url}
                    alt={`Image of ${name} alchemical item`}
                    width={54}
                    height={54}
                  />
                </S.ImageWrapper>
              </S.Img>
              <S.NameWrapper>{name}</S.NameWrapper>
            </S.AlchemicalItemCardWrapper>
          </S.TransparencyWrapper>
        )
      })}
    </S.AlchemicalGroup>
  )
}

type AlchemicalItemsProps = {
  alchemicalItems: [
    {
      name: string
      image: { url: string }
    }
  ]
}

export default AlchemicalItems
