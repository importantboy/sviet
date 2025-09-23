"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { Download, Search, Calendar, BookOpen, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

const pyqData = {
  ug: [
    {
      program: "BCA",
      subjects: [
        {
          name: "Programming in C",
          code: "BCA102",
          semester: "Semester 1",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2022", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2022", session: "Summer", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2021", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
          ],
        },
        {
          name: "Data Structures",
          code: "BCA201",
          semester: "Semester 2",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2022", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2022", session: "Summer", type: "End Semester", marks: 70, duration: "3 hours" },
          ],
        },
        {
          name: "Database Management Systems",
          code: "BCA204",
          semester: "Semester 2",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2022", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
          ],
        },
        {
          name: "Web Technologies",
          code: "BCA301",
          semester: "Semester 3",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 70, duration: "3 hours" },
            { year: "2022", session: "Winter", type: "End Semester", marks: 70, duration: "3 hours" },
          ],
        },
      ],
    },
    {
      program: "CSE",
      subjects: [
        {
          name: "Data Structures and Algorithms",
          code: "CSE203",
          semester: "Semester 2",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 100, duration: "3 hours" },
            { year: "2022", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
          ],
        },
        {
          name: "Computer Networks",
          code: "CSE304",
          semester: "Semester 3",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 100, duration: "3 hours" },
          ],
        },
      ],
    },
  ],
  pg: [
    {
      program: "MCA",
      subjects: [
        {
          name: "Advanced Programming",
          code: "MCA101",
          semester: "Semester 1",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 100, duration: "3 hours" },
            { year: "2022", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
          ],
        },
        {
          name: "Computer System Architecture",
          code: "MCA102",
          semester: "Semester 1",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
            { year: "2022", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
          ],
        },
      ],
    },
    {
      program: "MBA",
      subjects: [
        {
          name: "Principles of Management",
          code: "MBA101",
          semester: "Semester 1",
          papers: [
            { year: "2023", session: "Winter", type: "End Semester", marks: 100, duration: "3 hours" },
            { year: "2023", session: "Summer", type: "End Semester", marks: 100, duration: "3 hours" },
          ],
        },
      ],
    },
  ],
}

const examTips = [
  {
    title: "Time Management",
    description: "Allocate time wisely for each section and question",
    icon: Calendar,
  },
  {
    title: "Pattern Analysis",
    description: "Study previous years to understand question patterns",
    icon: Search,
  },
  {
    title: "Practice Regularly",
    description: "Solve PYQs regularly to improve speed and accuracy",
    icon: BookOpen,
  },
  {
    title: "Focus on Important Topics",
    description: "Identify frequently asked topics from PYQ analysis",
    icon: Filter,
  },
]

