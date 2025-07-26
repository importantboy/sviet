import Layout from '@/components/Programs/Layout'
import React from 'react'

const Mtech = () => {
    const eligibilityCriteria = [

        {
            id: 1,
            title: "Postgraduate Admission (ME/M.Tech)",
            description: "Eligibility criteria for admission into ME/M.Tech programs",
            requirements: [
                "Passed BE/B.Tech or equivalent examination",
                "Minimum 50% marks in the qualifying exam (45% for SC/ST/SEBC candidates)"
            ],
            icon: "🎓",
            color: "from-orange-500 to-orange-600",
            borderColor: "border-orange-500",
        },
    ]
    const programTopics = [
        { title: "System Designers", },
        { title: "Software Developers", },
        { title: "Hardware Engineers", },
        { title: "System Analysts", },
    ]
   
    const programOutcomes = [
        {
            id: "PO1",
            title: "Computing Foundations",
            description:
                "An understanding of the theoretical foundations and the limits of computing.",
        },
        {
            id: "PO2",
            title: "Adaptation of Techniques",
            description:
                "An ability to adapt existing models, techniques, algorithms, and data structures for efficiently solving problems.",
        },
        {
            id: "PO3",
            title: "Innovative System Development",
            description:
                "An ability to design, develop, and evaluate new computer-based systems for novel applications which meet the desired needs of industry and society.",
        },
        {
            id: "PO4",
            title: "Advanced Computing Tools",
            description:
                "Understanding and ability to use advanced computing techniques and tools.",
        },
        {
            id: "PO5",
            title: "Research Competency",
            description:
                "An ability to undertake original research at the cutting edge of computer science and its related areas.",
        },
        {
            id: "PO6",
            title: "Teamwork and Collaboration",
            description:
                "An ability to function effectively individually or as a part of a team to accomplish a stated goal.",
        },
        {
            id: "PO7",
            title: "Professional Ethics",
            description:
                "An understanding of professional and ethical responsibility.",
        },
        {
            id: "PO8",
            title: "Effective Communication",
            description:
                "An ability to communicate effectively with a wide range of audiences.",
        },
        {
            id: "PO9",
            title: "Lifelong Learning",
            description:
                "An ability to learn independently and engage in lifelong learning.",
        },
        {
            id: "PO10",
            title: "Societal and Environmental Impact",
            description:
                "An understanding of the impact of IT-related solutions in economic, social, and environmental contexts.",
        },
    ];

    
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
            name: "C Programming Lab",
            description:
                "State-of-the-art lab with latest c programming language tools and IDEs for programming.",
            image: "/placeholder.svg?height=250&width=350&text=Software+Lab",
        },
        {
            name: "Networking Lab",
            description:
                "Advanced networking lab with Cisco equipment for hands-on experience in network configuration and management.",
            image: "/placeholder.svg?height=250&width=350&text=Network+Lab",
        },
        {
            name: "Python",
            description:
                "Specialized laboratory equipped with high-performance computing systems for Pyhton.",
            image: "/placeholder.svg?height=250&width=350&text=AI+ML+Lab",
        }
    ]

    return (
        <>

            <Layout
                laboratories={laboratories}
                programHighlights={programHighlights}
                programOutcomes={programOutcomes}
                programTopics={programTopics}
                eligibilityCriteria={eligibilityCriteria}
                fee={"37,500/- INR Per Semester"}
                isPg={true}
                courseName={"M.Tech Computer Science Engineering"}
                overview={"With the growing scope of digital technologies and the significance of computer systems in the world today, the demand for experts who are skilled in the ability to develop and utilise digital systems has also grown. The Department of Computer Science and Engineering has set benchmarks in equipping students with the vital skill sets required to navigate the modern era of digitalisation. With the significance of technology in today’s world, Parul University’s 2 year M.Tech program in Computer Engineering is designed in such a manner which provides students with the most specialized understanding of the advanced elements of computing. The scope of study includes Data Science, Artificial Intelligence, Internet of things, Cloud Computing and Security and Networking. The students who pursue this program are actively engaged in cutting edge research in the various aspects of computing to ensure regular innovation which contributes to the sustainable development of India and the World."}
                duration={2}
                affiliation={"Affiliated to IKGPTU, Jalandhar Approved by AICTE"}
                syllabusLink="https://ptu.ac.in/wp-content/uploads/2020/10/1-5-18%20M%20Tech%20CSE%20Batch%202018.pdf"
                degree={"M.Tech CSE"}
            />
        </>
    )
}

export default Mtech