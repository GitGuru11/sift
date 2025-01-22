import { gql } from '@apollo/client';

export const GET_UPCOMMING_EVENT = gql`
query upCommingEvent($excludeId: [ID], $currentDate: String) {
    events( where: {notIn: $excludeId,  metaQuery: {metaArray: {compare: GREATER_THAN_OR_EQUAL_TO, key: "card_grid_options_start_date", type: DATE, value: $currentDate}}, status: PUBLISH}) {
        nodes {
            title
            eventbuilder {
              cardGridOptions {
                cardImage {
                    altText
                    sourceUrl
                }
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
                endDate
                featuredEventImage {
                  altText
                  sourceUrl
                }
                location
                startDate
                subtitle
                time
                subheaderForLowerEventTiles
              }
              speakers {
                speakers {
                  name
                }
            }
            }
            
          }
    }

}`;