import AwardCards from "./AwardCards";
import Presenters from "./Presenters";
import Statics from "./Statics";
import Sponser from "./Sponser";
import Content from "./Content";
import FullWidthImage from "./FullWidthImage";

const ResourceSectionRenderer = ({ resType, type, data }) => {
  switch (type) {
    case resType+'_Resourcebuilder_Sections_Content':
      return <Content items={data} />;
    case resType+'_Resourcebuilder_Sections_Image':
      return <FullWidthImage items={data} />;
    case resType+'_Resourcebuilder_Sections_Sponsors':
      return <Sponser items={data} />;
    case resType+'_Resourcebuilder_Sections_Speakers':
      return <Presenters items={data} />;  
    case resType+'_Resourcebuilder_Sections_AwardCards':
        return <AwardCards items={data} />;  
    case resType+'_Resourcebuilder_Sections_Statistics':
      return <Statics items={data} />;    
    // Add more cases if needed for other section types
    default:
      return null;
  }
};



export default ResourceSectionRenderer;
