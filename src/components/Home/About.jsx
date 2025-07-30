import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const timelineData = [
    {
        year: "2005",
        text: "Swami Vivekanand College of Pharmacy (SVCP) and Swami Vivekanand College of Education (SVCE) were established.",
    },
    {
        year: "2010",
        text: "Swami Vivekanand Polytechnic College (SVPC) joined the group.",
    },
    {
        year: "2012",
        text: "Swami Vivekanand Faculty of Information Technology & Business Management and Swami Vivekanand Industrial Training Centre (SVITC) were introduced.",
    },
    {
        year: "2014",
        text: "Swami Vivekanand College of Faculty Management & Technology came into existence.",
    },
    {
        year: "2017",
        text: "Swami Vivekanand College of Management & Technology (SVCMT) was established under MRSPTU.",
    },
    {
        year: "2021",
        text: "Swami Vivekanand College of Law became the latest addition to the group.",
    },
];

const About = () => {
    return (
        <section
            id="director-message"
            className="py-16 bg-gray-50"
        >
            <div className='flex justify-center mb-3'>

                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
                    About The {" "}
                    <span className="text-yellow-500">SVGOI</span>
                </h2>
               
            </div>
            <div className="container  mx-auto px-4">
                <div className="flex items-center flex-col md:flex-row ">
                    <div className="relative flex-1">
                        <LazyLoadImage
                            effect="blur"
                            src={"/Home/about-auditorium.webp" || "/placeholder.svg"}
                            alt={"Svgoi auditorium"}
                            className="rounded-lg shadow-xl object-[0_10%] w-full h-auto object-cover max-h-[500px]"
                            wrapperClassName=' w-full h-fit '
                        />

                    </div>

                    <div className="flex-1 p-4 md:p-10 max-w-4xl mx-auto">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md flex gap-2 rounded-md p-2 mb-4 border-l-4 border-orange-400"
                            >
                                <p className="text-orange-600 font-semibold">{item.year}:</p>
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>


    )
}

export default About