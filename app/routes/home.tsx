

import HomeEvents from "./HomeEvents";
import SchoolMassage from "./SchoolMassage";
import Slider from "./Slider";
import LoaderBox from "~/Components/GalleryLoader";

 import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ImageLoader from "~/Components/imageLoader";

export default function Home() { 
  const [data,setData] = useState<any>([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const schoolName = import.meta.env.VITE_SCHOOL;
  
  const [isloading,setIsLoading] = useState<any>(false)

  
  
  useEffect(() => {
    
          setIsLoading(true)
   
        axios
          .get(`${baseUrl}/${schoolName}/items/slider?status=published&fields=caption,image.data.full_url`)
          .then((response) => {
            setData(response.data);
            setIsLoading(false)
            // console.log(response.data,"header data")
          })
          .catch((error) => {
              setIsLoading(false)
            console.error("Error fetching header data:", error);
          });
  }, []);
  return (
    <div>
      {/* <div className="bg-red-500 text-white p-4 text-center">TAILWIND TEST: This should be a red box with white text.</div> */}

        <div className="relative w-full md:h-[400px] lg:h-[500px] h-[230px] ">
          <Slider headerData={data}/>
          {isloading && <ImageLoader/>}
        </div>
        <SchoolMassage/>
        <HomeEvents/>
       
    </div>
  );
}


