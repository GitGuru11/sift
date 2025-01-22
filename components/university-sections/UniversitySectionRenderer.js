import BorderImageWithText from './BorderImageWithText';
import Content from './Content';
import FullWidthImage from './FullWidthImage';
import Quote from './Quote';

const UniversitySectionRenderer = ({ type, data }) => {
  switch (type) {
    case 'University_Universitysections_Sections_Content':
      return <Content items={data} />;
    case 'University_Universitysections_Sections_FullWidthImage':
      return <FullWidthImage items={data} />;
    case 'University_Universitysections_Sections_Quote':
      return <Quote items={data} />;
    case 'University_Universitysections_Sections_BorderImageWithText':
      return <BorderImageWithText items={data} />;  
    // Add more cases if needed for other section types
    default:
      return null;
  }
};

export default UniversitySectionRenderer;
