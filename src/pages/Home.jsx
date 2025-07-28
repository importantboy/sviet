

import { useEffect } from "react"
import Notice from "@/components/Home/Notice"
import ExcellenceSection from "@/components/Home/ExcellenceSection"
import Videos from "@/components/Home/Videos"
import Review from "@/components/Home/Review"
import Stats from "@/components/Home/Stats"
import Herosection from "@/components/Herosection"
import { Helmet } from "react-helmet"


export default function HomePage() {

    return (

        <>
            <Helmet>
                <title>
                    SVIET
                </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">

                {/* Hero Section */}

                <Herosection
                    bigHeading={false}
                    heading={"Swami Vivekanand Institute of Engineering & Technology"}
                    shortDescription={`A Realm of Education that accomplishes you infinite career dreams

Apply for Admission
Placements`}
                    btnText1={"Apply for Admission"}
                    btn1Href={"https://admission.sviet.ac.in/"}
                    btn1Target={true}
                    btnText2={"Placement"}
                    btn2Href={"/placements"}
                    imgSrc={"/6.jpeg"}
                />
                <Notice />

                {/*key feature section */}
                <ExcellenceSection />

                {/* Videos Section */}
                <Videos />

                {/* Campus Overview Section */}
                <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Campus Overview</h2>
                            <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                                SVIET provides a blended mix of physical and digital mediums to provide a highly engaging and conducive
                                environment for effective teaching-learning and progressive academic development.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Physical Infrastructure</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        State-of-the-art facilities including modern classrooms, well-equipped laboratories, comprehensive
                                        library, and recreational spaces designed for holistic development.
                                    </p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Digital Learning</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Advanced digital platforms, smart classrooms, online resources, and interactive learning tools that
                                        enhance the educational experience.
                                    </p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Progressive Development</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Continuous innovation in teaching methodologies and curriculum design to prepare students for future
                                        challenges and opportunities.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
                                    <iframe
                                        src="https://www.youtube.com/embed/CcF3eSbTJz0"
                                        title="Campus Overview"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Review />
                {/* Stats Section */}
                <Stats />



            </div>
        </>
    )
}
