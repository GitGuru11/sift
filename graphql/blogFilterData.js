import { gql } from '@apollo/client';

export const GET_ALL_BLOG_POST = gql`
query getAllBlogPosts($searchTerm: String, $catSlug: String, $tagSlug: String, $authSlug: String, $startCursor: String, $endCursor: String, $last: Int, $first: Int, $offset: Int, $limit: Int) {
    posts(first: $first  last: $last  where: {
      taxQuery: {
        taxArray: {
          field: SLUG, 
          operator: NOT_EXISTS, 
          taxonomy: EXCLUDEPOST, 
          terms: "hidden"
        }
      },
      search: $searchTerm, categoryName: $catSlug, tag: $tagSlug, authorName: $authSlug, orderby: {field: DATE, order: DESC}, status: PUBLISH, offsetPagination: {offset: $offset, size: $limit}}
      after: $endCursor
      before: $startCursor) { 
      nodes {
        title
        tags {
          nodes {
            name
          }
        }
        date
        featuredImage {
          node {
            sourceUrl
            altText
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
        categories {
          nodes {
            name
            slug
            categoryId
            count
          }
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
  }`;


export const GET_ALL_BLOG_CATEGORY = gql`
query GetAllBlogCatgory {
  categories(where: {hideEmpty: true},last: 1000) {
    nodes {
      name
      slug
      categoryId
      count
    }
  }
}`;

export const GET_ALL_BLOG_TAGS = gql`
query GetAllBlogTags {
  tags(where: {hideEmpty: true},last: 1000) {
    nodes {
      name
      slug
      termTaxonomyId
      count
    }
  }
}`;


export const GET_ALL_BLOG_AUTHORS = gql`
query GetAllBlogAuthors {
  users(where: {hasPublishedPosts: POST}) {
    nodes {
      firstName
      lastName
      userId
      name
    }
  }
}`;





