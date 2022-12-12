import * as S from './MerchantGroup.style'

const MerchantGroup = ({ merchants }: MerchantsGroupProps) => {
  return (
    <S.MerchantsContainer>
      <S.MerchantsWrapper>
        {merchants.map(({ text, image }) => {
          return (
            <S.ImgWrapper key={text}>
              <S.CustomImage
                src={image.url}
                alt={`Image of the merchant: ${text}`}
                width={206}
                height={281}
              />
              <S.Text>{text}</S.Text>
            </S.ImgWrapper>
          )
        })}
      </S.MerchantsWrapper>
    </S.MerchantsContainer>
  )
}

type MerchantsGroupProps = {
  merchants: [
    {
      text: string
      image: { url: string }
    }
  ]
}

export default MerchantGroup
