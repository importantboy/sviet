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

const latestPlacementDrive = [
    {
        id: 1,
        imgSrc: "/Recruiters/aamil.18daa7b7.png",
        title: "Aimil Ayouthveda Ltd",
        description: "Aimil Ayouthveda Ltd. conducted a dynamic campus placement drive today at SVGOI for the B.Pharm 2024 batch, with 30 enthusiastic participants.The event showcased a fusion of talent and ambition, setting the stage for promising opportunities in the pharmaceutical industry.",
        date: "08th February 2024"

    },
    {
        id: 2,
        imgSrc: "/Recruiters/ocean.2fd7a9db.png",
        title: "Ocean Technologies Pvt. Ltd.",
        description: "Ocean Technologies Pvt. Ltd. makes waves at SVIET campus recruitment drive!Exciting opportunities unfolded for B.Tech and diploma students in EE, ME, CSE, ECE, Civil, and MBA (2024) batches. ",
        date: "01st December 2023"

    },
    {
        id: 3,
        imgSrc: "/Recruiters/Clicklabs.002df006.webp",
        title: "Click Labs",
        description: "SVGOI organized a successful placement drive today for the students of MBA and Super60 | Batch 2025 passing out by reputed company Click Labs!",
        date: "22nd March 2024"

    },
    {
        id: 4,
        imgSrc: "/Recruiters/value.1541ddae.png",
        title: "Value Prospect Consulting",
        description: "Value Prospect Consulting’s Campus Drive at SVIET: 15 Students Land Dream Jobs! Mr. Pratik guides candidates through a rigorous 4-phase selection process. A big opportunity for the 2023, 2024, and 2025 batches.",
        date: "04th April 2024"

    },
    {
        id: 5,
        imgSrc: "/Recruiters/placementday.2b5fc03a.jpg",
        title: "Placement Day",
        description: "After an incredible Placement Day event at SVIET, we’re thrilled to have hosted over 200 students from various colleges and universities across different states, including Government polytechnic colleges in Khuni Majra, Meham.",
        date: "16th May 2024"
    }, {
        id: 6,
        "title": "Global Futures Summit 2024",
        "description": "Dive into our industry panel session covering market trends and cutting-edge technology! These snapshots capture the dynamic exchange between industry and academia, shaping tomorrow’s tech leaders. Join the fusion.",
        "date": "23rd March 2024",
        imgSrc: "/Recruiters/summit.a2de6a4f.webp"
    },
    {
        id: 7,
        imgSrc: "/Recruiters/Fair.adaf068c.jpg",
        "title": "Pharma Career Fair 2024",
        "description": "Today was an incredible day at SVGOI’s Pharma Career Fair 2024! Students had the chance to explore various job opportunities, network with industry leaders, and learn valuable insights about the pharmaceutical industry. The event...",
        "date": "09th February 2024"
    },
    {
        id: 8,
        imgSrc: "/Recruiters/asdf.jpeg",
        "title": "24x7 Software, Pune - On-Campus Placement Drive",
        "description": "Training & Placement Cells, SVIET successfully organized an on-campus placement drive for B.Tech CSE Batch 2025, in collaboration with 24x7 Software, Pune. With over 70 student... participating.",
        "date": "24th September 2024"
    },
    {
        id: 9,
        imgSrc: "/Recruiters/asdfasd.jpeg",
        "title": "Skillkart Placement Drive - SVIET",
        "description": "The Skillkart Placement Drive at SVIET was a huge success! With over 60+ enthusiastic students from B.Tech (CSE), BCA, MCA, BBA, B.Com, and MBA (Batch 2025) participating, th... day was filled with excitement and",
        "date": "04st October 2024"
    }
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
    image: "/Management/shubham.jpg",
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
        image: "/Home/super60.JPG"
    },
    {
        name: "Google I/O Extended",
        description:
            "Exclusive workshops and sessions on Google technologies and innovations.",
        image: "/Programs/btechcse.webp"
    },
    {
        name: "Uniques",
        description:
            "Specialized training program for top-performing students aiming for elite companies.",
        image: "/Programs/btech.JPG"
    }
]



const placementByCourseData = [
    { name: "Engineering", "Number Of Students": 93 },
    { name: "Pharmacy", "Number Of Students": 95 },
    { name: "Business Management", "Number Of Students": 89 },
    { name: "Agriculture", "Number Of Students": 52 },
    { name: "Computer Application", "Number Of Students": 91 },
    { name: "Paramedical", "Number Of Students": 75 },
    { name: "Hospitality and Catering", "Number Of Students": 87 },
    { name: "Diploma", "Number Of Students": 50 },
    { name: "Accounting", "Number Of Students": 55 },
    { name: "Others", "Number Of Students": 45 },
]

