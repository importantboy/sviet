import {
    Users,
    BookOpen,
    TrendingUp,
    Briefcase,
    Lightbulb,
    GraduationCap,
    Building2,
    Handshake,
    MessageSquare,
    Target
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Herosection from "@/components/Herosection"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
const impeccablePlacementsContent = {
    title: "Impeccable Placements",
    subtitle: "Bridging the gap between industry & Academia",
    description:
        "At SVIET, the Placement department constantly keeps working towards bridging the gap between industry & Academia. Our endeavor is to keep the needs of the industry perspective and in turn make the learning more pragmatic and applicable. The placement activities are for the students and by the students. SVGOI has been successful in adding more and more companies in the list of its recruiters in last few years. The Training and placement cell of SVGOI strives for converting every student in to a 100% employable asset while they are pursuing their education with us and endeavors for accomplishing the concept –“One Person One Job.”",
}
const youtubeVideos = [
    {
        id: 1,
        title: "SVIET Campus Placement Drive",
        videoId: "VcUhc3SL43Q", // Placeholder video ID
        description: "Highlights from our recent campus placement drive, showcasing student interviews and success.",
    },
    {
        id: 2,
        title: "Student Testimonials - Life at SVIET",
        videoId: "7NJEu-3hTI4", // Placeholder video ID
        description: "Hear from our alumni about their enriching experiences and successful careers after SVIET.",
    },
]
const placementStats = [
    { value: "3,000+", label: "Placements", icon: Briefcase },
    { value: "50 LPA", label: "Highest Package", icon: TrendingUp },
    { value: "12,000+", label: "Dreams Fullfilled", icon: Users },
    { value: "350+", label: "Companies Visited", icon: Building2 }
]

const directorMessage = {
    name: "Mr. Shubham Garg",
    position: "Director Placements",
    image: "/shubham.jpg",
    message:
        "Our aim is to provide Placements & Corporate Interface for the students and to make the students aware about the job opportunities and help them get placed. In the last fifteen years, Training & Placement Office (General) has been successfully able to place students of different courses & has invited reputed MNCs from, Social Sector, Information Technology, Manufacturing, ITES, Media, Services, Banking & Finance, etc. The Training & Placement Office (General) looks after the Campus Placements of the Engineering & Non-Engineering Courses of the College & Coordinates with the respective departmental TPO's regarding the Placement & related activities."
}

const placementVisionMission = [
    {
        title: "Our Vision",
        description:
            "To be a globally recognized institution that produces industry-ready professionals and fosters a culture of innovation and entrepreneurship.",
        icon: Lightbulb
    },
    {
        title: "Our Mission",
        description:
            "To provide comprehensive career guidance, skill development, and placement assistance, ensuring every student achieves their professional aspirations.",
        icon: Target
    },
    {
        title: "Core Feature",
        description:
            "Seamless transition from academic life to professional careers.",
        icon: GraduationCap
    }
]

const trainingPrograms = [
    {
        title: "Soft Skills Training",
        description:
            "Enhancing communication, teamwork, and interpersonal skills for professional success.",
        icon: MessageSquare
    },
    {
        title: "Technical Skills Development",
        description:
            "Hands-on training in core technical areas relevant to industry demands.",
        icon: Lightbulb
    },
    {
        title: "Aptitude Training",
        description:
            "Developing problem-solving and analytical abilities for competitive exams and interviews.",
        icon: BookOpen
    },
    {
        title: "Interview Preparation",
        description:
            "Mock interviews, group discussions, and resume building workshops.",
        icon: Handshake
    }
]

const specialBatches = [
    {
        name: "SUPER 60",
        description:
            "Specialized training program for top-performing students aiming for elite companies.",
        image: "/placeholder.svg?height=200&width=300&text=SUPER+60"
    },
    {
        name: "Google I/O Extended",
        description:
            "Exclusive workshops and sessions on Google technologies and innovations.",
        image: "/placeholder.svg?height=200&width=300&text=Google+IO+Extended"
    },
    {
        name: "Uniques",
        description:
            "Specialized training program for top-performing students aiming for elite companies.",
        image: "/placeholder.svg?height=200&width=300&text=PARICHAY"
    }
]

const studentSuccessStories = [
    {
        name: "Yash Khandalwal",
        company: "Jio",
        package: "50 LPA",
        image: "/images/student-yash-khandalwal.png",
        quote:
            "SVIET provided me with the platform to achieve my dream package. The faculty and placement team were incredibly supportive."
    },
    {
        name: "Prince Kumar",
        company: "Wipro",
        package: "10 LPA",
        image: "/images/student-prince-kumar.png",
        quote:
            "The comprehensive training programs at SVIET prepared me thoroughly for the industry. I'm grateful for the opportunity to join Wipro."
    },
    {
        name: "Abhay Gautam",
        company: "Infosys",
        package: "8.5 LPA",
        image: "/images/student-abhay-gautam.png",
        quote:
            "The practical exposure and skill development at SVIET were key to my placement at Infosys. A truly enriching experience."
    },
    {
        name: "Sukhmeet Kaur",
        degree: "MBA",
        company: "Hyundai Info Tech",
        image: "/images/student-sukhmeet-kaur.png",
        quote:
            "I am happy to be a product of this esteemed institution. SVGOI not only provides a platform to enrich academically but also emphasises on the all-around development of the student. It provided a lot of opportunities for students to showcase their talents, which create a very pleasant and enriching atmosphere for students. We enjoy it a lot."
    },
    {
        name: "Parveen",
        degree: "B.Tech CSE",
        company: "IDS Infotech",
        image: "/images/student-parveen.png",
        quote:
            "I am grateful to have been given several opportunities, which enabled me to gain confidence and enough expertise to prove myself in any professional environment. With excellent tutors and innovative learning, I was able to pace myself after graduation. And I would like to thank the placement team, which provided me with the gateway to enter the professional industry."
    },
    {
        name: "Shubham Raj",
        degree: "B.Tech",
        company: "Accenture",
        image: "/images/student-shubham-raj.png",
        quote:
            "With the constant support and guidance of faculty members and placement cell, I got placed in Accenture Private Limited. SVGOI offers exposure to students through various curricular, non-curricular, and industry-related activities that help them choose their future field or industry. I am grateful to have been a part of such an institution."
    },
    {
        name: "Student 1",
        company: "TCS",
        package: "6 LPA",
        image: "/images/student-testimonial-1.png",
        quote:
            "Great Learning Experience and the college helped me to get placed in a good company."
    },
    {
        name: "Student 2",
        company: "Amazon",
        package: "25 LPA",
        image: "/images/student-testimonial-2.png",
        quote: "It have broadened my horizons and helped me to achieve my dreams."
    }
]

const topRecruiters = [
    { name: "TCS", logo: "/images/company-tcs.png" },
    { name: "Wipro", logo: "/images/company-wipro.png" },
    { name: "Infosys", logo: "/images/company-infosys.png" },
    { name: "Capgemini", logo: "/images/company-capgemini.png" },
    { name: "HCL", logo: "/images/company-hcl.png" },
    { name: "Cognizant", logo: "/images/company-cognizant.png" },
    { name: "Jio", logo: "/images/company-jio.png" },
    { name: "IBM", logo: "/images/company-ibm.png" },
    { name: "Accenture", logo: "/images/company-accenture.png" },
    { name: "Tech Mahindra", logo: "/images/company-tech-mahindra.png" },
    { name: "Deloitte", logo: "/images/company-deloitte.png" },
    { name: "Amazon", logo: "/images/company-amazon.png" },
    { name: "Genpact", logo: "/images/company-genpact.png" },
    { name: "HDFC Bank", logo: "/images/company-hdfc-bank.png" },
    { name: "ICICI Bank", logo: "/images/company-icici-bank.png" },
    { name: "Axis Bank", logo: "/images/company-axis-bank.png" },
    { name: "Byju's", logo: "/images/company-byjus.png" },
    { name: "NoBroker", logo: "/images/company-nobroker.png" }
]

const placementByCourseData = [
    { name: "CSE", percentage: 90 },
    { name: "ECE", percentage: 85 },
    { name: "ME", percentage: 78 },
    { name: "Civil", percentage: 70 },
    { name: "MBA", percentage: 92 },
    { name: "BCA", percentage: 88 },
]

const companiesVisitedData = [
    { year: "2020", companies: 150 },
    { year: "2021", companies: 180 },
    { year: "2022", companies: 220 },
    { year: "2023", companies: 280 },
    { year: "2024", companies: 350 },
]

const packageOfferedData = [
    { year: "2020", avgPackage: 6, highestPackage: 25 },
    { year: "2021", avgPackage: 7.5, highestPackage: 30 },
    { year: "2022", avgPackage: 8.2, highestPackage: 40 },
    { year: "2023", avgPackage: 9.5, highestPackage: 45 },
    { year: "2024", avgPackage: 10.5, highestPackage: 50 },
]

const successRateData = [
    { year: "2017", rate: 70 },
    { year: "2018", rate: 75 },
    { year: "2019", rate: 78 },
    { year: "2020", rate: 80 },
    { year: "2021", rate: 85 },
    { year: "2022", rate: 88 },
    { year: "2023", rate: 90 },
    { year: "2024", rate: 92 },
]

const placementChartsData = [
    {
        id: "chart1",
        title: "Percentage of Placements by Course",
        data: placementByCourseData,
        description:
            "Consistent high placement rates across various engineering and management disciplines, reflecting the quality of our programs.",
        dataKeyX: "name",
        dataKeyY: "percentage",
        barFill: "#FACC15", // yellow-400
    },
    {
        id: "chart2",
        title: "Companies Visited Over The Years",
        data: companiesVisitedData,
        description:
            "Growing number of top-tier companies visiting our campus annually, indicating strong industry trust and demand for our graduates.",
        dataKeyX: "year",
        dataKeyY: "companies",
        barFill: "#3B82F6", // blue-500
    },
    {
        id: "chart3",
        title: "Package Offered to Students (LPA)",
        data: packageOfferedData,
        description: "Analyzing the average and highest packages offered to our students, showcasing career growth.",
        dataKeyX: "year",
        dataKeyY: "avgPackage",
        barFill: "#10B981", // green-500
        secondaryDataKeyY: "highestPackage",
        secondaryBarFill: "#EF4444", // red-500
    },
    {
        id: "chart4",
        title: "Success Rate Last 8 Years",
        data: successRateData,
        description: "Tracking the year-on-year success rate of our placements, demonstrating consistent improvement.",
        dataKeyX: "year",
        dataKeyY: "rate",
        barFill: "#8B5CF6", // purple-500
    },
]
import { Button } from "@/components/ui/button"
export default function Placements() {
    const [currentChartIndex, setCurrentChartIndex] = useState(0)
    const currentChart = placementChartsData[currentChartIndex]
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
                    Placements - SVIET
                </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">

                {/* Hero Section */}

                <Herosection
                    heading={"Placements & Career Development"}
                    shortDescription={"At SVIET, we are dedicated to shaping successful careers. Our robust placement cell, industry partnerships, and comprehensive training programs ensure our students are well-prepared for the global workforce."}

                    btn1Href={"https://admission.sviet.ac.in/"}
                    btn1Target={true}
                    btnText1={"Apply for admission"}
                    imgSrc={"/placeholder.svg"}
                    btn2Href={"https://www.sviet.ac.in/SVIET-Brochure-2025.pdf"}
                    btnText2={"Download Brochure"}
                />


              

                {/* Placement Stats */}
                <section
                    id="stats"
                    className="py-16 bg-blue-900 text-white"
                >
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Impaccable Placement Record
                            </h2>
                            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
                                Numbers that speak volumes about our commitment to student success
                            </p>
                        </div>

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
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
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
                                    From the Desk of{" "}
                                    <span className="text-yellow-500">Director Placements</span>
                                </h2>
                                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                                    "{directorMessage.message}"
                                </blockquote>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Placement Vision, Mission, Core Feature */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            {placementVisionMission.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <Card
                                        key={index}
                                        className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    >
                                        <CardContent className="p-6 text-center">
                                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-8 w-8 text-blue-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Training & Internship Programs */}
                <section id="training" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Training & Internship Programs
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Comprehensive programs designed to equip students with essential
                                skills for the workforce
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {trainingPrograms.map((program, index) => {
                                const Icon = program.icon
                                return (
                                    <Card
                                        key={index}
                                        className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    >
                                        <CardContent className="p-6 text-center">
                                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-8 w-8 text-yellow-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                                {program.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {program.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>



                {/* Special Batches */}
                <section
                    id="special-batches"
                    className="py-16 bg-white"
                >
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Special Batches & Initiatives
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Tailored programs for enhanced learning and exposure
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {specialBatches.map((batch, index) => (
                                <Card
                                    key={index}
                                    className="shadow-lg pt-0 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={batch.image || "/placeholder.svg"}
                                            alt={batch.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-xl font-bold">{batch.name}</h3>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <p className="text-gray-700 leading-relaxed">
                                            {batch.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Top Company Recruiters */}
                <section id="recruiters" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Our Top Company Recruiters
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Leading national and multinational companies that trust our talent
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {topRecruiters.map((recruiter, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center min-w-[120px] h-20"
                                >
                                    <img
                                        src={recruiter.logo || "/placeholder.svg"}
                                        alt={recruiter.name}
                                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Student Success Stories / Testimonials */}
                <section
                    id="testimonials"
                    className="py-16 bg-gray-50"
                >
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Our Students, Their Success
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Celebrating the achievements of our talented students in top companies
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {studentSuccessStories.map((student, index) => (
                                <Card
                                    key={index}
                                    className="shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={student.image || "/placeholder.svg"}
                                                alt={student.name}
                                                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
                                            />
                                            <div>
                                                <h3 className="text-lg font-bold text-blue-900">
                                                    {student.name}
                                                </h3>
                                                {student.degree && (
                                                    <p className="text-gray-600 text-sm">
                                                        {student.degree}
                                                    </p>
                                                )}
                                                <p className="text-blue-600 font-medium text-sm">
                                                    {student.company}{" "}
                                                    {student.package && `• ${student.package}`}
                                                </p>
                                            </div>
                                        </div>
                                        <blockquote className="text-gray-700 italic leading-relaxed text-sm">
                                            "{student.quote}"
                                        </blockquote>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Latest Placement Drives (from Image 2) */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Latest Placement Drives
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Glimpses from our recent successful recruitment events
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src="/images/placement-drive-banner.png"
                                    alt="Placement Drive"
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                                        Mega Placement Drive 2024
                                    </h3>
                                    <p className="text-gray-700 text-sm mb-4">
                                        Over 50 companies participated, offering diverse roles to our
                                        graduating students.
                                    </p>
                                    <Badge className="bg-blue-100 text-blue-800">
                                        Campus Recruitment
                                    </Badge>
                                </CardContent>
                            </Card>
                            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src="/placeholder.svg?height=400&width=600&text=Student+with+Offer+Letter"
                                    alt="Student with Offer Letter"
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                                        Success Stories Unveiled
                                    </h3>
                                    <p className="text-gray-700 text-sm mb-4">
                                        Students celebrating their achievements with offer letters
                                        from top companies.
                                    </p>
                                    <Badge className="bg-green-100 text-green-800">
                                        Student Success
                                    </Badge>
                                </CardContent>
                            </Card>
                            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src="/placeholder.svg?height=400&width=600&text=Company+Representatives"
                                    alt="Company Representatives"
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                                        Industry Connect Session
                                    </h3>
                                    <p className="text-gray-700 text-sm mb-4">
                                        Interactive sessions with company HRs and technical leads.
                                    </p>
                                    <Badge className="bg-purple-100 text-purple-800">
                                        Industry Interaction
                                    </Badge>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>


                <section id="charts" className="py-16 bg-blue-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Placement Record Over The Years</h2>
                            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
                                Analyzing our consistent growth and success in placements
                            </p>
                        </div>

                        <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-2">
                            {placementChartsData.map((chart, index) => (
                                <Button
                                    key={chart.id}
                                    onClick={() => setCurrentChartIndex(index)}
                                    variant="outline"
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${currentChartIndex === index
                                        ? "bg-yellow-400 text-blue-900 hover:bg-yellow-500"
                                        : "bg-white/10 text-white hover:bg-white/20 border-white/30"
                                        }`}
                                >
                                    {chart.title}
                                </Button>
                            ))}
                        </div>

                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">{currentChart.title}</h3>
                                <div className="h-[300px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={currentChart.data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                                            <XAxis dataKey={currentChart.dataKeyX} stroke="#fff" />
                                            <YAxis stroke="#fff" />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    color: "#1a202c",
                                                }}
                                                labelStyle={{ color: "#1a202c" }}
                                                itemStyle={{ color: "#1a202c" }}
                                            />
                                            <Legend />
                                            <Bar dataKey={currentChart.dataKeyY} fill={currentChart.barFill} />
                                            {currentChart.secondaryDataKeyY && (
                                                <Bar dataKey={currentChart.secondaryDataKeyY} fill={currentChart.secondaryBarFill} />
                                            )}
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <p className="text-blue-100 text-sm mt-4">{currentChart.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    )
}
