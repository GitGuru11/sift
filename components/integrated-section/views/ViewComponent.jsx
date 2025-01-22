import React from 'react'
import BlogFilter from '../views/BlogFilter';
import PressReleaseFilter from '../views/PressReleaseFilter';
import NewsFilter from '../views/NewsFilter';
import ResourcesFilter from './ResourcesFilter';
import EventFilter from './EventFilter';
import UniversityFilter from './UniversityFilter';
import CaseStudyFilter from './CaseStudyFilter';
function ViewComponent(props) {
	let data = props.items;
    const fnViewComponent = () => {
        switch(data.views) {
          case "blog-filter":   
            return <BlogFilter />;
          case "case-stud-filter" :
            return <CaseStudyFilter />;  
          case "press-release-filter":
            return <PressReleaseFilter />   
          case "news-filter":
            return <NewsFilter/> 
          case "event-filter":
              return <EventFilter/>
          case "resource-filter":
              return <ResourcesFilter/>  
          case "university":
              return <UniversityFilter/>          
          default:      
            return <h1>No Component match</h1>
        }
      }

	return (
        <>
            { fnViewComponent() }
        </>
	);
}

export default ViewComponent;