const companiesVisitedData = [
    { year: "2019", "Number of Companies": 143 },
    { year: "2020", "Number of Companies": 140 },
    { year: "2021", "Number of Companies": 203 },
    { year: "2022", "Number of Companies": 240 },
    { year: "2023", "Number of Companies": 255 },
]

const packageOfferedData = [
    { year: "2017", "Package in LPA": 15 },
    { year: "2018", "Package in LPA": 20 },
    { year: "2019", "Package in LPA": 25.5 },
    { year: "2020", "Package in LPA": 37 },
    { year: "2021", "Package in LPA": 48 },
    { year: "2022", "Package in LPA": 50 },
    { year: "2023", "Package in LPA": 50 },
]

const successRateData = [
    { year: "2016", "Percetage Rate": 72 },
    { year: "2017", "Percetage Rate": 82 },
    { year: "2018", "Percetage Rate": 89 },
    { year: "2019", "Percetage Rate": 95 },
    { year: "2020", "Percetage Rate": 93 },
    { year: "2021", "Percetage Rate": 96 },
    { year: "2022", "Percetage Rate": 94 },
    { year: "2023", "Percetage Rate": 92 },
]

const placementChartsData = [
    {
        id: "chart1",
        title: "Percentage of Placements by Course",
        data: placementByCourseData,
        description:
            "Consistent high placement rates across various engineering and management disciplines, reflecting the quality of our programs.",
        dataKeyX: "name",
        dataKeyY: "Number Of Students",
        barFill: "#FACC15", // yellow-400
    },
    {
        id: "chart2",
        title: "Companies Visited Over The Years",
        data: companiesVisitedData,
        description:
            "Growing number of top-tier companies visiting our campus annually, indicating strong industry trust and demand for our graduates.",
        dataKeyX: "year",
        dataKeyY: "Number of Companies",
        barFill: "#3B82F6", // blue-500
    },
    {
        id: "chart3",
        title: "Industry Leading Pay Package Offered (Last 7 years)",
        data: packageOfferedData,
        description: "Analyzing the average and highest packages offered to our students, showcasing career growth.",
        dataKeyX: "year",
        dataKeyY: "Package in LPA",
        barFill: "#10B981", // red-500
    },
    {
        id: "chart4",
        title: "Success Rate (Last 8 Years)",
        data: successRateData,
        description: "Tracking the year-on-year success rate of our placements, demonstrating consistent improvement.",
        dataKeyX: "year",
        dataKeyY: "Percetage Rate",
        barFill: "#8B5CF6", // purple-500
    },
]
import { Button } from "@/components/ui/button"
import Recruter from "@/components/About/Recruter"
import Review from "@/components/Home/Review"
export default function Placements() {
    const [currentChartIndex, setCurrentChartIndex] = useState(0)
    const currentChart = placementChartsData[currentChartIndex]
    const [statsData, setStatsData] = useState(placementStats.map((stat) => ({ ...stat, count: 0, hasAnimated: false })))
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    const index = Number(entry.target.dataset.index)

                    setStatsData((prevStats) => {
                        if (!prevStats[index].hasAnimated) {
                            const newStats = [...prevStats]
                            newStats[index] = { ...newStats[index], hasAnimated: true }

                            const targetValueStr = newStats[index].value.replace(/[^\d.]/g, "")
                            const targetValue = Number.parseFloat(targetValueStr)
                            const suffix = newStats[index].value.replace(/[\d.]/g, "")
                            const duration = 20
                            const steps = 20
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
                    imgSrc={"/About/placement.webp" || "/placeholder.webp"}
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
                                <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white p-4 rounded-lg shadow-lg">
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

                <Recruter />

                {/* Student Success Stories / Testimonials */}

                <Review />
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
                            {latestPlacementDrive.map((item) => (
                                <Card key={item.id} className="shadow-lg py-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <img
                                        src={item.imgSrc || "/placeholder.svg"}
                                        alt="Placement Drive"
                                        className="w-full h-64 object-cover rounded-t-lg"
                                    />
                                    <CardContent className="p-6 pt-0">
                                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm mb-4">
                                            {item.description}
                                        </p>
                                        <Badge className="bg-blue-100 text-blue-800">
                                            {item.date}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}

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

                        <div className="flex  space-x-4 mb-8 overflow-x-auto pb-2">
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
                                                right: 1,
                                                left: -30,
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
