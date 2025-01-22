import { gql } from '@apollo/client';

export const GET_RELATED_POST = gql`

query getRelatedPost($ids: [ID]) {
    posts(where: {categoryIn: $ids}, first: 5) {
      nodes {
        title
        slug
        uri
        categories {
            nodes {
              name
              slug
              categoryId
            }
          }
      }
    }
  }`
  ;

