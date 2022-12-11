import React from 'react'
import Image from 'next/image'
import * as S from './Footer.style'
import geralt from '../../../public/img/geralt.png'
import ARef from './ARef'

import twitter from '../../../public/img/twitter-icon.svg'
import github from '../../../public/img/github-icon.svg'
import linkedin from '../../../public/img/linkedin-icon.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.WidthLimiter>
        <S.GeraltsContainer>
          <Image
            src={geralt}
            alt={'Geralt of Rivia holding 4 monsters head'}
            width={312}
            objectFit="cover"
          />
        </S.GeraltsContainer>

        <S.CreditsContainer>
          <S.CreditsP>
            Created by{' '}
            <ARef url="https://www.elenaraujo.com/" text="elenaraujo" />,
            licensed under{' '}
            <ARef
              url="https://creativecommons.org/licenses/by-nc-sa/2.0/"
              text="CC BY-NC-SA"
            />
            . Map assets from{' '}
            <ARef url="https://witcher3map.com/" text="witcher3map" />. Part of
            the text are taken from{' '}
            <ARef
              url="https://witcher.fandom.com/wiki/Witcher_Wiki"
              text="Witcher Wiki"
            />
            . The Witcher 3 logo, icons, map & text are the property of{' '}
            <ARef
              url="https://www.cdprojektred.com/en/"
              text="CD PROJEKT RED"
            />{' '}
            and used without permission
          </S.CreditsP>

          <S.SocialMedia>
            <S.CreditsP2>
              <Link href={'https://twitter.com/arpielen'} passHref>
                <S.aLink target="blank">
                  <Image
                    src={twitter}
                    alt={'Twitter icon in yellow gold color'}
                    width={25}
                    height={25}
                  />
                </S.aLink>
              </Link>{' '}
              <Link href={'https://github.com/elenaraujo'} passHref>
                <S.aLink target="blank">
                  <Image
                    src={github}
                    alt={'Github icon in yellow gold color'}
                    width={25}
                    height={25}
                  />
                </S.aLink>
              </Link>{' '}
              arpielen
            </S.CreditsP2>

            <S.CreditsP2>
              <Link href={'https://www.linkedin.com/in/elenaraujo/'} passHref>
                <S.aLink target="blank">
                  <Image
                    src={linkedin}
                    alt={'LinkedIn icon in yellow gold color'}
                    width={25}
                    height={25}
                  />{' '}
                </S.aLink>
              </Link>
              elenaraujo
            </S.CreditsP2>
          </S.SocialMedia>

          <S.CreditsP>
            Made with love <br /> ❤️
          </S.CreditsP>
        </S.CreditsContainer>
      </S.WidthLimiter>
    </S.FooterContainer>
  )
}

export default Footer
