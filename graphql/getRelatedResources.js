import { gql } from '@apollo/client';


export const GET_RELATED_RESOURCE_POST = gql`
  query getRelatedReference($typeSlug: [ContentTypeEnum], $fraudSlug: [String], $excludeId: [ID]) {
    contentNodes(
      first: 3
        where: { contentTypes: $typeSlug, 
          taxQuery: {
              taxArray: [
                {
                  terms: $fraudSlug,
                  taxonomy: FRAUDTYPE,
                  operator: IN,
                  field: SLUG
                }
              ]
            } orderby: {field: DATE, order: DESC},
            notIn : $excludeId
            
          }) {
            nodes {
              ... on Demos {
                date
                demoPage {
                  others {
                    galleryBlurb
                  }
                }
                title
              }
              ... on Ebook {
                ebook {
                  others {
                    blurb
                    publishedDate
                    ebookCoverImage {
                      altText
                      sourceUrl
                    }
                  }
                }
                title
                slug
                date
                uri
              }
              ... on Infographic {
                id
                infographic {
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
                title
                date
                uri
              }
              ... on Onepager {
                onepager {
                  others {
                    blurb
                    coverImage {
                      altText
                      sourceUrl
                    }
                    subtitle
                  }
                }
                title
                slug
                date
                uri
              }
              ... on Video {
                title
                videoPage {
                  others {
                    blurb
                  }
                }
                date
                uri
              }
              ... on Podcast {
                id
                podcast {
                  others {
                    galleryBlurb
                    podcastCoverimage {
                      altText
                      sourceUrl
                    }
                    }
                  }
                title
                date
                uri
              }
              ... on Webinar {
                slug
                webinarPage {
                  others {
                    galleryBlurb
                  }
                }
                title
                date
                uri
              }
              ... on AnalystReport {
                id
                analystReportDetails {
                  others {
                    galleryBlurb
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                uri
                title
                date
              }
              ... on Event {
                id
                date
                title
                uri
              }
            }
    }
  }`;

