import { gql } from '@apollo/client';

  export const GET_RESOURCE_DETAIL_POST = gql`
  query getResourceDetail($typeSlug: [ContentTypeEnum], $path: String) {
    contentNodes(
      where: { contentTypes: $typeSlug, name: $path}
    ) {
      nodes {
        ... on Demos {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          date
          databaseId
          demoPage {
            others {
              description
              galleryBlurb
              subheader
              vimeoCodeForEmbed
            }
            gatedAsset
          }
          slug
          status
          title
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on Demos_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on Demos_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Demos_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Demos_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Demos_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Demos_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
        }
        ... on IndexReport {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          databaseId
          indexreport {
            gatedAsset
            others {
              blurb
              descriptionAboveCtaButton
              descriptionBelowCtaButton
              hushlyAsset
              typeOfAsset
              subtitle
              publishedDate
              coverImage {
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
              link
            }
            url
            videoType
            videoUrl
              }
            }
          }
          title
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on IndexReport_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on IndexReport_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on IndexReport_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on IndexReport_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on IndexReport_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on IndexReport_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          slug
          date
        }
        ... on Ebook {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          databaseId
          ebook {
            gatedAsset
            others {
              blurb
              descriptionAboveCtaButton
              descriptionBelowCtaButton
              hushlyAsset
              typeOfAsset
              subtitle
              publishedDate
              ebookCoverImage {
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
              link
            }
            url
            videoType
            videoUrl
              }
            }
          }
          title
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on Ebook_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on Ebook_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Ebook_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Ebook_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Ebook_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Ebook_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          slug
          date
        }
        ... on Infographic {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          databaseId
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
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on Infographic_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on Infographic_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Infographic_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Infographic_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Infographic_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Infographic_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
          title
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          date
        }
        ... on Onepager {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          databaseId
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          onepager {
            gatedAsset
            others {
              assetDescription
              blurb
              coverImage {
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
              link
            }
            url
            videoType
            videoUrl
              }
              subtitle
            }
          }
          title
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on Onepager_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on Onepager_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Onepager_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Onepager_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Onepager_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Onepager_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          slug
          date
        }
        ... on Video {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          title
          databaseId
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          videoId
          videoPage {
            gatedAsset
            others {
              blurb
              subhead
              videoDescription
              videoTranscript
              vimeoCode
            }
          }
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on Video_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on Video_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Video_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Video_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Video_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Video_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          slug
          date
        }
        ... on Podcast {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          databaseId
          podcast {
            gatedAsset
            others {
              episodeNumber
              galleryBlurb
              guestSpeaker
              podcastDescription
              podcastDirectLink
              podcastEmbedCode
              podcastLength
              podcastTranscript
              publishDate
              relatedContent
              speakers {
                image {
                  altText
                  sourceUrl
                }
                info
              }
              podcastCoverimage {
                altText
                sourceUrl
              }
            }
          }
          title
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on Podcast_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on Podcast_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Podcast_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Podcast_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Podcast_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Podcast_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
          date
          fraudTypes {
            nodes {
              name
              slug
            }
          }
        }
        ... on Webinar {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          databaseId
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on Webinar_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on Webinar_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Webinar_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Webinar_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Webinar_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Webinar_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          slug
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          webinarPage {
            others {
              vimeoCode
              subtitle
              speakers {
                title
                bio
                image {
                  altText
                  sourceUrl
                }
              }
              gatedAsset
              galleryBlurb
              ctaText
              assetDescription
            }
          }
          title
          date
        }
        ... on AnalystReport {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          databaseId
          analystReportDetails {
            gatedAsset
            others {
              description
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
              galleryBlurb
              relatedContent
              subtitle
              image {
                altText
                sourceUrl
              }
            }
          }
          slug
          title
          universalRelatedContentRebrand {
            heading
            relatedContentRebrand
            relatedPosts {
              category
              ctaLink
              ctaText
              heading
              logo {
                altText
                sourceUrl
              }
            }
            subtitle
          }
          uri
          resourcebuilder {
            location
            date
            time
            marketoProgramId
            hideNavigation
            pdfAsste {
              altText
              sourceUrl
              uri
            }
            sections {
              ... on AnalystReport_Resourcebuilder_Sections_Content {
                body
                fieldGroupName
              }
              ... on AnalystReport_Resourcebuilder_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on AnalystReport_Resourcebuilder_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on AnalystReport_Resourcebuilder_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  name
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on AnalystReport_Resourcebuilder_Sections_AwardCards {
                fieldGroupName
                heading
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
                cards {
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on AnalystReport_Resourcebuilder_Sections_Statistics {
                fieldGroupName
                heading
                cards {
                  body
                  digit
                  number
                  title
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          date
          fraudTypes {
            nodes {
              name
              slug
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
        }
        ... on Event {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          date
          title
          uri
          databaseId
          eventsregistrationsections {
            sections {
              ... on Event_Eventsregistrationsections_Sections_Content {
                body
                fieldGroupName
              }
              ... on Event_Eventsregistrationsections_Sections_Image {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
              ... on Event_Eventsregistrationsections_Sections_Sponsors {
                fieldGroupName
                heading
                sponsors {
                  link
                  logo {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on Event_Eventsregistrationsections_Sections_Speakers {
                fieldGroupName
                heading
                speakers {
                  designation
                  image {
                    altText
                    sourceUrl
                  }
                  logo {
                    altText
                    sourceUrl
                  }
                  name
                }
              }
            }
            formInfo {
              formHeading
              formId
              subtitle
              thankYouMessage
            }
          }
          eventbuilder {
            marketoProgramId
            hideScheduleOfEvents
            hideNavigation 
          }
          eventbuilder {
            hideScheduleOfEvents
            sectionsEvent {
              ... on Event_Eventbuilder_SectionsEvent_Content {
                body
                fieldGroupName
              }
              ... on Event_Eventbuilder_SectionsEvent_FullWidthImage {
                fieldGroupName
                image {
                  altText
                  sourceUrl
                }
              }
            }
            redirectUrl
            hideRelatedPosts
            relatedPosts {
              title
              posts {
                heading
                title
                link
              }
            }
            scheduleOfEvents {
              heading
              tabs {
                tabLabel
                rows {
                  title
                  time
                  location
                  date
                  body
                  image {
                    altText
                    sourceUrl
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
                  speaker {
                    heading
                    speakers {
                      speakerName
                    }
                  }
                }
              }
            }
            speakers {
              blurb
              title
              speakers {
                bio
                designation
                name
                socialDetails {
                  type
                  url
                }
                image {
                  altText
                  sourceUrl
                }
              }
            }
            cardGridOptions {
              cardImage {
                altText
                sourceUrl
              }
              cta {
                style
                class
              }
              date
              featuredEventImage {
                altText
                sourceUrl
              }
              location
              subheaderForLowerEventTiles
              time
              subtitle
            }
          }
          regions {
            nodes {
              name
              slug
            }
          }
          slug
          eventTypes {
            nodes {
              name
              slug
            }
          }
        }
        ... on CaseStudy {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          title
          date
          databaseId
          pageBuilder {
            sections {
              ... on CaseStudy_Pagebuilder_Sections_HeroBanner {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                body
                classes
                heroBackgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                padding
                showTabs
                title
                tabswrap {
                  tabtitle
                  tabContent {
                    innerTabCategory
                    innerTabLink
                    innerTabSubtitle
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
              ... on CaseStudy_Pagebuilder_Sections_BannerWithCards {
                id
                title
                body
                review
                reviewIcon {
                  altText
                  uri
                  sourceUrl
                }
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
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
                cards {
                  number
                  symbol
                  title
                }
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_PromoCards {
                id
                title
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_Logos {
                id
                title
                padding
                logos {
                  icon {
                    altText
                    uri
                    sourceUrl
                  }
                }
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                ctaButtons {
                  class
                  style
                  target
                  text
                  type
                  url
                  videoType
                  videoUrl
                  uploadFile {
                    sourceUrl
                    link
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_StickyNavigation {
                id
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                background
                padding
                classes
                nav {
                  label
                  source
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_ContentWithImage {
                id
                title
                classes
                body
                background
                padding
                backgroundImage {
                  altText
                  uri
                  sourceUrl
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
                image {
                  altText
                  uri
                  sourceUrl
                }
                imagePosition
              }
              ... on CaseStudy_Pagebuilder_Sections_FullWidthImageAndContentCard {
                id
                title
                bodyWithoutEditor
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                padding
                rightColumn {
                  body
                  heading
                }
                image {
                  altText
                  uri
                  sourceUrl
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
              ... on CaseStudy_Pagebuilder_Sections_ContentWithCards {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                body
                cards {
                  bodyWithoutEditor
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
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  title
                }
                classes
                padding
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_ContentWithCta {
                id
                title
                padding
                background
                backgroundImage {
                  altText
                  uri
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
                image {
                  altText
                  uri
                  sourceUrl
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_IntroWithCta {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                bodyWithoutEditor
                padding
                title
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
              ... on CaseStudy_Pagebuilder_Sections_FullWidthIntroWithCta {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                bodyWithoutEditor
                buttons {
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
                classes
                padding
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_StatsContentBlock {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                columns {
                  bodyWithoutEditor
                  number
                  symbol
                  title
                }
                heading
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_ImageAndContentWithScroll {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                padding
                rows {
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
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  title
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_LargeAndSmallCards {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                cards {
                  body
                  link
                  linkText
                  number
                  symbol
                  title
                }
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_ColThreeGrid {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                cards {
                  body
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                  }
                  number
                  title
                }
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_TitleWithBadges {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                icon {
                  altText
                  uri
                  sourceUrl
                }
                images {
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  link
                }
                padding
                title
                ctaButtons {
                  class
                  style
                  target
                  text
                  type
                  url
                  videoType
                  videoUrl
                  uploadFile {
                    sourceUrl
                    link
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_TabWithContent {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                padding
                tabs {
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
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  tabId
                  tabLabel
                  title
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_VerticalTabWithContent {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                padding
                tabs {
                  body
                  icon {
                    altText
                    uri
                    sourceUrl
                  }
                  tabId
                  tabLabel
                  title
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_TabWithLogo {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                padding
                tabs {
                  authorCompany
                  authorDesignation
                  authorName
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
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  logo {
                    altText
                    uri
                    sourceUrl
                  }
                  quote
                  statistics {
                    startNumber
                    title
                  }
                  tabLogo {
                    altText
                    uri
                    sourceUrl
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_QuoteSlider {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                classes
                padding
                slides {
                  authorCompany
                  authorDesignation
                  authorName
                  buttons {
                    class
                    style
                    target
                    text
                    type
                    url
                    videoType
                    videoUrl
                    uploadFile {
                      altText
                      sourceUrl
                    }
                  }
                  image {
                    altText
                    sourceUrl
                  }
                  logo {
                    altText
                    sourceUrl
                  }
                  quote
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_FullWidthQuoteWithImage {
                id
                authorCompany
                authorDesignation
                authorName
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
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
                classes
                padding
                quote
                image {
                  altText
                  uri
                  sourceUrl
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_TabSlider {
                id
                tabs {
                  tabIcon {
                    altText
                    sourceUrl
                  }
                  tabContent {
                    body
                    image {
                      altText
                      sourceUrl
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
                    resources {
                      resource {
                        body
                        image {
                          altText
                          sourceUrl
                        }
                        linkLinks {
                          file {
                            altText
                            sourceUrl
                          }
                          target
                          type
                          url
                        }
                        title
                      }
                      title
                    }
                    title
                    typeOfContent
                    statistics {
                      body
                      number
                      symbol
                      title
                    }
                    typeOfImage
                  }
                  tabLabel
                }
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                classes
                heading
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_ReferenceCards {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                cards {
                  cardTitleBodyWithoutEditor
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  postDate
                  postType
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
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_FooterCta {
                id
                background
                backgroundImage {
                  altText
                  uri
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
                image {
                  altText
                  uri
                  sourceUrl
                }
                padding
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_ContentBlocks {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                columns {
                  body
                  title
                }
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_IconContentBlock {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                classes
                columns {
                  bodyWithoutEditor
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  title
                }
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_IconCardsWithCta {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                cards {
                  bodyWithoutEditor
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
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  title
                }
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_TimelineSlider {
                id
                background
                backgroundImage {
                  altText
                  uri
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
                    link
                    sourceUrl
                  }
                  url
                  videoType
                  videoUrl
                }
                classes
                heading
                padding
                slides {
                  bodyWithoutEditor
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  slideTitleTitle
                  year
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_LeadershipCards {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                content {
                  cards {
                    body
                    designation
                    name
                    posterImage {
                      altText
                      uri
                      sourceUrl
                    }
                    socialInfo {
                      socialType
                      source
                    }
                    ctaLabel
                  }
                  title
                }
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_AwardCards {
                id
                padding
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                cards {
                  bodyWithoutEditor
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
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                  title
                }
                classes
              }
              ... on CaseStudy_Pagebuilder_Sections_BorderImageWithText {
                id
                background
                backgroundImage {
                  altText
                  uri
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
                image {
                  altText
                  uri
                  sourceUrl
                }
                padding
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_ContentWithVerticalStates {
                id
                background
                body
                classes
                padding
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                title
                states {
                  body
                  number
                  symbol
                  title
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_FullWidthMedia {
                id
                background
                backgroundImage {
                  altText
                  uri
                }
                padding
                typeOfMedia
                classes
                image {
                  altText
                  sourceUrl
                }
                videos {
                  posterImage {
                    altText
                    sourceUrl
                  }
                  videoUrl
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_TitleWithAwardSlider {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                padding
                classes
                slider {
                  image {
                    altText
                    uri
                    sourceUrl
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_FaqAccordion {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                padding
                title
                accordion {
                  body
                  title
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
              ... on CaseStudy_Pagebuilder_Sections_OverviewWithStats {
                id
                background
                backgroundImage {
                  altText
                  uri
                }
                body
                classes
                padding
                states {
                  description
                  number
                  symbol
                  title
                  links {
                    file {
                      altText
                      uri
                    }
                    target
                    type
                    url
                    videoUrl
                  }
                }
                heading
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_ImageWithText {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                classes
                padding
                rows {
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
                  image {
                    altText
                    sourceUrl
                  }
                  title
                  imagePosition
                  quoteRow {
                    authorName
                    designation
                    logo {
                      altText
                      sourceUrl
                    }
                    quote
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_BannerSecondLevel {
                id
                background
                backgroundImage {
                  altText
                  uri
                  sourceUrl
                }
                imagePosition
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
                customBackground {
                  backgroundPositionX
                  backgroundPositionY
                  backgroundSize
                }
                image {
                  altText
                  uri
                  sourceUrl
                }
                title
                padding
                mobileImage {
                  altText
                  sourceUrl
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_BannerThirdLevel {
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
                customBackground {
                  backgroundPositionX
                  backgroundPositionY
                  backgroundSize
                }
                image {
                  altText
                  sourceUrl
                }
                padding
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_BannerWithPostsCards {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                classes
                padding
                title
                largeCard {
                  authorInfo {
                    authorName
                    authorImage {
                      altText
                      sourceUrl
                    }
                  }
                  heading
                  date
                  image {
                    altText
                    sourceUrl
                  }
                  sourceUrl {
                    target
                    title
                    url
                  }
                  title
                }
                smallCardHeading
                posts {
                  authorInfo {
                    authorName
                    authorImage {
                      altText
                      sourceUrl
                    }
                  }
                  heading
                  date
                  image {
                    altText
                    sourceUrl
                  }
                  sourceUrl {
                    target
                    title
                    url
                  }
                  title
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_FooterCtaWithSlider {
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
                logos {
                  logo {
                    altText
                    sourceUrl
                  }
                }
                padding
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_Views {
                views
              }
              ... on CaseStudy_Pagebuilder_Sections_StaticBlades {
                blades
              }
              ... on CaseStudy_Pagebuilder_Sections_BannerWithColumns {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                bodyWithoutEditor
                classes
                padding
                title
                columns {
                  bodyWithoutEditor
                  title
                  icon {
                    altText
                    sourceUrl
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_BannerWithForm {
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
                cards {
                  bodyWithoutEditor
                  buttons {
                    class
                    style
                    target
                    text
                    type
                    url
                    videoType
                    videoUrl
                    uploadFile {
                      altText
                      sourceUrl
                      link
                    }
                  }
                  icon {
                    altText
                    sourceUrl
                  }
                  title
                }
                form {
                  formHeading
                  formId
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_LocationTab {
                id
                background
                classes
                padding
                backgroundImage {
                  altText
                  sourceUrl
                }
                tabs {
                  tabTitle
                  cards {
                    address
                    city
                    contactNumber
                    country
                    countryFlag {
                      altText
                      sourceUrl
                    }
                    mapCtaButtons {
                      class
                      style
                      target
                      text
                      type
                      url
                      videoType
                      videoUrl
                      uploadFile {
                        sourceUrl
                        altText
                        link
                      }
                    }
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_FullWidthColorCard {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                cards {
                  body
                  cardColor
                  buttons {
                    class
                    style
                    target
                    text
                    type
                    videoType
                    videoUrl
                    url
                    uploadFile {
                      altText
                      sourceUrl
                      link
                    }
                  }
                  title
                  rows {
                    body
                  }
                }
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_ContentAndImageWithCta {
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
                padding
                title
                image {
                  altText
                  sourceUrl
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_TitleWithBody {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                classes
                padding
                rows {
                  heading
                  body
                  title
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
              ... on CaseStudy_Pagebuilder_Sections_VerticalTabWithImage {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                padding
                tabs {
                  tabId
                  tabLabel
                  image {
                    altText
                    sourceUrl
                  }
                  tabContent {
                    body
                    bodyWithoutEditor
                    columns {
                      icon {
                        altText
                        sourceUrl
                      }
                      title
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
                classes
              }
              ... on CaseStudy_Pagebuilder_Sections_TitleWithAwardSlider {
                id
                background
                padding
                classes
                backgroundImage {
                  altText
                  sourceUrl
                }
                slider {
                  image {
                    altText
                    sourceUrl
                  }
                }
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_PricingCards {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                cards {
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
                  cardBorderColor
                  heading
                  title
                  features {
                    title
                    rows {
                      body
                      typeOfIcon
                    }
                  }
                }
                classes
                padding
              }
              ... on CaseStudy_Pagebuilder_Sections_JobsWithMap {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                body
                classes
                jobsScript
                padding
                title
              }
              ... on CaseStudy_Pagebuilder_Sections_IconWithContentGrid {
                id
                background
                classes
                columns {
                  bodyWithoutEditor
                  image {
                    altText
                    sourceUrl
                  }
                  title
                }
                padding
                backgroundImage {
                  altText
                  sourceUrl
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_Breadcrumbs {
                id
                background
                backgroundImage {
                  altText
                  sourceUrl
                }
                classes
                padding
                items {
                  label
                  url
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_PatentTable {
                id
                padding
                background
                classes
                backgroundImage {
                  altText
                  sourceUrl
                }
                table {
                  tableHeader {
                    heading
                  }
                  tableRows {
                    row {
                      value
                    }
                  }
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_Trademarks {
                id
                padding
                background
                classes
                backgroundImage {
                  altText
                  sourceUrl
                }
                cards {
                  logo {
                    altText
                    sourceUrl
                  }
                  title
                }
              }
              ... on CaseStudy_Pagebuilder_Sections_BannerLargeCardWithList {
                id
                padding
                title
                background
                classes
                backgroundImage {
                  altText
                  sourceUrl
                }
                cardData {
                  bodyWithoutEditor
                  date
                  heading
                  title
                  location
                  time
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
                  image {
                    altText
                    sourceUrl
                  }
                }
                postsRows {
                  title
                  posts {
                    date
                    heading
                    title
                    location
                    ctaButtons {
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
        }
        ... on University {
          seo {
            title
            metaDesc
            metaKeywords
            breadcrumbs {
              text
              url
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          id
          title
        }
      }
      
    }
  }`;

  