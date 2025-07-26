import Layout from '@/components/Programs/Layout'
import React from 'react'

const Mba = () => {
    const eligibilityCriteria = [

        {
            id: 1,
            title: "Postgraduate Admission (MBA)",
            description: "Eligibility criteria for admission into MBA programs",
            requirements: [

                "Passed any recognized bachelor's degree of minimum three years duration with Mathematics / Statistics / Business Mathematics / Business Statistics / Quantitative Techniques as a compulsory, optional, or additional subject at 10+2 or graduation level.",
                "Passed BCA course of minimum three years duration from any recognized university."
            ],
            icon: "🎓",
            color: "from-orange-500 to-orange-600",
            borderColor: "border-orange-500",
        },
    ]
    const programTopics = [
        {
            title: "Management", },
        { title: "Project Manager", },
        { title: "Digital Marketing Consultant", },
        { title: "Digital Marketing Manager", },
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
                programHighlights={programHighlights}
                programOutcomes={programOutcomes}
                programTopics={programTopics}
                eligibilityCriteria={eligibilityCriteria}
                fee={"40,000/- INR Per Semester"}
                isPg={true}
                courseName={"Master’s in Business Administration"}
                duration={2}
                overview={"Masters of Business Administration at SVIET was established in response to the mounting need that was felt for nurturing industry-ready managers who could efficiently manage worldwide growing industries. The program is premeditated to aid students to formalize ideas and gaze at them logically. A combination of the rigorous research-based curriculum with an emphasis on real-life applications and experiential knowledge pushes students to discover practical business solutions using the modus operandi that develop in and outside the classroom during the course duration. This course imparts a panorama, enriching the students and encouraging them to think beyond their horizons, identify out-of-the-box solutions, and challenge the status quo. The focus here is not on producing business managers per se, but socially responsible business luminaries. MBA SVIET witnesses a blend of seasoned professionals from a wide array of sectors such as manufacturing, telecommunication, retail & FMCG, banking, logistics, stock market & mutual funds, to mention but a few. Students after pursuing MBA can explore career in field of Banking & Finance, Investment Banking, and Management Consulting, Entrepreneurship, and Data analytics."}
                affiliation={"Affiliated to IKGPTU, Jalandhar Approved by AICTE"}
                syllabusLink={"https://ptu.ac.in/wp-content/uploads/2022/08/MBA-Upto-4th-Sem.-2021-onwards-affliated-colleges.pdf"}
                degree={"MBA"}
            />
        </>
    )
}

export default Mba