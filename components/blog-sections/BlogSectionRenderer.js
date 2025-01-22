import BorderImageWithText from './BorderImageWithText';
import Content from './Content';
import FullWidthImage from './FullWidthImage';
import Quote from './Quote';

const BlogSectionRenderer = ({ type, data }) => {
  switch (type) {
    case 'Post_Blogsections_Sections_Content':
      return <Content items={data} />;
    case 'Post_Blogsections_Sections_FullWidthImage':
      return <FullWidthImage items={data} />;
    case 'Post_Blogsections_Sections_Quote':
      return <Quote items={data} />;
    case 'Post_Blogsections_Sections_BorderImageWithText':
      return <BorderImageWithText items={data} />;  
    // Add more cases if needed for other section types
    default:
      return null;
  }
};

export default BlogSectionRenderer;
