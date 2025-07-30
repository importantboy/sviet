import React from 'react'
import { Helmet } from "react-helmet"
import {
    Award,
    Users,
    BookOpen,
    Heart,
    Star,
    Globe,
    Lightbulb
} from "lucide-react"
const opportunitiesData = [
    {
        id: 1,
        title: "Cutting-Edge Laboratories",
        shortTitle: "Cutting-Edge Laboratories",
        description:
            "Explore our state-of-the-art laboratories equipped with the latest technology and equipment, providing hands-on learning experiences for students to excel in their fields.",
        image: "/Home/projectbased.JPG",
    },
    {
        id: 2,
        title: "Central Library",
        shortTitle: "Central Library",
        description:
            "Immerse yourself in a world of knowledge at our central library, boasting a vast collection of resources and a conducive learning environment to support your academic journey.",
        image: "/About/library.jpeg",
    },
    {
        id: 3,
        title: "Research Laboratories",
        shortTitle: "Research Laboratories",
        description:
            "Join the forefront of innovation through our research labs, where faculty and students collaborate on groundbreaking research projects to address real-world challenges.",
        image: "/Home/research.JPG",
    },
    {
        id: 4,
        title: "Scholarship Opportunities",
        shortTitle: "Scholarship Opportunities",
        description:
            "Fulfill your academic aspirations with our range of scholarship programs, designed to recognize and support exceptional talent across various disciplines.",
        image: "/About/scholership.JPG",
    },
    {
        id: 5,
        title: "Sports Facilities",
        shortTitle: "Sports Facilities",
        description:
            "Unleash your potential and stay fit at our world-class sports facilities, promoting holistic development and a healthy lifestyle for all students.",
        image: "/Home/sports.jpg",
    },
    {
        id: 6,
        title: "Industrial Collaboration",
        shortTitle: "Industrial Collaboration",
        description:
            "Benefit from our strong ties with industry partners, offering opportunities for internships, projects, and real-world experience to enhance your skillset and employability.",
        image: "/About/collabs.jpeg",
    },

]
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import OppertunitiesPage from '@/components/About/Oppertunities'
import Herosection from '@/components/Herosection'
import Recruter from '@/components/About/Recruter'
import Management from '@/components/About/Management'

const currentInitiatives = [
    {
        title: "NAAC Accreditation",
        description:
            "SVIET achieved a B++ grade with a score of 2.94 in 2024.",
        icon: Award,
        color: "bg-red-50 text-red-600"
    },
    {
        title: "Academic Excellence",
        description:
            "Committed to providing top-quality education across all disciplines.",
        icon: BookOpen,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Cultural Vibrancy",
        description:
            "Fostering a diverse and inclusive campus environment.",
        icon: Star,
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Student Development",
        description:
            "Modern facilities including research centers, labs, library, and playgrounds.",
        icon: Users,
        color: "bg-green-50 text-green-600"
    }
]



const missionPoints = [
    "Our mission is to inspire and empower students to reach for the stars, guiding them towards academic excellence and personal growth.",
    "We strive to be a catalyst for positive change in society, fostering innovation and leadership among our students",
    "We are committed to fostering community engagement, encouraging our students to become active participants in creating a better world.",
    "Our mission includes promoting diversity and inclusion, ensuring that every student feels valued and respected.",
]

const visionPoints = [
    "Our vision is to create a world-class educational institution that nurtures talent and fosters a culture of excellence.",
    "We envision a future where our graduates are leaders and innovators, making a positive impact on the world.",
    "Our vision includes making a global impact, collaborating with partners worldwide to address pressing challenges.",
    "We are committed to creating a sustainable future, integrating environmental responsibility into everything we do."
]

const culturalStats = [
    { value: "28", label: "Annual Cultural Events" },
    { value: "75", label: "Active Student Clubs", suffix: "+" },
    { value: "3500", label: "Cultural Participants", suffix: "+" },
    { value: "5000", label: "Programs Conducted", suffix: "+" }
]

const campusFacilities = [
    {
        title: "Research Centres",
        description:
            "Our state-of-the-art research centers provide the perfect environment for students to explore and innovate. From cutting-edge laboratories to collaborative workspaces, our research facilities empower students to push the boundaries of knowledge.",
        image: "/About/researchcenter.webp"
    },
    {
        title: "Library",
        description:
            "Our extensive library is a treasure trove of knowledge, offering students access to a vast collection of books, journals, and online resources. It provides a quiet and conducive environment for study and research.",
        image: "/About/library.webp"
    },
    {
        title: "Labs",
        description:
            "Our well-equipped laboratories provide students with hands-on experience and practical skills in their chosen fields. From computer labs to engineering labs, our facilities support experiential learning and innovation.",
        image: "/Home/research.JPG"
    },
    {
        title: "Sports & Recreation Complex",
        description:
            "Our sprawling playgrounds offer students the opportunity to stay active and healthy. From sports fields to recreational areas, our campus provides a vibrant and dynamic environment for physical activity and leisure.",
        image: "/Home/sports.jpg"
    },
    {
        title: "Cafeteria & Dining Facilities",
        description:
            "Hygienic and spacious dining facilities serving nutritious meals with variety of cuisines in a comfortable and clean environment.",
        image: "/About/cafeteria.webp"
    }
]

