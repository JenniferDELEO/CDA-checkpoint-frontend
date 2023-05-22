import { gql } from "@apollo/client";

export const GET_COUNTRY_BY_CODE = gql`
  query Country($countryId: ID!) {
    country(code: $countryId) {
      code
      name
      native
      phone
      capital
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
      emojiU
      states {
        code
        name
      }
    }
  }
`;
