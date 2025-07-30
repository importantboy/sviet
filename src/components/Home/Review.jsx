import React from 'react'
const testimonialsData = [
    {
        id: 1,
        name: "Gaurav Sharma",
        degree: "SDE",
        image: "https://www.sviet.ac.in/_next/static/media/rahul.9757b907.webp",
        testimonial:
            "Great learning experience and the college provided me with the opportunities needed. Truly outstanding! and really really thankful for the support",
    },
    {
        id: 2,
        name: "Yash Khandelwal",
        degree: "System Engineer",
        image: "https://www.sviet.ac.in/_next/static/media/yash.cd160865.jpeg",
        testimonial:
            "It have broadened my horizons and helped me advance my career. The college and management is incredibly supportive towards their students and also providing great learning experience for all",
    },
    {
        id: 3,
        name: "Adarsh Kumar",
        degree: "Software Engineer",
        image: "https://www.sviet.ac.in/_next/static/media/adarsh.04ca3f26.webp",
        testimonial:
            "The program provided me with the skills and knowledge needed to excel in the field of software development. Highly recommended!",
    },
    {
        id: 4,
        name: "Admit Gautam",
        degree: "Software Developer",
        image: "https://www.sviet.ac.in/_next/static/media/amit.821b571f.webp",
        testimonial:
            "The instructors are top-notch and the curriculum is well-structured. I feel well-prepared for my career in data science.",
    },
]
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
const Review = () => {
    const [currentTestimonialSlide, setCurrentTestimonialSlide] = React.useState(0)
    const getTestimonialsPerView = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 768) return 1 // Mobile: 1 testimonial
            return 2 // Tablet and Desktop: 2 testimonials
        }
        return 2 // Default for SSR
    }
    const nextTestimonialSlide = () => {
        const maxSlide = testimonialsData.length - getTestimonialsPerView()
        setCurrentTestimonialSlide((prev) => Math.min(prev + 1, maxSlide))
    }

    const prevTestimonialSlide = () => {
        setCurrentTestimonialSlide((prev) => Math.max(prev - 1, 0))
    }
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">What People Say About Us</h2>
                    <p className="text-gray-600 text-base md:text-lg">Our reviews speak for us</p>
                </div>

                <div className="relative  max-w-6xl px-3 md:px-14 mx-auto">
                    <div className="overflow-hidden  py-5 rounded-lg">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentTestimonialSlide * (100 / getTestimonialsPerView())}%)` }}
                        >
                            {testimonialsData.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 px-2"
                                    style={{ width: `${100 / getTestimonialsPerView()}%` }}
                                >
                                    <Card className="hover:shadow-xl py-0 transition-all duration-300 transform hover:-translate-y-2 h-80 max-h-80 mx-auto max-w-2xl">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="flex items-center mb-6">
                                                <img
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mr-4 border-2 border-blue-200"
                                                />
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-blue-900">{testimonial.name}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{testimonial.degree}</p>
                                                </div>
                                            </div>



                                            <blockquote className="text-gray-700 italic leading-relaxed text-sm md:text-base text-center">
                                                "{testimonial.testimonial}"
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonialSlide}
                        className="absolute left-0 -bottom-9 md:top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentTestimonialSlide === 0}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextTestimonialSlide}
                        className="absolute right-0 -bottom-9 md:top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentTestimonialSlide >= testimonialsData.length - getTestimonialsPerView()}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Carousel indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: Math.ceil(testimonialsData.length - getTestimonialsPerView() + 1) }).map(
                            (_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-colors ${currentTestimonialSlide === index ? "bg-blue-600" : "bg-gray-300"
                                        }`}
                                    onClick={() => setCurrentTestimonialSlide(index)}
                                />
                            ),
                        )}
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default Review