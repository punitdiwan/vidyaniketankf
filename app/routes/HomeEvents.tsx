
import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import VerticalMarquee from './Vertical';
import ImageLoader from '~/Components/imageLoader';


const HomeEvents = () => {
    const [value, onChange] = useState<any>(new Date()); //this is for Calendar
    const [data, setdata] = useState<any>("")
    const [data1, setdata1] = useState<any>([])
   const baseUrl = import.meta.env.VITE_BASE_URL;
  const schoolName = import.meta.env.VITE_SCHOOL;


    useEffect(() => {
  const fetchData = async () => {
    try {
      const [toppersRes, eventsRes] = await Promise.all([
        axios.get(`${baseUrl}/${schoolName}/items/toppers?fields=*,photo.*`),
        axios.get(`${baseUrl}/${schoolName}/items/events`)
      ]);

      if (toppersRes?.data?.data?.length > 0) {
        setdata(toppersRes);
      }

      if (eventsRes?.data?.data?.length > 0) {
        setdata1(eventsRes);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);




    return (
        <div className="  md:grid p-5   md:grid-cols-3 sm:grid  sm:grid-cols-2   bg-[#0066cc]">
            <div className="mx-3">
                <h1 className="py-2 text-center text-[white] "><b> News & Events</b></h1>
                <div style={{ height: "305px", width: "100%" }} className="m-2 bg-[#d4d1d1]">
                    <VerticalMarquee data1={data1}/>
                </div>

            </div>
            <div className="flex flex-col items-center mx-3 text-center">
                <h1 className="py-2 text-center text-[white] "><b> School Calendar</b></h1>
                <div className=" lg:mt-3 sm:px-5" >
                    <Calendar
                        className="bg-[#0f6580] react-calendar "
                        onChange={onChange}
                        value={value}
                         locale="en-US"
                    />
                </div>

            </div>
            <div className="mx-3">
                <h1 className="py-2 text-center text-[white] "><b> Topper (2024-2025)</b></h1>
                
                <Carousel className='rounded-[5px] shadow-lg' showThumbs={false} autoPlay={true} infiniteLoop={true}   showStatus={false} showIndicators={false} >
                    {
                        data?.data ?
                        data?.data?.data.map((item:any, index:any) => {
                            return <div className="carousel-inner" role="listbox" key={index} >
                                <div className='carousel ' role="listbox" style={{ marginTop: "15px" }}>
                                    <img
                                        src={item?.photo?.data?.full_url?.replace('http://', 'https://')}
                                        style={{ height: "250px", width: "100%", border: "1px solid #ccc" }}
                                        alt="sorry_no_img"
                                    />
                                   <h4 className="p-0 py-3 m-0 text-[white]" style={{ border: "1px solid #ccc" }}>{item.name}</h4>
                                </div>
                            </div>
                        })
                        : <div className='relative bg-white w-full md:py-[150px] rounded-[5px]'>
                           Loading...
                        </div>
                        
                    }

                </Carousel>


            </div>
        </div>
    )
}

export default HomeEvents
