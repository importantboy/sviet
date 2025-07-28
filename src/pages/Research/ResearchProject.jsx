import React from "react";
import Herosection from "@/components/Herosection";
import { Helmet } from "react-helmet";

import { Card, CardContent } from "@/components/ui/card"
import { LazyLoadImage } from "react-lazy-load-image-component";

const researchProjects = [
  {
    title: "ELECTRIC BIKE CREATED BY SVGOI STUDENT",
    description:
      "We feel immense pleasure to announce that our student of Electrical Engg. 7th Sem. Mohd. Jawaad Khan. has launched the Prototype of his Company's first product 'ELECTRIC BIKE'. The product will very soon be available on PAYTM, FLIPKART & AMAZON. This is his second innovation after Electric Car 'SVIET VOLTA'. We wish him & his company All the Best for Future.",
    image: "/images/electric-bike-svgoi.png",
  },
  {
    title: "ELECTRIC CAR 'SVIET VOLTA'",
    description:
      "Student of B.Tech - Electrical Engineering 'Mohd. Jawaad' has conceptualized the innovation of an eco-friendly, Electric car 'SVIET VOLTA'. SVIET will be first college in region to directly participate as Seed funding agency and also act as Venture Capitalist in Launching student innovation. Our student made an Electric Car 'VOLTA' and made us proud as his achievement shines in all the leading Newspapers.",
    image: "/images/electric-car-sviet-volta.png",
  },
  {
    title: "ELECTRIC BICYCLE",
    description: "Electric Bicycle designed by student",
    image: "/images/electric-bicycle-detail.png",
  },
  {
    title: "STUDENTS BAGGED 4th POSITION AT IIT ROPAR",
    description:
      "Students of Department of Civil Engineering participated in Project display during a Fest at IIT Ropar & bagged 4th position out of 30 participants Teams. The theme of the project was 'Green Buildings'.",
    image: "/images/iit-ropar-students.png",
  },

]

const ResearchProject = () => {
  return (
    <>
      <Helmet>
        <title>Research Projects - SVIET</title>
      </Helmet>
      <Herosection
        heading={"Pioneering Research & Innovation"}
        shortDescription={"At SVIET, we foster a culture of innovation, encouraging students and faculty to engage in cutting-edge research and develop solutions for real-world challenges."}
        imgSrc={"/placeholder.svg"}
      />
      <section id="projects" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Innovative Projects</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Showcasing the creativity and technical prowess of our students and faculty.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchProjects.map((project, index) => (
              <Card key={index} className="shadow-lg py-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {project.image && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <LazyLoadImage
                      effect="blur"
                      src={"/placeholder.svg"}
                      alt={project.title}
                      wrapperClassName="w-full h-full relative"
                      className="transition-transform object-cover h-full w-full duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchProject
