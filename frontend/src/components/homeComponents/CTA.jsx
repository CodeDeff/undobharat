import React from 'react'

const CTA = () => {
  return (
    <div>


               {/* <!-- CTA Section --> */}
    <section className="py-16 bg-blue-600 text-white" id="report">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join Us with by Reporting an issue</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/report-an-issue-now" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-md font-bold text-lg transition duration-300">Report an Issue Now</a>
                <a href="/How-it-works" className="bg-transparent hover:bg-blue-700 border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">How It Works</a>
            </div>
        </div>
    </section>


    </div>
  )
}

export default CTA