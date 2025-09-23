"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { FileText, Download, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const assignmentsData = {
  ug: [
    {
      program: "BCA",
      assignments: [
        {
          subject: "Programming in C",
          code: "BCA102",
          semester: "Semester 1",
          type: "Assignment",
          title: "Basic Programming Constructs",
          description: "Implement basic programming constructs including loops, conditionals, and functions",
          dueDate: "2024-02-15",
          status: "active",
          maxMarks: 20,
          submissionFormat: "Source Code + Report",
        },
        {
          subject: "Data Structures",
          code: "BCA201",
          semester: "Semester 2",
          type: "Practical",
          title: "Implementation of Stack and Queue",
          description: "Implement stack and queue data structures with all basic operations",
          dueDate: "2024-02-20",
          status: "active",
          maxMarks: 25,
          submissionFormat: "Code + Demo",
        },
        {
          subject: "Database Management Systems",
          code: "BCA204",
          semester: "Semester 2",
          type: "Assignment",
          title: "Database Design Project",
          description: "Design and implement a complete database system for a library management system",
          dueDate: "2024-01-30",
          status: "completed",
          maxMarks: 30,
          submissionFormat: "ER Diagram + SQL Scripts + Report",
        },
      ],
    },
    {
      program: "CSE",
      assignments: [
        {
          subject: "Data Structures and Algorithms",
          code: "CSE203",
          semester: "Semester 2",
          type: "Practical",
          title: "Sorting Algorithm Analysis",
          description: "Implement and analyze time complexity of various sorting algorithms",
          dueDate: "2024-02-25",
          status: "active",
          maxMarks: 25,
          submissionFormat: "Code + Analysis Report",
        },
      ],
    },
  ],
  pg: [
    {
      program: "MCA",
      assignments: [
        {
          subject: "Advanced Programming",
          code: "MCA101",
          semester: "Semester 1",
          type: "Assignment",
          title: "Design Pattern Implementation",
          description: "Implement at least 5 design patterns with real-world examples",
          dueDate: "2024-02-28",
          status: "active",
          maxMarks: 35,
          submissionFormat: "Source Code + Documentation",
        },
        {
          subject: "Computer System Architecture",
          code: "MCA102",
          semester: "Semester 1",
          type: "Practical",
          title: "Processor Simulation",
          description: "Simulate a basic processor with instruction set architecture",
          dueDate: "2024-03-05",
          status: "upcoming",
          maxMarks: 40,
          submissionFormat: "Simulation Code + Report",
        },
      ],
    },
  ],
}

const practicalLabs = [
  {
    name: "Computer Programming Lab",
    code: "LAB101",
    programs: ["BCA", "CSE"],
    experiments: [
      "Basic I/O Operations",
      "Control Structures",
      "Functions and Recursion",
      "Arrays and Strings",
      "Pointers and Dynamic Memory",
      "File Handling",
      "Data Structures Implementation",
    ],
  },
  {
    name: "Database Lab",
    code: "LAB201",
    programs: ["BCA", "MCA"],
    experiments: [
      "DDL and DML Commands",
      "Joins and Subqueries",
      "Views and Indexes",
      "Stored Procedures",
      "Triggers",
      "Database Connectivity",
    ],
  },
  {
    name: "Web Technology Lab",
    code: "LAB301",
    programs: ["BCA", "CSE", "MCA"],
    experiments: [
      "HTML and CSS Basics",
      "JavaScript Programming",
      "Form Validation",
      "AJAX Implementation",
      "PHP/JSP Programming",
      "Database Integration",
    ],
  },
]

