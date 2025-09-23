"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { Download, FileText, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

const syllabusData = {
  ug: [
    {
      program: "BCA",
      fullName: "Bachelor of Computer Applications",
      semesters: [
        {
          semester: "Semester 1",
          subjects: [
            { name: "Computer Fundamentals", code: "BCA101", credits: 4 },
            { name: "Programming in C", code: "BCA102", credits: 4 },
            { name: "Mathematics-I", code: "BCA103", credits: 4 },
            { name: "English Communication", code: "BCA104", credits: 3 },
            { name: "Digital Electronics", code: "BCA105", credits: 3 },
          ],
        },
        {
          semester: "Semester 2",
          subjects: [
            { name: "Data Structures", code: "BCA201", credits: 4 },
            { name: "Object Oriented Programming", code: "BCA202", credits: 4 },
            { name: "Mathematics-II", code: "BCA203", credits: 4 },
            { name: "Database Management Systems", code: "BCA204", credits: 4 },
            { name: "Computer Organization", code: "BCA205", credits: 3 },
          ],
        },
        {
          semester: "Semester 3",
          subjects: [
            { name: "Web Technologies", code: "BCA301", credits: 4 },
            { name: "Software Engineering", code: "BCA302", credits: 4 },
            { name: "Operating Systems", code: "BCA303", credits: 4 },
            { name: "Computer Networks", code: "BCA304", credits: 4 },
            { name: "Statistics", code: "BCA305", credits: 3 },
          ],
        },
      ],
    },
    {
      program: "CSE",
      fullName: "Computer Science Engineering",
      semesters: [
        {
          semester: "Semester 1",
          subjects: [
            { name: "Engineering Mathematics-I", code: "CSE101", credits: 4 },
            { name: "Engineering Physics", code: "CSE102", credits: 4 },
            { name: "Programming for Problem Solving", code: "CSE103", credits: 4 },
            { name: "Engineering Graphics", code: "CSE104", credits: 3 },
            { name: "English for Communication", code: "CSE105", credits: 3 },
          ],
        },
        {
          semester: "Semester 2",
          subjects: [
            { name: "Engineering Mathematics-II", code: "CSE201", credits: 4 },
            { name: "Engineering Chemistry", code: "CSE202", credits: 4 },
            { name: "Data Structures and Algorithms", code: "CSE203", credits: 4 },
            { name: "Digital Logic Design", code: "CSE204", credits: 4 },
            { name: "Environmental Science", code: "CSE205", credits: 2 },
          ],
        },
      ],
    },
  ],
  pg: [
    {
      program: "MCA",
      fullName: "Master of Computer Applications",
      semesters: [
        {
          semester: "Semester 1",
          subjects: [
            { name: "Advanced Programming", code: "MCA101", credits: 4 },
            { name: "Computer System Architecture", code: "MCA102", credits: 4 },
            { name: "Database Systems", code: "MCA103", credits: 4 },
            { name: "Mathematical Foundation", code: "MCA104", credits: 4 },
            { name: "Software Engineering", code: "MCA105", credits: 3 },
          ],
        },
        {
          semester: "Semester 2",
          subjects: [
            { name: "Advanced Database Systems", code: "MCA201", credits: 4 },
            { name: "Computer Networks", code: "MCA202", credits: 4 },
            { name: "Web Technologies", code: "MCA203", credits: 4 },
            { name: "Operating Systems", code: "MCA204", credits: 4 },
            { name: "Research Methodology", code: "MCA205", credits: 3 },
          ],
        },
      ],
    },
    {
      program: "MBA",
      fullName: "Master of Business Administration",
      semesters: [
        {
          semester: "Semester 1",
          subjects: [
            { name: "Principles of Management", code: "MBA101", credits: 4 },
            { name: "Managerial Economics", code: "MBA102", credits: 4 },
            { name: "Accounting for Managers", code: "MBA103", credits: 4 },
            { name: "Organizational Behavior", code: "MBA104", credits: 4 },
            { name: "Business Communication", code: "MBA105", credits: 3 },
          ],
        },
      ],
    },
  ],
}

