import {
    Clock,
    ChevronRight
} from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Herosection from "../Herosection"
import { Helmet } from "react-helmet"
import Recruter from "../About/Recruter"
import { useRef } from "react"

export default function Layout({ heroSectionImage, overviewImg, isPg = false, laboratories, programHighlights, programEducationalObjectives, programOutcomes, programSpecificOutcomes, programTopics, eligibilityCriteria, fee, affiliation, syllabusLink, overview, degree, duration, courseName }) {
    const data = [
        { label: "Duration", value: `${duration} Years` },
        { label: "Degree", value: degree },
        {
            label: "Affiliation",
            value: affiliation,
        },

        { label: "Fee", value: fee },
    ]

    const topRef = useRef(null)
    const overviewRef = useRef(null)
    const quickActionsRef = useRef(null)
    const eligibilityRef = useRef(null)
    const topicsRef = useRef(null)
    const outcomesRef = useRef(null)
    const highlightsRef = useRef(null)
    const labsRef = useRef(null)
    const placementsRef = useRef(null)
    const activitiesRef = useRef(null)

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <Helmet>
                <title>{`${courseName} - SVIET`} </title>
            </Helmet>
            <div ref={topRef} className="min-h-screen bg-gray-50">

                {/* Hero Section - Using existing pattern */}
                <Herosection
                    heading={courseName}
                    shortDescription={`Shape the future with our comprehensive ${courseName} program. Gain hands-on experience, master industry-relevant skills, and prepare to lead in your field with confidence, innovation, and impact.`}
                    btnText1={"Apply Now"}
                    btn1Target={true}
                    btn1Href={"https://admission.sviet.ac.in/"}
                    imgSrc={heroSectionImage || "/placeholder.svg"}
                />
                {/* Sticky Navigation Bar */}
                <div className="bg-white border-b border-gray-200 shadow-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center py-4">
                            <div className="flex items-center space-x-6 overflow-x-auto">
                                <button
                                    onClick={() => scrollToSection(overviewRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Overview
                                </button>
                                <button
                                    onClick={() => scrollToSection(quickActionsRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Quick Links
                                </button>
                                <button
                                    onClick={() => scrollToSection(eligibilityRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Eligibility
                                </button>
                                <button
                                    onClick={() => scrollToSection(topicsRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Topics
                                </button>
                                <button
                                    onClick={() => scrollToSection(outcomesRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Outcomes
                                </button>
                                <button
                                    onClick={() => scrollToSection(placementsRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Placements
                                </button>
                                <button
                                    onClick={() => scrollToSection(highlightsRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Highlights
                                </button>
                                {laboratories && <button
                                    onClick={() => scrollToSection(labsRef)}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                                >
                                    Labs
                                </button>}
                               
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Back to Top Button */}
                <button
                    onClick={() => scrollToSection(topRef)}
                    className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full h-10 w-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Back to top"
                >
                    ↑
                </button>
                {/* Program Overview */}
                <section ref={overviewRef} className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2  gap-12 items-center">
                            <div className="relative">
                                <img
                                    src={overviewImg || "/placeholder.svg"}
                                    alt={courseName}
                                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-4 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{data[0].value} </div>
                                        <div className="text-blue-200 text-sm">{data[1].value}</div>
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
                <section ref={quickActionsRef} className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <Card className="overflow-hidden pt-0 shadow-xl rounded-2xl border border-gray-200">
                                    <CardHeader className="bg-blue-50 py-4.5 px-6">
                                        <CardTitle className="text-blue-900 flex items-center text-xl font-semibold">
                                            <Clock className="mr-2 h-5 w-5" />
                                            Program Details
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="px-6 py-4 space-y-3">
                                        {data.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="grid grid-cols-3 border-b last:border-none py-2 text-sm md:text-base"
                                            >
                                                <span className="font-medium text-gray-800">{item.label}:</span>
                                                <span className="col-span-2 text-gray-700 text-right md:text-left">
                                                    {item.value}
                                                </span>
                                            </div>
                                        ))}
                                    </CardContent>

                                    <CardFooter className="bg-gray-50 px-6 py-3 text-sm text-gray-600 italic">
                                        * Tuition Fees may vary depending on the Country/ State in which the
                                        candidate has passed their qualifying examination
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
                                                <Link target="_blank" to="https://admission.sviet.ac.in/">Apply Online</Link>
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

                <section ref={eligibilityRef} className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Eligibility Criteria</h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Multiple pathways to join our {courseName} program
                            </p>
                        </div>

                        {!isPg ? <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                            {eligibilityCriteria.map((criteria) => (
                                <Card
                                    key={criteria.id}
                                    className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${criteria.borderColor} shadow-lg`}
                                >
                                    <CardContent className="p-8">
                                        <div className="text-center mb-6">
                                            <div
                                                className={`w-20 h-20 bg-gradient-to-br ${criteria.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <span className="text-3xl">{criteria.icon}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-2">{criteria.title}</h3>
                                            <p className="text-gray-600 text-sm">{criteria.description}</p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                            {criteria.requirements.map((requirement, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700 text-sm leading-relaxed">{requirement}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <Badge className={`bg-gradient-to-r ${criteria.color} text-white font-medium px-4 py-2`}>
                                                Route {criteria.id}
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div> :
                            <div className="flex  w-full h-full  justify-center gap-8">
                                {eligibilityCriteria.map((criteria) => (
                                    <Card
                                        key={criteria.id}
                                        className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${criteria.borderColor} shadow-lg`}
                                    >
                                        <CardContent className="p-8">
                                            <div className="text-center mb-6">
                                                <div
                                                    className={`w-20 h-20 bg-gradient-to-br ${criteria.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <span className="text-3xl">{criteria.icon}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-blue-900 mb-2">{criteria.title}</h3>
                                                <p className="text-gray-600 text-sm">{criteria.description}</p>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                                {criteria.requirements.map((requirement, index) => (
                                                    <div key={index} className="flex items-start space-x-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <p className="text-gray-700 text-sm leading-relaxed">{requirement}</p>
                                                    </div>
                                                ))}
                                            </div>


                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        }


                    </div>
                </section>



                {/* Program's Major Topics */}
                <section ref={topicsRef} className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Program's Major Topics
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                Comprehensive curriculum covering fundamental and advanced topics
                                in {courseName}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {programTopics.map((topic, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-shadow duration-300"
                                >
                                    <CardContent className="p-4">
                                        <div className="flex items-center text-center justify-center">
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

                <section ref={outcomesRef} className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Program Learning Outcomes</h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Comprehensive learning outcomes that define what our graduates will achieve through the {courseName}
                            </p>
                        </div>

                        {/* Program Educational Objectives */}
                        {programEducationalObjectives && <div className="mb-16">
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
                        </div>}

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
                        {programSpecificOutcomes && <div>
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-blue-900 mb-4">Program Specific Outcomes (PSOs)</h3>
                                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                    Specific skills and knowledge that are unique to the {courseName} discipline
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
                        }

                    </div>
                </section>

                <div ref={placementsRef}>
                    <Recruter />
                </div>
                {/* Program Highlights */}
                <section ref={highlightsRef} className="py-16 bg-blue-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Program Highlights
                            </h2>
                            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
                                Discover what makes our {courseName}
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
                {laboratories && <section ref={labsRef} className="py-16 bg-gray-50">
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
                                    className="shadow-lg py-0 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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

                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>}
            </div>
        </>
    )
}
