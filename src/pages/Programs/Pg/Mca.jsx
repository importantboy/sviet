import Layout from '@/components/Programs/Layout'
import React from 'react'

const Mca = () => {
    const eligibilityCriteria = [

        {
            id: 1,
            title: "Postgraduate Admission (MCA)",
            description: "Eligibility criteria for admission into MCA programs",
            requirements: [
                "All those candidate who have any recognized Bachelor’s Degree of minimum 3 years duration in any discipline."
            ],
            icon: "🎓",
            color: "from-orange-500 to-orange-600",
            borderColor: "border-orange-500",
        },
    ]
    const programTopics = [
        { title: "Application Development", },
        { title: "Ethical Hacker", },
        { title: "Database Engineer", },
        { title: "Web Developer", },
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
            image: "/Programs/clab.jpeg",
        },
        {
            name: "Networking Lab",
            description:
                "Advanced networking lab with Cisco equipment for hands-on experience in network configuration and management.",
            image: "/Programs/network.jpeg  ",
        },
        {
            name: "Python",
            description:
                "Specialized laboratory equipped with high-performance computing systems for Pyhton.",
            image: "/Programs/python.jpeg",
        }
    ]
    return (
        <>

            <Layout
                heroSectionImage={"/Programs/btech.JPG"}
                overviewImg={"/Programs/btechcse.webp"}
                laboratories={laboratories}
                programHighlights={programHighlights}
                programOutcomes={programOutcomes}
                programTopics={programTopics}
                eligibilityCriteria={eligibilityCriteria}
                fee={"32,500/- INR Per Semester"}
                isPg={true}
                courseName={"Master’s in Computer Applications"}
                duration={2}
                overview={"Master of Computer Application is a postgraduate course that trains the students about the various aspects of computer programs, application software, computer architecture, operating systems and many more. The duration of the course is for a period of 2 years. This program is for candidates wanting to delve deeper into the world of computer application development with the help of learning a modern programming language. The program is a blend of both theoretical and practical knowledge. An MCA degree allows students to work with tools meant to develop better and faster applications.Our MCA program focuses on providing a sound theoretical background as well as good practical exposure to students in the relevant areas. It is intended to provide a modern, industry-oriented education in applied computer science. It aims at training professionals who can successfully meet the demands of the information technology industry."}
                affiliation={"Affiliated to IKGPTU, Jalandhar Approved by AICTE"}
                syllabusLink={"https://ptu.ac.in/wp-content/uploads/2022/09/Bridge-Course-syllabus-Mathematics-applicable-for-MCA-students-batch-2022-onwards.pdf"}
                degree={"MCA"}
            />
        </>
    )
}

export default Mca