import { gql } from '@apollo/client';

export const GET_SINGLE_UNIVERSITY = gql`
query getSingleUniversity($slug: ID!) {
  university(id: $slug, idType: SLUG) {
      date
      slug
      uri
      link
      title
      universitySections {
        subtitle
        sections {
          ... on University_Universitysections_Sections_Content {
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
          ... on University_Universitysections_Sections_FullWidthImage {
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
          ... on University_Universitysections_Sections_Quote {
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
          ... on University_Universitysections_Sections_BorderImageWithText {
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
                altText
                sourceUrl
                link
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
    }
  }
}
  `;