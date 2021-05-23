import Link from 'next/link'
import Layout from '../components/Layout'

const ProfilePage = () => (
  <Layout title="プロフィール Profile | 小澤泰河 TaigaOzawa">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default ProfilePage
