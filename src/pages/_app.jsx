import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

import NextNProgress from "nextjs-progressbar";

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  let router = useRouter()

  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Top.gg API Documentation</title>
        ) : (
          <title>{`${pageProps.title} - Top.gg API Documentation`}</title>
        )}
        <meta name="description" content={pageProps.description} />
        <meta name="theme-color" content="#ff3366" />
        <meta property="og:image" content="https://i.imgur.com/kl1S2DQ.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <NextNProgress
            color="#ff3366"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
