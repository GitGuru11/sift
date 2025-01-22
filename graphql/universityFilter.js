import { gql } from '@apollo/client';

export const GET_ALL_UNIVERSITY_POST = gql`
query getAllUniversityPosts($searchTerm: String, $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    universities(first: $first  last: $last  where: {
      search: $searchTerm, 
      taxQuery: {
        taxArray: {
          field: SLUG, 
          operator: NOT_EXISTS, 
          taxonomy: EXCLUDEPOST, 
          terms: "hidden"
        }
      },
      orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}}
      after: $endCursor
      before: $startCursor) { 
      nodes {
        title
        date
        topics {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            avatar {
              url
            }
            firstName
            lastName
            username
            name
          }
        }
        uri
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
  }`;


  export const GET_ALL_UNIVERSITY_POST_TOPIC = gql`
  query getAllUniversityPosts($searchTerm: String, $topicSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
      universities(first: $first  last: $last  where: {search: $searchTerm, 
        taxQuery: {
          relation: AND,
          taxArray: [
            {
              terms: $topicSlug,
              taxonomy: TOPIC,
              operator: IN,
              field: SLUG
            },
            {
              terms: "hidden",
              taxonomy: EXCLUDEPOST,
              operator: NOT_EXISTS,
              field: SLUG
            }
          ]
        },
        orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}}
        after: $endCursor
        before: $startCursor) { 
        nodes {
          title
          date
          topics {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              avatar {
                url
              }
              firstName
              lastName
              username
              name
            }
          }
          uri
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
    }`;

export const GET_ALL_UNIVERSITY_TOPIC = gql`
query GetAllTopic {
    topics(where: {hideEmpty: true})  {
        nodes {
            name
            slug
            count
        }
    }
}`;

export const GET_ALL_UNIVERSITY_AUTHORS = gql`
query GetAllBlogAuthors {
    users(where: {hasPublishedPosts: UNIVERSITY}) {
        nodes {
            firstName
            lastName
            userId
            name
        }
    }
}`;





