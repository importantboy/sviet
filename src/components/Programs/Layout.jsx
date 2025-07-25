import {
    Calendar,
    Clock,
    Users,
    Award,
    BookOpen,
    TrendingUp,
    ChevronRight
} from "lucide-react"
import { Link } from "react-router-dom"
const programEducationalObjectives = [
    {
        id: "PEO1",
        title: "Technical Excellence",
        description:
            "Graduates will demonstrate strong technical competence in computer science and engineering principles, enabling them to solve complex problems and contribute to technological advancement.",
    },
    {
        id: "PEO2",
        title: "Professional Growth",
        description:
            "Graduates will pursue successful careers in industry, academia, or entrepreneurship, demonstrating leadership, teamwork, and effective communication skills.",
    },
    {
        id: "PEO3",
        title: "Lifelong Learning",
        description:
            "Graduates will engage in continuous learning and professional development to adapt to evolving technologies and maintain relevance in their chosen career paths.",
    },
    {
        id: "PEO4",
        title: "Social Responsibility",
        description:
            "Graduates will demonstrate ethical behavior, social responsibility, and awareness of the impact of engineering solutions on society and the environment.",
    },
    {
        id: "PEO5",
        title: "Innovation and Research",
        description:
            "Graduates will contribute to innovation and research in computer science and engineering, developing new technologies and solutions for societal benefit.",
    },
]
const programOutcomes = [
    {
        id: "PO1",
        title: "Engineering Knowledge",
        description:
            "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
    },
    {
        id: "PO2",
        title: "Problem Analysis",
        description:
            "Identify, formulate, research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.",
    },
    {
        id: "PO3",
        title: "Design/Development of Solutions",
        description:
            "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations.",
    },
    {
        id: "PO4",
        title: "Conduct Investigations",
        description:
            "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    },
    {
        id: "PO5",
        title: "Modern Tool Usage",
        description:
            "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
    },
    {
        id: "PO6",
        title: "The Engineer and Society",
        description:
            "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.",
    },
    {
        id: "PO7",
        title: "Environment and Sustainability",
        description:
            "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development.",
    },
    {
        id: "PO8",
        title: "Ethics",
        description:
            "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.",
    },
    {
        id: "PO9",
        title: "Individual and Team Work",
        description:
            "Function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings.",
    },
    {
        id: "PO10",
        title: "Communication",
        description:
            "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.",
    },
    {
        id: "PO11",
        title: "Project Management and Finance",
        description:
            "Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and as a leader, to manage projects and in multidisciplinary environments.",
    },
    {
        id: "PO12",
        title: "Life-long Learning",
        description:
            "Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    },
]
const programSpecificOutcomes = [
    {
        id: "PSO1",
        title: "Professional Skills",
        description:
            "Ability to have the scientific knowledge and working of electronic equipment/systems guided by practical experience and theoretical fundamentals knowledge of Electronics & Communication Engineering.",
    },
    {
        id: "PSO2",
        title: "Domain Knowledge",
        description:
            "Ability to provide solutions to real-world problems in the field of Electronics & Communication Engineering by applying knowledge of mathematics, science, electronics, embedded & communication systems.",
    },
    {
        id: "PSO3",
        title: "Innovation and Design",
        description:
            "Ability to innovate thinking and ability to design and/or improve products market systems for the society and industry for better education, human safety and reduced cost.",
    },
    {
        id: "PSO4",
        title: "Fundamental Knowledge",
        description:
            "Ability to demonstrate fundamental domain knowledge with working with electronic equipment/systems to handle engineering problems in professional environment.",
    },
    {
        id: "PSO5",
        title: "Modern Technologies",
        description:
            "Ability to get profound knowledge of modern technologies, ECE tools and to acquire sufficient skills to innovate manufacturing solutions in engineering problems.",
    },
    {
        id: "PSO6",
        title: "Leadership Skills",
        description:
            "Graduates will be chosen leaders in Electronics and Comm. Engineering and interrelated domains of engineering due their ability solve real world large disciplinary problems.",
    },
]

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Herosection from "../Herosection"
import { Helmet } from "react-helmet"
import Recruter from "../About/Recruter"
import Review from "../Home/Review"

const programTopics = [
    { title: "System Administrator", },
    { title: "Network Engineering", },
    { title: "Database Administrator", },
    { title: "Web Developer", },
    { title: "Database Management", },
    { title: "Software Engineering", },
    { title: "Computer Networks", },
    { title: "Operating Systems", }
]


const programHighlights = [
    "Learn by doing: Hands-on learning through state-of-the-art software and projects",
    "Industry Integration: Regular guest lectures and workshops by industry experts",
    "Research Opportunities: Engage in cutting-edge research projects with faculty guidance",
    "Internship Programs: Mandatory internships with leading tech companies and startups",
    "Global Exposure: International collaborations and exchange programs with partner universities",
    "Career Support: Dedicated placement cell with 95%+ placement record in top companies",
    "Innovation Labs: Access to specialized labs for AI, ML, IoT, and emerging technologies",
    "Entrepreneurship Support: Incubation center support for student startup initiatives"
]

const laboratories = [
    {
        name: "Software Development Lab",
        description:
            "State-of-the-art lab with latest development tools and IDEs for software programming and development projects.",
        image: "/placeholder.svg?height=250&width=350&text=Software+Lab",
        facilities: ["Latest IDEs", "Version Control", "Testing Tools"]
    },
    {
        name: "Networking Lab",
        description:
            "Advanced networking lab with Cisco equipment for hands-on experience in network configuration and management.",
        image: "/placeholder.svg?height=250&width=350&text=Network+Lab",
        facilities: ["Cisco Equipment", "Network Simulators", "Security Tools"]
    },
    {
        name: "AI & ML Lab",
        description:
            "Specialized laboratory equipped with high-performance computing systems for artificial intelligence and machine learning research.",
        image: "/placeholder.svg?height=250&width=350&text=AI+ML+Lab",
        facilities: ["GPU Clusters", "ML Frameworks", "Research Tools"]
    }
]

const placementStats = [
    { label: "Average Package", value: "8.5 LPA", icon: TrendingUp },
    { label: "Highest Package", value: "45 LPA", icon: Award },
    { label: "Placement Rate", value: "95%", icon: Users },
    { label: "Companies Visited", value: "150+", icon: BookOpen }
]

const topRecruiters = [
    {
        name: "Microsoft",
        logo: "/placeholder.svg?height=60&width=120&text=Microsoft"
    },
    { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
    { name: "Amazon", logo: "/placeholder.svg?height=60&width=120&text=Amazon" },
    { name: "TCS", logo: "/placeholder.svg?height=60&width=120&text=TCS" },
    {
        name: "Infosys",
        logo: "/placeholder.svg?height=60&width=120&text=Infosys"
    },
    { name: "Wipro", logo: "/placeholder.svg?height=60&width=120&text=Wipro" }
]

const studentTestimonials = [
    {
        name: "Rahul Sharma",
        batch: "2023 Graduate",
        company: "Microsoft",
        package: "28 LPA",
        image: "/placeholder.svg?height=100&width=100&text=Rahul",
        testimonial:
            "The CSE program at SVIET provided me with strong fundamentals and practical exposure that helped me secure my dream job at Microsoft. The faculty support and industry connections are exceptional."
    },
    {
        name: "Priya Patel",
        batch: "2023 Graduate",
        company: "Google",
        package: "35 LPA",
        image: "/placeholder.svg?height=100&width=100&text=Priya",
        testimonial:
            "SVIET's emphasis on research and innovation helped me develop critical thinking skills. The AI/ML lab experiences were instrumental in landing my role at Google's AI division."
    }
]

const activities = [
    {
        title: "Tech Fest 2024",
        date: "March 15-17, 2024",
        description:
            "Annual technical festival featuring coding competitions, hackathons, and tech exhibitions.",
        image: "/placeholder.svg?height=200&width=300&text=Tech+Fest"
    },
    {
        title: "Industry Workshop",
        date: "February 20, 2024",
        description:
            "Workshop on emerging technologies conducted by industry experts from leading tech companies.",
        image: "/placeholder.svg?height=200&width=300&text=Workshop"
    },
    {
        title: "Coding Competition",
        date: "January 25, 2024",
        description:
            "Inter-college coding competition with participation from top engineering colleges across the region.",
        image: "/placeholder.svg?height=200&width=300&text=Coding+Contest"
    }
]

export default function Layout({ syllabusLink, overview, degree, duration, shortDescriptionForHero, courseName }) {
    return (
        <>
            <Helmet>
                <title>{`${courseName} - SVIET`} </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">

                {/* Hero Section - Using existing pattern */}
                <Herosection
                    heading={courseName}
                    shortDescription={shortDescriptionForHero}
                    btnText1={"Apply Now"}
                    btn1Href={"/apply"}
                    imgSrc={"/placeholder.svg"}
                />
                {/* Program Overview */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2  gap-12 items-center">
                            <div className="relative">
                                <img
                                    src="https://sviet.org.in/wp-content/uploads/2023/04/dfdf-768x518.jpg"
                                    alt="Computer Science Engineering Program"
                                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-4 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{duration} Years</div>
                                        <div className="text-blue-200 text-sm">{degree}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                    Program Overview
                                </h2>
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="mb-4">
                                        {overview}
                                    </p>

                                </div>


                            </div>
                        </div>
                    </div>
                </section>
                {/* Program Details & Quick Actions */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <Card className="p-0 overflow-hidden shadow-lg">
                                    <CardHeader className="bg-blue-50 py-5">
                                        <CardTitle className="text-blue-900 flex items-center">
                                            <Clock className="mr-2 h-5 w-5" />
                                            Program Details
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 pb-4">
                                        <div className="">
                                            <div className="flex border-b py-1 justify-between">
                                                <span className="font-medium">Duration:</span>
                                                <span>{duration} Years</span>
                                            </div>
                                            <div className="flex border-b py-1 justify-between">
                                                <span className="font-medium">Degree:</span>
                                                <span>{degree}</span>
                                            </div>
                                            <div className="flex border-b py-1 justify-between">
                                                <span className="font-medium">Fee:</span>
                                                <span>52,500/-INR Per Semester</span>
                                            </div>
                                            <div className="flex border-b py-1 justify-between">
                                                <span className="font-medium">Affiliation:</span>
                                                <span>Affiliated to IKGPTU, Jalandhar Approved by AICTE</span>
                                            </div>


                                            <div className="flex border-b py-1 justify-between">
                                                <span className="font-medium">Eligibility:</span>
                                                <span>12th with Chemistry/Biotechnology/Computer Science/Biology.</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className={"pb-3 "}>
                                        * Tuition Fees may vary depending on the Country/ State in which the candidate has passed their qualifying examination
                                    </CardFooter>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <Card className="shadow-lg pt-0 overflow-hidden">
                                    <CardHeader className="bg-green-50 py-6">
                                        <CardTitle className="text-green-800">Quick Actions</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                                <Link to="/apply">Apply Online</Link>
                                            </Button>
                                            <Button variant="outline" className="w-full bg-transparent" asChild>
                                                <Link to={syllabusLink} target="_blank">View Syllabus</Link>
                                            </Button>

                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Program's Major Topics */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Program's Major Topics
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Comprehensive curriculum covering fundamental and advanced topics
                                in computer science and engineering
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {programTopics.map((topic, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-shadow duration-300"
                                >
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-center">
                                            <h3 className="font-semibold text-gray-900">
                                                {topic.title}
                                            </h3>

                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Program Learning Outcomes</h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Comprehensive learning outcomes that define what our graduates will achieve through the Computer Science &
                                Engineering program
                            </p>
                        </div>

                        {/* Program Educational Objectives */}
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-blue-900 mb-4">Program Educational Objectives (PEOs)</h3>
                                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                    Broad statements that describe career and professional accomplishments that the program is preparing
                                    graduates to achieve
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {programEducationalObjectives.map((peo) => (
                                    <Card
                                        key={peo.id}
                                        className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-green-500"
                                    >
                                        <CardContent className="p-8">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                                    <span className="text-green-700 font-bold text-lg">{peo.id}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-blue-900">{peo.title}</h4>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{peo.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Program Outcomes */}
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-blue-900 mb-4">Program Outcomes (POs)</h3>
                                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                    Specific abilities that students are expected to have upon graduation from the program
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {programOutcomes.map((po) => (
                                    <Card
                                        key={po.id}
                                        className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-blue-700 font-bold text-sm">{po.id}</span>
                                                </div>
                                                <h4 className="text-lg font-bold text-blue-900">{po.title}</h4>
                                            </div>
                                            <p className="text-gray-700 text-sm leading-relaxed">{po.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Program Specific Outcomes */}
                        <div>
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-blue-900 mb-4">Program Specific Outcomes (PSOs)</h3>
                                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                    Specific skills and knowledge that are unique to the Computer Science & Engineering discipline
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {programSpecificOutcomes.map((pso) => (
                                    <Card
                                        key={pso.id}
                                        className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-purple-500"
                                    >
                                        <CardContent className="p-8">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                                    <span className="text-purple-700 font-bold text-lg">{pso.id}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-blue-900">{pso.title}</h4>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{pso.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>


                    </div>
                </section>

                <Recruter />
                {/* Program Highlights */}
                <section className="py-16 bg-blue-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Program Highlights
                            </h2>
                            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
                                Discover what makes our Computer Science & Engineering program
                                stand out from the rest
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {programHighlights.map((highlight, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <ChevronRight className="h-4 w-4 text-blue-900" />
                                    </div>
                                    <p className="text-blue-100 leading-relaxed">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Laboratories */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                State-of-the-Art Laboratories
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Hands-on learning experience with cutting-edge technology and
                                equipment
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {laboratories.map((lab, index) => (
                                <Card
                                    key={index}
                                    className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={lab.image || "/placeholder.svg"}
                                            alt={lab.name}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-xl font-bold">{lab.name}</h3>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            {lab.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {lab.facilities.map((facility, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {facility}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Placement Overview */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Placement Overview
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Excellent placement record with top companies recruiting our
                                graduates
                            </p>
                        </div>

                        {/* Placement Stats */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {placementStats.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <Card
                                        key={index}
                                        className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <CardContent className="p-6">
                                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-8 w-8 text-blue-600" />
                                            </div>
                                            <div className="text-3xl font-bold text-blue-900 mb-2">
                                                {stat.value}
                                            </div>
                                            <div className="text-gray-600">{stat.label}</div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>



                        <Review />
                    </div>
                </section>

              
            

            </div>
        </>
    )
}
