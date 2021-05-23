import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Note } from '../../interfaces';
import Layout from '../../components/Layout';
import notes from '../../notes';

type Props = {
  notes: Note[]
}

const NotesPage = ({ notes }: Props) => (
  <Layout title="ノート Notes | 小澤泰河 TaigaOzawa">
    <h1>ノート Notes</h1>
    {notes.map(note => <p>{note.body}</p>)}
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props:
    {
      notes: notes
    }
  }
}

export default NotesPage;
