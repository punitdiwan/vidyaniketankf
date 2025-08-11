

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { AnimatePresence } from "framer-motion";
import LoaderBox from '~/Components/GalleryLoader';
import ImageLoader from '~/Components/imageLoader';

const Gallery = () => { 
  const slides = [
    { title: "/images/glr1.jpg ", description: 'View Gallery' },
    { title: "/images/glr2.jpg ", description: 'View Gallery' },
    { title: " /images/glr3.jpg", description: 'View Gallery' },
    { title: "/images/glr2.jpg ", description: 'View Gallery' },
    { title: "/images/glr3.jpg ", description: 'View Gallery' },
    { title: " /images/glr1.jpg", description: 'View Gallery' },
  ];
 const [headerData, setHeaderData] = useState<any>(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const schoolName = import.meta.env.VITE_SCHOOL;

  const [isloading,setIsLoading] = useState<any>(false)
  
  useEffect(() => {
      setIsLoading(true)
  
      // // Fetch header config
      axios
        .get(`${baseUrl}/${schoolName}/items/gallery?fields=*.*.*`)
        .then((response) => {
          setHeaderData(response.data);
          setIsLoading(false)
          // console.log(response.data,"gallery data")
        })
        .catch((error) => {
          setIsLoading(false)
          console.error("Error fetching header data:", error);
        });
    }, []);


  return (
   
    <>  
    <div className='relative w-full '>
        <div className="container-fluid ">
          <div className="  md:grid p-5  md:grid-cols-5 sm:grid pt-20 sm:grid-cols-2   bg-[#0066cc]">
            {
            // headerData?.data?.length > 0 ?
              headerData?.data.map((item:any, i:any) => {
                return (
                  <div key={i} className="p-2">
                    <img
                      src={item.photo.data.full_url?.replace('http://', 'https://')}
                      className="w-full h-[200px]  rounded-lg shadow-md"
                      alt="no_img"
                    />
                  </div>  
                );
              })
              }
          </div>
        </div>
        <div className='h-[200px]'>
          {isloading && <ImageLoader />}
        </div>
          {/* <AnimatePresence>
            {isloading && <LoaderBox />}
          </AnimatePresence> */}
          </div>
      </>
 
  );

}

export default Gallery;



// export async function getStaticProps(context) {
//   let data_header

//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

//     data_header = await response.json()
//   }
//   catch (error) {
//     data_header = false
//   }

//   //////

//   let gallery_data

//   try {
//     const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/gallery?fields=*.*.*`)

//     gallery_data = await response1.json()
//   }
//   catch (error) {
//     gallery_data = false
//   }


//   return {
//     props: { data_header, gallery_data },
//     revalidate: 1, // will be passed to the page component as props
//   }
// }

