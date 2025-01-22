import HeroBanner from '../integrated-section/HeroBanner';
import Logos from '../integrated-section/Logos';
import ContentWithImage from '../integrated-section/ContentWithImage';
import CardWithGrid from '../integrated-section/CardWithGrid';
import TitleWithBadges from '../integrated-section/TitleWithBadges';
import ColThreeGrid from '../integrated-section/ColThreeGrid';
import ContentWithCta from '../integrated-section/ContentWithCta';
import TabWithLogo from '../integrated-section/TabWithLogo';
import TabWithContent from '../integrated-section/TabWithContent';
import ReferenceCards from '../integrated-section/ReferenceCards';
import FooterCta from '../integrated-section/FooterCta';
import BannerSecondLevel from '../integrated-section/BannerSecondLevel';
import BannerThirdLevel from '../integrated-section/BannerThirdLevel';
import FullWidthIntroWithCta from '../integrated-section/FullWidthIntroWithCta';
import IntroWithCta from '../integrated-section/IntroWithCta';
import FullWidthMedia from '../integrated-section/FullWidthMedia';
import StickyNavigation from '../integrated-section/StickyNavigation';
import AwardCards from '../integrated-section/AwardCards';
import ContentBlocks from '../integrated-section/ContentBlocks';
import IconContentBlock from '../integrated-section/IconContentBlock';
import TimelineSlider from '../integrated-section/TimelineSlider';
import LeadershipCards from '../integrated-section/LeadershipCards';
import BorderImageWithText from '../integrated-section/BorderImageWithText';
import TabSlider from '../integrated-section/TabSlider';
import BannerWithCards from '../integrated-section/BannerWithCards';
import ContentWithCards from '../integrated-section/ContentWithCards';
import ContentWithVerticalStates from '../integrated-section/ContentWithVerticalStates';
import ImageWithText from '../integrated-section/ImageWithText';
import OverviewWithStats from '../integrated-section/OverviewWithStats';
import StatsContentBlock from '../integrated-section/StatsContentBlock';
import FullWidthImageAndContentCard from '../integrated-section/FullWidthImageAndContentCard';
import ImageAndContentWithScroll from '../integrated-section/ImageAndContentWithScroll';
import IconCardsWithCta from '../integrated-section/IconCardsWithCta';
import FooterCtaWithSlider from '../integrated-section/FooterCtaWithSlider';
import BannerWithResourceCard from '../integrated-section/BannerWithPostsCard';
import ViewComponent from '../integrated-section/views/ViewComponent';
import BladeComponent from '../integrated-section/static-blades/BladeComponent';
import FaqAccordion from '../integrated-section/FaqAccordion';
import TitleWithAwardSlider from '../integrated-section/TitleWithAwardSlider';
import PricingCards from '../integrated-section/PricingCards';
import QuoteSlider from '../integrated-section/QuoteSlider';
import VerticalTabWithContent from '../integrated-section/VerticalTabWithContent';
import FullWidthQuoteWithImage from '../integrated-section/FullWidthQuoteWithImage';
import BannerWithColumns from '../integrated-section/BannerWithColumns';
import BannerWithForm from '../integrated-section/BannerWithForm';
import FullWidthColorCard from '../integrated-section/FullWidthColorCard';
import LocationTab from '../integrated-section/LocationTab';
import JobsWithMap from '../integrated-section/JobsWithMap';
import IconWithContentGrid from '../integrated-section/IconWithContentGrid';
import VerticalTabWithImage from '../integrated-section/VerticalTabWithImage';
import ContentAndImageWithCTA from '../integrated-section/ContentAndImageWithCTA';
import TitleWithBody from '../integrated-section/TitleWithBody';
import CustomBreadcrumbs from '../integrated-section/CustomBreadcrumbs';
import BannerLargeCardWithList from '../integrated-section/BannerCardWithList';
import PatentTable from '../integrated-section/PatentTable';
import Trademarks from '../integrated-section/Trademarks';
import ColThreeReference from '../ColThreeReference';
import GatedForm from '../integrated-section/GatedForm';
import FullWidthPopUp from '../integrated-section/FullWidthPopup';
import FullWidthPopUpWithImage from '../integrated-section/FullWidthPopupWithImage';
import FullWidthPopupWithImageWithoutBorder from '../integrated-section/FullWidthPopupWithImageWithoutBorder';
import SidebarPopup from '../integrated-section/SidebarPopup';
import AnimatedGraphics from '../integrated-section/AnimatedGraphics';

