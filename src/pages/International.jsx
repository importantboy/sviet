import Herosection from '@/components/Herosection'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import {
    Users,
    TrendingUp,
    Briefcase,
    GraduationCap,
    Building2,
    Heart,
    Star,
    Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import OppertunitiesPage from '@/components/About/Oppertunities'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Review from '@/components/Home/Review'


const placementStats = [
    { value: "1,000+", label: "International Students", icon: Briefcase },
    { value: "20+", label: "Countries", icon: TrendingUp },
    { value: "30+", label: "Nationalities", icon: Users },
    { value: "50+", label: "Cultures", icon: Building2 }
]
const impeccablePlacementsContent = {
    title: "About Department of International Affairs​",
    subtitle: "Fostering a Global Culture for a Better Future",
    description:
        "The Department of International Affairs at SVGOI is established with the motive to provide assistance to the international students studying at the SVGOI campus.Each year more than 800 international students study academic at the SVGOI. Most of these students are coming to India for the first time and they may face many difficulties here including finding a place to stay or finding work etc.​       The Department of Interantional Affairs at SVGOI ensures that all the problems of these students will be sorted.Students seeking help can reach out to this department and can get help in terms of hostel and amenities, finding work, assistance in documentation, activities.We promise to sort all of the problems of the international students in a quick time, so that they have a comfortable stay in India.        ",
}
const youtubeVideos = [
    {
        id: 1,
        title: "SVIET Campus Placement Drive",
        videoId: "M5nNS8EQ9OA", // Placeholder video ID
    },
    {
        id: 2,
        title: "Student Testimonials - Life at SVIET",
        videoId: "zqaXxtXiNLA", // Placeholder video ID
    },
]
const keyHighlights = [
    {
        title: "Impeccable Placements",
        description:
            `We are dedicated to your career success, boasting an impressive track record of placements with top companies.`,
        icon: Star,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "50+ Diverse Programs Offered",
        description:
            `Explore your academic interests with a wide range of undergraduate and postgraduate programs to choose from.`,
        icon: GraduationCap,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Awards & Renowned Rankings",
        description:
            `Recognized for our excellence, we consistently receive prestigious awards and rank highly in national/regional college rankings.`,
        icon: Award,
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Scholarship Programs Available",
        description:
            `We offer financial aid opportunities to deserving students, making a quality education accessible.`,
        icon: Heart,
        color: "bg-red-50 text-red-600",
    }
]
const opportunitiesData = [
    {
        id: 1,
        title: "Global Seed Program",
        shortTitle: "Global Seed Program",
        description:
            "SVGOI's Global Seed initiative nurtures entrepreneurial dreams by providing a platform for students to cultivate their startup ideas. Under this program, we offer startup facilities to students, allowing them to bring their ideas to life. Our dedicated entrepreneurship team trains them on the life cycle of entrepreneurship and the startup journey. With support from SVGOI management, including funding and space, students can start their own companies while continuing their studies. By fostering innovation and entrepreneurship, SVGOI empowers students to launch successful careers and make a lasting impact on the global stage.",
        image: "https://sviet.org.in/wp-content/uploads/IMG_1197-scaled-1.jpg",
    },
    {
        id: 2,
        title: "Faculty Exchange Program",
        shortTitle: "Faculty Exchange Program",
        description:
            "Our International Faculty Exchange Program brings experienced educators from around the world to SVGOI, enriching our academic environment with diverse perspectives and global expertise. This initiative not only enhances the quality of education but also provides students and faculty with unique opportunities for cross-cultural learning and collaboration. Participants in the program benefit from engaging with cutting-edge research, innovative teaching methodologies, and a broad network of international peers.",
        image: "https://utfs.io/f/de690804-6f23-4d08-bb2b-d5504f8d7071-bsrrb6.jpg",
    },
    {
        id: 3,
        title: "Earn While Learn Program",
        shortTitle: "Earn While Learn Program",
        description:
            "Explore a transformative educational journey with SVGOI's Earn While Learn program. Crafted to equip students with practical expertise, this innovative initiative guides participants through every aspect of professional development, from crafting compelling resumes to securing lucrative job opportunities. By seamlessly integrating flexible shifts with ongoing academic pursuits, students not only earn a steady income but also gain invaluable hands-on experience in fields like banking, pharmaceuticals, IT, marketing, and more. What sets this program apart is its international appeal, as the experiences gained here in India serve as valuable additions to resumes, paving the way for paid internship in foreign countries. Join us today and elevate your educational experience into a global pathway to success.",
        image: "https://sviet.org.in/wp-content/uploads/IMG_1545-scaled-1.jpg",
    },


]
const directorMessage = {
    name: "Mr. Sunil Soni",
    position: "Director of International Affairs",
    image: "/Management/sunil.webp",
    message:
        `As an educational hub, the Swami Viviekanand Group of Institutes plays host to students from across the globe. The Campus offers high quality education at affordable costs. Education which inculates global awareness is the need of the hour. Globalization demands an education system which sensitizes individuals to global issues, and enables them to think beyond borders. By offering an environment conducive to such learning, the SVGOI has emerged as a favoured destination for International Students. The Department of International Affairs at SVGOI facilitates easy acquisition of information about the various courses available at colleges, departments. The Department of International Affairs is a nodal agency that co-ordinates all the activities related to the admission of International Students. The SVGOI is one of the best institutes with well planned infrastructure. Its offer a multi and interdisciplinary educational environment, with advanced research and state of the art technological facilities. Students from all over the world are welcome here. We are happy to have these students who, we hope, will become citizens of the world and go back to their countries as international representatives, carrying knowledge and wisdom from this ancient civilization and a young and modern state back to their countries.”`
}


const International = () => {
    const [statsData, setStatsData] = useState(placementStats.map((stat) => ({ ...stat, count: 0, hasAnimated: false })))
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index)

                        setStatsData((prevStats) => {
                            if (!prevStats[index].hasAnimated) {
                                const newStats = [...prevStats]
                                newStats[index] = { ...newStats[index], hasAnimated: true }

                                const targetValueStr = newStats[index].value.replace(/[^\d.]/g, "")
                                const targetValue = Number.parseFloat(targetValueStr)
                                const suffix = newStats[index].value.replace(/[\d.]/g, "")
                                const duration = 2000 // 2 seconds
                                const steps = 60
                                const increment = targetValue / steps
                                const stepDuration = duration / steps

                                let currentCount = 0
                                const timer = setInterval(() => {
                                    currentCount += increment
                                    if (currentCount >= targetValue) {
                                        setStatsData((innerPrevStats) => {
                                            const innerNewStats = [...innerPrevStats]
                                            innerNewStats[index] = {
                                                ...innerNewStats[index],
                                                count: targetValue,
                                            }
                                            return innerNewStats
                                        })
                                        clearInterval(timer)
                                    } else {
                                        setStatsData((innerPrevStats) => {
                                            const innerNewStats = [...innerPrevStats]
                                            innerNewStats[index] = {
                                                ...innerNewStats[index],
                                                count: Math.floor(currentCount),
                                            }
                                            return innerNewStats
                                        })
                                    }
                                }, stepDuration)
                                return newStats
                            }
                            return prevStats
                        })
                        observer.unobserve(entry.target) // Stop observing once animated
                    }
                })
            },
            { threshold: 0.5 },
        )

        const statElements = document.querySelectorAll("[data-index]")
        statElements.forEach((element) => {
            observer.observe(element)
        })

        return () => {
            statElements.forEach((element) => {
                observer.unobserve(element)
            })
            observer.disconnect()
        }
    }, [])
    return (
        <>
            <Helmet>
                <title>
                    International Students - SVIET
                </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">
                {/* Hero section */}
                <Herosection
                    heading={"We are International!"}
                    shortDescription={"India's Top Premier Institution. Educating world-wide citizens for a moving world"}

                    btn1Href={"https://admission.sviet.ac.in/"}
                    btn1Target={true}
                    btnText1={"Apply for admission"}
                    imgSrc={"/Home/international.JPG" || "/placeholder.svg"}
                />

                {/* Stats */}
                <section
                    id="stats"
                    className="py-16 bg-blue-900 text-white"
                >
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {statsData.map((stat, index) => {
                                const Icon = stat.icon
                                const displayValue =
                                    stat.value.replace(/[^\d.]/g, "") === String(stat.count)
                                        ? stat.value
                                        : stat.count + stat.value.replace(/[\d.]/g, "")
                                return (
                                    <div key={index} data-index={index}>
                                        <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 shadow-lg">
                                            <CardContent className="p-8">
                                                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Icon className="h-10 w-10 text-blue-900" />
                                                </div>
                                                <div className="text-4xl font-bold text-yellow-400 mb-2">{displayValue}</div>
                                                <div className="text-blue-200 font-medium">{stat.label}</div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* department of international */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{impeccablePlacementsContent.title}</h2>
                                <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
                                    {impeccablePlacementsContent.subtitle}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">{impeccablePlacementsContent.description}</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {youtubeVideos.map((video) => (
                                    <Card key={video.id} className="shadow-lg hover:shadow-xl p-0 overflow-hidden transition-shadow duration-300">
                                        <div className="relative aspect-video bg-gray-100 flex items-center justify-center rounded-t-lg overflow-hidden">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                                title={video.title}
                                                className="w-full h-full"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />

                                        </div>

                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Highlights */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Why Choose Us?
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Best Campus Experience, Best Placements and Best Culture
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {keyHighlights.map((highlight, index) => {
                                const Icon = highlight.icon
                                return (
                                    <Card
                                        key={index}
                                        className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    >
                                        <CardContent className="p-6 text-center">
                                            <div
                                                className={`w-16 h-16 rounded-full ${highlight.color} flex items-center justify-center mx-auto mb-4`}
                                            >
                                                <Icon className="h-8 w-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                {highlight.description}
                                            </p>

                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* oppertunites */}
                <OppertunitiesPage bigText={true} description="With SVGOI limitless opportunities" heading="Empower Your Future" isInternational={true} opportunitiesData={opportunitiesData} />

                {/* Director's Message */}
                <section
                    id="director-message"
                    className="py-16 bg-gray-50"
                >
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <LazyLoadImage
                                    effect="blur"
                                    src={directorMessage.image || "/placeholder.svg"}
                                    alt={directorMessage.name}
                                    className="rounded-lg shadow-xl object-[0_10%] w-full h-auto object-cover max-h-[500px]"
                                    wrapperClassName=' w-full h-[500px] '
                                />
                                <div className="absolute md:-bottom-6 bottom-4 -right-2 md:-right-6 bg-white p-4 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <p className="font-bold text-blue-900 text-sm">
                                            {directorMessage.name}
                                        </p>
                                        <p className="text-gray-600 text-xs">
                                            {directorMessage.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                    From the Director of {" "}
                                    <span className="text-yellow-500">International Affairs</span>
                                </h2>
                                <blockquote className="text-gray-700 italic text-md font-medium leading-relaxed">
                                    "{directorMessage.message}"
                                </blockquote>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Student Success Stories / Testimonials */}
               
                <Review />
            </div>
        </>
    )
}

export default International