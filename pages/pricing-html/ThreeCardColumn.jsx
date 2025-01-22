import React, {useEffect, useState} from "react";
import BtnPink from '../../components/button/Button_Pink'
import Style from '../../styles/ThreeCardColumn.module.css'


const CardsData = [
  {
    heading: 'Starter',
    blurb: 'AI-Powered Fraud Decisioning..',
    tag: 'most popular',
    color: 'blue',
    ctaText: 'GET STARTED',
    ctaLink: '/',
    listData: [{
      head: 'Fraud coverage:',
      list: '<li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li>  <li>Elit aenean morbi at vulputate</li>'
    },
    {
      head: 'AL/ML/Data science:',
      list: '<li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li> '
    },
    {
      head: 'Observability:',
      list: '<li>AI-Powered Fraud Decisioning.. </li> '
    },
    {
      head: 'Reporting:',
      list: '<li>AI-Powered Fraud Decisioning..</li> '
    },
    {
      head: 'Integration coverage:',
      list: '<li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning..</li> '
    },
    {
      head: 'Volume included:',
      list: '<li>AI-Powered Fraud Decisioning..</li> '
    },
    ]
  },
  {
    heading: 'Professional',
    blurb: 'AI-Powered Fraud Decisioning..',
    tag: 'AI-Powered Fraud Decisioning..',
    ctaText: 'GET STARTED',
    color: 'green',
    ctaLink: '/',
    listData: [{
      head: 'Investigation & Case Management:',
      list: '<li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li>  <li>Elit aenean morbi at vulputate</li>'
    },
    {
      head: 'Orchestration & Automation:',
      list: '<li>AI-Powered Fraud Decisioning..</li>  <li>AI-Powered Fraud Decisioning.. </li>  <li>Elit aenean morbi vulputate</li> '
    },
    {
      head: 'Reporting:',
      list: '<li>AI-Powered Fraud Decisioning..</li> '
    },
    {
      head: 'Volume Included:',
      list: '<li>AI-Powered Fraud Decisioning..</li> '
    },
    ]
  },
  {
    heading: 'Enterprise',
    blurb: 'AI-Powered Fraud Decisioning..',
    tag: 'new plan',
    color: 'yellow',
    ctaText: 'GET STARTED',
    ctaLink: '/',
    listData: [{
      head: 'Investigation & Case Management:',
      list: '<li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning..</li> <li className="cross">AI-Powered Fraud Decisioning.. </li> <li className="cross">AI-Powered Fraud Decisioning..</li>  <li className="cross">Elit aenean morbi at vulputate</li>'
    },
    {
      head: 'Orchestration & Automation:',
      list: '<li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li> <li className="cross">Elit aenean morbi vulputate</li> '
    },
    {
      head: 'AL/ML/Data science:',
      list: '<li>AI-Powered Fraud Decisioning.. </li><li className="cross">AI-Powered Fraud Decisioning..</li> <li className="cross">Elit aenean morbi vulputate</li> <li>AI-Powered Fraud Decisioning.. </li>'
    },
    {
      head: 'Reporting:',
      list: '<li>AI-Powered Fraud Decisioning..</li> '
    },
    {
      head: 'Volume Included:',
      list: '<li>AI-Powered Fraud Decisioning..</li> '
    },
    ]
  },
]

export default function ThreeCardColumn() {

  const [open,setOpen] =useState([])

  function clickHandler(index) {
      if (open.includes(index)) {
          setOpen(open.filter(item => item !== index));
      } else {
          setOpen([...open, index]);
      }
  }

  const icon = 'after:content-[""] after:absolute after:w-[24px] after:h-[24px]  after:top-[50%] after:right-0  after:translate-y-[-50%] after:bg-contain after:z-[1]'

  return (
    <section className="ThreeCardColumn no-padding-bottom bg-white">
      <div className="container">
        <div className="wrapper flex flex-wrap w-[calc(100%+24px)] -ml-[12px]">
          {CardsData.map((item, i) => {
            return (
              <div key={i} className={`relative col-three w-[calc(33.33%-24px)] desktop:mb-[40px] desktop:w-[calc(50%-24px)] tablet:w-[calc(50%-24px)] md:w-[calc(100%-24px)] lg:mb-[40px] last:mb-0 mx-[12px] border-[2px]  h-auto rounded-[24px] ${item.color == 'blue' ? 'border-blue bg-lightBlue' : (item.color == "green") ? 'border-[#67E7B5]' : (item.color == "yellow") ? 'border-yello' : ''}`}>
                <div className=" xl-up:pb-[47px] px-[32px] py-[40px] md:p-[20px] md:pt-[40px]">
                  <div className={`tag absolute py-[8px] ${item.color == 'blue' ? 'bg-[#2E69FF]' : (item.color == "green") ? 'bg-[#79F7C6]' : (item.color == "yellow") ? 'bg-[#FFCA36]' : ''} rounded-[100px] px-[16px] top-[-20px] left-[50%] translate-x-[-50%]`}>
                    <span className={`small_font fontInter !font-[700] ${item.color == 'blue' ? '!text-white ' : ''} uppercase`}>{item.tag}</span>
                  </div>
                  <div className="content-wrap h-full">
                    <h3 className="mb-[7px]">{item.heading}</h3>
                    <p>{item.blurb}</p>
                    <div className="btn mt-[24px] lg:mt-[20px]">
                      <BtnPink text={item.ctaText} link={item.ctaLink} />
                    </div>
                    <div className={`overflow-hidden md:transition-all md:duration-300 md-up:max-h-full ${open.includes(i) ? 'md:max-h-[1130px]' :'max-h-0'}`}>
                      <div className={`listwrap mt-[36px] pt-[41px] desktop:pt-[30px] desktop:mt-[30px] lg:mt-[20px] lg:pt-[20px]  border-t-[1px] border-black`} >
                        {item.listData.map((listItem, j) => {
                          return (
                            <div key={j} className="wrap mb-[33px] desktop-mid:mb-[25px] lg:mb-[20px] last:mb-0 ">
                              <p className="font-[700] normal-case">{listItem.head}</p>
                              <ul className={`mt-[16px] tick ${Style.tick}`} dangerouslySetInnerHTML={{ __html: listItem.list }} />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="tabBtn md-up:hidden px-[15px] py-[24px] border-t-[1px] border-black" onClick={() => clickHandler(i)}>
                  <p className={`relative text-[14px] font-[700] capitalize ${icon} ${open.includes(i) ? 'after:bg-[url("/logos/minus.svg")]' : 'after:bg-[url("/logos/plus.svg")]'}`}>
                    {open.includes(i) ? 'Show fewer features' : 'Show all features'}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}