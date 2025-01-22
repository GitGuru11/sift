// three Col Grid

import React, { useEffect } from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
import Style from "../../styles/three-col-grid.module.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DynamicLinks from '../global-components/Links';

function matchHeight(selector) {
  const elements = document.querySelectorAll(selector);
  const setEqualHeight = () => {
    elements.forEach(element => {
      element.style.height = 'auto';
    });
    const maxHeight = Math.max(...Array.from(elements).map(element => element.offsetHeight));
    elements.forEach(element => {
      element.style.height = `${maxHeight}px`;
    });
  };

  const handleResize = () => {
    if (window.innerWidth > 595) {
      setEqualHeight();
      setTimeout(() => {
        setEqualHeight();
      }, 100);
    } else {
      elements.forEach(element => {
        element.style.height = 'auto';
      });
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
}


const ReferenceCards = (props) => {
  let data = props.items;
  const getSlidesToShow = () => {
    if (data.cards.length > 3) {
      return 3;
    } else {
      return data.cards.length;
    }
  };
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: getSlidesToShow(),
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div>
        <ul className={`${Style.btnDots}`}>{dots}</ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <button className={Style.slickDotButton} />
      );
    },
  };

  const responsiveSettings = [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 595,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  Object.assign(settings, { responsive: responsiveSettings });

  useEffect(() => {
    matchHeight(`.ThreeColumnGrid.${data.background} .card-inner`);
    matchHeight(`.ThreeColumnGrid.${data.background} .card-wrapper`);
    matchHeight(`.ThreeColumnGrid.${data.background} .card-inner .content-wrap`);
    matchHeight(`.ThreeColumnGrid.${data.background} .card-inner .bolg_details`);
    matchHeight(`.ThreeColumnGrid.${data.background} .card-inner h4`);
    matchHeight(`.ThreeColumnGrid.${data.background} .card-inner .btn-wrap`);
    const handleResize = () => {
      matchHeight(`.ThreeColumnGrid.${data.background} .card-inner`);
      matchHeight(`.ThreeColumnGrid.${data.background} .card-wrapper`);
      matchHeight(`.ThreeColumnGrid.${data.background} .card-inner .content-wrap`);
      matchHeight(`.ThreeColumnGrid.${data.background} .card-inner .bolg_details`);
      matchHeight(`.ThreeColumnGrid.${data.background} .card-inner h4`);
      matchHeight(`.ThreeColumnGrid.${data.background} .card-inner .btn-wrap`);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
    };
  }, []);
  

  return (
    <section id = {data.id ? data.id : ''} className={`ThreeColumnGrid md:pb-8  ${data.background} ${data.classes} ${data.padding}`}>
      {
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
      <div className="container">
        <div className={`${Style.SlideWarp}  md:mt-0 w-[calc(100%+24px)] ml-[-12px] laptop-landscape:mt-[40px]`}>
          <Slider {...settings}>
            {data?.cards  && data?.cards.map((item, index) => (
              <div key={index} className={`${Style.col_three_item} card-wrapper data-aos-delay="300 transition-all duration-300 rounded-[18px] border-[2px] outline outline-transparent outline-1 ${data?.background =='bg-black'?`border-white hover:outline-white hover:shadow-white-shadow`:'border-black hover:outline-black hover:shadow-black-shadow desktop-mid:hover:shadow-none lg:hover:shadow-none'}`}>
                <div className={`${Style.col_three} card-inner relative flex flex-col duration-500 h-full ${data?.background =='bg-skyblue'?`bg-white`:''} ${data?.background =='bg-black' ?'text-white':''} ${data?.classes?.includes('press-release')?'min-h-[398px] tablet:min-h-[290px] md:min-h-[160px] desktop:min-h-[310px] sm:min-h-[250px] laptop-landscape:min-h-[330px]':''} overflow-hidden rounded-[16px] group`}>
                  <DynamicLinks cta={item?.buttons}/>
                  {item?.image && <div className={`${Style.img_wrap} img-wrap h-[240px] wide-screen:h-[275px] overflow-hidden`} >
                    {item?.image?.sourceUrl && <Image
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      className="w-full h-full object-cover duration-500 group-hover:scale-[1.05] transition-all"
                      height={200}
                      width={200}
                      quality={100}
                    />}
                  </div> }
                  <div className="content-wrap lg:pb-[70px] desktop:pb-[70px] xl-up:pb-[94px] desktop:p-[26px] laptop-landscape:p-[32px] laptop-landscape:pb-[90px] laptop:pb-[85px]  p-[40px] pr-[30px] laptop:p-[25px] lg:p-6">
                    <div className="bolg_details mb-[6px] tracking-[2.4px] laptop-landscape:text-[12px]">
                      {item?.postType && <span className="fontInter inline-block uppercase font-bold tracking-[0.64px]">
                        {item?.postType}
                      </span>}
                      {item?.postDate && <span className="fontInter inline-block uppercase pl-3 ml-3 border-l-2 font-bold tracking-[0.64px] border-white">
                        {item?.postDate}
                      </span>}
                    </div>
                    {item?.cardTitleBodyWithoutEditor && <h4 className=" font-semibold mb-4">{item?.cardTitleBodyWithoutEditor}</h4>}
                    <div className="btn-wrap mt-5 z-10 absolute bottom-[40px] lg:bottom-[20px] desktop:bottom-[20px]">
                        <DynamicButton cta={item?.buttons} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReferenceCards;