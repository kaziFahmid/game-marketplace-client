import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import teams from './team.json'
const AboutUs = () => {
  return (
    <>
      <section>
        <div className="bg-fixed bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://www.newscaststudio.com/wp-content/uploads/2019/12/esports-broadcast-production.jpg)] h-64 flex flex-col justify-center items-center ">
          <h1 className="text-white font-neue text-center text-5xl md:text-8xl">
            About US
          </h1>
          <p className="text-center text-white font-semibold">Home/About US</p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-6  ">
          <div>
            <div className="mt-9">
              <span className="text-white bg-green-500 p-2">ABOUT</span>
              <h1 className="text-5xl text-white font-neue mt-5">
                SLAVA <span className="text-green-500">TEAM HISTORY</span>
              </h1>
              <p className="text-justify text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.esports.net/wp-content/uploads/2019/09/friberg-csgo-esports-player.jpg"
                className=" w-full object-cover h-96"
              />
              <div className="bg-green-500  px-5 py-5">
                <div className="mb-5">
                  <span className="text-white bg-black   p-2 ">ABOUT</span>
                </div>
                <h2 className="text-white text-3xl md:text-5xl font-neue">
                  Slava is established and fighting since 2016.
                </h2>
                <ul className="flex justify-start mt-3 items-center gap-6">
                  <li>
                    <FaFacebook className="text-3xl" />
                  </li>
                  <li>
                    <FaTwitter className="text-3xl" />
                  </li>
                  <li>
                    <FaTwitch className="text-3xl" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

    <div className="bg-green-500 py-8 mt-32 ">
 <div className="lg:ps-7">
    <h1 className="text-white font-neue text-3xl lg:text-8xl mb-5 underline"><span className="text-black">SLAVA</span>
MANAGEMENT</h1>
 </div>

<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-6xl mx-auto gap-6 mt-9">


{ teams.map((team,index)=>{return <div key={index}className="  bg-black  text-white shadow-xl">
  <figure><img src={team.pic} className="h-96 w-full object-cover" alt="person" /></figure>
  <div className="card-body">
    <h2 className="card-title font-neue text-4xl">{team.name}</h2>
    <p>{team.position}</p>
    <ul className="flex justify-start mt-3 items-center gap-6">
                  <li>
                    <FaFacebook className="text-3xl" />
                  </li>
                  <li>
                    <FaTwitter className="text-3xl" />
                  </li>
                  <li>
                    <FaTwitch className="text-3xl" />
                  </li>
                </ul>
  </div>
</div>})}
</div>









    </div>








<div className="grid lg:grid-cols-2 grid-cols-1 bg-gray-900 mt-32 px-8 py-7">
<div>
<div className="text-6xl">
<h1 className="text-white font-neue">SLAVA
TEAM
<span className="text-green-500">ACHIEVMENT</span></h1>
</div>

<ul className="text-white">
    <li className="mt-6 text-xl">3 THE INTERNATIONAL CHAMP</li>
    <li className="mt-6 text-xl">2x THE LIMA MAJOR 2023</li>
    <li className="mt-6 text-xl">3x DPC EEU 2023</li>
    <li className="mt-6 text-xl">1x EUROPEAN PRO SEASON</li>
    <li className="mt-6 text-xl">1x BTS PRO SEASON</li>
    <li className="mt-6 text-xl">1x DCEU SEASON</li>
</ul>




</div>
<div>

<div className="bg-green-500 px-8 py-9 mt-20 lg:mt-0 ">
<div className="mb-4">
<span className="text-white bg-black font-bold p-3 ">About</span>
</div>
<h1 className="text-white font-neue text-4xl">This is the team where
the champion made</h1>
<ul className="flex justify-start mt-3 items-center gap-6">
                  <li>
                    <FaFacebook className="text-3xl" />
                  </li>
                  <li>
                    <FaTwitter className="text-3xl" />
                  </li>
                  <li>
                    <FaTwitch className="text-3xl" />
                  </li>
                </ul>
</div>









</div>

</div>

      </section>
    </>
  );
};

export default AboutUs;
