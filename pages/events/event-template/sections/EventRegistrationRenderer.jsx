import Sponser from "./Sponser";
import Presenters from "./Presenters";
import Content from "./Content";
import FullWidthImage from "./FullWidthImage";


const EventRegistrationSectionRenderer = ({ type, data }) => {
    switch (type) {
    case 'Event_Eventsregistrationsections_Sections_Sponsors':
        return <Sponser items={data} />;
    case 'Event_Eventsregistrationsections_Sections_Speakers':
        return <Presenters items={data} />;
    case 'Event_Eventsregistrationsections_Sections_Content':
        return <Content items={data} />;
    case 'Event_Eventsregistrationsections_Sections_Image':
        return <FullWidthImage items={data} />;   
      // Add more cases if needed for other section types
      default:
        return null;
    }
  }

  export default EventRegistrationSectionRenderer;
