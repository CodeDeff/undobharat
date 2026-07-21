import React from 'react'

const Hero = ({gotoPage}) => {
  return (
<div>
          {/* <!-- Hero Section --> */}
     <section className="hero text-white py-20 md:py-32 flex items-center">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">UndoBharat – A Step Towards a Better Nation</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Empowering citizens to report and resolve local village problems.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                onClick={gotoPage}
                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">Go To DashBoard
                </button>
                <a href="#how-it-works" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-md font-bold text-lg transition duration-300">Learn More</a>
            </div>
        </div>
    </section> 
</div>
  )
}

export default Hero;