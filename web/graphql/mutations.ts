import { gql } from '@apollo/client';

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($name: String!, $team: String!, $memo: String) {
    createEmployee(name: $name, team: $team, memo: $memo) {
      id
      name
      team
      memo
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: Int!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: Int!, $name: String!, $team: String!, $memo: String) {
    updateEmployee(id: $id, name: $name, team: $team, memo: $memo) {
      id
      name
      team
      memo
    }
  }
`;