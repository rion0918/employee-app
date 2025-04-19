import { gql } from '@apollo/client';

export const GET_ALL_EMPLOYEES = gql`
  query GetAllEmployees {
    allEmployees {
      id
      name
      team
      memo
    }
  }
`;