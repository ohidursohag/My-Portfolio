import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectTitle from "../Utilities/ProjectTitle";
import bgGradient from '../../assets/image/BgGradient.svg'
import ImageSlide from '../Utilities/ImageSlide';
import prestigeWear1 from '../../assets/prestigeWear/prestigeWear1.png'
import prestigeWear2 from '../../assets/prestigeWear/prestigeWear2.png'
import prestigeWear3 from '../../assets/prestigeWear/prestigeWear3.png'
import prestigeWear4 from '../../assets/prestigeWear/prestigeWear4.png'
import prestigeWear5 from '../../assets/prestigeWear/prestigeWear5.png'
import prestigeWear6 from '../../assets/prestigeWear/prestigeWear6.png'
import prestigeWear7 from '../../assets/prestigeWear/prestigeWear7.png'
const Project03 = () => {
   AOS.init()
return(
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
      <div data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: `url(${bgGradient})` }} className="relative  bg-center bg-no-repeat bg-cover">
         <ProjectTitle>E-Parcel (Online Parcel Delivery Service)</ProjectTitle>

         <div className="py-5">
            <p>
               A Web Application for Online Parcel Delivery Services.
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

            <SwiperSlide><ImageSlide image={prestigeWear1} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={prestigeWear2} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={prestigeWear3} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={prestigeWear4} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={prestigeWear5} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={prestigeWear6} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={prestigeWear7} /></SwiperSlide>

         </Swiper>
      </div>
   </div>
)}
export default Project03;