const PYQs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("ug")
  const [selectedYear, setSelectedYear] = useState("all")

  const years = ["2023", "2022", "2021", "2020"]

  const filteredData = pyqData[activeTab].filter(
    (program) =>
      program.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.subjects.some((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <>
      <Helmet>
        <title>Previous Year Questions (PYQs) - SVIET</title>
        <meta
          name="description"
          content="Access previous year question papers for all programs at SVIET. Download PYQs to prepare effectively for your examinations."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
                Previous Year Questions (PYQs)
              </h1>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                Access comprehensive collection of previous year question papers to enhance your exam preparation.
                Download PYQs for all subjects and analyze question patterns effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-6 md:py-8 bg-white border-b" id="pyqs">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search subjects or programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-white min-w-[120px]"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 md:py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Question Papers</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-green-600">25+</div>
                <div className="text-sm text-gray-600">Subjects Covered</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-600">Years Archive</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-orange-600">15K+</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
            </div>
          </div>
        </section>

        {/* PYQ Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="ug">Undergraduate</TabsTrigger>
                <TabsTrigger value="pg">Postgraduate</TabsTrigger>
              </TabsList>

              <TabsContent value="ug" className="space-y-8">
                {filteredData.map((program, programIndex) => (
                  <div key={programIndex} className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{program.program}</h3>
                      <div className="w-16 md:w-20 h-1 bg-yellow-400 mx-auto"></div>
                    </div>

                    {program.subjects.map((subject, subjectIndex) => (
                      <Card key={subjectIndex} className="shadow-lg">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <div>
                              <h4 className="text-lg md:text-xl font-semibold text-blue-900">{subject.name}</h4>
                              <p className="text-gray-600 text-sm md:text-base">
                                {subject.code} • {subject.semester}
                              </p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800 self-start md:self-center">
                              {subject.papers.length} Papers
                            </Badge>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b bg-gray-50">
                                  <th className="text-left py-3 px-2 md:px-4 font-medium text-gray-700">Year</th>
                                  <th className="text-left py-3 px-2 md:px-4 font-medium text-gray-700">Session</th>
                                  <th className="text-left py-3 px-2 md:px-4 font-medium text-gray-700">Type</th>
                                  <th className="text-center py-3 px-2 md:px-4 font-medium text-gray-700">Marks</th>
                                  <th className="text-center py-3 px-2 md:px-4 font-medium text-gray-700">Duration</th>
                                  <th className="text-center py-3 px-2 md:px-4 font-medium text-gray-700">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {subject.papers
                                  .filter((paper) => selectedYear === "all" || paper.year === selectedYear)
                                  .map((paper, paperIndex) => (
                                    <tr key={paperIndex} className="border-b border-gray-200 hover:bg-gray-50">
                                      <td className="py-3 px-2 md:px-4 font-medium text-blue-600">{paper.year}</td>
                                      <td className="py-3 px-2 md:px-4">{paper.session}</td>
                                      <td className="py-3 px-2 md:px-4">
                                        <Badge variant="secondary" className="text-xs">
                                          {paper.type}
                                        </Badge>
                                      </td>
                                      <td className="py-3 px-2 md:px-4 text-center">{paper.marks}</td>
                                      <td className="py-3 px-2 md:px-4 text-center">{paper.duration}</td>
                                      <td className="py-3 px-2 md:px-4 text-center">
                                        <button className="flex items-center space-x-1 text-green-600 hover:text-green-800 mx-auto">
                                          <Download className="h-4 w-4" />
                                          <span className="hidden md:inline">Download</span>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pg" className="space-y-8">
                {filteredData.map((program, programIndex) => (
                  <div key={programIndex} className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{program.program}</h3>
                      <div className="w-16 md:w-20 h-1 bg-yellow-400 mx-auto"></div>
                    </div>

                    {program.subjects.map((subject, subjectIndex) => (
                      <Card key={subjectIndex} className="shadow-lg">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <div>
                              <h4 className="text-lg md:text-xl font-semibold text-blue-900">{subject.name}</h4>
                              <p className="text-gray-600 text-sm md:text-base">
                                {subject.code} • {subject.semester}
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-800 self-start md:self-center">
                              {subject.papers.length} Papers
                            </Badge>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b bg-gray-50">
                                  <th className="text-left py-3 px-2 md:px-4 font-medium text-gray-700">Year</th>
                                  <th className="text-left py-3 px-2 md:px-4 font-medium text-gray-700">Session</th>
                                  <th className="text-left py-3 px-2 md:px-4 font-medium text-gray-700">Type</th>
                                  <th className="text-center py-3 px-2 md:px-4 font-medium text-gray-700">Marks</th>
                                  <th className="text-center py-3 px-2 md:px-4 font-medium text-gray-700">Duration</th>
                                  <th className="text-center py-3 px-2 md:px-4 font-medium text-gray-700">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {subject.papers
                                  .filter((paper) => selectedYear === "all" || paper.year === selectedYear)
                                  .map((paper, paperIndex) => (
                                    <tr key={paperIndex} className="border-b border-gray-200 hover:bg-gray-50">
                                      <td className="py-3 px-2 md:px-4 font-medium text-green-600">{paper.year}</td>
                                      <td className="py-3 px-2 md:px-4">{paper.session}</td>
                                      <td className="py-3 px-2 md:px-4">
                                        <Badge variant="secondary" className="text-xs">
                                          {paper.type}
                                        </Badge>
                                      </td>
                                      <td className="py-3 px-2 md:px-4 text-center">{paper.marks}</td>
                                      <td className="py-3 px-2 md:px-4 text-center">{paper.duration}</td>
                                      <td className="py-3 px-2 md:px-4 text-center">
                                        <button className="flex items-center space-x-1 text-green-600 hover:text-green-800 mx-auto">
                                          <Download className="h-4 w-4" />
                                          <span className="hidden md:inline">Download</span>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Exam Preparation Tips */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Exam Preparation Tips</h2>
              <p className="text-blue-200 max-w-2xl mx-auto text-sm md:text-base">
                Make the most of PYQs with these effective preparation strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {examTips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-yellow-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-900" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{tip.title}</h3>
                    <p className="text-blue-200 text-sm">{tip.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <button className="bg-yellow-400 text-blue-900 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Download All PYQs
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PYQs
