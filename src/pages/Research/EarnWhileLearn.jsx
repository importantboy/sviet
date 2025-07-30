import React from "react";
import Herosection from "@/components/Herosection";
import { Helmet } from "react-helmet";

import { LazyLoadImage } from "react-lazy-load-image-component";

const EarnWhileLearn = () => {
    return (
        <>
            <Helmet>
                <title>Earn While Lean – SVIET</title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">
                <Herosection
                    heading={"Earn While Learn"}
                    shortDescription={"Unlock opportunities to gain practical experience and earn while pursuing your education at SVIET."}
                    imgSrc={"/About/387107071_305830648865215_4324133801420386089_n.webp"}
                />






                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2  gap-12 items-center">
                            <div className="relative">
                                <img
                                    src={"/Home/super60.JPG" || "/placeholder.svg"}
                                    alt={"The Uniques"}
                                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                                />

                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                    The Uniques                                </h2>
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="mb-4">
                                        The Uniques Batch offers an exceptional development course aimed at transforming you into a skilled business consultant and entrepreneur. Founded in 2022 with 14 initial students, this program imparts various valuable skills that empower you to confidently navigate today’s competitive landscape.
                                    </p>

                                </div>


                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2  gap-12 items-center">


                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                    Super60                                </h2>
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="mb-4">
                                        The Super60 batch at our institution is led by industry professionals who bring real-world experience into the classroom, ensuring students receive practical insights and a deeper understanding of the subject matter. With a focus on active learning, this batch features regular doubt-solving sessions, providing students with personalized attention and support. Our enriched study modules are designed to cover comprehensive and up-to-date content, preparing students for success in their academic journey. The inclusion of sessional tests allows for continuous assessment and feedback, ensuring students stay on track with their learning objectives. Emphasizing a practical approach to education, the Super60 batch prioritizes hands-on learning experiences that bridge the gap between theory and application. The culmination of this intensive program is the Exit Exams, where students can showcase their newfound knowledge and skills. Join the Super60 batch for an immersive and effective learning experience that goes beyond traditional teaching methodologies.
                                    </p>

                                </div>


                            </div>
                            <div className="relative">
                                <img
                                    src={"/Home/uniques.webp" || "/placeholder.svg"}
                                    alt={"The Uniques"}
                                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                                />

                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default EarnWhileLearn
