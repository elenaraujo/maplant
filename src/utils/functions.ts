import L from 'leaflet'

export const removeClassname = (classname: string) => {
  if (typeof window !== 'undefined') {
    const el = document.getElementsByClassName(classname)
    if (el.length > 0) el[0].classList.remove(classname)
  }
}

export const getSvgFromSlug = (slug: string) => {
  const icon = L.icon({
    iconUrl: `img/customMarkers/${slug}.svg`,
    iconSize: new L.Point(74, 74)
  })
  return icon
}
