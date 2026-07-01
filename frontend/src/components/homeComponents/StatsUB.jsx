import React , {useState} from 'react'

const StatsUB = () => {

    const [issuesReported,setIssuesReported]=useState(0);
    const [issuesResloved,setissuesResloved]=useState(0);

  return (
    <div>
            {/* <!-- Stats Section --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="text-5xl font-bold text-blue-600 mb-2">{issuesReported}</div>
                    <div className="text-xl font-medium text-gray-700">Issues Reported</div>
                </div>
                <div className="p-6">
                    <div className="text-5xl font-bold text-green-600 mb-2">{issuesResloved}</div>
                    <div className="text-xl font-medium text-gray-700">Issues Resolved</div>
                </div>
                <div className="p-6">
                    <div className="text-5xl font-bold text-orange-500 mb-2">0</div>
                    <div className="text-xl font-medium text-gray-700">Villages Covered</div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default StatsUB