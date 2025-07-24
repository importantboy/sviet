import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from "lucide-react";
const videosData = [
    {
        id: 1,
        title: "PARICHAY 2K21",
        videoId: "VcUhc3SL43Q",
        thumbnail: "/placeholder.svg?height=200&width=350&text=PARICHAY+2K21",
        description: "Freshers party celebration showcasing student talent and creativity",
    },
    {
        id: 2,
        title: "SUPER 60",
        videoId: "7NJEu-3hTI4",
        thumbnail: "/placeholder.svg?height=200&width=350&text=SUPER+60",
        description: "Special batch program highlighting academic excellence",
    },
    {
        id: 3,
        title: "Google I/O Extended (The Uniques)",
        videoId: "6b8F9OsgLg4",
        thumbnail: "/placeholder.svg?height=200&width=350&text=Google+IO+Extended",
        description: "Technology event showcasing innovation and development",
    },
    {
        id: 4,
        title: "International Reviews",
        videoId: "zqaXxtXiNLA",
        thumbnail: "/placeholder.svg?height=200&width=350&text=International+Reviews",
        description: "Global perspective on our educational standards",
    },
    {
        id: 5,
        title: "Campus Overview",
        videoId: "CcF3eSbTJz0",
        thumbnail: "/placeholder.svg?height=200&width=350&text=Campus+Overview",
        description: "Virtual tour of our state-of-the-art facilities",
    },
]
import React from 'react'

const Videos = () => {
    const [currentVideoSlide, setCurrentVideoSlide] = React.useState(0)

    const nextVideoSlide = () => {
        setCurrentVideoSlide((prev) => (prev + 1) % videosData.length)
    }

    const prevVideoSlide = () => {
        setCurrentVideoSlide((prev) => (prev - 1 + videosData.length) % videosData.length)
    }


    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Videos</h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Explore our campus life, events, and student achievements
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden rounded-lg shadow-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
                        >
                            {videosData.map((video) => (
                                <div key={video.id} className="w-full flex-shrink-0">
                                    <Card className="border-0 shadow-none">
                                        <div className="relative">
                                            <div className="aspect-video bg-gray-100 flex items-center justify-center">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                                    title={video.title}
                                                    className="w-full h-full"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                        <CardContent className="p-6 text-center">
                                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{video.title}</h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                                {video.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevVideoSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextVideoSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Carousel indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {videosData.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors ${currentVideoSlide === index ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                                onClick={() => setCurrentVideoSlide(index)}
                            />
                        ))}
                    </div>

                    {/* Video counter */}
                    <div className="text-center mt-4">
                        <span className="text-sm text-gray-500">
                            {currentVideoSlide + 1} of {videosData.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos