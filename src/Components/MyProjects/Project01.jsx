import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import eparcel1 from '../../assets/e-parcel/e-parcel-1.png'
import eparcel2 from '../../assets/e-parcel/e-parcel-2.png'
import eparcel3 from '../../assets/e-parcel/e-parcel-3.png'
import eparcel4 from '../../assets/e-parcel/e-parcel-4.png'
import eparcel5 from '../../assets/e-parcel/e-parcel-5.png'
import eparcel6 from '../../assets/e-parcel/e-parcel-6.png'
import eparcel7 from '../../assets/e-parcel/e-parcel-7.png'
import ProjectTitle from "../Utilities/ProjectTitle";
import bgGradient from '../../assets/image/BgGradient.svg'
import ImageSlide from '../Utilities/ImageSlide';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Project01 = () => {
   AOS.init()
   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
         <div data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: `url(${bgGradient})` }} className="relative  bg-center bg-no-repeat bg-cover">
            <ProjectTitle>PrestigeWear (Online Brand Shop)</ProjectTitle>

            <div  className="py-5">
               <p>
                  A Web Application for Online brand Shop.
               </p>
               <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80% mt-3">Features:</h3>
               <p className="text-gray-300 pr-2">
                  <p><span className="text-[#e38cff]">Registration,Signup :</span> email/Password and google login</p>
                  <p><span className="text-[#e38cff]">User Dashboard :</span> Statistics, booking Parcel, cancel booking, Update Parcel, Give Review, Payment  </p>
                  <p><span className="text-[#e38cff]">Admin Dashboard:</span> Statistics, Manage bookings, Manage User, Manage Delivery Man </p>
                  <p><span className="text-[#e38cff]">Delivery Man Dashboard:</span> Statistics, Deliver Parcel, Cancel Delivery</p>
               </p>
               <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80% mt-3">Technologies Use:</h3>
               <p className="text-gray-300 pr-2">
                  <p><span className="text-[#e38cff]">Front-end :</span> Tailwind css, React, React Router Dom, Firebase, Tanstack Query, Axios, Stripe Payment</p>
                  <p><span className="text-[#e38cff]">Back-end :</span> Express Js, MongoDb, Jwt</p>
               </p>
            </div>
         </div>
         <div data-aos="fade-left" data-aos-duration="1000" className="max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px]  rounded-xl overflow-hidden">
            <Swiper
               slidesPerView={1}

               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               modules={[Autoplay, Pagination]}
               className="mySwiper"
            >

               <SwiperSlide><ImageSlide image={eparcel1} /></SwiperSlide>
               <SwiperSlide><ImageSlide image={eparcel6} /></SwiperSlide>
               <SwiperSlide><ImageSlide image={eparcel7} /></SwiperSlide> 
               <SwiperSlide><ImageSlide image={eparcel2} /></SwiperSlide>
               <SwiperSlide><ImageSlide image={eparcel3} /></SwiperSlide>
               <SwiperSlide><ImageSlide image={eparcel4} /></SwiperSlide>
               <SwiperSlide><ImageSlide image={eparcel5} /></SwiperSlide>
                                           
            </Swiper>
         </div>
      </div>
   )
}
export default Project01;