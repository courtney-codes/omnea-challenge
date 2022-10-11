import React from 'react';
import { ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from '@mui/material';
import { Note as NoteIcon } from '@mui/icons-material';
import { Note } from '../../types';

interface NoteProps extends Note {
  isLastItem: boolean;
}

export default function NoteListItem(props: NoteProps) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <NoteIcon />
        </ListItemAvatar>
        <ListItemText>{props.text}</ListItemText>
      </ListItem>
      {!props.isLastItem && <Divider variant="fullWidth" component="li" />}
    </>
  );
}
