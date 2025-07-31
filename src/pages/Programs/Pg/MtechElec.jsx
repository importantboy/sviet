import Layout from '@/components/Programs/Layout'
import React from 'react'

const MtechElec = () => {
    const eligibilityCriteria = [

        {
            id: 1,
            title: "Postgraduate Admission (Electronics)",
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
        {

            title: "Industry-oriented Specialisations"

        }
        ,
        {
            title: "Experiential Learning",
        },
        {
            title: "modern laboratories and facilities",
        }]

    const programOutcomes = [
        {
            id: "PO1",
            title: "Fundamental Knowledge",
            description:
                "Ability to apply the knowledge of science, mathematics, and engineering principles for developing problem solving attitude.",
        },
        {
            id: "PO2",
            title: "Problem Identification and Analysis",
            description:
                "Ability to identify, formulate and solve engineering problems in the broad areas like Systems.",
        },
        {
            id: "PO3",
            title: "Design and Emerging Technologies",
            description:
                "Design using communication and networking platforms and tools. Explore recent developments in areas like optical communication, satellite communication, wireless communication, networking, RF-microwave, antennas, measurements and standards in communication.",
        },
        {
            id: "PO4",
            title: "Software Tools and System Analysis",
            description:
                "Ability to understand and use different software tools for Design, Analysis and Verification in the domain of communication and networking. System results are obtained through progressive steps such as Design entry, Synthesis, Functional and Timing Simulation.",
        },
        {
            id: "PO5",
            title: "Experimentation and Programming",
            description:
                "Ability to design and conduct experiments, analyze and interpret data, imbibe programming skills for development of simulation experiments.",
        },
        {
            id: "PO6",
            title: "Teamwork and Ethics",
            description:
                "Ability to function as a member of a multidisciplinary team with sense of ethics, integrity and social responsibility.",
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



    return (
        <>

            <Layout
                heroSectionImage={"/Programs/electric.webp"}
                overviewImg={"/Programs/Engineering-Uses-of-Electricity-1536x865.webp"}
                programHighlights={programHighlights}
                programOutcomes={programOutcomes}
                programTopics={programTopics}
                eligibilityCriteria={eligibilityCriteria}
                fee={"37,500/- INR Per Semester"}
                isPg={true}
                courseName={"Electronics"}
                overview={"SVIET aims to encourage research and innovation in Electronics & Communication and allied areas. The objective of the Electronics and Communication Engineering (ECE) is to give students great opportunities for research and development, as everyday consumers need new devices to support them in daily life. The department prepares the students in such a manner so that they can explore their scientific temperament and come out with novel ideas that can be further put into practice to achieve matchless results. Under the banner of M.Tech. ECE, the students are taught the advanced theoretical and practical postulates of electronics and communication..M.Tech. Graduates in Electronics and Communication can get lucrative job opportunities in some of the popular companies like TCS, Wipro, Siemens, Infosys, etc. Also, students can get incredible job opportunities in the government sector like ISRO, C-DAC, DRDO, and VSSC."}
                duration={2}
                affiliation={"Affiliated to IKGPTU, Jalandhar Approved by AICTE"}
                syllabusLink="https://ptu.ac.in/wp-content/uploads/2020/10/6-12-18M_tech_ECE__Scheme_and_Syllabus_Final.pdf"
                degree={"ECE"}
            />
        </>
    )
}

export default MtechElec