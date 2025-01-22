import Content from "./Content";
import FullWidthImage from "./FullWidthImage";
const EventSectionRenderer = ({ type, data }) => {
    switch (type) {
      case 'Event_Eventbuilder_SectionsEvent_Content':
        return <Content items={data} />;
      case 'Event_Eventbuilder_SectionsEvent_FullWidthImage':
        return <FullWidthImage items={data} />;
      // Add more cases if needed for other section types
      default:
        return null;
    }
  }

  export default EventSectionRenderer;
