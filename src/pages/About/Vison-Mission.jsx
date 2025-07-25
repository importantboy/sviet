import React from 'react'
import { Button } from "@/components/ui/button"
import Herosection from '@/components/Herosection'
import { Helmet } from 'react-helmet'

const missionPoints = [
    {
        title: "Empowering Students",
        description:
            "Our mission is to inspire and empower students to reach for the stars, guiding them towards academic excellence and personal growth."
    },
    {
        title: "Driving Positive Change",
        description:
            "We strive to be a catalyst for positive change in society, fostering innovation and leadership among our students."
    },
    {
        title: "Fostering Community Engagement",
        description:
            "We are committed to fostering community engagement, encouraging our students to become active participants in creating a better world."
    },
    {
        title: "Promoting Diversity and Inclusion",
        description:
            "Our mission includes promoting diversity and inclusion, ensuring that every student feels valued and respected."
    }
]

const visionPoints = [
    {
        title: "Pursuing Excellence",
        description:
            "Our vision is to create a world-class educational institution that nurtures talent and fosters a culture of excellence."
    },
    {
        title: "Building Leaders",
        description:
            "We envision a future where our graduates are leaders and innovators, making a positive impact on the world."
    },
    {
        title: "Global Impact",
        description:
            "Our vision includes making a global impact, collaborating with partners worldwide to address pressing challenges."
    },
    {
        title: "Sustainable Future",
        description:
            "We are committed to creating a sustainable future, integrating environmental responsibility into everything we do."
    }
]
const VisonAndMission = () => {
    return (
        <>
            <Helmet>
                <title>
                    Vision & Mission - SVIET
                </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section - Same as About Page */}

                <Herosection
                    heading={"Vision & Mission"}
                    shortDescription={`Discover our guiding principles and aspirations that drive our commitment to educational excellence, innovation, and creating positive impact in society through transformative education.`}
                    btnText1={"Our Values"}
                    btn1Href={"/from-the-management"}
                    btnText2={"Strategic Plan"}
                    btn2Href={"https://sviet.org.in/wp-content/uploads/Strategic-Plan_0001-3.pdf"}
                    btn2Target={true}
                    imgSrc={"/placeholder.svg"}
                />

                {/* Vision & Mission Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-20">
                            {/* Mission Section */}
                            <div className="relative">
                                <div className="mb-16">
                                    <h2 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                                        MISSION
                                    </h2>
                                    <div className="w-20 h-1 bg-yellow-400 mt-4"></div>
                                </div>

                                <div className="relative pl-8">
                                    {/* Enhanced Vertical Line */}
                                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-sm"></div>

                                    <div className="space-y-16">
                                        {missionPoints.map((point, index) => (
                                            <div key={index} className="relative">
                                                {/* Enhanced Number Circle */}
                                                <div className="absolute -left-8 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-10">
                                                    {index + 1}
                                                </div>

                                                {/* Enhanced Content Card */}
                                                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                                                    <h3 className="text-2xl font-bold text-blue-900 mb-4 leading-tight">
                                                        {point.title}
                                                    </h3>
                                                    <p className="text-gray-700 leading-relaxed text-lg">
                                                        {point.description}
                                                    </p>
                                                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Vision Section */}
                            <div className="relative">
                                <div className="mb-16 text-right">
                                    <h2 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                                        VISION
                                    </h2>
                                    <div className="w-20 h-1 bg-yellow-400 mt-4 ml-auto"></div>
                                </div>

                                <div className="relative pr-8">
                                    {/* Enhanced Vertical Line */}
                                    <div className="absolute right-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-sm"></div>

                                    <div className="space-y-16">
                                        {visionPoints.map((point, index) => (
                                            <div key={index} className="relative">
                                                {/* Enhanced Number Circle */}
                                                <div className="absolute -right-8 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-10">
                                                    {index + 1}
                                                </div>

                                                {/* Enhanced Content Card */}
                                                <div className="bg-gradient-to-bl from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                                                    <h3 className="text-2xl font-bold text-blue-900 mb-4 leading-tight text-right">
                                                        {point.title}
                                                    </h3>
                                                    <p className="text-gray-700 leading-relaxed text-lg text-right">
                                                        {point.description}
                                                    </p>
                                                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full ml-auto"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
        </>
    )
}

export default VisonAndMission