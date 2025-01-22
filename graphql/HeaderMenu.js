import { gql } from '@apollo/client';

export const GET_MAIN_MENU = gql`
query GetMainMenu ($location_name: ID!){
    menu(id: $location_name, idType: LOCATION) {
      menuItems(first: 1000){
        nodes {
          url
          label
          target
          linkRelationship
        }
      }
      name
      slug
    }
  }`

  export const GET_MULTILEVEL_MAIN_MENU = gql`
  query GetMainMenu ($location_name: ID!){
    menu(id: $location_name, idType: LOCATION) {
      name
      menuItems(where: {parentDatabaseId: 0}) { 
        nodes {
          id
          databaseId
          label
          parentId
          parentDatabaseId
          url
          target
          linkRelationship
          childItems {
            nodes {
              id
              databaseId
              label
              url
              parentId
              parentDatabaseId
              target
              linkRelationship
            }
          }
        }
      }
    }
    }`  