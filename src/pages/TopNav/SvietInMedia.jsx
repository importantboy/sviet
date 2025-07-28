import React from 'react'
import { Helmet } from 'react-helmet'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry from 'react-masonry-css';
const images = [
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.35-PM-1-e1708253473241-768x946.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.03-PM-e1708253519281.jpeg",
    "https://sviet.org.in/wp-content/uploads/Prarmbh-2.jpeg",
    "https://sviet.org.in/wp-content/uploads/Prarmbh.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.45-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.09-PM-e1708253649414-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.09-PM-1-e1708253676879-768x939.jpeg",

    "https://sviet.org.in/wp-content/uploads/cloud.png",
    "https://sviet.org.in/wp-content/uploads/big-data.png",
];
const SvietInMedia = () => {
    return (
        <>
            <Helmet>
                <title>
                    Sviet In Media - SVIET
                </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                                Sviet In Media
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
                                            effect="blur"
                                            src={image}
                                            className="w-full border-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                        />
                                    </div>
                                ))}
                            </Masonry>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SvietInMedia