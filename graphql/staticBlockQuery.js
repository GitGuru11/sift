import { gql } from '@apollo/client';

export const GET_STATIC_BLOCK= gql`
query getStaticBlock($id: Int){
  blockBy(blockId: $id) {
    blocksection {
      sections {
        ... on Block_Blocksection_Sections_ViolatorBar {
          body
          blurb
          fieldGroupName
          hideViolatorBar
        }
      }
    }
  }
}
  `;


  export const GET_CASE_STUDY_CTA_BLOCK= gql`
  query getCaseStudyCtaBlock($id: Int){
    blockBy(blockId: $id) {
      blocksection {
        sections {
          ... on Block_Blocksection_Sections_CaseStudyFooterCta {
            id
            background
            backgroundImage {
              altText
              sourceUrl
            }
            body
            padding
            title
            image {
              altText
              sourceUrl
            }
            classes
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