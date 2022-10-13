import { useMutation } from '@apollo/client';
import { Button, Drawer, Fab, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import React, { useState } from 'react';
import { ADD_NOTE_MUTATION, InsertNoteArguments } from '../../graphql/mutations';
import { Note } from '../../types';

export default function NoteForm() {
  const [noteInput, setNoteInput] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [submitNote, { loading, data, error }] = useMutation<Note, InsertNoteArguments>(ADD_NOTE_MUTATION, {
    variables: { text: noteInput },
  });

  const handleNoteInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteInput(e.target.value);
  };

  const toggleShowForm = (show: boolean) => setShowForm(show);

  const drawerStyles = {
    '& .MuiDrawer-paper': {
      height: '50vh',
      p: 2,
    },
  };

  return (
    <>
      <Drawer anchor="bottom" sx={drawerStyles} open={showForm}>
        <TextField value={noteInput} onChange={handleNoteInputChange} inputProps={{ maxLength: 180 }} />
        <Button variant="contained" onSubmit={() => submitNote}>
          Add note
        </Button>
      </Drawer>
      <Fab color="primary">
        <Add />
      </Fab>
    </>
  );
}
