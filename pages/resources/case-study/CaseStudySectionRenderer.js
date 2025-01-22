
import HeroBanner from '../../../components/integrated-section/HeroBanner';
import Logos from '../../../components/integrated-section/Logos';
import ContentWithImage from '../../../components/integrated-section/ContentWithImage';
import CardWithGrid from '../../../components/integrated-section/CardWithGrid';
import TitleWithBadges from '../../../components/integrated-section/TitleWithBadges';
import ColThreeGrid from '../../../components/integrated-section/ColThreeGrid';
import ContentWithCta from '../../../components/integrated-section/ContentWithCta';
import TabWithLogo from '../../../components/integrated-section/TabWithLogo';
import TabWithContent from '../../../components/integrated-section/TabWithContent';
import ReferenceCards from '../../../components/integrated-section/ReferenceCards';
import FooterCta from '../../../components/integrated-section/FooterCta';
import BannerSecondLevel from '../../../components/integrated-section/BannerSecondLevel';
import BannerThirdLevel from '../../../components/integrated-section/BannerThirdLevel';
import FullWidthIntroWithCta from '../../../components/integrated-section/FullWidthIntroWithCta';
import IntroWithCta from '../../../components/integrated-section/IntroWithCta';
import FullWidthMedia from '../../../components/integrated-section/FullWidthMedia';
import StickyNavigation from '../../../components/integrated-section/StickyNavigation';
import AwardCards from '../../../components/integrated-section/AwardCards';
import ContentBlocks from '../../../components/integrated-section/ContentBlocks';
import IconContentBlock from '../../../components/integrated-section/IconContentBlock';
import TimelineSlider from '../../../components/integrated-section/TimelineSlider';
import LeadershipCards from '../../../components/integrated-section/LeadershipCards';
import BorderImageWithText from '../../../components/integrated-section/BorderImageWithText';
import TabSlider from '../../../components/integrated-section/TabSlider';
import BannerWithCards from '../../../components/integrated-section/BannerWithCards';
import ContentWithCards from '../../../components/integrated-section/ContentWithCards';
import ContentWithVerticalStates from '../../../components/integrated-section/ContentWithVerticalStates';
import ImageWithText from '../../../components/integrated-section/ImageWithText';
import OverviewWithStats from '../../../components/integrated-section/OverviewWithStats';
import StatsContentBlock from '../../../components/integrated-section/StatsContentBlock';
import FullWidthImageAndContentCard from '../../../components/integrated-section/FullWidthImageAndContentCard';
import ImageAndContentWithScroll from '../../../components/integrated-section/ImageAndContentWithScroll';
import IconCardsWithCta from '../../../components/integrated-section/IconCardsWithCta';
import FooterCtaWithSlider from '../../../components/integrated-section/FooterCtaWithSlider';
import BannerWithResourceCard from '../../../components/integrated-section/BannerWithPostsCard';
import ViewComponent from '../../../components/integrated-section/views/ViewComponent';
import BladeComponent from '../../../components/integrated-section/static-blades/BladeComponent';
import FaqAccordion from '../../../components/integrated-section/FaqAccordion';
import TitleWithAwardSlider from '../../../components/integrated-section/TitleWithAwardSlider';
import PricingCards from '../../../components/integrated-section/PricingCards';
import QuoteSlider from '../../../components/integrated-section/QuoteSlider';
import VerticalTabWithContent from '../../../components/integrated-section/VerticalTabWithContent';
import FullWidthQuoteWithImage from '../../../components/integrated-section/FullWidthQuoteWithImage';
import BannerWithColumns from '../../../components/integrated-section/BannerWithColumns';
import BannerWithForm from '../../../components/integrated-section/BannerWithForm';
import FullWidthColorCard from '../../../components/integrated-section/FullWidthColorCard';
import LocationTab from '../../../components/integrated-section/LocationTab';
import JobsWithMap from '../../../components/integrated-section/JobsWithMap';
import IconWithContentGrid from '../../../components/integrated-section/IconWithContentGrid';
import VerticalTabWithImage from '../../../components/integrated-section/VerticalTabWithImage';
import ContentAndImageWithCTA from '../../../components/integrated-section/ContentAndImageWithCTA';
import TitleWithBody from '../../../components/integrated-section/TitleWithBody';
import CustomBreadcrumbs from '../../../components/integrated-section/CustomBreadcrumbs';
import BannerLargeCardWithList from '../../../components/integrated-section/BannerCardWithList';
import PatentTable from '../../../components/integrated-section/PatentTable';
import Trademarks from '../../../components/integrated-section/Trademarks';

