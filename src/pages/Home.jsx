import {
    Bell,
    BookText,
    Calendar,
    DollarSign,
    GraduationCap,
    GraduationCapIcon,
    MapPin,
    NotebookPen,
    Users
} from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

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
const excellenceData = [
    {
        id: 1,
        title: "Giving Wings to Your Career",
        shortTitle: "Career Development",
        description:
            "Under the guidance of our trained faculty and alumni network, we supplement careers through government services, MNC placements, and entrepreneurship opportunities.",
        image: "/placeholder.svg?height=200&width=400&text=Career+Development",
        buttonText: "Learn More",
        buttonLink: "/career-development",
    },
    {
        id: 2,
        title: "Research",
        shortTitle: "Research Excellence",
        description:
            "Students lead knowledge discovery with highly equipped research facilities. Over 100 research articles published at national and international stages.",
        image: "/placeholder.svg?height=200&width=400&text=Research+Lab",
        buttonText: "Explore Research",
        buttonLink: "/research",
    },
    {
        id: 3,
        title: "Project Based Learning",
        shortTitle: "Project Learning",
        description:
            "Investigate and respond to authentic challenges through project-based learning while experiencing enriching, hands-on experiences.",
        image: "/placeholder.svg?height=200&width=400&text=Project+Learning",
        buttonText: "View Projects",
        buttonLink: "/projects",
    },
    {
        id: 4,
        title: "Sporting Excellence",
        shortTitle: "Sports Excellence",
        description:
            "Compete and achieve excellence with passion in our excellent sporting environment. Over 30 sports tournament participations yearly.",
        image: "/placeholder.svg?height=200&width=400&text=Sports+Complex",
        buttonText: "Sports Achievements",
        buttonLink: "/sports",
    },
    {
        id: 5,
        title: "Start-Ups",
        shortTitle: "Innovation Hub",
        description:
            "Incubation environment for innovative student entrepreneurship. More than 15 successful companies have started their journey at SVIET.",
        image: "/placeholder.svg?height=200&width=400&text=Innovation+Hub",
        buttonText: "Innovation Hub",
        buttonLink: "/startups",
    },
    {
        id: 6,
        title: "Global Exposure",
        shortTitle: "Global Programs",
        description:
            "International collaborations and exchange programs provide students with global perspectives and cross-cultural learning experiences.",
        image: "/placeholder.svg?height=200&width=400&text=Global+Programs",
        buttonText: "Global Programs",
        buttonLink: "/global-programs",
    },
]
const notices = [
    {
        id: 1,
        title: "Annual Sports Day 2024 - Registration Open",
        date: "2024-01-15",
        type: "Event",
        isNew: true
    },
    {
        id: 2,
        title: "Mid-term Examination Schedule Released",
        date: "2024-01-14",
        type: "Academic",
        isNew: true
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting - Class 9th & 10th",
        date: "2024-01-13",
        type: "Meeting",
        isNew: false
    },
    {
        id: 4,
        title: "Science Exhibition - Project Submission Deadline",
        date: "2024-01-12",
        type: "Academic",
        isNew: false
    },
    {
        id: 5,
        title: "Winter Break Holiday Notice",
        date: "2024-01-10",
        type: "Holiday",
        isNew: false
    }
]

const founders = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Founder & Chairman",
        image: "/placeholder.svg?height=200&width=200&text=Dr.+Kumar",
        quote:
            "Education is the most powerful weapon which you can use to change the world. Our mission is to nurture young minds and build future leaders."
    },
    {
        name: "Mrs. Priya Sharma",
        role: "Co-Founder & Principal",
        image: "/placeholder.svg?height=200&width=200&text=Mrs.+Sharma",
        quote:
            "Every child is gifted; they just unwrap their packages at different times. We believe in providing quality education that shapes character and builds confidence."
    }
]

const quickLinks = [
    {
        title: "Fee Structure",
        href: "/fee-structure",
        icon: DollarSign,
        color: "green"
    },
    {
        title: "Application Form",
        href: "/",
        icon: NotebookPen,
        color: "blue"
    },
    {
        title: "E-Brochure",
        href: "/fee-payment",
        icon: BookText,
        color: "purple"
    },
    {
        title: "Placement",
        href: "/placements",
        icon: GraduationCapIcon,
        color: "orange"
    },

]