const AssignmentsPracticals = () => {
  const [activeTab, setActiveTab] = useState("assignments")
  const [selectedProgram, setSelectedProgram] = useState("all")

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "upcoming":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <AlertCircle className="h-4 w-4" />
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "upcoming":
        return <Clock className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <>
      <Helmet>
        <title>Assignments & Practicals - SVIET</title>
        <meta
          name="description"
          content="Access current assignments, practical exercises, and lab manuals for all programs at SVIET. Download assignment sheets and submission guidelines."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Assignments & Practicals</h1>
              <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Stay updated with current assignments, practical exercises, and lab work. Access detailed instructions,
                submission guidelines, and due dates for all your coursework.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-6 md:py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-green-600">15</div>
                <div className="text-xs md:text-sm text-gray-600">Active Assignments</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-blue-600">8</div>
                <div className="text-xs md:text-sm text-gray-600">Practical Labs</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-yellow-600">5</div>
                <div className="text-xs md:text-sm text-gray-600">Upcoming Deadlines</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold text-purple-600">92%</div>
                <div className="text-xs md:text-sm text-gray-600">Submission Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16" id="assignments">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6 md:mb-8">
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
                <TabsTrigger value="practicals">Practical Labs</TabsTrigger>
              </TabsList>

              <TabsContent value="assignments" className="space-y-6 md:space-y-8">
                <div className="flex justify-center mb-6">
                  <Tabs defaultValue="ug" className="w-full max-w-md">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="ug">Undergraduate</TabsTrigger>
                      <TabsTrigger value="pg">Postgraduate</TabsTrigger>
                    </TabsList>

                    <TabsContent value="ug" className="mt-6 md:mt-8">
                      {assignmentsData.ug.map((program, programIndex) => (
                        <div key={programIndex} className="space-y-4 md:space-y-6">
                          <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{program.program}</h3>
                            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
                          </div>

                          <div className="grid gap-4 md:gap-6">
                            {program.assignments.map((assignment, assignmentIndex) => (
                              <Card key={assignmentIndex} className="shadow-lg">
                                <CardContent className="p-4 md:p-6">
                                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                                    <div className="flex-1">
                                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                                        <h4 className="text-lg md:text-xl font-semibold text-blue-900">
                                          {assignment.title}
                                        </h4>
                                        <Badge className={getStatusColor(assignment.status)}>
                                          <div className="flex items-center space-x-1">
                                            {getStatusIcon(assignment.status)}
                                            <span className="capitalize text-xs">{assignment.status}</span>
                                          </div>
                                        </Badge>
                                      </div>
                                      <p className="text-gray-600 mb-2 text-sm md:text-base">
                                        {assignment.subject} ({assignment.code})
                                      </p>
                                      <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                                        {assignment.description}
                                      </p>
                                    </div>
                                    <Badge variant="outline" className="self-start lg:ml-4">
                                      {assignment.type}
                                    </Badge>
                                  </div>

                                  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4">
                                    <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                                      <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                                      <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                                      <FileText className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                                      <span>Max Marks: {assignment.maxMarks}</span>
                                    </div>
                                    <div className="text-xs md:text-sm text-gray-600">
                                      <span className="font-medium">Format:</span> {assignment.submissionFormat}
                                    </div>
                                  </div>

                                  <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
                                    <button className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 text-sm">
                                      <Download className="h-4 w-4" />
                                      <span>Download Instructions</span>
                                    </button>
                                    {assignment.status === "active" && (
                                      <button className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-800 text-sm">
                                        <FileText className="h-4 w-4" />
                                        <span>Submit Assignment</span>
                                      </button>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="pg" className="mt-6 md:mt-8">
                      {assignmentsData.pg.map((program, programIndex) => (
                        <div key={programIndex} className="space-y-4 md:space-y-6">
                          <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{program.program}</h3>
                            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
                          </div>

                          <div className="grid gap-4 md:gap-6">
                            {program.assignments.map((assignment, assignmentIndex) => (
                              <Card key={assignmentIndex} className="shadow-lg">
                                <CardContent className="p-4 md:p-6">
                                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                                    <div className="flex-1">
                                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                                        <h4 className="text-lg md:text-xl font-semibold text-blue-900">
                                          {assignment.title}
                                        </h4>
                                        <Badge className={getStatusColor(assignment.status)}>
                                          <div className="flex items-center space-x-1">
                                            {getStatusIcon(assignment.status)}
                                            <span className="capitalize text-xs">{assignment.status}</span>
                                          </div>
                                        </Badge>
                                      </div>
                                      <p className="text-gray-600 mb-2 text-sm md:text-base">
                                        {assignment.subject} ({assignment.code})
                                      </p>
                                      <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                                        {assignment.description}
                                      </p>
                                    </div>
                                    <Badge variant="outline" className="self-start lg:ml-4">
                                      {assignment.type}
                                    </Badge>
                                  </div>

                                  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4">
                                    <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                                      <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                                      <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                                      <FileText className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                                      <span>Max Marks: {assignment.maxMarks}</span>
                                    </div>
                                    <div className="text-xs md:text-sm text-gray-600">
                                      <span className="font-medium">Format:</span> {assignment.submissionFormat}
                                    </div>
                                  </div>

                                  <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
                                    <button className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 text-sm">
                                      <Download className="h-4 w-4" />
                                      <span>Download Instructions</span>
                                    </button>
                                    {assignment.status === "active" && (
                                      <button className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-800 text-sm">
                                        <FileText className="h-4 w-4" />
                                        <span>Submit Assignment</span>
                                      </button>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>

              <TabsContent value="practicals" className="space-y-6 md:space-y-8">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">Practical Laboratory Sessions</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Hands-on laboratory sessions designed to provide practical experience and reinforce theoretical
                    concepts.
                  </p>
                </div>

                <div className="grid gap-4 md:gap-6">
                  {practicalLabs.map((lab, labIndex) => (
                    <Card key={labIndex} className="shadow-lg">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                          <div>
                            <h4 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">{lab.name}</h4>
                            <p className="text-gray-600 text-sm md:text-base">Lab Code: {lab.code}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {lab.programs.map((program, progIndex) => (
                              <Badge key={progIndex} variant="secondary" className="text-xs">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Experiments:</h5>
                          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                            {lab.experiments.map((experiment, expIndex) => (
                              <div key={expIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                <span>{experiment}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
                          <button className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 text-sm">
                            <Download className="h-4 w-4" />
                            <span>Download Lab Manual</span>
                          </button>
                          <button className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-800 text-sm">
                            <FileText className="h-4 w-4" />
                            <span>View Schedule</span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Submission Guidelines */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Submission Guidelines</h2>
              <p className="text-blue-200 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Important guidelines for assignment and practical submissions
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-yellow-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-blue-900" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Format Requirements</h3>
                <p className="text-blue-200 text-xs md:text-sm">
                  Follow specified format for code, documentation, and reports
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 md:h-8 md:w-8 text-blue-900" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Deadline Policy</h3>
                <p className="text-blue-200 text-xs md:text-sm">
                  Late submissions may result in grade penalties as per policy
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-900" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Quality Standards</h3>
                <p className="text-blue-200 text-xs md:text-sm">
                  Ensure originality, proper documentation, and code quality
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AssignmentsPracticals
