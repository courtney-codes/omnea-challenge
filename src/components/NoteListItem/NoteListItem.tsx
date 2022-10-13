import React from 'react';
import { ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from '@mui/material';
import { Note as NoteIcon } from '@mui/icons-material';
import { Note } from '../../types';

interface NoteListItemProps {
  note: Note;
  isLastItem: boolean;
}

export default function NoteListItem(props: NoteListItemProps) {
  const { note } = props;
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <NoteIcon />
        </ListItemAvatar>
        <ListItemText>{note.text}</ListItemText>
      </ListItem>
      {!props.isLastItem && <Divider variant="fullWidth" component="li" />}
    </>
  );
}
