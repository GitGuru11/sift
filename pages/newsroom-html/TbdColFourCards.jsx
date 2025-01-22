import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react'
import Intro from '../../components/IntroWithCta'
import Arrow_Btn from '../../components/button/ExternalLink_btn'
import Style from "../../styles/three-col-grid.module.css"
import Styles from '../../styles/platform/contentWithCard.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const introDetail = {
  normalText: "Press releases",
  bg: "white",
  link: '/press-html',
  cta: 'see all press releases',
   
}

const items = [
    {
      icon: '/card.svg',
      title: 'Sift Named Top Fraud and Financial Crimes Solution by PayTech Awards USA',
      postType: "press release",
      date: "Oct 5, 2023",
      content: 'AI-Powered Fraud Decisioning..',
      link: '/item1',
      linktext: 'READ MORE',
    },
    {
        icon: '/card.svg',
      title: 'Report: Account Takeover Attacks Grew Over 800% against Fintech and Almost 500% Against Food & Beverage Sectors, Sift Data Shows',
      postType: "press release",
      date: "Oct 5, 2023",
      content: 'AI-Powered Fraud Decisioning..',
      link: '/item2',
      linktext: 'READ MORE',
    },
    {
        icon: '/card.svg',
      title: 'Sift Unveils New PayPal and Adyen Integrations, Automation Capabilities for Dispute Management and Payment Protection Customers',
      postType: "press release",
      date: "Oct 5, 2023",
      content: 'AI-Powered Fraud Decisioning..',
      link: '/item3',
      linktext: 'READ MORE',
    },
    
  ];

const FourColumnGrid = ({ icon, title, content, postType, date, link, linktext }) => {
  
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
      } else {
        elements.forEach(element => {
          element.style.height = 'auto';
        });
      }
    };

    handleResize();
    // window.addEventListener('resize', handleResize);
  }

  useEffect(() => {
    setTimeout(() => {
    matchHeight('.into-with-four-cards .inner_card');
      matchHeight('.into-with-four-cards .inner_card  h4');
      matchHeight('.into-with-four-cards .inner_card  .bolg_details');
    }, 400);

    const handleResize = () => {
      matchHeight('.into-with-four-cards .inner_card  h4');
      matchHeight('.into-with-four-cards .inner_card  .bolg_details');
      matchHeight('.into-with-four-cards .inner_card');
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
      
  });
  return (
    <div className={`inner_card relative min-h-[398px] tablet:min-h-[290px] md:min-h-[160px] desktop:min-h-[310px] sm:min-h-[250px] laptop-landscape:!px-[21px] laptop-landscape:min-h-[330px] flex flex-col transition-all h-full bg-white overflow-hidden pt-[37px] px-[40px] laptop-landscape:pt-[21px] laptop:px-[30px] tablet:p-[25px] md:p-[20px] lg:pb-[50px] desktop:p-[30px] desktop:pb-[36px] xl-up:pb-[44px] `}>
      <div className={`${Style.eyebrowText} bolg_details mb-[6px] wide-screen:mb-[16px] tracking-[2.4px]`}>
        <span className="relative fontInter inline-block pr-3 mr-3 laptop-landscape:text-[14px] wide-screen:text-[18px] desktop:text-[14px] lg:text-[14px] text-blue font-bold tracking-[0.64px] uppercase">
          {postType}
        </span>
        <span className="relative fontInter inline-block laptop-landscape:text-[14px] desktop:text-[14px] lg:text-[14px] wide-screen:text-[18px]  text-blue font-bold tracking-[0.64px] uppercase">
          {date}
        </span>
      </div>
  
      <h4 className="mb-[9px] text-ellipsis md:h-[45px] md:!line-clamp-2 ">{title}</h4>
      <div className="mt-9 z-10 absolute bottom-[36px] lg:bottom-[20px] desktop:bottom-[28px]">
        <Arrow_Btn text={linktext} link={link} color='black'/>
      </div>
    </div>
  );
}


function IntroWithColFour() {

  const getSlidesToShow = () => {
    if (items.length > 3) {
      return 3;
    } else {
      return items.length;
    }
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
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
      breakpoint: 1024,
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

  var outline = `after:content-[] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:border-[2px] after:border-black after:rounded-[16px]`

  Object.assign(settings, { responsive: responsiveSettings });
  return (
    <section className='relative  overflow-hidden into-with-four-cards bg-skyblue padding-medium' id='press-release'>
      
      <div className="container">
        <Intro {...introDetail} />
        {/* <div className="wrapper flex flex-wrap w-[calc(100%+24px)] -ml-[12px] xl-up:mt-[80px] z-10"> */}
        <div className={`${Style.SlideWarp} ${Style.three_col}   w-[calc(100%+24px)] ml-[-12px] sm:mt-0`} data-aos="fade-up" data-aos-delay="300">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className={`${Styles.card} relative  w-[calc(33.33%)]  overflow-hidden  rounded-[16px] desktop:w-[calc(50%-24px)]  sm:mb-0 tablet:w-[calc(50%-24px)] phablet:w-[calc(50%-24px)] duration-300 sm:w-full`}  >

                <FourColumnGrid {...item} />
              </div>
            ))}
          </Slider>
        </div>
        {/* </div> */}

      </div>
    
    </section>

  )
}

export default IntroWithColFour
