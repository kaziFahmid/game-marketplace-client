import React from "react";
import Character from "../../assets/Character5.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Players = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
    <section className="mt-48">
    <h1  data-aos="fade-right" className="text-center text-4xl md:text-5xl font-neue text-white mb-6">WHAT WE OFFER FOR PLAYERS</h1>
      <div className="   bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.ibb.co/zh5VhcM/513.jpg)] bg-no-repeat bg-cover bg-center py-16 ">
        <div className="grid lg:grid-cols-3 gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div data-aos="fade-right" className="text-end mt-8">
              <h1 className="text-3xl text-white font-neue">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit, praesentium.
              </p>
            </div>

            <div data-aos="fade-right" className="text-end mt-8">
              <h1 className="text-3xl text-white font-neue">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit, praesentium.
              </p>
            </div>

            <div data-aos="fade-right" className="text-end mt-8">
              <h1 className="text-3xl text-white font-neue">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit, praesentium.
              </p>
            </div>
          </div>

          <div>
            <div data-aos="fade-up">
              <img src={Character} className="w-full" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div data-aos="zoom-in-up" className="text-start ">
              <h1 className="text-3xl text-white font-neue">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit, praesentium.
              </p>
            </div>

            <div data-aos="zoom-in-up" className="text-start mt-8">
              <h1 className="text-3xl text-white font-neue">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit, praesentium.
              </p>
            </div>

            <div data-aos="zoom-in-up" className="text-start mt-8">
              <h1 className="text-3xl text-white font-neue">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit, praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Players;
