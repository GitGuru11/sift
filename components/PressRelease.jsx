import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Arrow_Btn from './button/ExternalLink_btn';
import Style from "../styles/three-col-grid.module.css"
import IntroWithCta from './IntroWithCta';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from 'next/font/google';
import BlogFilterStyle from '../styles/blog/blogFilter.module.css'
import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

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

    

const FourColumnGrid = ({ icon, title, content, postType, date, link, linktext }) => {
  
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
        <div className="mt-9 z-10 absolute bottom-[36px] lg:bottom-[20px] desktop:bottom-[28px] group-hover:text-pink">
          {/* <Arrow_Btn text={linktext} link={link} color='black' className="group-hover:text-pink"/> */}
          <a aria-label="first link" className="arrow_btn uppercase text-black relative transition-all duration-300 font-[700] leading-[1] pr-[26px] group-hover:text-pink " href="">
            <span className="absolute top-1/2 -translate-y-1/2 right-0 w-[20px]  overflow-hidden">
              <svg className="!ml-0" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <path d="M12.5975 7.45661H11.6087C11.4039 7.45661 11.2379 7.62262 11.2379 7.8274V12.3355C11.2379 12.5748 11.0432 12.7695 10.8039 12.7695H2.16417C1.92494 12.7695 1.73035 12.5748 1.73035 12.3355V3.69591C1.73035 3.45658 1.92494 3.26184 2.16417 3.26184H6.90311C7.10788 3.26184 7.2739 3.09583 7.2739 2.89105V1.90228C7.2739 1.69751 7.10788 1.53149 6.90311 1.53149H2.16417C0.970825 1.53149 0 2.50247 0 3.69591V12.3356C0 13.529 0.970875 14.4999 2.16417 14.4999H10.8039C11.9973 14.4999 12.9682 13.5289 12.9682 12.3356V7.82745C12.9683 7.62262 12.8023 7.45661 12.5975 7.45661Z" fill="#FF3B84"></path>
                <path d="M13.6287 0.5H9.69572C9.49095 0.5 9.32493 0.666015 9.32493 0.870789V1.85956C9.32493 2.06433 9.49095 2.23035 9.69572 2.23035H11.0456L5.96603 7.30981C5.82122 7.45462 5.82122 7.68935 5.96603 7.83421L6.66519 8.53342C6.73475 8.60298 6.82903 8.64204 6.92741 8.64204C7.02574 8.64204 7.12007 8.60298 7.18958 8.53342L12.2691 3.45385V4.80368C12.2691 5.00845 12.4352 5.17446 12.6399 5.17446H13.6287C13.8335 5.17446 13.9995 5.00845 13.9995 4.80368V0.870789C13.9995 0.666015 13.8335 0.5 13.6287 0.5Z" fill="#FF3B84"></path>
              </svg>
            </span>READ MORE
          </a>
        </div>
      </div>
    );
  }

