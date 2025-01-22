// graphql/queries.js
import { gql } from '@apollo/client';

export const GET_PAGE_DATA = gql`
query GetPageData($uri: String!) {
  nodeByUri(uri: $uri) {
  ... on Page {
    pageId
    uri
    title
    seo {
      title
      metaDesc
      metaKeywords
      opengraphImage {
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
      breadcrumbs {
        text
        url
      }
    }
    pageBuilder {
      hideBreadcrumb
      showViolatorBar
      marketoProgramId
      sections {
        ... on Page_Pagebuilder_Sections_FullWidthPopup {
          blurb
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
        ... on Page_Pagebuilder_Sections_AnimatedGraphics {
          id
          gatedComponent
          background
          backgroundImage {
            altText
            sourceUrl
          }
          link
          linkMobile
          padding
          title
          classes
        }
        ... on Page_Pagebuilder_Sections_FullWidthPopupWithImage {
          blurb
          fieldGroupName
          title
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
        }
        ... on Page_Pagebuilder_Sections_SidebarPopup {
          backgroundColor
          blurb
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
          title
        }
        ... on Page_Pagebuilder_Sections_FullWidthPopupWithImageWithoutBorder {
          blurb
          fieldGroupName
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
          title
          image {
            altText
            sourceUrl
          }
        }
        ... on Page_Pagebuilder_Sections_HeroBanner {
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
        ... on Page_Pagebuilder_Sections_BannerWithCards {
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
        ... on Page_Pagebuilder_Sections_PromoCards {
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
        ... on Page_Pagebuilder_Sections_Logos {
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
        ... on Page_Pagebuilder_Sections_StickyNavigation {
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
          gatedComponent
        }
        ... on Page_Pagebuilder_Sections_ContentWithImage {
          id
          title
          classes
          body
          background
          padding
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_GatedForm {
          id
          classes
          background
          padding
          title
          subtitle
          formId
          thankYouMessage
          backgroundImage {
            altText
            uri
            sourceUrl
          }
        }
        ... on Page_Pagebuilder_Sections_FullWidthImageAndContentCard {
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
        ... on Page_Pagebuilder_Sections_ContentWithCards {
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
        ... on Page_Pagebuilder_Sections_ContentWithCta {
          id
          title
          padding
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_IntroWithCta {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_FullWidthIntroWithCta {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_StatsContentBlock {
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
          gatedComponent
          heading
          padding
        }
        ... on Page_Pagebuilder_Sections_ImageAndContentWithScroll {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_LargeAndSmallCards {
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
        ... on Page_Pagebuilder_Sections_ColThreeGrid {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_TitleWithBadges {
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
        ... on Page_Pagebuilder_Sections_TabWithContent {
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
        ... on Page_Pagebuilder_Sections_VerticalTabWithContent {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_TabWithLogo {
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
        ... on Page_Pagebuilder_Sections_QuoteSlider {
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
        ... on Page_Pagebuilder_Sections_FullWidthQuoteWithImage {
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
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_TabSlider {
          id
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_ReferenceCards {
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
        ... on Page_Pagebuilder_Sections_FooterCta {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_ContentBlocks {
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
        ... on Page_Pagebuilder_Sections_IconContentBlock {
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
        ... on Page_Pagebuilder_Sections_IconCardsWithCta {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          cards {
            heading
            bodyWithoutEditor
            blurb
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
        ... on Page_Pagebuilder_Sections_TimelineSlider {
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
        ... on Page_Pagebuilder_Sections_LeadershipCards {
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
        ... on Page_Pagebuilder_Sections_AwardCards {
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
        ... on Page_Pagebuilder_Sections_BorderImageWithText {
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
        ... on Page_Pagebuilder_Sections_ContentWithVerticalStates {
          id
          background
          body
          classes
          padding
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_FullWidthMedia {
          id
          background
          backgroundImage {
            altText
            uri
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_TitleWithAwardSlider {
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
        ... on Page_Pagebuilder_Sections_FaqAccordion {
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
        ... on Page_Pagebuilder_Sections_OverviewWithStats {
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
        ... on Page_Pagebuilder_Sections_ImageWithText {
          id
          background
          backgroundImage {
            altText
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_BannerSecondLevel {
          id
          background
          backgroundImage {
            altText
            uri
            sourceUrl
          }
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_BannerThirdLevel {
          id
          imagevideo
          background
          backgroundImage {
            altText
            sourceUrl
          }
          video {
            mediaItemUrl
          }
          heading
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
        ... on Page_Pagebuilder_Sections_BannerWithPostsCards {
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
        ... on Page_Pagebuilder_Sections_FooterCtaWithSlider {
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
        ... on Page_Pagebuilder_Sections_Views {
          views
        }
        ... on Page_Pagebuilder_Sections_StaticBlades {
          blades
        }
        ... on Page_Pagebuilder_Sections_BannerWithColumns {
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
        ... on Page_Pagebuilder_Sections_BannerWithForm {
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
        ... on Page_Pagebuilder_Sections_LocationTab {
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
        ... on Page_Pagebuilder_Sections_FullWidthColorCard {
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
        ... on Page_Pagebuilder_Sections_ContentAndImageWithCta {
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
        ... on Page_Pagebuilder_Sections_TitleWithBody {
          id
          gatedComponent
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
        ... on Page_Pagebuilder_Sections_VerticalTabWithImage {
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
        ... on Page_Pagebuilder_Sections_TitleWithAwardSlider {
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
        ... on Page_Pagebuilder_Sections_PricingCards {
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
        ... on Page_Pagebuilder_Sections_JobsWithMap {
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
        ... on Page_Pagebuilder_Sections_IconWithContentGrid {
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
        ... on Page_Pagebuilder_Sections_Breadcrumbs {
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
        ... on Page_Pagebuilder_Sections_PatentTable {
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
        ... on Page_Pagebuilder_Sections_Trademarks {
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
        ... on Page_Pagebuilder_Sections_BannerLargeCardWithList {
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
        ... on Page_Pagebuilder_Sections_ColThreeReference {
          fieldGroupName
        }
      }
    }
  }
}
}
`;