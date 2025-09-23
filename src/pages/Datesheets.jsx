"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { Calendar, Download, Clock, AlertCircle, CheckCircle, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Herosection from "@/components/Herosection"

const examSchedule = {
  current: {
    session: "Winter 2024",
    type: "End Semester Examinations",
    startDate: "2024-02-15",
    endDate: "2024-03-10",
    status: "upcoming",
    ug: [
      {
        program: "BCA",
        exams: [
          {
            subject: "Programming in C",
            code: "BCA102",
            date: "2024-02-16",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
          {
            subject: "Mathematics-I",
            code: "BCA103",
            date: "2024-02-18",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
          {
            subject: "Data Structures",
            code: "BCA201",
            date: "2024-02-20",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 2",
          },
          {
            subject: "Database Management Systems",
            code: "BCA204",
            date: "2024-02-22",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 2",
          },
          {
            subject: "Web Technologies",
            code: "BCA301",
            date: "2024-02-24",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 3",
          },
        ],
      },
      {
        program: "CSE",
        exams: [
          {
            subject: "Engineering Mathematics-I",
            code: "CSE101",
            date: "2024-02-17",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
          {
            subject: "Programming for Problem Solving",
            code: "CSE103",
            date: "2024-02-19",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
          {
            subject: "Data Structures and Algorithms",
            code: "CSE203",
            date: "2024-02-21",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 2",
          },
          {
            subject: "Computer Networks",
            code: "CSE304",
            date: "2024-02-23",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 3",
          },
        ],
      },
    ],
    pg: [
      {
        program: "MCA",
        exams: [
          {
            subject: "Advanced Programming",
            code: "MCA101",
            date: "2024-02-25",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
          {
            subject: "Computer System Architecture",
            code: "MCA102",
            date: "2024-02-27",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
          {
            subject: "Advanced Database Systems",
            code: "MCA201",
            date: "2024-03-01",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 2",
          },
        ],
      },
      {
        program: "MBA",
        exams: [
          {
            subject: "Principles of Management",
            code: "MBA101",
            date: "2024-02-26",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
          {
            subject: "Managerial Economics",
            code: "MBA102",
            date: "2024-02-28",
            time: "09:00 AM - 12:00 PM",
            semester: "Semester 1",
          },
        ],
      },
    ],
  },
  previous: [
    {
      session: "Summer 2023",
      type: "End Semester Examinations",
      startDate: "2023-06-15",
      endDate: "2023-07-10",
      status: "completed",
    },
    {
      session: "Winter 2023",
      type: "End Semester Examinations",
      startDate: "2023-02-15",
      endDate: "2023-03-10",
      status: "completed",
    },
  ],
}

const importantDates = [
  {
    title: "Exam Form Submission",
    date: "2024-01-15",
    description: "Last date for exam form submission",
    status: "completed",
  },
  {
    title: "Admit Card Release",
    date: "2024-02-05",
    description: "Admit cards will be available for download",
    status: "upcoming",
  },
  {
    title: "Examinations Begin",
    date: "2024-02-15",
    description: "End semester examinations commence",
    status: "upcoming",
  },
  {
    title: "Examinations End",
    date: "2024-03-10",
    description: "Last day of end semester examinations",
    status: "upcoming",
  },
  {
    title: "Result Declaration",
    date: "2024-03-25",
    description: "Results will be declared",
    status: "upcoming",
  },
]

const examGuidelines = [
  "Students must carry their admit card and valid ID proof to the examination hall",
  "Reporting time is 30 minutes before the scheduled exam time",
  "Mobile phones and electronic devices are strictly prohibited in the exam hall",
  "Students should bring their own stationery items",
  "Late entry after 30 minutes of exam commencement is not allowed",
  "Students must follow the dress code and maintain discipline during examinations",
]

const Datesheets = () => {
  const [activeTab, setActiveTab] = useState("current")
  const [selectedProgram, setSelectedProgram] = useState("all")

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-yellow-100 text-yellow-800"
      case "ongoing":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "upcoming":
        return <Clock className="h-4 w-4" />
      case "ongoing":
        return <AlertCircle className="h-4 w-4" />
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <Helmet>
        <title>Datesheets - SVIET</title>
        <meta
          name="description"
          content="Access current and previous examination datesheets for all programs at SVIET. Download exam schedules and stay updated with important dates."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Herosection
          heading="Examination Datesheets"
          shortDescription="Stay updated with current and upcoming examination schedules. Access detailed datesheets, important dates, and examination guidelines for all programs."
          btnText1="Current Schedule"
          btn1Href="#datesheets"
          imgSrc="/Home/AddmissionCell.jpeg"
        />

        {/* Current Session Info */}
        <section className="py-8 bg-blue-900 text-white" id="datesheets">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Badge className={getStatusColor(examSchedule.current.status)}>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(examSchedule.current.status)}
                    <span className="capitalize">{examSchedule.current.status}</span>
                  </div>
                </Badge>
              </div>
              <h2 className="text-2xl font-bold mb-2">{examSchedule.current.session}</h2>
              <p className="text-blue-200 mb-4">{examSchedule.current.type}</p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Start: {formatDate(examSchedule.current.startDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>End: {formatDate(examSchedule.current.endDate)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Important Dates</h3>
              <p className="text-gray-600">Key dates and deadlines for the current examination session</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <Card key={index} className="shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-900">{new Date(date.date).getDate()}</div>
                            <div className="text-sm text-gray-500">
                              {new Date(date.date).toLocaleDateString("en-US", { month: "short" })}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{date.title}</h4>
                            <p className="text-sm text-gray-600">{date.description}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(date.status)}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(date.status)}
                            <span className="capitalize">{date.status}</span>
                          </div>
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Examination Schedule */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Examination Schedule</h3>
              <p className="text-gray-600">Detailed datesheet for current examination session</p>
            </div>

            <Tabs defaultValue="ug" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="ug">Undergraduate</TabsTrigger>
                <TabsTrigger value="pg">Postgraduate</TabsTrigger>
              </TabsList>

              <TabsContent value="ug" className="space-y-8">
                {examSchedule.current.ug.map((program, programIndex) => (
                  <Card key={programIndex} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-blue-900">{program.program}</h4>
                        <div className="flex space-x-2">
                          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                            <Download className="h-4 w-4" />
                            <span>Download PDF</span>
                          </button>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b bg-blue-50">
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Code</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Semester</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.exams.map((exam, examIndex) => (
                              <tr key={examIndex} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-blue-600">
                                  {new Date(exam.date).toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </td>
                                <td className="py-3 px-4">{exam.subject}</td>
                                <td className="py-3 px-4 font-mono text-gray-600">{exam.code}</td>
                                <td className="py-3 px-4">{exam.time}</td>
                                <td className="py-3 px-4">
                                  <Badge variant="secondary" className="text-xs">
                                    {exam.semester}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="pg" className="space-y-8">
                {examSchedule.current.pg.map((program, programIndex) => (
                  <Card key={programIndex} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-blue-900">{program.program}</h4>
                        <div className="flex space-x-2">
                          <button className="flex items-center space-x-2 text-green-600 hover:text-green-800">
                            <Download className="h-4 w-4" />
                            <span>Download PDF</span>
                          </button>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b bg-green-50">
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Code</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Semester</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.exams.map((exam, examIndex) => (
                              <tr key={examIndex} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-green-600">
                                  {new Date(exam.date).toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </td>
                                <td className="py-3 px-4">{exam.subject}</td>
                                <td className="py-3 px-4 font-mono text-gray-600">{exam.code}</td>
                                <td className="py-3 px-4">{exam.time}</td>
                                <td className="py-3 px-4">
                                  <Badge variant="secondary" className="text-xs">
                                    {exam.semester}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Examination Guidelines */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Examination Guidelines</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Important guidelines and instructions for students appearing in examinations
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {examGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-900 font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-blue-100 leading-relaxed">{guideline}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Download Complete Datesheet
                </button>
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Download Admit Card
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Sessions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Previous Examination Sessions</h3>
              <p className="text-gray-600">Access datesheets from previous examination sessions</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {examSchedule.previous.map((session, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{session.session}</h4>
                        <p className="text-sm text-gray-600 mb-2">{session.type}</p>
                        <p className="text-xs text-gray-500">
                          {formatDate(session.startDate)} - {formatDate(session.endDate)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(session.status)}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(session.status)}
                            <span className="capitalize">{session.status}</span>
                          </div>
                        </Badge>
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
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

export default Datesheets
