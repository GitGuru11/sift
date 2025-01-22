import { gql } from '@apollo/client';
export const GET_LATEST_BLOG_POST = gql`

query LatestPosts {
    posts(first: 4) {
      nodes {
        title
        categories {
          nodes {
            name
          }
        }
        uri
      }
    }
  }`
  ;

