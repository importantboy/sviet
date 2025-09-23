"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { Download, Search, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

const notesData = {
  ug: [
    {
      program: "BCA",
      subjects: [
        {
          name: "Programming in C",
          code: "BCA102",
          semester: "Semester 1",
          notes: [
            { title: "Introduction to C Programming", type: "PDF", size: "2.5 MB", downloads: 1250 },
            { title: "Control Structures and Functions", type: "PDF", size: "3.1 MB", downloads: 980 },
            { title: "Arrays and Pointers", type: "PDF", size: "2.8 MB", downloads: 1100 },
            { title: "File Handling in C", type: "PDF", size: "1.9 MB", downloads: 750 },
          ],
        },
        {
          name: "Data Structures",
          code: "BCA201",
          semester: "Semester 2",
          notes: [
            { title: "Linear Data Structures", type: "PDF", size: "4.2 MB", downloads: 1400 },
            { title: "Trees and Graphs", type: "PDF", size: "3.8 MB", downloads: 1200 },
            { title: "Sorting and Searching Algorithms", type: "PDF", size: "2.9 MB", downloads: 1050 },
            { title: "Hash Tables and Advanced DS", type: "PDF", size: "3.5 MB", downloads: 890 },
          ],
        },
        {
          name: "Database Management Systems",
          code: "BCA204",
          semester: "Semester 2",
          notes: [
            { title: "Introduction to DBMS", type: "PDF", size: "2.1 MB", downloads: 1300 },
            { title: "SQL Fundamentals", type: "PDF", size: "3.4 MB", downloads: 1500 },
            { title: "Normalization and ER Modeling", type: "PDF", size: "2.7 MB", downloads: 1150 },
            { title: "Transaction Management", type: "PDF", size: "2.3 MB", downloads: 820 },
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
          notes: [
            { title: "Algorithm Analysis", type: "PDF", size: "3.2 MB", downloads: 1600 },
            { title: "Dynamic Programming", type: "PDF", size: "2.8 MB", downloads: 1350 },
            { title: "Graph Algorithms", type: "PDF", size: "4.1 MB", downloads: 1200 },
            { title: "Advanced Data Structures", type: "PDF", size: "3.7 MB", downloads: 950 },
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
          notes: [
            { title: "Object-Oriented Programming Concepts", type: "PDF", size: "4.5 MB", downloads: 800 },
            { title: "Design Patterns", type: "PDF", size: "3.9 MB", downloads: 650 },
            { title: "Advanced Java Programming", type: "PDF", size: "5.2 MB", downloads: 720 },
            { title: "Framework Development", type: "PDF", size: "4.1 MB", downloads: 580 },
          ],
        },
        {
          name: "Computer System Architecture",
          code: "MCA102",
          semester: "Semester 1",
          notes: [
            { title: "Processor Architecture", type: "PDF", size: "3.8 MB", downloads: 690 },
            { title: "Memory Management", type: "PDF", size: "3.2 MB", downloads: 620 },
            { title: "I/O Systems", type: "PDF", size: "2.9 MB", downloads: 550 },
            { title: "Parallel Processing", type: "PDF", size: "4.3 MB", downloads: 480 },
          ],
        },
      ],
    },
  ],
}

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("ug")
  const [selectedProgram, setSelectedProgram] = useState("all")
  const syllabusData = notesData // Declare the variable here

  const filteredData = syllabusData[activeTab].filter((program) => {
    if (selectedProgram !== "all" && program.program !== selectedProgram) return false
    return (
      program.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.subjects.some((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

  const programs = notesData[activeTab].map((p) => p.program)

  return (
    <>
      <Helmet>
        <title>Notes - SVIET</title>
        <meta
          name="description"
          content="Access comprehensive study notes for all subjects across undergraduate and postgraduate programs at SVIET. Download PDF notes and study materials."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Study Notes</h1>
              <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Access comprehensive study notes and materials for all subjects. Download high-quality PDF notes
                prepared by experienced faculty members to enhance your learning experience.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-6 md:py-8 bg-white border-b" id="notes">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search subjects or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-white text-sm md:text-base"
              >
                <option value="all">All Programs</option>
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Notes Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6 md:mb-8">
                <TabsTrigger value="ug">Undergraduate</TabsTrigger>
                <TabsTrigger value="pg">Postgraduate</TabsTrigger>
              </TabsList>

              <TabsContent value="ug" className="space-y-6 md:space-y-8">
                {notesData.ug.map((program, programIndex) => (
                  <div key={programIndex} className="space-y-4 md:space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{program.program}</h3>
                      <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
                    </div>

                    {program.subjects.map((subject, subjectIndex) => (
                      <Card key={subjectIndex} className="shadow-lg">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                            <div>
                              <h4 className="text-lg md:text-xl font-semibold text-blue-900">{subject.name}</h4>
                              <p className="text-gray-600 text-sm md:text-base">
                                {subject.code} • {subject.semester}
                              </p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800 self-start sm:self-center">
                              {subject.notes.length} Notes
                            </Badge>
                          </div>

                          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                            {subject.notes.map((note, noteIndex) => (
                              <div
                                key={noteIndex}
                                className="border rounded-lg p-3 md:p-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <h5 className="font-medium text-gray-900 flex-1 text-sm md:text-base leading-tight">
                                    {note.title}
                                  </h5>
                                  <Badge variant="secondary" className="ml-2 text-xs flex-shrink-0">
                                    {note.type}
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3">
                                  <span>{note.size}</span>
                                  <span>{note.downloads} downloads</span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                  <button className="flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 text-xs md:text-sm">
                                    <Eye className="h-3 w-3 md:h-4 md:w-4" />
                                    <span>Preview</span>
                                  </button>
                                  <button className="flex items-center justify-center space-x-1 text-green-600 hover:text-green-800 text-xs md:text-sm">
                                    <Download className="h-3 w-3 md:h-4 md:w-4" />
                                    <span>Download</span>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pg" className="space-y-6 md:space-y-8">
                {notesData.pg.map((program, programIndex) => (
                  <div key={programIndex} className="space-y-4 md:space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{program.program}</h3>
                      <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
                    </div>

                    {program.subjects.map((subject, subjectIndex) => (
                      <Card key={subjectIndex} className="shadow-lg">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                            <div>
                              <h4 className="text-lg md:text-xl font-semibold text-blue-900">{subject.name}</h4>
                              <p className="text-gray-600 text-sm md:text-base">
                                {subject.code} • {subject.semester}
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-800 self-start sm:self-center">
                              {subject.notes.length} Notes
                            </Badge>
                          </div>

                          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                            {subject.notes.map((note, noteIndex) => (
                              <div
                                key={noteIndex}
                                className="border rounded-lg p-3 md:p-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <h5 className="font-medium text-gray-900 flex-1 text-sm md:text-base leading-tight">
                                    {note.title}
                                  </h5>
                                  <Badge variant="secondary" className="ml-2 text-xs flex-shrink-0">
                                    {note.type}
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3">
                                  <span>{note.size}</span>
                                  <span>{note.downloads} downloads</span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                  <button className="flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 text-xs md:text-sm">
                                    <Eye className="h-3 w-3 md:h-4 md:w-4" />
                                    <span>Preview</span>
                                  </button>
                                  <button className="flex items-center justify-center space-x-1 text-green-600 hover:text-green-800 text-xs md:text-sm">
                                    <Download className="h-3 w-3 md:h-4 md:w-4" />
                                    <span>Download</span>
                                  </button>
                                </div>
                              </div>
                            ))}
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

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Study Resources Statistics</h2>
              <p className="text-blue-200 text-sm md:text-base">Comprehensive collection of study materials</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-200 text-xs md:text-base">Study Notes</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-blue-200 text-xs md:text-base">Subjects Covered</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2">25K+</div>
                <div className="text-blue-200 text-xs md:text-base">Downloads</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-blue-200 text-xs md:text-base">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Notes
