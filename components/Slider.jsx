import { Carousel} from 'flowbite-react'
// import type { ModalOptions, ModalInterface } from 'flowbite'
import BootstrapCarousel from './BootstrapCarousel'
const Slider = ()=>{
    return (
        // h-56 sm:h-96 xl:96 2xl:96
        <div className="h-56  xl:96 2xl:96 set-h" >
        <Carousel>
        <img
            src="https://res.cloudinary.com/jkstudents/image/upload/v1684241595/Screenshot_20230429-161037_psegno.png"
            alt="..."
          />
          <img
            src="/dev.png"
            alt="..."
          />
         
          <img
            src="https://res.cloudinary.com/jkstudents/image/upload/v1684248720/IMG_20230327_152320_1_auf627.jpg"
            alt="..."
          />
          <img
            src="https://gdchandwara.edu.in/images/BannerImage/r6.jpeg"
            alt="..."
          />
          <img
            src="https://gdchandwara.edu.in/images/BannerImage/r4.jpeg"
            alt="..."
          />
          <img
            src="https://gdchandwara.edu.in/images/BannerImage/r8.jpeg"
            alt="..."
          />
        </Carousel>
      </div> 

    )
}

export default Slider

