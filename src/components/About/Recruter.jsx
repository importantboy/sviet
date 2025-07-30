import React from 'react'
const leadingRecruiters = [
    {
        name: "Reliance Industrial",
        logo: "/Recruiters/reliance.webp",
    },
    {
        name: "amazon",
        logo: "/Recruiters/amazon.webp",
    },
    {
        name: "bank of america",
        logo: "/Recruiters/boa.webp",
    },
    {
        name: "Dell",
        logo: "/Recruiters/Dell.webp",
    },
    {
        name: "hdfc",
        logo: "/Recruiters/HDFC.webp",
    },
    {
        name: "Tata",
        logo: "/Recruiters/tata.webp",
    },
]
const Recruter = () => {
    return (
        <>
            {/* Our Leading Recruiters Section */}
            <section className="py-16 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            Our <span className="text-yellow-500">Leading Recruiters</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Top companies trust our graduates and regularly recruit from our campus, recognizing the quality of
                            education and skills our students possess.
                        </p>
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

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">
                            Join the ranks of successful professionals working at these prestigious organizations
                        </p>

                    </div>
                </div>
            </section >
        </>

    )
}

export default Recruter