import React from 'react';

import { useQuery } from '@apollo/client';
import { List } from '@mui/material';
import { LIST_NOTES_QUERY } from '../../graphql/queries';
import { Note, NotesData } from '../../types';
import NoteListItem from '../NoteListItem/NoteListItem';

export default function NoteList() {
  const { loading, data } = useQuery<NotesData>(LIST_NOTES_QUERY);

  const isLastItem = (note: Note, notes: Note[]) => note === notes.at(-1);

  return (
    <List>
      {data &&
        data.notes.map((note: Note) => (
          <NoteListItem key={note.id} id={note.id} text={note.text} isLastItem={isLastItem(note, data.notes)} />
        ))}
    </List>
  );
}
