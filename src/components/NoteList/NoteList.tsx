import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { List } from '@mui/material';
import { LIST_NOTES_QUERY } from '../../graphql/queries';
import { Note, NotesData } from '../../types';
import NoteListItem from '../NoteListItem/NoteListItem';
import NoteForm from '../NoteForm/NoteForm';

export default function NoteList() {
  const { loading, data } = useQuery<NotesData>(LIST_NOTES_QUERY);

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const isLastItem = (note: Note, notes: Note[]) => note === notes.at(-1);

  return (
    <>
      <List>
        {data &&
          data.notes.map((note: Note) => (
            <NoteListItem key={note.id} note={note} isLastItem={isLastItem(note, data.notes)} />
          ))}
      </List>
      <NoteForm note={selectedNote} />
    </>
  );
}
