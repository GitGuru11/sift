import { gql } from '@apollo/client';

export const GET_ALL_EVENT_POST = gql`
  query getAllEventPosts ($searchTerm: String, $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int){
    events(
      first: $first  last: $last 
        where: {
          taxQuery: {
            taxArray: {
              field: SLUG, 
              operator: NOT_EXISTS, 
              taxonomy: EXCLUDEPOST, 
              terms: "hidden"
            }
          },
          search: $searchTerm, orderby: {field: META_KEY, order: ASC, metaKeyField: "card_grid_options_end_date"}
          status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}} after: $endCursor
          before: $startCursor) {
            nodes {
              title
              uri
              date
              eventbuilder {
                cardGridOptions {
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
                  date
                  startDate
                  endDate
                  featuredEventImage {
                    altText
                    sourceUrl
                  }
                  cardImage {
                    altText
                    sourceUrl
                  }
                  location
                  subtitle
                  time
                }
              }
              regions {
                nodes {
                  name
                  slug
                }
              }
              eventTypes {
                nodes {
                  slug
                  name
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              offsetPagination {
                hasMore
                hasPrevious
                total
              }
              startCursor
              total
            }
  }
}`;

export const GET_ALL_PAST_EVENT_POST = gql`
  query getAllEventPosts ($searchTerm: String, $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int){
    events(
      first: $first  last: $last 
        where: {
          taxQuery: {
            taxArray: {
              field: SLUG, 
              operator: NOT_EXISTS, 
              taxonomy: EXCLUDEPOST, 
              terms: "hidden"
            }
          }
          search: $searchTerm, orderby: {field: DATE, order: DESC}, 
          status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}} after: $endCursor
          before: $startCursor) {
            nodes {
              title
              uri
              date
              eventbuilder {
                cardGridOptions {
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
                  date
                  startDate
                  endDate
                  featuredEventImage {
                    altText
                    sourceUrl
                  }
                  cardImage {
                    altText
                    sourceUrl
                  }
                  location
                  subtitle
                  time
                }
              }
              regions {
                nodes {
                  name
                  slug
                }
              }
              eventTypes {
                nodes {
                  slug
                  name
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              offsetPagination {
                hasMore
                hasPrevious
                total
              }
              startCursor
              total
            }
  }
}`;

export const GET_ALL_EVENT_POST_WITH_REGION = gql`
  query getAllEventPosts ($searchTerm: String, $regionSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int){
    events(
      first: $first  last: $last 
        where: {search: $searchTerm,
          taxQuery: {
              relation: AND,
              taxArray: [
                {
                  terms: $regionSlug,
                  taxonomy: REGION,
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
            }
          orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}} after: $endCursor
          before: $startCursor) {
            nodes {
              title
              uri
              date
              eventbuilder {
                cardGridOptions {
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
                  date
                  featuredEventImage {
                    altText
                    sourceUrl
                  }
                  cardImage {
                    altText
                    sourceUrl
                  }
                  location
                  subtitle
                  time
                }
              }
              regions {
                nodes {
                  name
                  slug
                }
              }
              eventTypes {
                nodes {
                  slug
                  name
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              offsetPagination {
                hasMore
                hasPrevious
                total
              }
              startCursor
              total
            }
  }
}`;

export const GET_ALL_EVENT_POST_WITH_EVENTTYPE = gql`
  query getAllEventPosts ($searchTerm: String, $eventTypeSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int){
    events(
      first: $first  last: $last 
        where: {search: $searchTerm,
          taxQuery: {
              relation: AND,
              taxArray: [
                {
                  terms: $eventTypeSlug,
                  taxonomy: EVENTTYPE,
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
            }
            orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}} after: $endCursor
          before: $startCursor) {
            nodes {
              title
              uri
              date
              eventbuilder {
                cardGridOptions {
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
                  date
                  featuredEventImage {
                    altText
                    sourceUrl
                  }
                  cardImage {
                    altText
                    sourceUrl
                  }
                  location
                  subtitle
                  time
                }
              }
              regions {
                nodes {
                  name
                  slug
                }
              }
              eventTypes {
                nodes {
                  slug
                  name
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              offsetPagination {
                hasMore
                hasPrevious
                total
              }
              startCursor
              total
            }
  }
}`;

export const GET_ALL_EVENT_POST_WITH_REGION_EVENTTYPE = gql`
  query getAllEventPosts ($searchTerm: String, $regionSlug: [String], $eventTypeSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int){
    events(
      first: $first  last: $last 
        where: {search: $searchTerm,
          taxQuery: {
              relation: AND,
              taxArray: [
                {
                  terms: $eventTypeSlug,
                  taxonomy: EVENTTYPE,
                  operator: IN,
                  field: SLUG
                },
                {
                  terms: $regionSlug,
                  taxonomy: REGION,
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
            }
          orderby: {field: DATE, order: DESC}, orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}} after: $endCursor
          before: $startCursor) {
            nodes {
              title
              uri
              date
              eventbuilder {
                cardGridOptions {
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
                  date
                  featuredEventImage {
                    altText
                    sourceUrl
                  }
                  cardImage {
                    altText
                    sourceUrl
                  }
                  location
                  subtitle
                  time
                }
              }
              regions {
                nodes {
                  name
                  slug
                }
              }
              eventTypes {
                nodes {
                  slug
                  name
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              offsetPagination {
                hasMore
                hasPrevious
                total
              }
              startCursor
              total
            }
  }
}`;


export const GET_ALL_EVENT_REGION = gql`
  query GetAllEventRegion {
      regions (where: {hideEmpty: true}){
          nodes {
            name
            slug
            count
          }
      }
  }`;
  
  
export const GET_ALL_EVENT_TYPE = gql`
  query GetAllEventType {
      eventTypes(where: {hideEmpty: true}) {
          nodes {
            name
            slug
            count
          }
      }
  }`;