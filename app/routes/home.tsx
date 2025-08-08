

import HomeEvents from "./HomeEvents";
import SchoolMassage from "./SchoolMassage";
import Slider from "./Slider";
import LoaderBox from "~/Components/GalleryLoader";

 import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Home() { 
  const [data,setData] = useState<any>([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const schoolName = import.meta.env.VITE_SCHOOL;
  
  const [isloading,setIsLoading] = useState<any>(false)

  
  
  useEffect(() => {
    
          setIsLoading(true)
        // // Fetch header config
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
     
        <Slider headerData={data}/>
        
        <SchoolMassage/>
        <HomeEvents/>
       {isloading && <LoaderBox/>}
    </div>
  );
}


// export async function getStaticProps(context) { 
//   let data_header 

//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)
 
//     data_header = await response.json()  
//   } 
//   catch (error) {
//     data_header = false 
//   } 
   
//   let slider_data  
//   try {
//     const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/slider?status=published&fields=caption,image.data.full_url`)

//     slider_data = await response1.json()  
//   } 
//   catch (error) {
//     slider_data = false 
//   }  

// return {
// props: { data_header,slider_data },
// revalidate: 2, // will be passed to the page component as props
// }
// }