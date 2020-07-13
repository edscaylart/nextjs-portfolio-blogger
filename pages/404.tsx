import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import siteConfig from '../site.config'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>{`404 | ${siteConfig.baseName}`}</title>
        <meta name='title' content={`404 | ${siteConfig.baseName}`} />
        <meta name='description' content={siteConfig.desc} />
        <meta property='og:title' content={`404 | ${siteConfig.baseName}`} />
        <meta property='og:description' content={siteConfig.desc} />
        {/* <meta property='og:image' content={`${siteConfig.baseUrl}/assets/prtsc700.jpg`} /> */}
        <meta property='og:url' content={`${siteConfig.baseUrl}/404`} />
      </Head>
      <div style={{ textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <h3>There's nothing to see here</h3>
        <p><Link href='/'><a>Please go back to Home.</a></Link></p>
      </div>
    </Layout>
  )
}