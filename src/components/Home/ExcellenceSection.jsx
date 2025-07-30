import React, { useEffect, useState } from 'react'
const excellenceData = [
    {
        id: 1,
        title: "Special Initiatives",
        shortTitle: "Career Development",
        description:
            "Special batches like TheUniques, SUPER-60 and ALLIED-30 assure 100% placement for students.",
        image: "/Home/super60.JPG",
    },
    {
        id: 2,
        title: "Research",
        shortTitle: "Research Excellence",
        description:
            "Students lead research with state-of-the-art facilities. Over 100 articles published nationally and internationally.",
        image: "/Home/research.JPG",
    },
    {
        id: 3,
        title: "Project Based Learning",
        shortTitle: "Project Learning",
        description:
            "Engage in authentic challenges with project-based learning, fostering practical skills.",
        image: "/Home/projectbased.JPG",
    },
    {
        id: 4,
        title: "Sporting Excellence",
        shortTitle: "Sports Excellence",
        description:
            "Excel in sports with over 30 tournament participations annually, fostering passion and skill.",
        image: "/Home/sports.jpg",
    },
    {
        id: 5,
        title: "Start-Ups",
        shortTitle: "Innovation Hub",
        description:
            "Incubate innovative entrepreneurship with more than 15 successful startups launched at SVGOI.",
        image: "/Home/startups.JPG",
    },
    {
        id: 6,
        title: "Global Exposure",
        shortTitle: "Global Programs",
        description:
            "Expand horizons with international tie-ups, hosting students from over 10 countries.",
        image: "/Home/international.JPG",
    },
]

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ChevronRight, ChevronLeft } from 'lucide-react'
const ExcellenceSection = () => {
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
        const maxSlide = excellenceData.length - getCardsPerView()
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
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Excellence in Every Dimension</h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Discover what makes our institution a leader in education, research, and student development
                    </p>
                </div>

                <div className="relative ">
                    <div className="overflow-hidden mx-3 md:mx-12">
                        <div
                            className="flex py-2 transition-transform duration-500 ease-in-out "
                            style={{ transform: `translateX(-${currentExcellenceSlide * (100 / getCardsPerView())}%)` }}
                        >
                            {excellenceData.map((item) => (
                                <Card
                                    key={item.id}
                                    className="group  mx-2 py-0 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm flex-shrink-0"
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
                        className="absolute left-0 -bottom-10 md:top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentExcellenceSlide === 0}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 -bottom-10 md:top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentExcellenceSlide >= excellenceData.length - getCardsPerView()}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Carousel indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: Math.ceil(excellenceData.length - getCardsPerView() + 1) }).map((_, index) => (
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

export default ExcellenceSection