const CaseStudySectionRenderer = ({ type, data }) => {
  switch (type) {
    case 'CaseStudy_Pagebuilder_Sections_HeroBanner':
      return <HeroBanner {...data} />;
    case 'CaseStudy_Pagebuilder_Sections_Logos':
      return <Logos items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ContentWithImage':
      return <ContentWithImage items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_LargeAndSmallCards':
      return <CardWithGrid items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_TitleWithBadges':
      return <TitleWithBadges items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ColThreeGrid':
      return <ColThreeGrid items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ContentWithCta':
      return <ContentWithCta items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ReferenceCards':
      return <ReferenceCards items={data} />; 
    case 'CaseStudy_Pagebuilder_Sections_TabWithLogo':
      return <TabWithLogo items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_TabWithContent':
      return <TabWithContent items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_FooterCta':
      return <FooterCta items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_BannerSecondLevel':
      return <BannerSecondLevel items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_BannerThirdLevel':
      return <BannerThirdLevel items={data} />;  
    case 'CaseStudy_Pagebuilder_Sections_AwardCards':
      return <AwardCards items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_StickyNavigation':
      return <StickyNavigation items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ContentBlocks':
      return <ContentBlocks items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_IconContentBlock':
      return <IconContentBlock items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_TimelineSlider':
      return <TimelineSlider items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_LeadershipCards':
      return <LeadershipCards items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_BorderImageWithText':
      return <BorderImageWithText items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_TabSlider':
      return <TabSlider items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_BannerWithCards':
      return <BannerWithCards items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ContentWithCards':
      return <ContentWithCards items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ContentWithVerticalStates':
      return <ContentWithVerticalStates items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ImageWithText':
      return <ImageWithText items={data}  />;
    case 'CaseStudy_Pagebuilder_Sections_OverviewWithStats':
      return <OverviewWithStats items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_StatsContentBlock':
      return <StatsContentBlock items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_FullWidthImageAndContentCard':
      return <FullWidthImageAndContentCard items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_ImageAndContentWithScroll':
      return <ImageAndContentWithScroll items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_IntroWithCta':
      return <IntroWithCta items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_FullWidthIntroWithCta':
      return <FullWidthIntroWithCta items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_FullWidthMedia':
      return <FullWidthMedia items={data} />;
    case 'CaseStudy_Pagebuilder_Sections_IconCardsWithCta':
        return <IconCardsWithCta items={data} />;  
    case 'CaseStudy_Pagebuilder_Sections_BannerWithPostsCards':
        return <BannerWithResourceCard items={data} />;  
    case 'CaseStudy_Pagebuilder_Sections_FooterCtaWithSlider':
        return <FooterCtaWithSlider items={data} />;  
    case 'CaseStudy_Pagebuilder_Sections_Views':
        return <ViewComponent items={data} />; 
    case 'CaseStudy_Pagebuilder_Sections_StaticBlades':
        return <BladeComponent items={data} />;     
    case 'CaseStudy_Pagebuilder_Sections_PricingCards':
        return <PricingCards  items={data} />;   
    case 'CaseStudy_Pagebuilder_Sections_TitleWithAwardSlider': 
        return <TitleWithAwardSlider items={data}/>;
    case 'CaseStudy_Pagebuilder_Sections_FaqAccordion': 
        return <FaqAccordion items={data}/>; 
    case 'CaseStudy_Pagebuilder_Sections_QuoteSlider':
        return <QuoteSlider items={data} />; 
    case 'CaseStudy_Pagebuilder_Sections_VerticalTabWithContent':
        return <VerticalTabWithContent items={data} />;     
    case 'CaseStudy_Pagebuilder_Sections_FullWidthQuoteWithImage':
        return <FullWidthQuoteWithImage items={data} />; 
    case 'CaseStudy_Pagebuilder_Sections_BannerWithColumns':
        return <BannerWithColumns items={data} />;                            
    case 'CaseStudy_Pagebuilder_Sections_FullWidthColorCard':
        return <FullWidthColorCard items={data} />; 
    case 'CaseStudy_Pagebuilder_Sections_LocationTab':
        return <LocationTab items={data} />; 
    case 'CaseStudy_Pagebuilder_Sections_BannerWithForm':
        return <BannerWithForm items={data} />;    
    case 'CaseStudy_Pagebuilder_Sections_JobsWithMap':
        return <JobsWithMap items={data} />
    case 'CaseStudy_Pagebuilder_Sections_IconWithContentGrid':
        return <IconWithContentGrid items={data} /> 
    case 'CaseStudy_Pagebuilder_Sections_VerticalTabWithImage':
        return <VerticalTabWithImage items={data} /> 
    case 'CaseStudy_Pagebuilder_Sections_ContentAndImageWithCta':
        return <ContentAndImageWithCTA items={data} />  
    case 'CaseStudy_Pagebuilder_Sections_TitleWithBody':
        return <TitleWithBody items={data} />  
    case 'CaseStudy_Pagebuilder_Sections_Breadcrumbs':
        return <CustomBreadcrumbs items='' /> 
    case 'CaseStudy_Pagebuilder_Sections_BannerLargeCardWithList':
        return <BannerLargeCardWithList items={data} />        
    case 'CaseStudy_Pagebuilder_Sections_PatentTable':
        return <PatentTable items={data} />     
    case 'CaseStudy_Pagebuilder_Sections_Trademarks':
        return <Trademarks items={data} />  
    // Add more cases if needed for other section types
    default:
      return null;
  }
};

export default CaseStudySectionRenderer;
