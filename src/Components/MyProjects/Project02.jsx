import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectTitle from "../Utilities/ProjectTitle";
import bgGradient from '../../assets/image/BgGradient.svg'
import ImageSlide from '../Utilities/ImageSlide';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import hungryPlate1 from '../../assets/hungryPlate/hungryPalate-1.png'
import hungryPlate2 from '../../assets/hungryPlate/hungryPalate-2.png'
import hungryPlate3 from '../../assets/hungryPlate/hungryPalate-3.png'
import hungryPlate4 from '../../assets/hungryPlate/hungryPalate-4.png'
import hungryPlate5 from '../../assets/hungryPlate/hungryPalate-5.png'
import hungryPlate6 from '../../assets/hungryPlate/hungryPalate-6.png'
import hungryPlate7 from '../../assets/hungryPlate/hungryPalate-7.png'
import hungryPlate8 from '../../assets/hungryPlate/hungryPalate-8.png'
import hungryPlate9 from '../../assets/hungryPlate/hungryPalate-9.png'
import hungryPlate10 from '../../assets/hungryPlate/hungryPalate-10.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Project02 = () => {
   AOS.init()
return(
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      
      <div data-aos="fade-right" data-aos-duration="1000" className="max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px]  rounded-xl overflow-hidden">
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

            <SwiperSlide><ImageSlide image={hungryPlate1} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate2} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate3} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate4} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate5} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate6} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate7} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate8} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate9} /></SwiperSlide>
            <SwiperSlide><ImageSlide image={hungryPlate10} /></SwiperSlide>

         </Swiper>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" style={{ backgroundImage: `url(${bgGradient})` }} className="relative  bg-center bg-no-repeat bg-cover">
         <ProjectTitle>Hungry Palate (OnLine Resturent Service)</ProjectTitle>

         <div  className="py-5">
            <p>
               {`A Web Application for Resturent Food Order Services. Users can order food, can add his Own food foe sell, user can manage his food (Update / remove) , user can't order his own added foods.`}
            </p>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80% mt-3">Features:</h3>
            <p className="text-gray-300 pr-2">
               <p><span className="text-[#e38cff]">Registration,Signup :</span> email/Password and google login</p>
               <p><span className="text-[#e38cff]">Home Page :</span>  </p>
               
            </p>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80% mt-3">Technologies Use:</h3>
            <p className="text-gray-300 pr-2">
               <p><span className="text-[#e38cff]">Front-end :</span> Tailwind css, React, React Router Dom, Firebase, Tanstack Query, Axios, Stripe Payment</p>
               <p><span className="text-[#e38cff]">Back-end :</span> Express Js, MongoDb, Jwt</p>
            </p>
         </div>
      </div>
   </div>
)}
export default Project02;