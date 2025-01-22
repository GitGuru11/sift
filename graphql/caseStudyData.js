import { gql } from '@apollo/client';
export const GET_ALL_CASESTUDY_POST = gql`
query getAllCaseStudyPosts($searchTerm: String, $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              date
              databaseId
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

export const GET_ALL_CASESTUDY_POST_WITH_PRODUCT = gql`
query getAllCaseStudyPosts($searchTerm: String, $productSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
        taxQuery: {
            relation: AND,
            taxArray: [
              {
                terms: $productSlug,
                taxonomy: PRODUCT,
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              products {
                nodes {
                  name
                  slug
                }
              }
              date
              databaseId
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

export const GET_ALL_CASESTUDY_WITH_INDUSTRY = gql` 
query getAllCaseStudyPosts($searchTerm: String,  $industrySlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
        taxQuery: {
          relation: AND,
          taxArray : [
            {
              field: SLUG, 
              operator: IN,
              terms: $industrySlug, 
              taxonomy: INDUSTRY
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              products {
                nodes {
                  name
                  slug
                }
              }
              date
              databaseId
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

export const GET_ALL_CASESTUDY_WITH_USECASE = gql`
query getAllResourcePosts($searchTerm: String, $useCaseSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
        taxQuery: {
          relation: AND,
          taxArray : [
            {
              field: SLUG, 
              operator: IN,
              terms: $useCaseSlug, 
              taxonomy: USECASE
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              products {
                nodes {
                  name
                  slug
                }
              }
              date
              databaseId
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

export const GET_ALL_RESOURCES_POST_PRODUCT_INDUSTRY = gql`
query getAllCaseStudyPosts($searchTerm: String, $industrySlug: [String], $productSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
        taxQuery: {
            relation: AND,
            taxArray: [
              {
                terms: $productSlug,
                taxonomy: PRODUCT,
                operator: IN,
                field: SLUG
              },
              {
                terms: $industrySlug,
                taxonomy: INDUSTRY,
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              products {
                nodes {
                  name
                  slug
                }
              }
              date
              databaseId
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

export const GET_ALL_RESOURCES_POST_PRODUCT_USECASE = gql`
query getAllCaseStudyPosts($searchTerm: String, $useCaseSlug: [String], $productSlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
        taxQuery: {
            relation: AND,
            taxArray: [
              {
                terms: $productSlug,
                taxonomy: PRODUCT,
                operator: IN,
                field: SLUG
              },
              {
                terms: $useCaseSlug,
                taxonomy: USECASE,
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              products {
                nodes {
                  name
                  slug
                }
              }
              date
              databaseId
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

export const GET_ALL_RESOURCES_POST_INDUSTRY_USECASE = gql`
query getAllCaseStudyPosts($searchTerm: String, $useCaseSlug: [String], $industrySlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
        taxQuery: {
            relation: AND,
            taxArray: [
              {
                terms: $industrySlug,
                taxonomy: INDUSTRY,
                operator: IN,
                field: SLUG
              },
              {
                terms: $useCaseSlug,
                taxonomy: USECASE,
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              products {
                nodes {
                  name
                  slug
                }
              }
              date
              databaseId
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

export const GET_ALL_RESOURCES_POST_PRODUCT_INDUSTRY_USECASE = gql`
query getAllCaseStudyPosts($searchTerm: String, $useCaseSlug: [String], $productSlug: [String], $industrySlug: [String], $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    contentNodes(
    first: $first  last: $last 
      where: {search: $searchTerm, contentTypes: CASE_STUDIES, 
        taxQuery: {
            relation: AND,
            taxArray: [
              {
                terms: $industrySlug,
                taxonomy: INDUSTRY,
                operator: IN,
                field: SLUG
              },
              {
                terms: $productSlug,
                taxonomy: PRODUCT,
                operator: IN,
                field: SLUG
              },
              {
                terms: $useCaseSlug,
                taxonomy: USECASE,
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
            ... on CaseStudy {
              id
              title
              slug
              uri
              case_studies {
                ctaLabel
              }
              products {
                nodes {
                  name
                  slug
                }
              }
              date
              databaseId
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


export const GET_ALL_CASESTUDY_PRODUCT_TYPE = gql`
query GetAllProductType {
    products(where: {hideEmpty: true},last: 1000) {
        nodes {
          name
          slug
          count
        }
    }
}`;


export const GET_ALL_CASESTUDY_INDUSTRY = gql`
query GetAllIndustry {
    industries(where: {hideEmpty: true},last: 1000) {
        nodes {
          name
          slug
          count
        }
    }
}`;

export const GET_ALL_CASESTUDY_USECASE = gql`
query GetAllUseCase {
  useCases(where: {hideEmpty: true},last: 1000) {
        nodes {
          name
          slug
          count
        }
    }
}`;