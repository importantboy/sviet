import React from 'react'
import {
  BookOpen,
  Heart,
  Globe,
  Lightbulb,
  MapPin,
  Phone,
  Mail
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Helmet } from 'react-helmet'
import Herosection from '@/components/Herosection'
import ExcellenceSection from '@/components/Home/ExcellenceSection'
import OppertunitiesPage from '@/components/About/Oppertunities'
import Recruter from '@/components/About/Recruter'
const keyHighlights = [
  {
    title: "Academic Excellence",
    description:
      "Maintaining highest standards of education with innovative teaching methodologies and research-oriented learning.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Industry Integration",
    description:
      "Strong partnerships with leading companies ensuring practical exposure and excellent placement opportunities.",
    icon: Globe,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Research & Innovation",
    description:
      "Cutting-edge research facilities and innovation labs fostering creativity and technological advancement.",
    icon: Lightbulb,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Holistic Development",
    description:
      "Comprehensive personality development focusing on leadership skills, ethics, and social responsibility.",
    icon: Heart,
    color: "bg-red-50 text-red-600",
  }
]
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

const quickInfo = [
  {
    icon: MapPin,
    title: "Campus Location",
    content:
      "Chandigarh-Patiala Highway, Ram Nagar, Banur - 140601, Punjab, India"
  },
  {
    icon: Phone,
    title: "Contact Numbers",
    content: "+91-94652-33333 | Toll Free: 1800-120-1200"
  },
  {
    icon: Mail,
    title: "Email Addresses",
    content: "info@sviet.org.in | admission@sviet.org.in"
  },

]
const AboutSvgoi = () => {
  return (
    <>
      <Helmet>
        <title>
          About SVGOI - SVIET
        </title>
      </Helmet>
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section - Using existing pattern */}
        <Herosection
          heading={"About SVGOI"}
          shortDescription={"Swami Vivekanand Group of Institutions was established in year 2004 under the aegis of Sh.Raghunath Rai Memorial Education & Charitable Trust,The governing body is headed by Sh. Ashwani Garg and Sh.Ashok Garg."}
          btnText1={"Our Legacy"}
          btn1Href={"/from-the-management"}
          imgSrc={"/About/svgoi.jpeg" || "/placeholder.svg"}
        />



        {/* About SVIET Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  About SVGOI
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p className="text-lg leading-relaxed">
                    A state-of-the-art campus situated 30 km from Chandigarh on the NH-1 Chandigarh-Patiala National Highway. The sprawling campus of the SVGOI is equidistant from Chandigarh, Mohali, Panchkula, Ambala, and Patiala. SVGOI has a mission to build leaders through holistic, transformative, and innovative education. For this purpose, a healthy number of international and national students from diverse regions like Egypt, Nepal, Assam, Nagaland, Jharkhand, Delhi-NCR, Himachal Area (Upper and Lower), Uttrakhand, Chandigarh, Panchkula, Mohali, U.P., and other localities are regularly studying at the campus, adding to the cultural diversity found on campus.
                  </p>

                </div>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader className="shadow-sm pb-2">
                    <CardTitle className="text-blue-900">
                      Quick Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 py-0">
                    <div className="space-y-4">
                      {quickInfo.map((info, index) => {
                        const Icon = info.icon
                        return (
                          <div key={index} className="flex items-start space-x-3">
                            <Icon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">
                                {info.title}
                              </p>
                              <p className="text-sm text-gray-600">
                                {info.content}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </section>

        {/* Excellence */}
        <ExcellenceSection />
        {/* oppertunities */}
        <OppertunitiesPage opportunitiesData={opportunitiesData} heading={"SVGOI"} />
        {/* recruter */}
        <Recruter />

        {/* Key Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Choose SVGOI?
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Discover what makes SVGOI a preferred choice for engineering
                education and career development
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
                    <CardContent className="p-6 py-3 text-center">
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
      </div>
    </>
  )
}

export default AboutSvgoi