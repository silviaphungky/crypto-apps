import { memo, useEffect, useState } from 'react'
import { SvgXml } from 'react-native-svg'

const MarketTokenIcon = ({ url, color }: { url: string; color: string }) => {
  const [imgXml, setImgXml] = useState('<svg></svg>')

  const getImgXml = async () => {
    const xml = await (await fetch(url)).text()
    setImgXml(xml)
  }

  useEffect(() => {
    getImgXml()
  }, [])

  return (
    <SvgXml
      xml={imgXml.replace(/fill="currentColor"/g, `fill="${color}"`)}
      width={30}
      height={30}
    />
  )
}

export default memo(MarketTokenIcon)
