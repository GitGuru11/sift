
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Style from '../../styles/logo-nav-tab.module.css';
import DynamicButton from '../global-components/Buttons';

const TabWithContent = (props) => {
  let data = props.items;
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const centerActiveLink = () => {
      const container = scrollContainerRef.current;
      const activeLink = container?.querySelector('.active-link');
      if (container && activeLink) {
        const containerWidth = container.clientWidth;
        const activeLinkWidth = activeLink.clientWidth;
        const targetScrollLeft =
          activeLink.offsetLeft - (containerWidth - activeLinkWidth) / 2;
        const frames = 60;
        let currentFrame = 0;
        const animateScroll = () => {
          const easing = easeInOutQuad(currentFrame / frames);
          container.scrollLeft =
            container.scrollLeft +
            (targetScrollLeft - container.scrollLeft) * easing;

          currentFrame += 1;

          if (currentFrame < frames) {
            requestAnimationFrame(animateScroll);
          }
        };
        animateScroll();
      }
    };
    const handleResize = () => {
      centerActiveLink();
    };
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    centerActiveLink();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  if (!data.tabs || data.tabs.length === 0) {
    return null;
  }

  return (
    <section id={data.id ? data.id : ''} className={`TabWithContent padding-top-m intro-with-tabgrid img-text-tab ${data.background} ${data.padding} ${data.classes}`}>
      {
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
      <div className="container">
        <div className="tab-wrap">
          <div className="links">
            <div
              className={`text-center mx-auto sidesBorder z-10`}
              data-aos="fade">
              <div
                className={`${Style.tab_nav_wrap} nav-wrap relative xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder z-10 ${data?.tabs[activeTab]?.tabId !== ' ' ? 'LinkBorder ' : ''}`}
                ref={scrollContainerRef}
              >
                {data?.tabs && data?.tabs.map((tab, index) => (
                  <div
                    className={`eyebrow-text laptop-landscape:text-[12px] tab-nav text-white xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] font-[700] xl:hover:text-white relative inline-block z-10 w-full xl:max-w-[260px] xl-up:hover:opacity-[1!important] xl-up:opacity-[0.4] xl-up:w-1/6 cursor-pointer text-[16px] wide-screen:text-[24px] ${index === activeTab ? Style.activeLink : ''}  ${activeTab === 0 ? Style.tabNav : ''} ${Style.tabNavLink} ${index === activeTab ? 'active-link' : ''}`}
                    key={index}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab?.tabLabel} 
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tab-content mt-[40px] relative z-10 laptop-landscape:mt-[20px]">
            <div className="flex flex-wrap items-center justify-between">
              <div className={`w-full wide-screen:mx-0 wide-screen:pr-0 laptop-landscape:max-w-[600px] h-[453px] desktop:h-[350px] lg:h-[300px] wide-screen:max-w-[866px] xl:max-w-[550px] max-w-[632px] xl:mx-auto xl-up:w-3/5 desktop:w-1/2 lg:pr-0 desktop:pr-7 mb-4 laptop-landscape:w-[635px] laptop-landscape:h-[auto] ${Style.imgWrap}`}>
                {data?.tabs[activeTab]?.image?.sourceUrl &&
                  <Image
                    className=" w-full object-contain h-[453px] xl:h-full"
                    width={632}
                    height={453}
                    alt={data?.tabs[activeTab]?.image?.altText}
                    src={data?.tabs[activeTab]?.image?.sourceUrl}
                    quality={75}
                  />
                }
              </div>
              <div className="content-wrap w-full large-desktop:w-2/5 xxl-up:w-[45%] desktop:w-1/2 text-white mt-[10px]">
                {data?.tabs[activeTab]?.title && <h3 className="mb-[25px] mt-[10px] laptop-landscape:mt-0" dangerouslySetInnerHTML={{ __html: data?.tabs[activeTab]?.title }} />}
                {data?.tabs[activeTab]?.body && <div className={`mb-[20px] ${Style.ulWrap}`} dangerouslySetInnerHTML={{ __html: data?.tabs[activeTab]?.body }} />}
                <div className="mt-[32px]">
                  {data?.tabs[activeTab]?.buttons && data?.tabs[activeTab]?.buttons.length > 0 && (
                    <DynamicButton cta={data?.tabs[activeTab]?.buttons} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabWithContent;
