
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, } from "@/components/ui/card"
import { useEffect, useState } from "react"
import Notice from "@/components/Home/Notice"
import ExcellenceSection from "@/components/Home/ExcellenceSection"
import Videos from "@/components/Home/Videos"
import Review from "@/components/Home/Review"
import Stats from "@/components/Home/Stats"
import OppertunitiesPage from "@/components/Home/Oppertunities"








export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = 4

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 3000) // Auto-scroll every 3 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                Swami Vivekanand Institute of Engineering & Technology
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                                A Realm of Education that accomplishes you infinite career dreams
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold"
                                    asChild
                                >
                                    <Link to="/apply">Apply for Admission</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                                    asChild
                                >
                                    <Link to="/placements">Placements</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    <img
                                        src="/1.jpeg"
                                        alt="Campus Building"
                                        className="w-full rounded-md h-auto max-h-[500px] object-cover flex-shrink-0"
                                    />
                                    <img
                                        src="/2.JPG"
                                        alt="campus"
                                        className="w-full h-auto max-h-[500px] object-cover flex-shrink-0"
                                    />
                                    <img
                                        src="/3.jpeg"
                                        alt="Labs"
                                        className="w-full h-auto max-h-[500px] object-cover flex-shrink-0"
                                    />
                                    <img
                                        src="/4.jpeg"
                                        alt="Science Lab"
                                        className="w-full h-auto max-h-[500px] object-cover flex-shrink-0"
                                    />

                                </div>
                            </div>

                            {/* Carousel indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <button
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"
                                            }`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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


            <OppertunitiesPage />
            <Review />
            {/* Stats Section */}
            <Stats />



        </div>
    )
}
