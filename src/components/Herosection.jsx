import React from "react";
import { Button } from "./ui/button";
import { Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
const Herosection = ({
    isIqac = false,
    btn1Target = false,
    btn2Target = false,
    heading,
    shortDescription,
    btnText1,
    btn1Href,
    btn2Href,
    btnText2,
    imgSrc,
}) => {
    return (
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {heading}{" "}
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            {shortDescription}
                        </p>
                        {!isIqac ? (
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    className="cursor-pointer"
                                    to={btn1Href ? btn1Href : "/"}
                                    {...(btn1Target
                                        ? { target: "_blank" }
                                        : {})}
                                >
                                    {btnText1 && (
                                        <Button
                                            size="lg"
                                            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold"
                                        >
                                            {btnText1}
                                        </Button>
                                    )}
                                </Link>
                                <Link
                                    className="cursor-pointer"
                                    to={btn2Href ? btn2Href : "/"}
                                    {...(btn2Target
                                        ? { target: "_blank" }
                                        : {})}
                                >
                                    {btnText2 && (
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                                        >
                                            {btnText2}
                                        </Button>
                                    )}
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <Award className="w-5 h-5" />
                                    <span>Quality Excellence</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <Target className="w-5 h-5" />
                                    <span>Continuous Improvement</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <img
                            src={imgSrc}
                            alt="SVIET Campus"
                            className="rounded-lg shadow-2xl w-full h-auto max-h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herosection;
