import React from 'react'

const ProplemTypes = () => {
  return (
    <div>



 {/* <!-- Problem Types Section --> */}
    <section className="py-16 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Common Problems We Address</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {/* <!-- Road Problems --> */}
                <div className="problem-card bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-road text-red-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Road Issues</h3>
                    <p className="text-gray-600 text-center">Report potholes, damaged roads, or lack of proper roads in your area.</p>
                </div>
                
                {/* <!-- Water Problems --> */}
                <div className="problem-card bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-tint text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Water Supply</h3>
                    <p className="text-gray-600 text-center">Report water shortages, contaminated water, or broken pipelines.</p>
                </div>
                
                {/* <!-- Electricity Problems --> */}
                <div className="problem-card bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-bolt text-yellow-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Electricity</h3>
                    <p className="text-gray-600 text-center">Report power cuts, faulty transformers, or unsafe electrical wiring.</p>
                </div>
                
                {/* <!-- Waste Problems --> */}
                <div className="problem-card bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-trash text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Waste Management</h3>
                    <p className="text-gray-600 text-center">Report garbage accumulation, lack of waste collection, or improper disposal.</p>
                </div>
                
                {/* <!-- Health Problems --> */}
                <div className="problem-card bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-hospital text-purple-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Health Services</h3>
                    <p className="text-gray-600 text-center">Report lack of medical facilities, unclean hospitals, or unavailable medicines.</p>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default ProplemTypes