const SectionRenderer = ({ type, data }) => {
  switch (type) {
    case 'Page_Pagebuilder_Sections_HeroBanner':
      return <HeroBanner {...data} />;
    case 'Page_Pagebuilder_Sections_Logos':
      return <Logos items={data} />;
    case 'Page_Pagebuilder_Sections_ContentWithImage':
      return <ContentWithImage items={data} />;
    case 'Page_Pagebuilder_Sections_LargeAndSmallCards':
      return <CardWithGrid items={data} />;
    case 'Page_Pagebuilder_Sections_TitleWithBadges':
      return <TitleWithBadges items={data} />;
    case 'Page_Pagebuilder_Sections_ColThreeGrid':
      return <ColThreeGrid items={data} />;
    case 'Page_Pagebuilder_Sections_ContentWithCta':
      return <ContentWithCta items={data} />;
    case 'Page_Pagebuilder_Sections_ReferenceCards':
      return <ReferenceCards items={data} />;
    case 'Page_Pagebuilder_Sections_TabWithLogo':
      return <TabWithLogo items={data} />;
    case 'Page_Pagebuilder_Sections_TabWithContent':
      return <TabWithContent items={data} />;
    case 'Page_Pagebuilder_Sections_FooterCta':
      return <FooterCta items={data} />;
    case 'Page_Pagebuilder_Sections_BannerSecondLevel':
      return <BannerSecondLevel items={data} />;
    case 'Page_Pagebuilder_Sections_BannerThirdLevel':
      return <BannerThirdLevel items={data} />;
    case 'Page_Pagebuilder_Sections_AwardCards':
      return <AwardCards items={data} />;
    case 'Page_Pagebuilder_Sections_StickyNavigation':
      return <StickyNavigation items={data} />;
    case 'Page_Pagebuilder_Sections_ContentBlocks':
      return <ContentBlocks items={data} />;
    case 'Page_Pagebuilder_Sections_IconContentBlock':
      return <IconContentBlock items={data} />;
    case 'Page_Pagebuilder_Sections_TimelineSlider':
      return <TimelineSlider items={data} />;
    case 'Page_Pagebuilder_Sections_LeadershipCards':
      return <LeadershipCards items={data} />;
    case 'Page_Pagebuilder_Sections_BorderImageWithText':
      return <BorderImageWithText items={data} />;
    case 'Page_Pagebuilder_Sections_TabSlider':
      return <TabSlider items={data} />;
    case 'Page_Pagebuilder_Sections_BannerWithCards':
      return <BannerWithCards items={data} />;
    case 'Page_Pagebuilder_Sections_ContentWithCards':
      return <ContentWithCards items={data} />;
    case 'Page_Pagebuilder_Sections_ContentWithVerticalStates':
      return <ContentWithVerticalStates items={data} />;
    case 'Page_Pagebuilder_Sections_ImageWithText':
      return <ImageWithText items={data} />;
    case 'Page_Pagebuilder_Sections_OverviewWithStats':
      return <OverviewWithStats items={data} />;
    case 'Page_Pagebuilder_Sections_StatsContentBlock':
      return <StatsContentBlock items={data} />;
    case 'Page_Pagebuilder_Sections_FullWidthImageAndContentCard':
      return <FullWidthImageAndContentCard items={data} />;
    case 'Page_Pagebuilder_Sections_ImageAndContentWithScroll':
      return <ImageAndContentWithScroll items={data} />;
    case 'Page_Pagebuilder_Sections_IntroWithCta':
      return <IntroWithCta items={data} />;
    case 'Page_Pagebuilder_Sections_FullWidthIntroWithCta':
      return <FullWidthIntroWithCta items={data} />;
    case 'Page_Pagebuilder_Sections_FullWidthMedia':
      return <FullWidthMedia items={data} />;
    case 'Page_Pagebuilder_Sections_IconCardsWithCta':
      return <IconCardsWithCta items={data} />;
    case 'Page_Pagebuilder_Sections_BannerWithPostsCards':
      return <BannerWithResourceCard items={data} />;
    case 'Page_Pagebuilder_Sections_FooterCtaWithSlider':
      return <FooterCtaWithSlider items={data} />;
    case 'Page_Pagebuilder_Sections_Views':
      return <ViewComponent items={data} />;
    case 'Page_Pagebuilder_Sections_StaticBlades':
      return <BladeComponent items={data} />;
    case 'Page_Pagebuilder_Sections_PricingCards':
      return <PricingCards items={data} />;
    case 'Page_Pagebuilder_Sections_TitleWithAwardSlider':
      return <TitleWithAwardSlider items={data} />;
    case 'Page_Pagebuilder_Sections_FaqAccordion':
      return <FaqAccordion items={data} />;
    case 'Page_Pagebuilder_Sections_QuoteSlider':
      return <QuoteSlider items={data} />;
    case 'Page_Pagebuilder_Sections_VerticalTabWithContent':
      return <VerticalTabWithContent items={data} />;
    case 'Page_Pagebuilder_Sections_FullWidthQuoteWithImage':
      return <FullWidthQuoteWithImage items={data} />;
    case 'Page_Pagebuilder_Sections_BannerWithColumns':
      return <BannerWithColumns items={data} />;
    case 'Page_Pagebuilder_Sections_FullWidthColorCard':
      return <FullWidthColorCard items={data} />;
    case 'Page_Pagebuilder_Sections_LocationTab':
      return <LocationTab items={data} />;
    case 'Page_Pagebuilder_Sections_BannerWithForm':
      return <BannerWithForm items={data} />;
    case 'Page_Pagebuilder_Sections_JobsWithMap':
      return <JobsWithMap items={data} />
    case 'Page_Pagebuilder_Sections_IconWithContentGrid':
      return <IconWithContentGrid items={data} />
    case 'Page_Pagebuilder_Sections_VerticalTabWithImage':
      return <VerticalTabWithImage items={data} />
    case 'Page_Pagebuilder_Sections_ContentAndImageWithCta':
      return <ContentAndImageWithCTA items={data} />
    case 'Page_Pagebuilder_Sections_TitleWithBody':
      return <TitleWithBody items={data} />
    // case 'Page_Pagebuilder_Sections_Breadcrumbs':
    //   return <CustomBreadcrumbs  />
    case 'Page_Pagebuilder_Sections_BannerLargeCardWithList':
      return <BannerLargeCardWithList items={data} />
    case 'Page_Pagebuilder_Sections_PatentTable':
      return <PatentTable items={data} />
    case 'Page_Pagebuilder_Sections_Trademarks':
      return <Trademarks items={data} />
    case 'Page_Pagebuilder_Sections_ColThreeReference':
      return <ColThreeReference />
    case 'Page_Pagebuilder_Sections_GatedForm':
        return <GatedForm items={data}/>  
    case 'Page_Pagebuilder_Sections_FullWidthPopup':
        return <FullWidthPopUp items={data} />  
    case 'Page_Pagebuilder_Sections_FullWidthPopupWithImage':
        return <FullWidthPopUpWithImage items={data} />
    case 'Page_Pagebuilder_Sections_FullWidthPopupWithImageWithoutBorder':
        return <FullWidthPopupWithImageWithoutBorder items={data} />
    case 'Page_Pagebuilder_Sections_SidebarPopup':
        return <SidebarPopup items={data} /> 
    case 'Page_Pagebuilder_Sections_AnimatedGraphics':
        return <AnimatedGraphics items={data} />              
    // Add more cases if needed for other section types
    default:
      return null;
  }
};

export default SectionRenderer;