const stats = [
    { value: "2500+", label: "Students" },
    { value: "150+", label: "Teachers" },
    { value: "98%", label: "Pass Rate" },
    { value: "29", label: "Years Legacy" }
]

const footerLinks = [
    { title: "About Us", href: "/about" },
    { title: "Academics", href: "/academics" },
    { title: "Admissions", href: "/admissions" },
    { title: "Facilities", href: "/facilities" }
]

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

            {/* Notice Board Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                            Daily Updates & Notice Board
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">Stay updated with the latest announcements and events</p>
                    </div>
                    <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
                        {/* Notice Board - Now takes full width */}
                        <div className="lg:col-span-3">
                            <Card className="shadow-lg">
                                <CardHeader className="border-b shadow-md">
                                    <CardTitle className="flex items-center text-blue-900">
                                        <Bell className="mr-2 h-5 w-5" />
                                        Latest Notices
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
                                        <div>
                                            {/* Repeat notices multiple times for infinite effect */}
                                            {Array.from({ length: 10 }).map((_, repeatIndex) =>
                                                notices.map((notice, index) => (
                                                    <div
                                                        key={`${notice.id}-${repeatIndex}-${index}`}
                                                        className={`p-4 border-b hover:bg-gray-50 transition-colors ${index < 2 ? "bg-blue-50/30" : ""
                                                            }`}
                                                    >
                                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                                                            <h3 className="font-semibold text-gray-900 flex-1">{notice.title}</h3>
                                                            <div className="flex items-center space-x-2">
                                                                {notice.isNew && (
                                                                    <Badge variant="destructive" className="text-xs">
                                                                        NEW
                                                                    </Badge>
                                                                )}
                                                                <Badge variant="outline" className="text-xs">
                                                                    {notice.type}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <Calendar className="mr-1 h-4 w-4" />
                                                            {new Date(notice.date).toLocaleDateString("en-IN", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })}
                                                        </div>
                                                    </div>
                                                )),
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Quick Links - Now single column */}
                        <div className="space-y-6">

                            <Card className="shadow-lg">
                                <CardHeader className="border-b shadow-md">
                                    <CardTitle className="flex items-center text-blue-900">
                                        <Bell className="mr-2 h-5 w-5" />
                                        Latest Notices
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <div className="space-y-3">
                                        {quickLinks.map((link) => {
                                            const Icon = link.icon
                                            return (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className={`block p-3 bg-${link.color}-50 rounded-lg hover:bg-${link.color}-100 transition-colors`}
                                                >
                                                    <div className="flex items-center">
                                                        <Icon className={`mr-3 h-5 w-5 text-${link.color}-600`} />
                                                        <span className="font-medium">{link.title}</span>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Excellence in Every Dimension</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Discover what makes our institution a leader in education, research, and student development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {excellenceData.map((item) => (
                            <Card
                                key={item.id}
                                className="group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
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
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="mt-4 group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                                        asChild
                                    >
                                        <Link href={item.buttonLink}>{item.buttonText}</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>


                </div>
            </section>
            {/* Videos Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Videos</h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Explore our campus life, events, and student achievements
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {videosData.map((video) => (
                            <Card
                                key={video.id}
                                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden">
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
                                <CardContent className="p-4">
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">{video.title}</h3>
                                    <p className="text-gray-600 text-sm">{video.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

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

            {/* Testimonials Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">What People Say About Us</h2>
                        <p className="text-gray-600 text-base md:text-lg">Our reviews speak for us</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonialsData.map((testimonial) => (
                            <Card
                                key={testimonial.id}
                                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold text-blue-900">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.degree}</p>
                                            <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <blockquote className="text-gray-700 italic leading-relaxed text-sm">
                                        "{testimonial.testimonial}"
                                    </blockquote>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-12 md:py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                            Our Visionary Founders
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Meet the inspiring leaders who established our institution
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {founders.map((founder, index) => (
                            <Card
                                key={index}
                                className="shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            >
                                <CardContent className="p-6 md:p-8">
                                    <div className="text-center mb-6">
                                        <img
                                            src={founder.image || "/placeholder.svg"}
                                            alt={founder.name}
                                            className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 border-4 border-blue-200 object-cover"
                                        />
                                        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                                            {founder.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium">{founder.role}</p>
                                    </div>
                                    <blockquote className="text-gray-700 italic text-center leading-relaxed text-sm md:text-base">
                                        "{founder.quote}"
                                    </blockquote>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 md:py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-blue-200 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}
