import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import NoteList from '../NoteList/NoteList';

export const NoteLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <NoteList />
    </Box>
  );
};
