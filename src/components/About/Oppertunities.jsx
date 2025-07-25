import React, { useEffect, useState } from 'react'
const opportunitiesData = [
    {
        id: 1,
        title: "Cutting-Edge Laboratories",
        shortTitle: "Cutting-Edge Laboratories",
        description:
            "Explore our state-of-the-art laboratories equipped with the latest technology and equipment, providing hands-on learning experiences for students to excel in their fields.",
        image: "/projectbased.JPG",
    },
    {
        id: 2,
        title: "Central Library",
        shortTitle: "Central Library",
        description:
            "Immerse yourself in a world of knowledge at our central library, boasting a vast collection of resources and a conducive learning environment to support your academic journey.",
        image: "/library.jpeg",
    },
    {
        id: 3,
        title: "Research Laboratories",
        shortTitle: "Research Laboratories",
        description:
            "Join the forefront of innovation through our research labs, where faculty and students collaborate on groundbreaking research projects to address real-world challenges.",
        image: "/research.JPG",
    },
    {
        id: 4,
        title: "Scholarship Opportunities",
        shortTitle: "Scholarship Opportunities",
        description:
            "Fulfill your academic aspirations with our range of scholarship programs, designed to recognize and support exceptional talent across various disciplines.",
        image: "/scholership.JPG",
    },
    {
        id: 5,
        title: "Sports Facilities",
        shortTitle: "Sports Facilities",
        description:
            "Unleash your potential and stay fit at our world-class sports facilities, promoting holistic development and a healthy lifestyle for all students.",
        image: "/sports.jpg",
    },
    {
        id: 6,
        title: "Industrial Collaboration",
        shortTitle: "Industrial Collaboration",
        description:
            "Benefit from our strong ties with industry partners, offering opportunities for internships, projects, and real-world experience to enhance your skillset and employability.",
        image: "/collabs.jpeg",
    },

]

import { Card, CardContent, } from "@/components/ui/card"

import { ChevronRight, ChevronLeft } from 'lucide-react'
const OppertunitiesPage = () => {
    const [currentExcellenceSlide, setCurrentExcellenceSlide] = useState(0)

    const getCardsPerView = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 768) return 1 // Mobile: 1 card
            if (window.innerWidth < 1024) return 2 // Tablet: 2 cards
            return 3 // Desktop: 3 cards
        }
        return 3 // Default for SSR
    }
    const nextSlide = () => {
        const maxSlide = opportunitiesData.length - getCardsPerView()
        setCurrentExcellenceSlide((prev) => Math.min(prev + 1, maxSlide))
    }

    const prevSlide = () => {
        setCurrentExcellenceSlide((prev) => Math.max(prev - 1, 0))
    }

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            // Reset to first slide on resize to prevent layout issues
            setCurrentExcellenceSlide(0)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section className="py-12 md:py-16 bg-gradient-to-br  from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Unlocking Opportunities at SVGOI</h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        SVGOI opens doors to growth, innovation, and career success through hands-on experience and industry partnerships.
                    </p>
                </div>

                <div className="relative ">
                    <div className="overflow-hidden mx-12">
                        <div
                            className="flex py-2 transition-transform duration-500 ease-in-out "
                            style={{ transform: `translateX(-${currentExcellenceSlide * (100 / getCardsPerView())}%)` }}
                        >
                            {opportunitiesData.map((item) => (
                                <Card
                                    key={item.id}
                                    className="group mx-2 py-0 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm flex-shrink-0"
                                    style={{ width: `calc(${100 / getCardsPerView()}% - 1rem)` }}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.shortTitle}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentExcellenceSlide === 0}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentExcellenceSlide >= opportunitiesData.length - getCardsPerView()}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Carousel indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: Math.ceil(opportunitiesData.length - getCardsPerView() + 1) }).map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors ${currentExcellenceSlide === index ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                                onClick={() => setCurrentExcellenceSlide(index)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OppertunitiesPage