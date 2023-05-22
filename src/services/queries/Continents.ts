import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRIES_BY_CONTINENT = gql`
  query Continent($continentId: ID!) {
    continent(code: $continentId) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
