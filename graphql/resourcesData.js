import { gql } from '@apollo/client';
export const GET_ALL_RESOURCES_POST = gql`
query getAllResourcePosts($searchTerm: String, $typeSlug: [ContentTypeEnum], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: $typeSlug, 
        taxQuery: {
          taxArray: {
            field: SLUG, 
            operator: NOT_EXISTS, 
            taxonomy: EXCLUDEPOST, 
            terms: "hidden"
          }
        }
        orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}} after: $endCursor
        before: $startCursor) {
        nodes {
            id
            ... on Ebook {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on IndexReport {
              __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                } 
            }
            ... on Podcast {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Infographic {
                __typename
                title
                uri
                resourcebuilder {
                  ctaLabel
                }
                infographic {
                  gatedAsset
                  others {
                    blurb
                    cta {
                      class
                      style
                      target
                      text
                      type
                      uploadFile {
                        altText
                        sourceUrl
                        link
                      }
                      url
                      videoType
                      videoUrl
                    }
                  }
                }
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
            }
            ... on Onepager {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Demos {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on AnalystReport {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Video {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Webinar {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
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
            total
            startCursor
          }
    }
}`

export const GET_ALL_RESOURCES_POST_WITH_PRODUCT = gql`
query getAllResourcePosts($searchTerm: String, $typeSlug: [ContentTypeEnum], $productSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: $typeSlug, 
        taxQuery: {
            relation: AND,
            taxArray: [
              {
                terms: $productSlug,
                taxonomy: PRODUCTCATEGORY,
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
            id
            ... on Ebook {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
                ... on IndexReport {
              __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                } 
            }
            ... on Podcast {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Infographic {
                __typename
                title
                uri
                resourcebuilder {
                  ctaLabel
                }
                infographic {
                  gatedAsset
                  others {
                    blurb
                    cta {
                      class
                      style
                      target
                      text
                      type
                      uploadFile {
                        altText
                        sourceUrl
                        link
                      }
                      url
                      videoType
                      videoUrl
                    }
                  }
                }
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
            }
            ... on Onepager {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Demos {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on AnalystReport {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Video {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Webinar {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
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
            total
            startCursor
          }
    }
}`

export const GET_ALL_RESOURCES_WITH_FRAUD = gql`
query getAllResourcePosts($searchTerm: String, $typeSlug: [ContentTypeEnum], $fraudSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: $typeSlug, 
        taxQuery: {
          relation: AND,
          taxArray : [
            {
              field: SLUG, 
              operator: IN,
              terms: $fraudSlug, 
              taxonomy: FRAUDTYPE
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
            id
            ... on Ebook {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
                ... on IndexReport {
              __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                } 
            }
            ... on Podcast {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Infographic {
                __typename
                title
                uri
                resourcebuilder {
                  ctaLabel
                }
                infographic {
                  gatedAsset
                  others {
                    blurb
                    cta {
                      class
                      style
                      target
                      text
                      type
                      uploadFile {
                        altText
                        sourceUrl
                        link
                      }
                      url
                      videoType
                      videoUrl
                    }
                  }
                }
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
            }
            ... on Onepager {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Demos {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on AnalystReport {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Video {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Webinar {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
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
            total
            startCursor
          }
    }
}`

export const GET_ALL_RESOURCES_POST_PRODUCT_FRAUD = gql`
query getAllResourcePosts($searchTerm: String, $typeSlug: [ContentTypeEnum], $fraudSlug: [String], $productSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: $typeSlug, 
        taxQuery: {
            relation: AND,
            taxArray: [
              {
                terms: $productSlug,
                taxonomy: PRODUCTCATEGORY,
                operator: IN,
                field: SLUG
              },
              {
                terms: $fraudSlug,
                taxonomy: FRAUDTYPE,
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
            id
            ... on Ebook {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
                ... on IndexReport {
              __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                } 
            }
            ... on Podcast {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Infographic {
                __typename
                title
                uri
                resourcebuilder {
                  ctaLabel
                }
                infographic {
                  gatedAsset
                  others {
                    blurb
                    cta {
                      class
                      style
                      target
                      text
                      type
                      uploadFile {
                        altText
                        sourceUrl
                        link
                      }
                      url
                      videoType
                      videoUrl
                    }
                  }
                }
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
            }
            ... on Onepager {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Demos {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on AnalystReport {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Video {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
                }
            }
            ... on Webinar {
                __typename
                title
                uri
                productCategories {
                    nodes {
                      name
                    }
                }
                fraudTypes {
                    nodes {
                      name
                    }
                }
                resourcebuilder {
                  ctaLabel
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
            total
            startCursor
          }
    }
}`


export const GET_ALL_RESOURCE_PRODUCT_TYPE = gql`
query GetAllProductType {
    productCategories(where: {hideEmpty: true},last: 1000) {
        nodes {
          name
          slug
          count
        }
    }
}`;


export const GET_ALL_RESOURCE_FRAUD_TYPE = gql`
query GetAllFraudType {
    fraudTypes(where: {hideEmpty: true},last: 1000) {
        nodes {
          name
          slug
          count
        }
    }
}`;