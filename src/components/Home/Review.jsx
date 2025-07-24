import React from 'react'
const testimonialsData = [
    {
        id: 1,
        name: "Sukhmeet Kaur",
        degree: "MBA",
        company: "Hyundai Info Tech",
        image: "/placeholder.svg?height=100&width=100&text=SK",
        testimonial:
            "I am happy to be a product of this esteemed institution. SVGOI not only provides a platform to enrich academically but also emphasises on the all-around development of the student. It provided a lot of opportunities for students to showcase their talents, which create a very pleasant and enriching atmosphere for students. We enjoy it a lot.",
        rating: 5,
    },
    {
        id: 2,
        name: "Parveen",
        degree: "B.Tech CSE",
        company: "IDS Infotech",
        image: "/placeholder.svg?height=100&width=100&text=P",
        testimonial:
            "I am grateful to have been given several opportunities, which enabled me to gain confidence and enough expertise to prove myself in any professional environment. With excellent tutors and innovative learning, I was able to pace myself after graduation. And I would like to thank the placement team, which provided me with the gateway to enter the professional industry.",
        rating: 5,
    },
    {
        id: 3,
        name: "Shubham Raj",
        degree: "B.Tech",
        company: "Accenture",
        image: "/placeholder.svg?height=100&width=100&text=SR",
        testimonial:
            "With the constant support and guidance of faculty members and placement cell, I got placed in Accenture Private Limited. SVGOI offers exposure to students through various curricular, non-curricular, and industry-related activities that help them choose their future field or industry. I am grateful to have been a part of such an institution.",
        rating: 5,
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

                <div className="relative  max-w-6xl px-14 mx-auto">
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
                                    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mx-auto max-w-2xl">
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
                                                    <p className="text-sm md:text-base font-medium text-blue-600">{testimonial.company}</p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
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
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentTestimonialSlide === 0}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextTestimonialSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
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

                    {/* Testimonial counter */}
                    <div className="text-center mt-4">
                        <span className="text-sm text-gray-500">
                            {currentTestimonialSlide + 1} of {testimonialsData.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review