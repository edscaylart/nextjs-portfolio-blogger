import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to my humble space 🖖</h1>
    <h3>👷🏽‍♂️ in development</h3>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
