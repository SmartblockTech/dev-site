import '../styles/_globals.sass'
import type { AppProps } from 'next/app'
import { FC } from 'react'

const SmartblockDevSiteApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default SmartblockDevSiteApp
