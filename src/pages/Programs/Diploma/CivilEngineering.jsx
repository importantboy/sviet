import Layout from '@/components/Programs/Layout'
import React from 'react'

const CivilEngineeringDiploma = () => {
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
        { title: "Civil Engineer", },
        { title: "Building Inspector", },
        { title: "Enviromental Engineer", },
        { title: "Construction Supervisor", },
        { title: "Structural Design Technician", },
        { title: "Estimator", },
        { title: "Highway Engineering Technician", },
        { title: "Civil Engineering Technician", },
        { title: "Project Coordinator", },
        { title: "Civil Draftsperson", },
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
                affiliation={"Affiliated to PSBTE & IT, Chandigarh Approved by AICTE"}
                programHighlights={programHighlights}
                programOutcomes={programOutcomes}
                programTopics={programTopics}
                eligibilityCriteria={eligibilityCriteria}
                fee={"20,000/- INR Per Semester"}
                isPg={true}
                courseName={"Diploma – Civil Engineering"}
                duration={3}
                overview={"A Diploma in Civil Engineering is a program that provides students with a fundamental understanding of civil engineering principles and concepts. It covers subjects such as structural analysis, construction materials, surveying, geotechnical engineering, transportation engineering, and project management. During the program, students gain practical skills through laboratory work, field surveys, and internships. They learn to design and construct various civil engineering projects, such as buildings, roads, bridges, and infrastructure systems. They also develop skills in using computer-aided design (CAD) software and other relevant tools.. Overall, a Diploma in Civil Engineering equips students with the knowledge and skills needed to contribute to the planning, design, construction, and maintenance of civil engineering projects. It offers a pathway to a fulfilling career in the field of civil engineering, playing a crucial role in shaping the built environment."}
                syllabusLink={"https://sviet.org.in/wp-content/uploads/2023/11/Diploma-ME.zip"}
                degree={"CE - Diploma"}
            />
        </>
    )
}

export default CivilEngineeringDiploma