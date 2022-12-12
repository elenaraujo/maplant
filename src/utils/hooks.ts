import { useEffect, useState } from 'react'

export const useHeigth = () => {
  const [height, setHeight] = useState(400)

  useEffect(() => {
    const footer = document.getElementsByClassName('footer')
    const header = document.getElementsByClassName('header')

    const footerAndHeaderHeight =
      footer[0].clientHeight + header[0].clientHeight

    setHeight(window.innerHeight - footerAndHeaderHeight)
  }, [])

  return height
}

export const useWidth = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1020)

  useEffect(() => {
    setIsMobile(window.innerWidth < 940)
    setWindowWidth(window.innerWidth)
  }, [setIsMobile])

  return {
    isMobile,
    setIsMobile,
    windowWidth,
    setWindowWidth
  }
}
