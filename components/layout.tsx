import LayoutStyles from '../styles/modules/layout.module.sass'
import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from './shared/footer'
import NavBar from './shared/nav-bar'
import type { LayoutProps } from '../types'
import { DEFAULT_PAGE_DESCRIPTION, DEFAULT_PAGE_TITLE } from '../helpers/constants'
import { useStylesModules } from '../helpers/functions'

const Layout: FC<LayoutProps> = (props) => {
  const { children, ...layoutProps } = props
  const [pageTitle, setPageTitle] = useState<string>(DEFAULT_PAGE_TITLE)
  const [pageDescription, setPageDescription] = useState<string>(DEFAULT_PAGE_DESCRIPTION)

  useEffect(() => {
    setPageTitle(
      layoutProps.pageTitle
        ? `${layoutProps.pageTitle} - ${DEFAULT_PAGE_TITLE}`
        : DEFAULT_PAGE_TITLE
    )
  }, [layoutProps.pageTitle])

  useEffect(() => {
    setPageDescription(layoutProps.pageDescription ?? DEFAULT_PAGE_DESCRIPTION)
  }, [layoutProps.pageDescription])

  return (
    <div className={LayoutStyles.rootWrapper}>
      <NavBar />
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={useStylesModules(LayoutStyles.wrappedComponent)}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
