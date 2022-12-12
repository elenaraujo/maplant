import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './Header.style'
import WorldsMenuMobile from './WorldsMenuMobile/WorldsMenuMobile'
import WorldsMenuWeb from './WorldsMenuWeb/WorldsMenuWeb'
import logo from '../../../public/img/logo.png'

const Header = ({ isMobile = true, hideWorlds = false }: HeaderProps) => {
  return (
    <S.HeaderContainer className="header">
      <S.WidthLimiter
        style={{ display: `${hideWorlds ? 'contents' : 'flex'}` }}
      >
        <Link href="/" passHref>
          <S.ImgWrapper>
            <Image
              src={logo}
              alt="The Witcher 3 Wild Hunt writen in metalic gray with red scratches drawed in the middle"
              width={224}
              height={115}
            />
          </S.ImgWrapper>
        </Link>
        {!hideWorlds && (isMobile ? <WorldsMenuMobile /> : <WorldsMenuWeb />)}
      </S.WidthLimiter>
    </S.HeaderContainer>
  )
}

type HeaderProps = { isMobile?: boolean; hideWorlds?: boolean }

export default Header
