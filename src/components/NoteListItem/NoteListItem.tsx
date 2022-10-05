import React from 'react';
import { ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from '@mui/material';
import { Note } from '@mui/icons-material';

interface NoteProps {
  id: number;
  text: string;
  isLastItem: boolean;
}

export const NoteListItem = (props: NoteProps) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Note />
        </ListItemAvatar>
        <ListItemText>{props.text}</ListItemText>
      </ListItem>
      {props.isLastItem && <Divider variant="fullWidth" component="li" />}
    </>
  );
};
