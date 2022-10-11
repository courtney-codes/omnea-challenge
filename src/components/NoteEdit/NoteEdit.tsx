import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Note } from '../../types';

interface NoteEditProps {
  note: Note;
}

export default function NoteEdit({ note }: NoteEditProps) {
  const [noteInput, setNoteInput] = useState(note.text);

  const handleNoteInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteInput(e.target.value);
  };

  return <TextField value={noteInput} onChange={handleNoteInputChange} inputProps={{ maxLength: 180 }} />;
}