const Syllabus = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("ug")

  const filteredData = syllabusData[activeTab].filter(
    (program) =>
      program.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
      <Helmet>
        <title>Syllabus - SVIET</title>
        <meta
          name="description"
          content="Access comprehensive syllabus for all undergraduate and postgraduate programs at SVIET. Download subject-wise curriculum and course details."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Syllabus</h1>
              <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Access comprehensive syllabus and curriculum details for all our undergraduate and postgraduate
                programs. Stay updated with the latest course structure and subject requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-6 md:py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6 md:mb-8">
                <TabsTrigger value="ug">Undergraduate</TabsTrigger>
                <TabsTrigger value="pg">Postgraduate</TabsTrigger>
              </TabsList>

              <TabsContent value="ug" className="space-y-6 md:space-y-8">
                {filteredData.map((program, programIndex) => (
                  <Card key={programIndex} className="shadow-lg">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-blue-900">{program.program}</h3>
                          <p className="text-gray-600 text-sm md:text-base">{program.fullName}</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 self-start sm:self-center">
                          {program.semesters.length} Semesters
                        </Badge>
                      </div>

                      <div className="grid gap-4 md:gap-6">
                        {program.semesters.map((semester, semIndex) => (
                          <div key={semIndex} className="border rounded-lg p-3 md:p-4 bg-gray-50">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
                              <h4 className="text-base md:text-lg font-semibold text-blue-900">{semester.semester}</h4>
                              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 self-start sm:self-center">
                                <Download className="h-4 w-4" />
                                <span className="text-sm">Download</span>
                              </button>
                            </div>

                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 font-medium text-gray-700 min-w-[100px]">
                                      Subject Code
                                    </th>
                                    <th className="text-left py-2 font-medium text-gray-700">Subject Name</th>
                                    <th className="text-center py-2 font-medium text-gray-700 min-w-[60px]">Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semester.subjects.map((subject, subIndex) => (
                                    <tr key={subIndex} className="border-b border-gray-200">
                                      <td className="py-2 text-blue-600 font-mono text-xs md:text-sm">
                                        {subject.code}
                                      </td>
                                      <td className="py-2 text-xs md:text-sm">{subject.name}</td>
                                      <td className="py-2 text-center text-xs md:text-sm">{subject.credits}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="pg" className="space-y-6 md:space-y-8">
                {filteredData.map((program, programIndex) => (
                  <Card key={programIndex} className="shadow-lg">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-blue-900">{program.program}</h3>
                          <p className="text-gray-600 text-sm md:text-base">{program.fullName}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 self-start sm:self-center">
                          {program.semesters.length} Semesters
                        </Badge>
                      </div>

                      <div className="grid gap-4 md:gap-6">
                        {program.semesters.map((semester, semIndex) => (
                          <div key={semIndex} className="border rounded-lg p-3 md:p-4 bg-gray-50">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
                              <h4 className="text-base md:text-lg font-semibold text-blue-900">{semester.semester}</h4>
                              <button className="flex items-center space-x-2 text-green-600 hover:text-green-800 self-start sm:self-center">
                                <Download className="h-4 w-4" />
                                <span className="text-sm">Download</span>
                              </button>
                            </div>

                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 font-medium text-gray-700 min-w-[100px]">
                                      Subject Code
                                    </th>
                                    <th className="text-left py-2 font-medium text-gray-700">Subject Name</th>
                                    <th className="text-center py-2 font-medium text-gray-700 min-w-[60px]">Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semester.subjects.map((subject, subIndex) => (
                                    <tr key={subIndex} className="border-b border-gray-200">
                                      <td className="py-2 text-green-600 font-mono text-xs md:text-sm">
                                        {subject.code}
                                      </td>
                                      <td className="py-2 text-xs md:text-sm">{subject.name}</td>
                                      <td className="py-2 text-center text-xs md:text-sm">{subject.credits}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Complete Syllabus?</h2>
            <p className="text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Download complete syllabus documents for detailed course information, prerequisites, and learning
              outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-blue-900 px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2">
                <FileText className="h-4 md:h-5 w-4 md:w-5" />
                <span className="text-sm md:text-base">UG Syllabus PDF</span>
              </button>
              <button className="bg-white text-blue-900 px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <FileText className="h-4 md:h-5 w-4 md:w-5" />
                <span className="text-sm md:text-base">PG Syllabus PDF</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Syllabus
