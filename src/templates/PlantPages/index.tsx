import Image from 'next/image'

import * as S from './styles'

export type PlantPageTemplateProps = {
  plantName: string
  description: string
  imageURL: string
}

const PlantPageTemplate = ({
  plantName,
  description,
  imageURL
}: PlantPageTemplateProps) => {
  return (
    <S.Content>
      <S.Heading>{plantName}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </S.Body>

      <Image
        src={imageURL}
        alt={`Image of ${plantName} plant`}
        width={64}
        height={64}
      />
    </S.Content>
  )
}

export default PlantPageTemplate
