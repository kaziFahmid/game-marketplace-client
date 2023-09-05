import React from "react";
import Character from "../../assets/Character.png";
import Character1 from "../../assets/Character-1.png";
import Character2 from "../../assets/Character-2.png";
import Character3 from "../../assets/Character-3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Populargames = () => {

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <>
      <section className="py-14 bg-black/95 ">
        <h1 data-aos="fade-right" className="text-white font-neue text-5xl mb-4 mx-6">Popular Games </h1>
        <div className="grid   grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <div data-aos="fade-down" className="bg-green-300  ">
              <div className="text-white pt-16 ps-5 ">
                <h1 className="font-neue  text-5xl">Path To Power</h1>
                <p>League of Legends</p>
              </div>
              <div>
                <img
                  src={Character}
                  className="img-fluid md:h-72 md:object-cover  w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" className="bg-green-50 shadow-black shadow-2xl  ">
              <div className="text-black pt-16 ps-5 ">
                <h1 className="font-neue  text-5xl">Path To Power</h1>
                <p>League of Legends</p>
              </div>
              <div>
                <img
                  src={Character1}
                  className="img-fluid md:h-72 md:object-cover  w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <div  data-aos="fade-down" className="bg-green-500  shadow-black shadow-2xl  ">
              <div className="text-white pt-16 ps-5 ">
                <h1 className="font-neue  text-5xl">Path To Power</h1>
                <p>League of Legends</p>
              </div>
              <div>
                <img
                  src={Character2}
                  className="img-fluid md:h-72 md:object-cover  w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" className="bg-green-100   shadow-black shadow-2xl ">
              <div className="text-black pt-16 ps-5 ">
                <h1 className="font-neue  text-5xl">Path To Power</h1>
                <p>League of Legends</p>
              </div>
              <div>
                <img
                  src={Character3}
                  className="img-fluid md:h-72 md:object-cover  w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Populargames;
