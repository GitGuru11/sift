import { gql } from '@apollo/client';

export const GET_NEWS_POST = gql`
query getNews($searchTerm: String, $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int){
  newsPosts(first: $first  last: $last where: {
    taxQuery: {
      taxArray: {
        field: SLUG, 
        operator: NOT_EXISTS, 
        taxonomy: EXCLUDEPOST, 
        terms: "hidden"
      }
    },
    search: $searchTerm, orderby: {field: META_KEY, order: DESC, metaKeyField: "date"}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}}
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

