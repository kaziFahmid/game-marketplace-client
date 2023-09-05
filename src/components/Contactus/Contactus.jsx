import React from 'react'

const Contactus = () => {
  return (
    <>
    <section className=' mt-5 '>
    <h1 className='text-white font-neue text-8xl text-center '>Contact US</h1>
    <p className="text-center mt-4 text-white font-semibold">Home /Contact US</p>
    <div className='grid lg:grid-cols-2 grid-cols-1 mt-32 max-w-6xl mx-auto gap-28'>
<div>

<div>
    <h1 className='text-5xl font-neue text-white'>ADDRESS
<span className='text-green-500'>INFORMATION</span></h1>
<p className='text-justify text-white text-xl mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consequuntur aliquam, error labore reprehenderit libero consectetur ipsum nam consequatur, rerum hic eos, dolorem excepturi quisquam a deleniti. Corporis natus .</p>
<div className='mt-8' >
    <h5 className='text-2xl text-white font-neue'>COLOURBAR U.S.A</h5>
    <ul>
        <li className='text-white'>Lorem ipsum dolor sit amet consectetur.</li>
        <li className='text-white'>Lorem ipsum dolor sit amet consectetur.</li>
        <li className='text-white'>Lorem ipsum dolor sit amet consectetur.</li>
        <li className='text-white'>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
</div>
</div>



</div>


<div>
<div  >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] "
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto text-white max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl font-neue">Contact US</h2>
       
      </div>
      <form   className="mx-auto mt-10  max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6  text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full bg-black  border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white ">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full  border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset  bg-black ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white ">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full  border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset  bg-black ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white ">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full  border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset   bg-black ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
     
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-white text-sm font-semibold leading-6 ">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full  border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset  bg-black ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
    
        </div>
        <div className="mt-10">
          <button
        
            className="block w-full btn   bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold  text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>

</div>
    </div>
    
    </section>



    </>
  )
}

export default Contactus
