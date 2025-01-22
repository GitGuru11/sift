import React from 'react';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import Style from '../../styles/patents/patentTable.module.css';
import $ from 'jquery';
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})
export default function PatentTable(props) {
    let data = props.items;
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [winWidth, isWinWidth] = useState(0);

    const [openIndexes, setOpenIndexes] = useState([0]);

    const toggleAccordion = (index) => {
        const isOpen = openIndexes.includes(index);

        if (isOpen) {
            setOpenIndexes(openIndexes.filter((item) => item !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

       useEffect(() => {
        $( ".converttexttolink" ).each(function() {
            var convertTextToHTML = $(this).text();
            var conversation = convertTextToHTML.replace(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi, function(text, link) {
                return '<a class="underline hover:text-pink transition-colors" target="_blank" href="'+ link +'"> ' + link + ' </a>';
            });
            $(this).html(conversation);
        });
        
    },[])
    useEffect(() => {
        const handleResize = () => {
            isWinWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };        
    },[])

    const handleHover = (index) => {
        setHoveredIndex(index);
    };
    return (
        <section id={data.id ? data.id : ''} className={`PatentTable overflow-hidden ${data.background} ${data.classes} ${data.padding}`}>
            <div className="container">
                <div className="wrap md:overflow-x-scroll md:whitespace-wrap md:p-[20px]">
                    <table border="1" className='outline-[1px] outline outline-black md:w-[767px] rounded-[16px] overflow-hidden '>
                        <thead className='bg-oceanGreen '>
                            <tr>
                                {data?.table?.tableHeader && data?.table?.tableHeader.map((row, index) => {
                                    return (
                                        <th key={index} className={`w-[16%] md:w-[200px] font-[700] text-[16px] leading-[19px] text-center pt-[16px] pb-[18px] uppercase px-[16px] border-r-[1px] border-black ${inter.className}`}>
                                            {row?.heading}
                                        </th>);
                                }
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.table?.tableRows && data?.table?.tableRows.map((items, index) => {
                                return (
                                    <tr key={index} className='border-b-[1px] last:border-b-0 border-black'>
                                        {items?.row && items?.row.map((item, index) => {
                                            return (
                                                <td key={index} className={`w-[15%] md:w-[200px] relative text-[16px] leading-[19px] text-center py-[24px] px-[16px] border-r-[1px] border-black ${inter.className} align-top`}>
                                                    <span className={`${inter.className} converttexttolink  text-[16px] text-black transition-all duration-[0.3s]`}>
                                                        {item?.value}
                                                    </span>
                                                </td>)
                                        })}
                                    </tr>
                                )}
                            )}
                        </tbody>
                    </table>
                </div>
            </div> 
        </section>
    );
}
