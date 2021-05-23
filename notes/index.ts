import { Note } from '../interfaces';
import fs from 'fs';
import path from 'path';

const fetchNoteAsString = (fileName: string) => {
  return fs.readFileSync(path.resolve(`notes/${fileName}`), 'utf-8');
}

const notes: Note[] = [
  {
    id: 0,
    createdAt: '',
    updatedAt: '',
    title: '',
    body: fetchNoteAsString('hello.md'),
    tag: [''],
  }
];

export default notes;
