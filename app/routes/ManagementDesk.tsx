import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoaderBox from '~/Components/GalleryLoader';
import ImageLoader from '~/Components/imageLoader';

const ManagementDesk = () => {

    const [headerData, setHeaderData] = useState<any>(null);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const schoolName = import.meta.env.VITE_SCHOOL;

    const [isloading,setIsLoading] = useState<any>(false)

  useEffect(() => {
  
  setIsLoading(true)
      
      axios
        .get(`${baseUrl}/${schoolName}/items/faculty?status=published&fields=*.*`)
        .then((response) => {
          setHeaderData(response.data);
          setIsLoading(false)
        //   console.log(response.data,"header data")
        })
        .catch((error) => {
            setIsLoading(false)
          console.error("Error fetching header data:", error);
        });
    }, []);


  return (
    <>
      <div  className="">
      <img className="w-full" src="/images/upper.png" />

        <div className="grid gap-10 mx-10 sm:grid-cols-3 ">
          <div className="flex justify-center text-center ">
            <div className=" sm:h-8/12 sm:w-8/12 md:mt-10" >
                <div className='relative w-full max-w-md h-[300px]'>
                <img
                className="shadow-2xl rounded-2  shadow1 "
                src={ headerData?.data[2]?.photo?.data?.full_url?.replace('http://', 'https://') }
                // src="https://rosemarydn.com/images/skmishra.JPG"
                alt="Card image cap"
                style={{ width: "100%", height: "300px" }}
                />
                {isloading && <ImageLoader/>}
            </div>
            <div className="bg-blue-600 h-[50px] flex items-center justify-center shadow1">
              <h3 className="text-xl font-medium text-center text-white ">
              {headerData?.data?.length > 0? headerData?.data[2]?.full_name : "Demo Name"}
                {/* SK Mishra */}
              </h3>
            </div>
          </div>
          </div>

          <div className="sm:col-span-2 sm:mx-10 ">
            <h5 className="text-2xl font-medium text-center">
            {headerData?.data?.length > 0? headerData?.data[2]?.message : "Management Message"}
              {/* Management Message */}
            </h5>
            <p className="pb-0 mb-0 text-base font-normal sm:mr-5 sm:pr-5">
            {headerData?.data?.length > 0? headerData?.data[2]?.description : `Education should bring out the perfection which is already present in each
                                    child. An institution should provide an environment which helps the child in
                                    achieving this perfection. It should help him develop his inherent qualities
                                    and all the aspects of his personality. This can be achieved when those
                                    involved in this process realize that education is much more than cramming
                                    a lot of information and passing examinations based on rote learning.
                                    Bhopal Public School Proposes to provide such an
                                    environment to the children. envisages looking for and orientating
                                    suitable personnel who would undertake this important task. It is hoped that
                                    the faculty so committed will achieve this objective. I assure you on behalf
                                    of the school to give civilized, knowledgeable and outstanding souls back to
                                    the society, on receiving them as an innocent and tender minds.
                                    Bhopal Public School Proposes to provide such an
                                    environment to the children. envisages looking for and orientating
                                    suitable personnel who would undertake this important task. It is hoped that
                                    the faculty so committed will achieve this objective. I assure you on behalf
                                    of the school to give civilized, knowledgeable and outstanding souls back to
                                    the society, on receiving them as an innocent and tender minds.`}
               
            </p>
          </div>
        </div>
        <img className="w-full" src="/images/lower.png" />
      </div>
      {/* {isloading&&<LoaderBox/>} */}
      </>
  );

}

export default ManagementDesk;



