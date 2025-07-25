import React from 'react'
import { Helmet } from 'react-helmet'
import { Star, Target, Globe, Lightbulb } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Herosection from '@/components/Herosection'
import OtherAwards from '@/components/About/OtherAwards'
import UniversityAff from '@/components/About/UniversityAff'

const majorAwards = [{
  id: 1,
  title: "ASSOCHAM National Education Awards",
  year: "2020",
  description: "ASSOCHAM National Education Awards 2020.",
  icon: Globe,
},
{
  id: 2,
  title: "Best Engineering College in North India",
  year: "2020",
  description: "Conferred on SVIET. Jharkhand Education Minister gave the Award to SVIET at ASSOCHAM National Education Awards 2020.",
  icon: Star,
},
{
  id: 3,
  title: "Best Contribution Towards Education Initiative of the year - 2022",
  year: "2022",
  description: "SVGOI Awarded as Best Contribution Towards Education Initiative of the year - 2022 by INDIAN CSR AWARDS",
  icon: Target,
},
{
  id: 4,
  title: "Research Publication Excellence",
  year: "2023",
  description: "Recognized for significant increase in quality research publications and citations",
  icon: Lightbulb,
},]



const governmentRecognitions = [
  {
    id: 1,
    title: "Appreciation Award from Punjab Unaided college association",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sviet.org.in_awards-and-recognitions_.png-DPUQjNJwxlE27zB4bUHJAGcbsE2QJ9.jpeg",
  },
  {
    id: 2,
    title: "Guest of Honor from National Institute for Foundation Teachers",
    image: ""
  },
  {
    id: 3,
    title: "Runner-Up Award in Youth Fest from IKGPTU",
    image: ""
  },
  {
    id: 4,
    title: "BEST ENGINEERING COLLEGE in ASSOCHAM NATIONAL EDUCATION AWARDS",
    image: ""
  },
  {
    id: 5,
    title: "Fellow of CHAI Award from Confederation of Horticulture Associations of India",
    image: ""
  }
]

const industryAwards = [
  {
    id: 1,
    description:
      "Dr. Indu Batra, Applied Sciences department was awarded the prestigious “ISTE North Zone Best Teacher award” at the Faculty Convention Program organized by the Indian Society of Technical Education (ISTE).",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sviet.org.in_awards-and-recognitions_.png-DPUQjNJwxlE27zB4bUHJAGcbsE2QJ9.jpeg",
  },
  {
    id: 2,
    description: "Fellow of CHAI Award from Confederation of Horticulture Associations of India",
    image: "/placholder.svg"
  }
]


const AwardsAndRecog = () => {
  return (
    <>
      <Helmet>
        <title>
          Awards &
          Recognitions - SVIET
        </title>
      </Helmet>
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}

        <Herosection
          heading={"Awards & Recognition"}
          shortDescription={"Celebrating our journey of excellence through prestigious awards, accreditations, and recognition from leading educational bodies, industry partners, and government institutions. Our achievements reflect our commitment to quality education and innovation."}
          imgSrc={"/placeholder.svg"}
          btnText1={"Our Legacy"}
          btn1Href={"/from-the-management"}
        />




        {/* Major Awards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Major Awards</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our most prestigious recognitions that showcase our commitment to excellence in education, research, and
                institutional development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {majorAwards.map((award) => {
                const Icon = award.icon
                return (
                  <Card
                    key={award.id}
                    className="group py-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={award.image || "/placeholder.svg"}
                        alt={award.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className={`bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-4 py-2`}>
                          {award.year}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="px-8 ">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">{award.title}</h3>
                      </div>
                      <p className="text-gray-700  leading-relaxed mb-6">{award.description}</p>

                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>



        {/* Government Recognitions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Government Recognitions</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Acknowledgments and awards from various government bodies and ministries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {governmentRecognitions.map((recognition) => (
                <Card
                  key={recognition.id}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 py-0 border-l-green-500"
                >
                  <CardContent className="p-8">
                    <img
                      src={recognition.image || "/placeholder.svg"}
                      alt={recognition.title}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{recognition.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Awards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Industry Awards</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Recognition from leading industry bodies and chambers of commerce
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industryAwards.map((award) => (
                <Card
                  key={award.id}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-purple-500"
                >
                  <CardContent className="p-8">
                    <img
                      src={award.image || "/placeholder.svg"}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <p className="text-gray-600 leading-relaxed mb-4">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container  mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">University Affiliations</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our continuous affiliation with prestigious universities ensuring quality education standards
              </p>
            </div>

            <UniversityAff data={[
              { year: "PTU 2018-19", status: "Affiliated", color: "from-green-500 to-green-600" },
              { year: "PTU 2019-20", status: "Affiliated", color: "from-blue-500 to-blue-600" },
              { year: "PTU 2020-21", status: "Affiliated", color: "from-purple-500 to-purple-600" },
              { year: "PTU 2021-22", status: "Affiliated", color: "from-red-500 to-red-600" },
              { year: "PTU 2022-23", status: "Affiliated", color: "from-yellow-500 to-orange-500" },
              { year: "PTU 2023-24", status: "Affiliated", color: "from-teal-500 to-teal-600" },
              { year: "PTU 2024-25", status: "Affiliated", color: "from-teal-500 to-teal-600" },
            ]}
              UNINAME={"IKGPTU"} />
            <UniversityAff data={[
              { year: "AICTE 2018-19", status: "Affiliated", color: "from-green-500 to-green-600" },
              { year: "AICTE 2019-20", status: "Affiliated", color: "from-blue-500 to-blue-600" },
              { year: "AICTE 2020-21", status: "Affiliated", color: "from-purple-500 to-purple-600" },
              { year: "AICTE 2021-22", status: "Affiliated", color: "from-red-500 to-red-600" },
              { year: "AICTE 2022-23", status: "Affiliated", color: "from-yellow-500 to-orange-500" },
              { year: "AICTE 2023-24", status: "Affiliated", color: "from-teal-500 to-teal-600" },
              { year: "AICTE 2024-25", status: "Affiliated", color: "from-teal-500 to-teal-600" },
            ]}
              UNINAME={"AICTE"} />
          </div>
        </section>


        <OtherAwards />

      </div>
    </>
  )
}

export default AwardsAndRecog