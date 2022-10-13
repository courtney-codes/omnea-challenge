import React from 'react';
import { Container, AppBar, Box, Toolbar } from '@mui/material';
import NoteList from '../NoteList/NoteList';

export const NoteLayout = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>
        <NoteList />
      </Box>
    </Container>
  );
};
