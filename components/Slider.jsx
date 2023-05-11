import { Carousel} from 'flowbite-react'
// import type { ModalOptions, ModalInterface } from 'flowbite'

const Slider = ()=>{
    return (
        // h-56 sm:h-64 xl:h-80 2xl:h-96
<div className="h-56 sm:h-96 xl:96 2xl:96">
  <Carousel>
    <img
      src="https://gdchandwara.edu.in/images/BannerImage/bicycle2.jpeg"
      alt="..."
    />
    <img
      src="https://gdchandwara.edu.in/images/BannerImage/r2.jpeg"
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