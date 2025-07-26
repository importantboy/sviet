import React from 'react'
import { Badge } from '../ui/badge'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
const managementTeam = [
    {
        name: "Mr. Ashwani Garg",
        position: "Chairman",
        image: "/ashwiniGarg.jpg",
        message:
            "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. Today SVGOI has become a dream place to provide valuable educational experience to students, from different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVGOI have been making towards the overall success of students across the world. We have an interactive curriculum made to provide definite learning solutions in the field of Scientific studies, Medical studies, Arts, Business & Engineering. In this world known as a global village, all boundaries and the national borders are gradually becoming more transparent. Our international collaborations have helped students to form unlimited opportunities of global exposure for our students, to excel in their careers. So join your hands with SVGOI and be future-ready."
    },
    {
        name: "Mr. Ashok Garg",
        position: "President",
        image: "/ashoksir.jpg",
        message:
            "SVGOI has experienced remarkable growth in recent years, earning widespread acclaim for its rapid advancement. Our journey from inception to our current standing is a testament to our unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer diverse programs affiliated with both national and international universities. We celebrate the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVGOI is dedicated to providing practical solutions and fostering intellectual brilliance through research and development. Let's collaborate in building a skilled society together."
    },
    {
        name: "Mr. Vishal Garg",
        position: "Director Secretarial and Administration",
        image: "/vishalsir.jpg",
        message:
            "At SVGOI, we prioritize global standards in academia, fostering active engagement among teachers, students, and industry. Our focus is on holistic education, preparing students for the challenges of a globalized world. With dedicated faculty and staff, we aim to excel in shaping individuals' futures and elevate SVGOI's standing in the academic realm. Our commitment to excellence is reflected in the diverse student body, including foreign exchange students, enriching our campus culture. Join us in experiencing exceptional intellectual and academic opportunities, shaping the future of learning together."
    },
    {
        name: "Mr. Ankur Gupta",
        position: "Director Corporate Affairs",
        image: "/ankurgupta.jpg",
        message:
            "Students from around the country are getting attracted to SVGOI because of our commitment to teaching excellence, focus on research, tailored courses that make our education relevant to changing career dynamics and formidable industry partnerships. The Curriculum is delivered in spacious, amphitheatre-style classrooms—fitted with modern Information and Communication Technology (ICT) equipment to participate in co-curricular and extra-curricular activities through various clubs and societies in the campus. SVGOI provides several opportunities for local students, to visit foreign universities and institutions on such exchange programs, thereby helping them receive invaluable international exposure."
    },

    {
        name: "Mr. Sahil Garg",
        position: "Project Director",
        image: "/sahilsir.jpg",
        message:
            "SVGOI epitomizes quality, dedication, values, and commitment, evident through our accomplished alumni. To cement our position as a premier institute in Technical Higher Education in India, we offer diverse, industry-relevant programs. With a student-centric approach, SVGOI is esteemed as one of the top private colleges in North India. From computer science to mechanical engineering, business management to nursing, SVGOI provides a wide array of educational services. Our strength lies in nurturing globally competitive graduates prepared for success in various professional domains. Join us in shaping a brighter future together."
    },
    {
        name: "Mr. Shubham Garg",
        position: "Director Placements",
        image: "/shubham.jpg",
        message:
            "Our aim is to provide Placements & Corporate Interface for the students and to make the students aware about the job opportunities and help them get placed. In the last fifteen years, Training & Placement Office (General) has been successfully able to place students of different courses & has invited reputed MNCs from, Social Sector, Information Technology, Manufacturing, ITES, Media, Services, Banking & Finance, etc. The Training & Placement Office (General) looks after the Campus Placements of the Engineering & Non-Engineering Courses of the College & Coordinates with the respective departmental TPO's regarding the Placement & related activities."
    },
    {
        name: "Mr. Ankur Gill",
        position: "Director Operations",
        image: "/ankur.jpg",
        message:
            "As the Director of Operations at Swami Vivekanand Institute of Engineering and Technology, I am deeply committed to fostering an environment of excellence, innovation, and growth within our institution. With a focus on providing top-notch education and opportunities for our students, I am honored to collaborate with such dedicated professionals like yourselves who share a passion for academic advancement and student success.Our mission at Swami Vivekanand Institute of Engineering and Technology is to empower our students with knowledge, skills, and values that will enable them to thrive in an ever-evolving world. Through our collective efforts, we strive to create an ecosystem where creativity flourishes, ideas are nurtured, and aspirations are realized. I am confident that with your unwavering support and dedication, Swami Vivekanand Institute of Engineering and Technology will continue to reach new heights of success and distinction."
    },

]
const Management = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                        From the{" "}
                        <span className="text-yellow-500">Desk of Management</span>
                    </h2>
                </div>

                <div className="space-y-16">
                    {managementTeam.map((member, index) => (
                        <div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                                }`}
                        >
                            <div
                                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""
                                    }`}
                            >
                                <div>
                                    <Badge className="bg-blue-100 text-blue-800 mb-4">
                                        {member.position}
                                    </Badge>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                        {member.name}
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed italic">
                                    "{member.message}"
                                </p>

                            </div>

                            <div
                                className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                                    }`}
                            >
                                <LazyLoadImage
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="rounded-lg shadow-md w-full h-full object-top object-cover"
                                    wrapperClassName=' w-full h-[30rem] '
                                    effect='blur'
                                    placeholderSrc={"/placeholder.svg"}
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <p className="font-bold text-blue-900 text-sm">
                                            {member.name}
                                        </p>
                                        <p className="text-gray-600 text-xs">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default React.memo(Management)