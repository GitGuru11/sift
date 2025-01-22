import { gql } from '@apollo/client';

export const GET_FOOTER_MENU = gql`
query GetFooterMenu ($location_name: ID!){
    menu(id: $location_name, idType: LOCATION) {
      menuItems {
        nodes {
          url
          label
          target
        }
      }
      name
      slug
    }
  }`