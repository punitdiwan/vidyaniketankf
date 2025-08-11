
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";




const Slider = ({ headerData }: { headerData: any }) => {
        

  return (
    <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}  showStatus={false} showIndicators={false}  >
        {
        // headerData?.data?.length > 0 ?
            headerData?.data?.map((item:any, index:any) => {
              return <div className="carousel-inner" role="listbox" key={index} >
                <div className='carousel' role="listbox">
                  <img
                    src={item?.image?.data?.full_url?.replace('http://', 'https://')}
                    className="w-full md:h-[400px] lg:h-[500px] h-[230px]"
                    alt="sorry_no_img"
                  />
                </div>
              </div>
            })
            }
      </Carousel>
      
    </div>
  )
}

export default Slider

 
