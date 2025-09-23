import { Helmet } from "react-helmet"
import { BookOpen, Users, Award, Briefcase, GraduationCap, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ugPrograms = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    description:
      "Comprehensive program covering programming, database management, web development, and software engineering fundamentals.",
    highlights: ["Programming Languages", "Database Management", "Web Development", "Software Engineering"],
    icon: Code,
    href: "/computer-science-engineering",
  },
  {
    title: "Computer Science Engineering",
    duration: "4 Years",
    description:
      "Advanced engineering program focusing on computer systems, algorithms, artificial intelligence, and emerging technologies.",
    highlights: ["Data Structures", "AI & ML", "System Design", "Software Development"],
    icon: GraduationCap,
    href: "/computer-science-engineering",
  },
  {
    title: "Civil Engineering",
    duration: "4 Years",
    description:
      "Engineering program covering structural design, construction management, environmental engineering, and infrastructure development.",
    highlights: ["Structural Design", "Construction Management", "Environmental Engineering", "Infrastructure"],
    icon: Award,
    href: "/civil-engineering",
  },
  {
    title: "Mechanical Engineering",
    duration: "4 Years",
    description:
      "Comprehensive mechanical engineering program covering thermodynamics, manufacturing, design, and automation.",
    highlights: ["Thermodynamics", "Manufacturing", "Design Engineering", "Automation"],
    icon: Briefcase,
    href: "/mechanical-engineering",
  },
  {
    title: "Electrical Engineering",
    duration: "4 Years",
    description:
      "Electrical engineering program focusing on power systems, electronics, control systems, and renewable energy.",
    highlights: ["Power Systems", "Electronics", "Control Systems", "Renewable Energy"],
    icon: BookOpen,
    href: "/electrical-engineering",
  },
  {
    title: "Electronics & Communication Engineering",
    duration: "4 Years",
    description:
      "ECE program covering digital electronics, communication systems, embedded systems, and signal processing.",
    highlights: ["Digital Electronics", "Communication Systems", "Embedded Systems", "Signal Processing"],
    icon: Users,
    href: "/ece",
  },
]

const pgPrograms = [
  {
    title: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    description:
      "Advanced computer applications program with focus on software development, system analysis, and project management.",
    highlights: ["Advanced Programming", "System Analysis", "Project Management", "Research Methods"],
    icon: Code,
    href: "/mca",
  },
  {
    title: "Master of Technology (M.Tech)",
    duration: "2 Years",
    description: "Specialized M.Tech programs in various engineering disciplines with research and industry focus.",
    highlights: ["Research Methodology", "Advanced Engineering", "Industry Projects", "Thesis Work"],
    icon: GraduationCap,
    href: "/m-tech",
  },
  {
    title: "Master of Business Administration (MBA)",
    duration: "2 Years",
    description:
      "Comprehensive MBA program covering management principles, leadership, finance, and strategic planning.",
    highlights: ["Strategic Management", "Leadership", "Finance", "Marketing"],
    icon: Briefcase,
    href: "/business-administration",
  },
]

const admissionRequirements = [
  {
    level: "Undergraduate Programs",
    requirements: [
      "10+2 with minimum 50% marks",
      "Valid entrance exam score (JEE Main/State CET)",
      "English proficiency",
      "Medical fitness certificate",
    ],
  },
  {
    level: "Postgraduate Programs",
    requirements: [
      "Bachelor's degree with minimum 50% marks",
      "Valid GATE/CAT/MAT score (as applicable)",
      "Work experience (preferred for MBA)",
      "Statement of Purpose",
    ],
  },
]

const ProgramsOffered = () => {
  return (
    <>
      <Helmet>
        <title>Programs Offered - SVIET</title>
        <meta
          name="description"
          content="Explore comprehensive undergraduate and postgraduate programs offered at SVIET including Engineering, Computer Applications, and Management courses."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Programs Offered</h1>
              <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of undergraduate and postgraduate programs designed to prepare students
                for successful careers in technology, engineering, and management.
              </p>
            </div>
          </div>
        </section>

        {/* Undergraduate Programs */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Undergraduate Programs</Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Bachelor's Degree Programs
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Our undergraduate programs provide a strong foundation in core subjects while emphasizing practical
                skills and industry readiness.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {ugPrograms.map((program, index) => {
                const Icon = program.icon
                return (
                  <Card
                    key={index}
                    className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                          <Icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-blue-900 leading-tight">
                            {program.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-500">Duration: {program.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">{program.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <a href={program.href} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                          Learn More →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Postgraduate Programs */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <Badge className="bg-green-100 text-green-800 mb-4">Postgraduate Programs</Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Master's Degree Programs
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Advanced programs designed for specialized knowledge, research skills, and leadership development in
                your chosen field.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {pgPrograms.map((program, index) => {
                const Icon = program.icon
                return (
                  <Card
                    key={index}
                    className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                          <Icon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-blue-900 leading-tight">
                            {program.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-500">Duration: {program.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">{program.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <a href={program.href} className="text-green-600 hover:text-green-800 font-medium text-sm">
                          Learn More →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Admission Requirements</h2>
              <p className="text-blue-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                General admission requirements for our programs. Specific requirements may vary by program.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {admissionRequirements.map((req, index) => (
                <Card key={index} className="bg-white/10 border-white/20">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-4">{req.level}</h3>
                    <ul className="space-y-3">
                      {req.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-blue-100 text-sm md:text-base">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <a
                href="https://admission.sviet.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-blue-900 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block text-sm md:text-base"
              >
                Apply Online Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProgramsOffered
