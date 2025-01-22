import { gql } from '@apollo/client';
export const GET_PRESSRELEASE_POST = gql`
query getPressRelease($searchTerm: String, $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int){
    pressReleases(first: $first  last: $last where: {
      taxQuery: {
        taxArray: {
          field: SLUG, 
          operator: NOT_EXISTS, 
          taxonomy: EXCLUDEPOST, 
          terms: "hidden"
        }
      }
      search: $searchTerm, orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}}
      after: $endCursor
      before: $startCursor
      
      ) {
        nodes {
          title
          cardGrid {
            cta {
                class
                style
                target
                text
                type
                uploadFile {
                  altText
                  sourceUrl
                }
                url
                videoType
                videoUrl
              }
            cardImage {
              altText
              sourceUrl
            }
            date
          }
        }
        pageInfo {
          total
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
          offsetPagination {
            total
            hasPrevious
            hasMore
          }
        }
        
      }
  }`
  ;