const ColGrid = () => {
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
   //Query Parameter 
   const router = useRouter()
   var x = (router.query?.page == undefined ? (1) : parseInt(router.query?.page) > (Math.ceil(items.length / 12)) ? (Math.ceil(items.length / 12)) : parseInt(router.query?.page))
   const [currentPage, setCurrentPage] = useState(x);
   useEffect(() => {
    setCurrentPage(x)
  }, [x]);

 
  useEffect(() => {
    // setTimeout(() => {
      
    matchHeight('.newsCards .card-inner');
    matchHeight('.newsCards .card-inner .content-wrap');
    matchHeight('.newsCards .card-inner .bolg_details');
    matchHeight('.newsCards .card-inner .content-wrap h4');
      // matchHeight('.newsCards .card-inner .btn-wrap');
    // }, 500);

    const handleResize = () => {
      matchHeight('.newsCards .card-inner');
      matchHeight('.newsCards .card-wrapper');
      matchHeight('.newsCards .card-inner .content-wrap');
      matchHeight('.newsCards .card-inner .bolg_details');
      matchHeight('.newsCards .card-inner h4');
      // matchHeight('.newsCards .card-inner .btn-wrap');
    };

    // Attach both resize and orientationchange event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
    const [wholeData, setWholeData] = useState(items);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSearch, setFilterSeaarch] = useState('');
    const [totalCards, setTotalCards] = useState(items);
    const [totalData, setTotalData] = useState(items);


      const itemsPerPage = 9;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
        const filteredData = totalCards
      const totalPages = Math.ceil(wholeData.length / itemsPerPage);

      const handleSearchCtaHover = () => {
          setIsSearchCtaHovered(true);
      };
      const handleSearchCtaLeave = () => {
          setIsSearchCtaHovered(false);
      };

    /* Search code */ 
    useEffect(() => {
    const filteredCards = searchTerm
      ? items.filter(
          (items) =>
          items.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          items.postType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          items.content.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : items;
        // const filteredCards = '';
      setTotalData(filteredCards);
      setTotalCards(filteredCards);
      setWholeData(filteredCards);
  }, [searchTerm]);


  //Pagination
  const handlePageChange = (newPage) => {
    console.log(newPage);
      setCurrentPage(newPage);

      if (newPage == 1) {
        delete router.query.page
        router.push(router, undefined, { shallow: true });
      } else {
        router.push({
          ...router,
          query: {
            ...router.query,
            page: newPage,
          },
          },
          undefined, 
          { shallow: true }
        );
      }

      const sectionElement = document.getElementById("press-release");
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: "smooth", 
        });
      }
    };

  return (
    <section className={`three-col-grid newsCards md:pb-8 no-padding-top bg-[#ffffff] ${BlogFilterStyle.blogFilter}`} id='press-release'>
        <div className="bg-skyblue pt-[39px] pb-[40px] desktop:py-[30px] lg:py-[20px]">
            <div className="container">
                <div className={`searchWrap`}>
                    <form
                        className={`relative ${isSearchCtaHovered ? 'hovered' : ''}`}
                        onSubmit={(e) => e.preventDefault()} 
                    >
                        <label htmlFor="search">.</label>
                        <input
                            type="search"
                            id="search"
                            aria-label="first link"
                            name="search"
                            placeholder="Search press releases"
                            className={`pt-[13px] pb-[14px] pl-[16px] pr-[50px] w-full text-black bg-white rounded-[8px] ${
                                inter.className
                            } lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px]  ${
                                isSearchCtaHovered ? 'outline-pink' : ''
                            } ${searchTerm ? 'outline-[3px] outline-pink' : ''}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="searchCta"
                            onMouseEnter={handleSearchCtaHover}
                            onMouseLeave={handleSearchCtaLeave}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
      <div className="container">
        {/* <IntroWithCta {...intro} /> */}
        <div className={`bgWhite_SlideWarp sm:mt-0 flex flex-wrap w-[calc(100%+24px)] ml-[-12px] pt-[100px] xl:pt-[40px] sm:w-full sm:m-0`} data-aos="fade-up" data-aos-delay="300">
          {/* <Slider {...settings}> */}
            {(wholeData.length != 0?wholeData.slice(startIndex, endIndex).map((item, index) => {
              return (
                <div key={index} className={`${Style.col_three_item} group card-wrapper w-[calc(33.33%-22px)] mx-[11px] laptop-down:w-[calc(50%-22px)] sm:!w-full sm:mx-0 mb-[24px] overflow-hidden transition-all duration-300 rounded-[16px] border-black border-[2px] outline outline-transparent outline-1 hover:outline-black hover:shadow-black-shadow`} data-aos="fade-up" data-aos-delay="200" >
                  <Link href="" className='emptyLink'>.</Link>
                  <FourColumnGrid {...item} />
                </div>
              );
            }): (<h3 className='block w-full mt-[100px] text-center'>No Result Found</h3>))}
             
          {/* </Slider> */}
        </div>
        {wholeData.length > 9 && (
            <ul className={`${BlogFilterStyle.pagination} mt-[35px] flex justify-center items-center lg:mt-[20px]`}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="prev-button mr-[18px] text-[0]"
              >.
                <div className="iconWrap w-[26px] h-[26px]">
                                      <div className={`${BlogFilterStyle.imgWrapPrev} relative ${
                      currentPage === 1 && 'opacity-[0.2] pointer-events-none'
                    }`}></div>
                </div>
              </button>
              {Array.from({ length: totalPages }, (_, i) => {
                const isCurrent = i + 1 === currentPage;
                if (
                  i + 1 === 1 ||
                  (currentPage === 1 && i < 4) ||
                  (currentPage === 2 && i < 4) ||
                  (currentPage === 3 && i < 4) ||
                  (currentPage === 4 && i === 0) ||
                  i + 1 === currentPage - 1 ||
                  i + 1 === currentPage ||
                  i + 1 === currentPage + 1 ||
                  i + 1 === totalPages 
                  ||
                  (totalPages === currentPage  && i + 1 === totalPages - 2)
                ) {
                  return (
                    <li
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className} mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
                        isCurrent ? 'active text-pink font-bold' : ''
                      }`}
                    >
                      {i + 1}
                    </li>
                  );
                } else if (
                  (currentPage === 1 && i === 4) ||
                  (currentPage === 2 && i === 4) ||
                  (currentPage === 3 && i === 4) ||
                  (i + 1 === currentPage - 2 && i + 1 > 1) ||
                  (i + 1 === currentPage + 2 && i + 1 < totalPages) ||  (currentPage === totalPages && i + 1 === totalPages - 2)
                ) {
                  return (
                    <li
                      key={`dots-${i + 1}`}
                      onClick={() => handlePageChange(i + 1)}
                      className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink `}
                    >
                      ...
                    </li>
                  );
                } else if (i + 1 === 1) {
                  return (
                    <li
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
                        isCurrent ? 'active text-pink font-bold' : ''
                      }`}
                    >
                      {i + 1}
                    </li>
                  );
                }else if (totalPages === currentPage && i + 1 === totalPages - 3) {
                  return (
                    <li
                    key={`dots-${i + 1}`}
                    onClick={() => handlePageChange(i + 1)}
                    className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:!text-pink `}
                    >
                    ...
                    </li>
                  );
                  }

                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="next-button ml-[18px] text-[0]"
              >.
                <div className={`iconWrap w-[26px] h-[26px]`}>
                                      <div className={`${BlogFilterStyle.imgWrapNext} relative ${
                      currentPage === totalPages && 'opacity-[0.2] pointer-events-none'}`}></div>
                </div>
              </button>
            </ul>
          )}
      </div>
    </section>
  );
};

export default ColGrid;