import React from "react";
import Herosection from "@/components/Herosection";
import { Helmet } from "react-helmet";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Layout = ({ heading, shortDescription, imgSrc, secondImg, about, images }) => {
    return (
        <>
            <Helmet>
                <title>{heading} - SVIET</title>
            </Helmet>
            <Herosection
                heading={heading}
                shortDescription={shortDescription}
                imgSrc={imgSrc || "/placeholder.svg"}
            />
            <section id="overview" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="p-8">
                            <img
                                src={secondImg || "/placeholder.svg"}
                                alt={heading}
                                className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                About {heading} at SVIET
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="mb-4">
                                    {about}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Photo Gallery
                        </h2>

                        <Masonry
                            breakpointCols={{
                                default: 4,
                                1100: 3,
                                700: 2,
                                500: 1,
                            }}
                            className="flex w-auto -ml-4"
                            columnClassName="pl-4 bg-clip-padding"
                        >
                            {images.map((image) => (
                                <div className="mb-4">
                                    <LazyLoadImage
                                        onClick={() => { window.open(image) }}
                                        effect="blur"
                                        src={image || "/placeholder.svg"}
                                        className="w-full cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Layout