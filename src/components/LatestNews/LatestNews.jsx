import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import news from "./new.json";
import {BsFillCalendarDateFill } from 'react-icons/bs';
import {FaGamepad} from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
 

const LatestNews = () => {
       AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <>
      <section className="mt-32">
        <h1 data-aos="zoom-in" className="text-white text-5xl font-neue text-center mb-8 ">
          LATEST NEWS
        </h1>
        <div data-aos="fade-right" >
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
                200: {
                  slidesPerView: 1, // Show 1 slide on mobile
                },
                768: {
                  slidesPerView: 2, // Show 2 slides on tablets
                },
              }}
          >
            <div>
{news.map(({ id, img, name, date, type, description}) => (
              <SwiperSlide  key={id}>
                <div>
                  <div>
                    <img src={img} className="w-full object-cover h-60" />
                  </div>
        
                  <div>
                    <h3 className="text-white text-xl font-bold mt-4">{name}</h3>
                    <div>
                    <div className="text-white flex justify-start items-center gap-3 mt-3">
                        <BsFillCalendarDateFill className='text-green-500 text-xl'/>
                        <span>{date}</span>
                        <FaGamepad  className='text-green-500 text-xl'/>
                   <span> {type}</span>
                    
                    </div>
                    </div>
                    <p className="text-white mt-3">{description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            </div>
            
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
