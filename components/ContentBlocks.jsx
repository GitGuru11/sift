import React from 'react'
export default function ContentBlocks() {
  const cards = [
    {
          title: "AI-Powered Fraud Decisioning..",
          blurb: "AI-Powered Fraud Decisioning..",
    },
    {
        title: "AI-Powered Fraud Decisioning..",
        blurb: "AI-Powered Fraud Decisioning..",
    },
    {
        title: "AI-Powered Fraud Decisioning..",
        blurb: "AI-Powered Fraud Decisioning..",
    },
  ]
  return (
    <section className='bg-skyblue ContentBlocks pt-[60px]'>
        <div className="container">
            <div className="colthreeWrap flex flex-wrap w-[calc(100%+25px)] ml-[-12.5px] ">
                {cards.map((data , index) => (
                    <div key={index} className={` colThree w-[calc(33.33%-25px)] mx-[12.5px] border-t-[1px] border-[#000] pt-[16px] tablet:w-[calc(50%-25px)] lg:mb-[24px]  md:w-[calc(100%-25px)]`}>
                        <h4 className='mb-[24px]'>{data.title}</h4>
                        <p className='xxl:text-[16px]'>{data.blurb}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
