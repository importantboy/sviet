import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Heart,
  Globe,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const keyHighlights = [
  {
    title: "Programs",
    description:
      "Maintaining highest standards of education with innovative teaching methodologies and research-oriented learning.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
    link: "#",
  },
  {
    title: "syllabus",
    description:
      "Strong partnerships with leading companies ensuring practical exposure and excellent placement opportunities.",
    icon: Globe,
    color: "bg-green-50 text-green-600",
    link: "#",
  },
  {
    title: "notes",
    description:
      "Cutting-edge research facilities and innovation labs fostering creativity and technological advancement.",
    icon: Lightbulb,
    color: "bg-purple-50 text-purple-600",
    link: "#",
  },
  {
    title: "notices",
    description:
      "Comprehensive personality development focusing on leadership skills, ethics, and social responsibility.",
    icon: Heart,
    color: "bg-red-50 text-red-600",
    link: "#",
  },
  {
    title: "assignments",
    description:
      "Comprehensive personality development focusing on leadership skills, ethics, and social responsibility.",
    icon: Heart,
    color: "bg-red-50 text-red-600",
    link: "#",
  },
  {
    title: "previsous year papers",
    description:
      "Comprehensive personality development focusing on leadership skills, ethics, and social responsibility.",
    icon: Heart,
    color: "bg-red-50 text-red-600",
    link: "#",
  },
  {
    title: "sample paper",
    description:
      "Comprehensive personality development focusing on leadership skills, ethics, and social responsibility.",
    icon: Heart,
    color: "bg-red-50 text-red-600",
    link: "#",
  },
];
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const ExcellenceSection = () => {

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Discover More
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover what makes our institution a leader in education, research,
            and student development
          </p>
        </div>

        <div className="
              grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 justify-items-center
        place-items-stretch
        ">
          {keyHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${highlight.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 capitalize">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {highlight.description}
                  </p>

                  <a
                    href={highlight.link}
                    className="text-blue-900 hover:text-blue-600 hover:underline transition-all"
                  >
                    Read more
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
