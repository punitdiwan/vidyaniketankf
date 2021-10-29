import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { base_url, school_name } from '../SimpleState/auth'
import axios from 'axios';
import Layout from "../Component/Layout";

const AboutUs = ({ data_header }) => {

  const [data, setdata] = useState("")
  const get_base_url = base_url.use()
  const get_school_name = school_name.use()


  useEffect(() => {
    axios.get(`${get_base_url}/${get_school_name}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`)
      .then((response) => {


        if (response?.data?.data?.length > 0) {
          console.log(response.data);
          setdata(response.data.data[0])
          // response?.data?.data[0].map((data1,i)=>{
          //     setdata(data1) 
          //     console.log(data1);
          // })
          //   setdata(response) 
        }

      })
      .catch((error) => {
        console.log(error);
      })


  }, [])

  return (
    <Layout header_data={data_header}>
      <div
        className="mx-3 "
      >
        <img
          className="w-full "
          src="https://rosemarydn.com/images/upper.png"
        />
        <div className="leading-[ 22.5px] font-normal">
          <h5 className="text-center">
            {/* {data?.heading || "About School"} */}
            About us

          </h5>
          <p className="mb-0">
          Vidya niketan School  run by Mr Devendra Singh Ji.Since then it has been training the flame of excellence and creating new breakthrough in the world of education.Principles and vision runs through each and every individual and can be seen in the passion and zeal with which they work. The school’s building and environment are testimony to the fact that the place is more than an educational institution. It not only teaches, but grooms the future of India. The school’s infrastructure has been structured to engineer holistic development of a child. The school not merely works towards living up to its name, but envisions moving beyond it. Therefore we aspire for new goals each year and put our best foot forward to work in the same till the goals are reached. Thus a holistic approach of education is adopted in grooming the students towards becoming best amoung there field. The teachers always make their utmost efforts to keep their students at par or ahead of their times. Thus, they experiment with new ideas and strategies and improvise methods whereby the students can get the extra edge. Much of what the school has gained is due to their commitment. Teachers here work constantly in imparting knowledge in the most innovative ways using different strategies and technology. They are engaging students in various ways through projects to give hands on experience.  </p>
        </div>
        <img
          className="w-full"
          src="https://rosemarydn.com/images/under.png"
        />
      </div>
    </Layout>
  );

}

export default AboutUs;


export async function getStaticProps(context) {
  let data_header

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

    data_header = await response.json()
  }
  catch (error) {
    data_header = false
  }
  return {
    props: { data_header },
    revalidate: 2, // will be passed to the page component as props
  }
}
