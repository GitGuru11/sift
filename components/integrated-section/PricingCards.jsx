import React, {useState} from "react";
import DynamicButton from "../global-components/Buttons";
import Style from '../../styles/ThreeCardColumn.module.css'
export default function PricingCards(props) {
	let data = props.items;
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
    <section id={data.id ? data.id : ''} className={`ThreeCardColumn no-padding-bottom bg-white ${data.background} ${data.classes} ${data.padding}`}>
      <div className="container">
        <div className="wrapper flex flex-wrap w-[calc(100%+24px)] -ml-[12px]">
          {data?.cards && data?.cards.map((item, i) => {
            return (
              <div key={i} className={`relative col-three w-[calc(33.33%-24px)] desktop:mb-[40px] desktop:w-[calc(50%-24px)] tablet:w-[calc(50%-24px)] md:w-[calc(100%-24px)] lg:mb-[40px] last:mb-0 mx-[12px] border-[2px]  h-auto rounded-[24px] ${item?.cardBorderColor == 'border-blue' ? 'border-blue bg-lightBlue' : (item?.cardBorderColor == "border-green") ? 'border-[#67E7B5]' : (item?.cardBorderColor == "border-yellow") ? 'border-yello' : ''}`}>
                <div className=" xl-up:pb-[47px] px-[32px] py-[40px] md:p-[20px] md:pt-[40px]">
                  {item?.heading && <div className={`tag absolute py-[8px] ${item?.cardBorderColor == 'border-blue' ? 'bg-[#2E69FF]' : (item?.cardBorderColor == "border-green") ? 'bg-[#79F7C6]' : (item?.cardBorderColor == "border-yellow") ? 'bg-[#FFCA36]' : ''} rounded-[100px] px-[16px] top-[-20px] left-[50%] translate-x-[-50%]`}>
                    <span className={`small_font fontInter !font-[700] ${item?.cardBorderColor == 'border-blue' ? '!text-white ' : ''} uppercase`} dangerouslySetInnerHTML={{__html: item?.heading}}></span>
                  </div> }
                  <div className="content-wrap h-full">
                    {item?.title && <h3 className="mb-[7px]" dangerouslySetInnerHTML={{__html: item?.title}}></h3>}
                    {item?.body && <div dangerouslySetInnerHTML={{__html: item?.body}}></div>}
                    <div className="btn mt-[24px] lg:mt-[20px]">
                      <DynamicButton cta={item?.buttons} />
                    </div>
                    <div className={`overflow-hidden md:transition-all md:duration-300 md-up:max-h-full ${open.includes(i) ? 'md:max-h-[1130px]' :'max-h-0'}`}>
                      <div className={`listwrap mt-[36px] pt-[41px] desktop:pt-[30px] desktop:mt-[30px] lg:mt-[20px] lg:pt-[20px]  border-t-[1px] border-black`} >
                        {item?.features && item?.features.map((listItem, j) => {
                          return (
                            <div key={j} className="wrap mb-[33px] desktop-mid:mb-[25px] lg:mb-[20px] last:mb-0 ">
                              {listItem?.title && <p className="font-[700] normal-case" dangerouslySetInnerHTML={{__html: listItem?.title}}></p>}
                              <ul className={`mt-[16px] tick ${Style.tick}`}>
                              {listItem?.rows && listItem?.rows.map((row, index) => {
                                return (
                                    <li key={index} className={row?.typeOfIcon} >
                                      {row?.body && <span dangerouslySetInnerHTML={{__html: row?.body}}></span>}
                                    </li>
                                )
                                })
                              }
                              </ul>
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