const About = () => {
    return (
        <>
            <Helmet>
                <title>
                    About - SVIET
                </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">

                {/* Hero Section - Keep unchanged */}
                <Herosection
                    heading={"About US"}
                    shortDescription={`Swami Vivekanand Group of Institutes was established in 2004 under the aegis of Sh.Raghunath Rai Memorial Education & Charitable Trust. The governing body is headed by Sh. Ashwani Garg and Sh.Ashok Garg.`}
                    btnText1={"Our Legacy"}
                    btn1Href={"/from-the-management"}
                    imgSrc={"/Home/AddmissionCell.jpeg" || "/placeholder.svg"}
                />

                {/* Infinite Horizons Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <img
                                    src={"/Home/about-auditorium.webp" || "/placeholder.svg"}
                                    alt="Campus Overview"
                                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold">Infinite Horizons</h3>
                                    <p className="text-blue-200">One Campus</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <Badge className="bg-blue-100 text-blue-800 mb-4">
                                        Campus Overview
                                    </Badge>
                                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                        Infinite Horizons. One Campus
                                    </h2>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    SVIET provides a comprehensive educational ecosystem where
                                    infinite possibilities meet in one unified campus. Our
                                    integrated approach combines academic excellence with practical
                                    learning, research opportunities, and holistic development.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    From state-of-the-art laboratories to modern classrooms, from
                                    sports complexes to cultural centers, our campus offers
                                    unlimited horizons for growth, learning, and personal
                                    development. Every corner of our campus is designed to inspire
                                    and nurture the potential within each student.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-1 bg-yellow-400"></div>
                                    <span className="text-blue-900 font-semibold">
                                        Expanding Possibilities, Creating Futures
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Engineering Programs Section */}
                <section className="py-16 bg-blue-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Discover the Best Engineering Programs at SVGOI
                            </h2>
                            <p className="text-blue-200 text-lg max-w-4xl mx-auto leading-relaxed">
                                SVGOI (Swami Vivekanand Group of Institutes) offers comprehensive
                                engineering programs designed to provide students with
                                cutting-edge knowledge, practical skills, and industry-relevant
                                experience. Our programs combine theoretical excellence with
                                hands-on learning to create competent engineers.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="space-y-4">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                    <BookOpen className="h-8 w-8 text-blue-900" />
                                </div>
                                <h3 className="text-xl font-bold">Industry-Aligned Curriculum</h3>
                                <p className="text-blue-200">
                                    Curriculum designed in collaboration with industry experts and
                                    leading academic institutions
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                    <Lightbulb className="h-8 w-8 text-blue-900" />
                                </div>
                                <h3 className="text-xl font-bold">Research & Innovation</h3>
                                <p className="text-blue-200">
                                    Strong emphasis on research projects, innovation labs, and
                                    creative problem-solving methodologies
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                    <Globe className="h-8 w-8 text-blue-900" />
                                </div>
                                <h3 className="text-xl font-bold">Global Standards</h3>
                                <p className="text-blue-200">
                                    International collaborations, global best practices, and
                                    world-class infrastructure
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Current Initiatives & Achievements */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Current Initiatives & Achievements
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Our ongoing initiatives reflect our commitment to continuous
                                improvement and excellence in all aspects of education and student
                                development.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {currentInitiatives.map((initiative, index) => {
                                const Icon = initiative.icon
                                return (
                                    <Card
                                        key={index}
                                        className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    >
                                        <CardContent className="p-6 text-center">
                                            <div
                                                className={`w-16 h-16 rounded-full ${initiative.color} flex items-center justify-center mx-auto mb-4`}
                                            >
                                                <Icon className="h-8 w-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                                {initiative.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {initiative.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <Recruter />

                {/* Our Principles and Convictions */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Our Principles and{" "}
                                <span className="text-yellow-500">Convictions</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Mission */}
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-8">MISSION</h3>
                                <div className="space-y-6">
                                    {missionPoints.map((point, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-700 leading-relaxed">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vision */}
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-8">VISION</h3>
                                <div className="space-y-6">
                                    {visionPoints.map((point, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-700 leading-relaxed">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* From the Desk of Management */}
                <Management />

                {/* Cultural Nexus Institute */}
                <section className="py-16 bg-blue-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Cultural{" "}
                                    <span className="text-yellow-400">Nexus Institute</span>
                                </h2>
                                <p className="text-blue-200 text-lg leading-relaxed mb-8">
                                    We at SVGOI understand all these difficulties and to make the journey of our International students’ memorable one, we do all our efforts to provide them best experience.
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    {culturalStats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-4xl font-bold text-yellow-400 mb-2">
                                                {stat.value}
                                                {stat.suffix || ""}
                                            </div>
                                            <div className="text-blue-200 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <img
                                    src={"/About/cultural.JPG" || "/placeholder.svg"}
                                    alt="Cultural Activities"
                                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Oppertunites  */}
                <OppertunitiesPage opportunitiesData={opportunitiesData} />
                {/* Perfect Blend of Nature and Architecture */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                A Perfect Blend of{" "}
                                <span className="text-yellow-500">Nature and Architecture</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                                The SVGOI Campus stands as a beacon of intellectual enrichment, hosting a diverse cosmopolitan community of over 20,000 students from across the globe. Together, they immerse themselves in the vibrant academic tapestry that SVGOI offers. Embark on this journey today and embrace the dynamic atmosphere awaiting you
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {campusFacilities.map((facility, index) => (
                                <Card
                                    key={index}
                                    className="shadow-lg py-0 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={facility.image || "/placeholder.svg"}
                                            alt={facility.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-xl font-bold">{facility.title}</h3>
                                        </div>
                                    </div>
                                    <CardContent className="px-6 pb-3">
                                        <p className="text-gray-700 leading-relaxed text-sm">
                                            {facility.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>


                    </div>
                </section>

            </div>

        </>
    )
}

export default About