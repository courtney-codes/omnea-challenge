import { gql } from '@apollo/client';

const LIST_NOTES_QUERY = gql`
  query listNotes {
    notes(distinct_on: id) {
      id
      text
    }
  }
`;

const GET_NOTE_QUERY = gql`
  query getNote($id: Int!) {
    notes_by_pk(id: $id) {
      id
      text
    }
  }
`;

export { LIST_NOTES_QUERY, GET_NOTE_QUERY };
