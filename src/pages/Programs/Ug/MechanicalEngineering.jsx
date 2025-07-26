import Layout from '@/components/Programs/Layout'
import React from 'react'

const MechanicalEngineering = () => {
    const eligibilityCriteria = [
        {
            id: 1,
            title: "10+2 Examination Route",
            description: "Standard academic pathway for B.Tech admission",
            requirements: [
                "Passed 10+2 examination with Physics and Mathematics as compulsory subjects",
                "One of the following subjects: Chemistry/Biotechnology/Computer Science/Biology",
            ],
            icon: "📚",
            color: "from-blue-500 to-blue-600",
            borderColor: "border-blue-500",
        },
        {
            id: 2,
            title: "Diploma Route (Lateral Entry)",
            description: "For diploma holders seeking lateral entry to B.Tech",
            requirements: [
                "Passed Diploma in Engineering/Technology with 50% marks in aggregate (40% for SC/ST)",
                "Candidates who have only passed Diploma in any branch of Engineering/Technology are eligible",
                "Diploma from recognized institutions:",
                "• Punjab State Board of Technical Education, Chandigarh",
                "• Sant Longowal Institute of Engineering and Technology (SLIET)",
                "• Any other recognized State Board of Technical Education",
            ],
            icon: "🎓",
            color: "from-green-500 to-green-600",
            borderColor: "border-green-500",
        },
        {
            id: 3,
            title: "Certificate Course Route",
            description: "Alternative pathway through specialized certification",
            requirements: [
                "Completed two years certificate course from Sant Longowal Institute of Engineering and Technology, Longowal (SLIET)",
            ],
            icon: "📜",
            color: "from-purple-500 to-purple-600",
            borderColor: "border-purple-500",
        },
        {
            id: 4,
            title: "B.Sc Degree Route (Lateral Entry)",
            description: "For B.Sc degree holders seeking lateral entry to B.Tech",
            requirements: [
                "Passed B.Sc Degree in any discipline",
                "Minimum 50% marks in aggregate (40% for SC/ST candidates)",
            ],
            icon: "🔬",
            color: "from-orange-500 to-orange-600",
            borderColor: "border-orange-500",
        },
    ]
    const programTopics = [
        { title: "DESIGN ENGINEER", },
        { title: "PURCHASE AND QUALITY CONTROL EXECUTIVE", },
        { title: "ASSISTANT MECHANICAL ENGINEER", },
        { title: "MECHANICAL ENGINEER", },
    ]
    const programEducationalObjectives = [
        {
            id: "PEO1",
            title: "Technical Excellence",
            description:
                "Graduates will demonstrate strong technical competence in Mechanical Engineering principles, enabling them to solve complex problems and contribute to technological advancement.",
        },
        {
            id: "PEO2",
            title: "Professional Growth",
            description:
                "Graduates will pursue successful careers in industry, academia, or entrepreneurship, demonstrating leadership, teamwork, and effective communication skills.",
        },
        {
            id: "PEO3",
            title: "Lifelong Learning",
            description:
                "Graduates will engage in continuous learning and professional development to adapt to evolving technologies and maintain relevance in their chosen career paths.",
        },

    ]
    const programOutcomes = [
        {
            id: "PO1",
            title: "Engineering Knowledge",
            description:
                "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
        },
        {
            id: "PO2",
            title: "Problem Analysis",
            description:
                "Identify, formulate, research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.",
        },
        {
            id: "PO3",
            title: "Design/Development of Solutions",
            description:
                "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations.",
        },
        {
            id: "PO4",
            title: "Conduct Investigations",
            description:
                "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
        },
        {
            id: "PO5",
            title: "Modern Tool Usage",
            description:
                "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
        },
        {
            id: "PO6",
            title: "The Engineer and Society",
            description:
                "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.",
        },
        {
            id: "PO7",
            title: "Environment and Sustainability",
            description:
                "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development.",
        },
        {
            id: "PO8",
            title: "Ethics",
            description:
                "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.",
        },
        {
            id: "PO9",
            title: "Individual and Team Work",
            description:
                "Function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings.",
        },
        {
            id: "PO10",
            title: "Communication",
            description:
                "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.",
        },
        {
            id: "PO11",
            title: "Project Management and Finance",
            description:
                "Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and as a leader, to manage projects and in multidisciplinary environments.",
        },
        {
            id: "PO12",
            title: "Life-long Learning",
            description:
                "Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
        },
    ]
    const programSpecificOutcomes = [
        {
            id: "PSO1",
            title: "Professional Skills",
            description:
                "Ability to have the scientific knowledge and working of electronic equipment/systems guided by practical experience and theoretical fundamentals knowledge of Electronics & Communication Engineering.",
        },
        {
            id: "PSO2",
            title: "Domain Knowledge",
            description:
                "Ability to provide solutions to real-world problems in the field of Electronics & Communication Engineering by applying knowledge of mathematics, science, electronics, embedded & communication systems.",
        },
        {
            id: "PSO3",
            title: "Innovation and Design",
            description:
                "Ability to innovate thinking and ability to design and/or improve products market systems for the society and industry for better education, human safety and reduced cost.",
        },

        {
            id: "PSO4",
            title: "Modern Technologies",
            description:
                "Ability to get profound knowledge of modern technologies, ECE tools and to acquire sufficient skills to innovate manufacturing solutions in engineering problems.",
        },

    ]
    const programHighlights = [
        "Learn by doing: Hands-on learning through state-of-the-art software and projects",
        "Industry Integration: Regular guest lectures and workshops by industry experts",
        "Research Opportunities: Engage in cutting-edge research projects with faculty guidance",
        "Internship Programs: Mandatory internships with leading tech companies and startups",
        "Global Exposure: International collaborations and exchange programs with partner universities",
        "Career Support: Dedicated placement cell with 95%+ placement record in top companies",
        "Innovation Labs: Access to specialized labs for AI, ML, IoT, and emerging technologies",
        "Entrepreneurship Support: Incubation center support for student startup initiatives"
    ]



    const laboratories = [
        {
            name: "Kinematics and Dynamics of Machine Laboratory",
            description:
                "Advanced lab equipped with modern mechanisms and experimental setups for analyzing motion, forces, and dynamics in mechanical systems.",
            image: "/placeholder.svg?height=250&width=350&text=Software+Lab",
        },
        {
            name: "Fluid Mechanics Laboratory",
            description: "Well-equipped lab designed for studying fluid behavior, flow dynamics, and hydraulic systems through hands-on experiments and models.", image: "/placeholder.svg?height=250&width=350&text=Network+Lab",
        },
        {
            name: "Heat and Mass Transfer Laboratory",
            description:"Modern lab featuring experimental setups to study conduction, convection, radiation, and diffusion in thermal and mass transfer processes.",
            image: "/placeholder.svg?height=250&width=350&text=AI+ML+Lab",
        }
    ]

    return (
        <>

            <Layout
                laboratories={laboratories}
                programHighlights={programHighlights}
                programEducationalObjectives={programEducationalObjectives}
                programOutcomes={programOutcomes}
                programSpecificOutcomes={programSpecificOutcomes}
                programTopics={programTopics}
                eligibilityCriteria={eligibilityCriteria}
                fee={"45,000/-INR Per Semester"}
                courseName={"Mechanical Engineering"}
                overview={"The Mechanical Engineering program is one of the SVIET flagship programs which is centred on the understanding of the mechanics, dynamics and structural analysis of mechanical systems. The Faculty of Engineering offers a four year Bachelors degree in Mechanical Engineering, a program that is designed to equip every student with the fundamental of mechanics on various levels. The department has adopted a unique approach to the scope of this program, which provides the students with a comprehensive understanding of core mechanical principles such thermodynamics, material science, structural analysis and electricity. The study is made possible through the use of effective tools such as Computer Aided Design (CAD) and Computer Aided Manufacturing (CAM) amongst others."}
                duration={4}
                affiliation={"Affiliated to IKGPTU, Jalandhar Approved by AICTE"}
                syllabusLink="https://ptu.ac.in/wp-content/uploads/2021/12/BTech-ME-2021.pdf"
                degree={"B.Tech Mechanical Engineering"}
            />
        </>
    )
}

export default MechanicalEngineering