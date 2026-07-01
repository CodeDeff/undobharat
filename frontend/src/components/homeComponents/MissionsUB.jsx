import React from 'react'

const Mission = () => {
  return (
    <div>

    {/* <!-- Mission Section --> */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Mission to Transform Rural India</h2>
                
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/6 flex justify-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <i className="fas fa-exclamation-triangle text-green-600 text-2xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">The Need to Solve Rural Issues</h3>
                            <p className="text-gray-600">Millions of Indians in rural areas face daily challenges with basic infrastructure like roads, water supply, electricity, and waste management. These problems often go unreported or unresolved due to lack of proper channels. UndoBharat bridges this gap by providing a platform where every citizen can raise their voice and demand action.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/6 flex justify-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <i className="fas fa-mobile-alt text-blue-600 text-2xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">How UndoBharat Works</h3>
                            <p className="text-gray-600">Our platform makes it simple to report issues. Just take a photo of the problem, share your location, and describe the issue in a few words. Our system automatically routes your complaint to the appropriate authorities and tracks progress until resolution. You'll receive updates at every step, ensuring transparency and accountability.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/6 flex justify-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <i className="fas fa-users text-orange-600 text-2xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Join the Movement</h3>
                            <p className="text-gray-600">Change begins with awareness. We call upon the youth and responsible citizens across India to use UndoBharat as a tool for positive change. By reporting problems in your village, you're not just helping your community - you're contributing to the development of our nation. Together, we can build a better Bharat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  

    </div>
  )
}

export default Mission;
