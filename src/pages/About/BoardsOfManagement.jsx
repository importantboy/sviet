import React from 'react'
import { Helmet } from 'react-helmet'
import { Users, Calendar, MapPin, Target, CheckCircle, Clock, Building, Phone, Mail } from "lucide-react"
const boardFunctions = [
  {
    title: "Academic Oversight",
    description: "To monitor the academic and other activities of the college",
    icon: Target,

  },
  {
    title: "Policy Development",
    description: "To consider the recommendations of different Committees",
    icon: CheckCircle,
  },
  {
    title: "External Relations",
    description:
      "To consider all important communications, policy decisions received from the affiliating University, Government, and AICTE etc.",
    icon: Building,

  },
  {
    title: "Student Development",
    description: "To monitor the students and faculty development programmes",
    icon: Users,

  },
  {
    title: "Financial Management",
    description: "To pass the annual budget of the college",
    icon: Calendar,

  },
  {
    title: "Strategic Planning",
    description: "To approve the income and expenditure of the college annually",
    icon: MapPin,

  },
]
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Herosection from '@/components/Herosection'

const boardMembers = [
  {
    position: "Chairman",
    name: "Mr. Ashwani Garg",
  },
  {
    position: "President",
    name: "Ms. Ashok Garg",
  },
  {
    position: "Director Secretarial",
    name: "Mr. Vishal Garg",
  },
  {
    position: "Director Project",
    name: "Mr. Sahil Garg",
  },
  {
    position: "Director Corporate Affairs",
    name: "Mr. Ankur Gupta",
  },
  {
    position: "Director Placement",
    name: "Adv. Shubham Garg",
  },
  {
    position: "Finance Officer",
    name: "CA Sachin Jain",
  },
  {
    position: "Industrialist Member",
    name: "Mr. Navpreet Singh",
  },
  {
    position: "Principal SVIET (Member Secretary)",
    name: "Dr. Penta Garg",
  },
]


const meetingDetails = {
  frequency: "At least twice a year",
  venue: "College Campus",
  responsibility: "Member Secretary",
  quorum: "50% of the total members of the Board of Governance",
  termDuration: "The term of the members, except the office member, shall be three years.",
}


const BoardsOfManagement = () => {
  return (
    <>
      <Helmet>
        <title>
          Board Of Management - SVIET
        </title>
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}

        <Herosection
          heading={"Board of Management"}
          shortDescription={"Meet the distinguished leaders who guide SVIET's strategic direction, ensuring excellence in education, governance, and institutional development. Our Board of Management brings together expertise from academia, industry, and administration."}
          btnText1={"Meet Our Leaders"}
          btn1Href={"/from-the-management"}
          imgSrc={"/About/boardsofmanagement.JPG" || "/placeholder.svg"}
        />




        {/* Board Constitution */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Board Constitution
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our Board of Management comprises distinguished professionals from
                various fields, bringing diverse expertise to guide the institution's
                growth and development.
              </p>
            </div>

            {/* Table View for Desktop */}
            <div className="hidden lg:block">
              <Card className="shadow-lg pt-0 overflow-hidden ">
                <CardContent className="p-0">
                  <Table >
                    <TableHeader>
                      <TableRow className="bg-blue-50">
                        <TableHead className="font-bold py-4  px-10 text-blue-900">
                          Position
                        </TableHead>
                        <TableHead className="font-bold py-4 px-10 text-blue-900">
                          Name
                        </TableHead>

                      </TableRow>
                    </TableHeader>
                    <TableBody >
                      {boardMembers.map((member, index) => (
                        <TableRow key={index} className=" hover:bg-gray-50">
                          <TableCell className="py-4 font-medium px-10 text-blue-900">
                            {member.position}
                          </TableCell>
                          <TableCell className="font-semibold py-4 px-10">
                            {member.name}
                          </TableCell>

                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Card View for Mobile/Tablet */}
            <div className="lg:hidden grid md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">

                      <div>
                        <h3 className="text-lg font-bold text-blue-900">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium">{member.position}</p>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board Functions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Board Functions</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                The Board of Management oversees various critical functions to ensure the institution's excellence and
                continuous improvement in all areas of operation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardFunctions.map((func, index) => {
                const Icon = func.icon
                return (
                  <Card
                    key={index}
                    className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl text-blue-900">{func.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700  leading-relaxed">{func.description}</p>

                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Meeting Details & Governance Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Meeting and Venue */}
              <Card className="shadow-lg pt-0 overflow-hidden ">
                <CardHeader className=" bg-blue-50 py-4 shadow-sm">
                  <CardTitle className="text-2xl  text-blue-900 flex items-center">
                    <Calendar className="mr-3 h-6 w-6" />
                    Meeting and Venue
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Frequency
                        </h3>
                        <p className="text-gray-600">{meetingDetails.frequency}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Venue</h3>
                        <p className="text-gray-600">{meetingDetails.venue}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Users className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Responsibility
                        </h3>
                        <p className="text-gray-600">
                          {meetingDetails.responsibility}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Governance Details */}
              <div className="space-y-6">
                <Card className="pt-0 overflow-hidden shadow-lg">
                  <CardHeader className="py-4 bg-green-50">
                    <CardTitle className="text-2xl text-green-800 flex items-center">
                      <Target className="mr-3 h-6 w-6" />
                      Quorum
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      The quorum for the meeting shall be{" "}
                      <span className="font-semibold text-green-700">50%</span> of the
                      total members of the Board of Governance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg pt-0 overflow-hidden">
                  <CardHeader className= "py-4 bg-orange-50">
                    <CardTitle className="text-2xl text-orange-800 flex items-center">
                      <Calendar className="mr-3 h-6 w-6" />
                      Term Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {meetingDetails.termDuration}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>



      </div>
    </>
  )
}

export default BoardsOfManagement