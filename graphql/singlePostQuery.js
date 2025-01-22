import { gql } from '@apollo/client';

export const GET_SINGLE_POST = gql`
query getSinglePost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      content
      date
      slug
      uri
      link
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            sizes {
              sourceUrl
            }
            file
          }
          title
          slug
        }
      }
      categories {
        nodes {
          name
          slug
          id
          termTaxonomyId
        }
      }
      excerpt
      tags {
        nodes {
          name
          slug
          id
        }
      }
      title
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
      blogSections {
        subtitle
        redirectUrl
        sections {
          ... on Post_Blogsections_Sections_Content {
            id
            background
            backgroundImage {
              altText
              sourceUrl
            }
            body
            classes
            padding
          }
          ... on Post_Blogsections_Sections_FullWidthImage {
            id
            background
            backgroundImage {
              altText
              sourceUrl
            }
            classes
            image {
              altText
              sourceUrl
            }
            padding
          }
          ... on Post_Blogsections_Sections_Quote {
            id
            authorCompany
            authorDesignation
            authorName
            background
            backgroundImage {
              altText
              sourceUrl
            }
            padding
            classes
            quote
          }
          ... on Post_Blogsections_Sections_BorderImageWithText {
            id
            background
            backgroundImage {
              altText
              sourceUrl
            }
            body
            buttons {
              class
              style
              target
              text
              type
              uploadFile {
                link
                altText
                sourceUrl
              }
              url
              videoType
              videoUrl
            }
            classes
            heading
            image {
              altText
              sourceUrl
            }
            padding
            title
          }
        }
      }
      seo {
        metaDesc
        metaKeywords
        title
        breadcrumbs {
          text
          url
        }
      }
    }
  }
`;




export const GET_SINGLE_POST_CTA= gql`
query getSinglePostCta($id: Int){
  blockBy(blockId: $id) {
    blocksection {
      sections {
        ... on Block_Blocksection_Sections_FooterCtaWithSlider {
          id
          background
          backgroundImage {
            altText
            sourceUrl
          }
          body
          classes
          padding
          title
          logos {
            image {
              altText
              sourceUrl
            }
          }
          buttons {
            class
            style
            target
            text
            type
            uploadFile {
              link
              altText
              sourceUrl
            }
            url
            videoType
            videoUrl
          }
        }
      }
    }
  }
}
  `;