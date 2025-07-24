import React, { useEffect, useState } from 'react'
const excellenceData = [
    {
        id: 1,
        title: "Giving Wings to Your Career",
        shortTitle: "Career Development",
        description:
            "Under the guidance of our trained faculty and alumni network, we supplement careers through government services, MNC placements, and entrepreneurship opportunities.",
        image: "/placeholder.svg?height=200&width=400&text=Career+Development",
    },
    {
        id: 2,
        title: "Research",
        shortTitle: "Research Excellence",
        description:
            "Students lead knowledge discovery with highly equipped research facilities. Over 100 research articles published at national and international stages.",
        image: "/placeholder.svg?height=200&width=400&text=Research+Lab",
    },
    {
        id: 3,
        title: "Project Based Learning",
        shortTitle: "Project Learning",
        description:
            "Investigate and respond to authentic challenges through project-based learning while experiencing enriching, hands-on experiences.",
        image: "/placeholder.svg?height=200&width=400&text=Project+Learning",
    },
    {
        id: 4,
        title: "Sporting Excellence",
        shortTitle: "Sports Excellence",
        description:
            "Compete and achieve excellence with passion in our excellent sporting environment. Over 30 sports tournament participations yearly.",
        image: "/placeholder.svg?height=200&width=400&text=Sports+Complex",
    },
    {
        id: 5,
        title: "Start-Ups",
        shortTitle: "Innovation Hub",
        description:
            "Incubation environment for innovative student entrepreneurship. More than 15 successful companies have started their journey at SVIET.",
        image: "/placeholder.svg?height=200&width=400&text=Innovation+Hub",
    },
    {
        id: 6,
        title: "Global Exposure",
        shortTitle: "Global Programs",
        description:
            "International collaborations and exchange programs provide students with global perspectives and cross-cultural learning experiences.",
        image: "/placeholder.svg?height=200&width=400&text=Global+Programs",
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
                    <div className="overflow-hidden mx-12">
                        <div
                            className="flex py-2 transition-transform duration-500 ease-in-out "
                            style={{ transform: `translateX(-${currentExcellenceSlide * (100 / getCardsPerView())}%)` }}
                        >
                            {excellenceData.map((item) => (
                                <Card
                                    key={item.id}
                                    className="group mx-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm flex-shrink-0"
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