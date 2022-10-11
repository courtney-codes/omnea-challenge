import { gql } from '@apollo/client';

interface InsertNoteArguments {
  text: string;
}

const ADD_NOTE_MUTATION = gql`
  mutation addNote(text: String!) {
    insert_notes_one(object: [{text: $text}]) {
      id
      text
    }
  }
`;

const EDIT_NOTE_MUTATION = gql`
  mutation editNote(id: Int!, text: String!) {
    update_notes_by_pk(
      pk_columns: {id: $id}
      _set: {text: $text}
    ) {
      id
      text
    }
  }
`;

export { ADD_NOTE_MUTATION, EDIT_NOTE_MUTATION };
