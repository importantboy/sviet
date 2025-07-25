import React from 'react'
const leadingRecruiters = [
    {
        name: "Reliance Industrial",
        logo: "/reliance.webp",
    },
    {
        name: "amazon",
        logo: "/amazon.webp",
    },
    {
        name: "bank of america",
        logo: "/boa.webp",
    },
    {
        name: "Dell",
        logo: "/Dell.webp",
    },
    {
        name: "hdfc",
        logo: "/HDFC.webp",
    },
    {
        name: "Tata",
        logo: "/tata.webp",
    },
]
const OtherAwards = () => {
    return (
        <>
            {/* Our Leading Recruiters Section */}
            <section className="py-16 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            Other <span className="text-yellow-500">Awards</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {leadingRecruiters.map((recruiter, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center min-w-[150px] h-24"
                            >
                                <img
                                    src={recruiter.logo || "/placeholder.svg"}
                                    alt={recruiter.name}
                                    className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section >
        </>

    )
}

export default OtherAwards