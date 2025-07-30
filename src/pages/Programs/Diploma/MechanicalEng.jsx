import Layout from '@/components/Programs/Layout'
import React from 'react'

const MeDiploma = () => {
    const eligibilityCriteria = [

        {
            id: 1,
            title: "Diploma Admission (ME)",
            description: "Eligibility criteria for admission into ME programs",
            requirements: [
                "Admission to Diploma Level courses shall be made on the basis of merit of subjects Math Science and English with overall status Pass in Matriculation examinations with minimum 45% and for SC 40% , gap certificate if student has any gap after last qualification and Migration"
            ],
            icon: "🎓",
            color: "from-orange-500 to-orange-600",
            borderColor: "border-orange-500",
        },
    ]
    const programTopics = [
        {
            title: "Research & Development Technician",
        },
        {
            title: "Mechanical Technician", },
        { title: "CAD Technician", },
        { title: "Quality Control Inspector", },
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



    return (
        <>

            <Layout
                overviewImg={"/Programs/me1.webp"}
                heroSectionImage={"/Programs/me.webp"}
                programHighlights={programHighlights}
                programOutcomes={programOutcomes}
                programTopics={programTopics}
                eligibilityCriteria={eligibilityCriteria}
                fee={"20,000/- INR Per Semester"}
                isPg={true}
                courseName={"Mechanical Engineering – Diploma"}
                duration={3}
                overview={"A Diploma in Mechanical Engineering is a program that provides students with a comprehensive understanding of mechanical principles and engineering concepts. It covers subjects such as mechanics, thermodynamics, fluid mechanics, materials science, manufacturing processes, and machine design. During the program, students gain practical skills through laboratory work, projects, and internships. They learn to design, analyze, and maintain mechanical systems and components, as well as use computer-aided design (CAD) software and simulation tools. The diploma prepares graduates for entry-level positions in industries such as manufacturing, automotive, aerospace, energy, and robotics. They can work as mechanical technicians, design assistants, quality control inspectors, or pursue further studies in mechanical engineering. Overall, a Diploma in Mechanical Engineering equips students with the knowledge and skills needed to work with machines, analyze mechanical systems, and contribute to the design, development, and maintenance of mechanical projects. It offers a pathway to a rewarding career in the field of mechanical engineering."}
                affiliation={"Affiliated to IKGPTU, Jalandhar Approved by AICTE"}
                syllabusLink={"https://sviet.org.in/wp-content/uploads/2023/11/Diploma-ME.zip"}
                degree={"ME - Diploma"}
            />
        </>
    )
}

export default MeDiploma