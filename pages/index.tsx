import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>小澤泰河 TaigaOzawa</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
