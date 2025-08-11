import axios from "axios";
import React, { useState, useEffect } from "react";


const Contactus = () => {
    const [headerData, setHeaderData] = useState<any>(null);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const schoolName = import.meta.env.VITE_SCHOOL;
  useEffect(() => {
  
  
      // // Fetch header config
      axios
        .get(`${baseUrl}/${schoolName}/items/config?fields=*,logo.data.full_url`)
        .then((response) => {
          setHeaderData(response.data);
          // console.log(response.data,"header data")
        })
        .catch((error) => {
          console.error("Error fetching header data:", error);
        });
    }, []);

//   console.log(data_header)
  return (

      <div className="flex flex-col mb-10 lg:mx-28 pt-20 ">
        <div className="bg-[#e8ecef]   md:mx-4  text-base rounded-xl flex   p-[70px]  align-middle justify-center" >
          <h1 className="text-6xl font-bold">Contact us</h1>
        </div>
        <div className="mt-[15px] lg:mx-16 px-6     flex md:flex-row flex-col">
          <iframe className=" md:w-[600px] md:h-[450px] "
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3665.0753547332783!2d77.42991967532149!3d23.276711478996425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE2JzM2LjIiTiA3N8KwMjUnNTcuMCJF!5e0!3m2!1sen!2sin!4v1754568446969!5m2!1sen!2sin"

            style={{ border: "0" }}
            // allowFullScreen="g"
            loading="lazy"
          ></iframe>
          <div className="md:px-[40px] px-10 mt-4 capitalize" >
            <legend
              className="text-[#212529] font-normal leading-relaxed text-base md:w-[350px]"
            >
              School: 
            </legend>
            <hr className="md:w-[350px]" />
            <strong>Address.</strong>
            <address className="md:w-[350px] text-black">
            {headerData?.data? headerData?.data[0]?.address : "Loading..."}
              {/* Dwarka Nagar , Nisatpura , Bhopal-462010 Phone: 0755-2740018 */}
            </address>
            <div>phone: {headerData?.data? headerData?.data[0]?.phone : "Loading..." }</div>
            <strong>Email:</strong>
            <address className="text-black lowercase">
              <a>
              {headerData?.data? headerData?.data[0]?.email :"Loading..."}
                {/* rosemarydwarka@gmail.com */}
                </a>
            </address>
          </div>
        </div>
      </div>
  );

}

export default Contactus;



