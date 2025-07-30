import React from 'react'
import { Helmet } from 'react-helmet'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry from 'react-masonry-css';
const images = [
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.21-AM.jpeg", "https://sviet.org.in/wp-content/uploads/Prarmbh-2.jpeg"
    , "https://sviet.org.in/wp-content/uploads/Prarmbh.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.19-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.45-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.44-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.03-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/Dept.-of-International-Celebrated-Christmas.jpg",
    "https://sviet.org.in/wp-content/uploads/International-Celebrates.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.06-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.07-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.07-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.31-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.32-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.34-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.35-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.34-AM.jpeg"
    , "https://sviet.org.in/wp-content/uploads/12-May.jpeg",
    "https://sviet.org.in/wp-content/uploads/13-May.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.32-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/Technology-Environment.jpg",
    "https://sviet.org.in/wp-content/uploads/19-feb.jpeg",
    "https://sviet.org.in/wp-content/uploads/Same.jpeg",
    "https://sviet.org.in/wp-content/uploads/Sabhiyachar.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.59-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.59-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.56-AM-2.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.00-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.00-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/Youth-fest-Dedicated-to-Guru-Nanak-Dev.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.57-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/18-Oct.jpg",
    "https://sviet.org.in/wp-content/uploads/Rangla-Punjab.jpg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.56-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.56-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/Spontania-2023.jpg",
    "https://sviet.org.in/wp-content/uploads/Same.jpg",
    "https://sviet.org.in/wp-content/uploads/7-June.jpg",
    "https://sviet.org.in/wp-content/uploads/18May2020-21.jpeg",
    "https://sviet.org.in/wp-content/uploads/23-May.jpeg",
    "https://sviet.org.in/wp-content/uploads/20May.jpeg",
    "https://sviet.org.in/wp-content/uploads/18-May.jpeg",
    "https://sviet.org.in/wp-content/uploads/27-sep.jpg",
    "https://sviet.org.in/wp-content/uploads/22-May.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.22-AM-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/22May.jpeg",
    "https://sviet.org.in/wp-content/uploads/March.jpeg",
    "https://sviet.org.in/wp-content/uploads/31-March-1.jpeg",
    "https://sviet.org.in/wp-content/uploads/28-March.jpeg",
    "https://sviet.org.in/wp-content/uploads/31-March-2.jpeg",
    "https://sviet.org.in/wp-content/uploads/2022.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.23.40-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/Kisan-Mela-2022.jpeg",
    "https://sviet.org.in/wp-content/uploads/1-April-2019.jpeg",
    "https://sviet.org.in/wp-content/uploads/1-April.jpeg",
    "https://sviet.org.in/wp-content/uploads/30-March.jpeg",
    "https://sviet.org.in/wp-content/uploads/31-March.jpeg",
    "https://sviet.org.in/wp-content/uploads/NCC.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.12-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/Training-Camp.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.24.11-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/NCC-Enrollment-2023.jpg",
    "https://sviet.org.in/wp-content/uploads/NCC-2022.jpg",
    "https://sviet.org.in/wp-content/uploads/NCC-4-March.jpg",
    "https://sviet.org.in/wp-content/uploads/Global-Studies-canada.jpg",
    "https://sviet.org.in/wp-content/uploads/Studies.jpg",
    "https://sviet.org.in/wp-content/uploads/Bill-scheme-Knowledge.jpg",
    "https://sviet.org.in/wp-content/uploads/Prali.jpg",
    "https://sviet.org.in/wp-content/uploads/Prali-Sadan.jpg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-20-at-11.26.45-AM.jpeg",
    "https://sviet.org.in/wp-content/uploads/Cabinet-Minister.jpeg"
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
                                            onClick={() => window.open(image)}
                                            effect="blur"
                                            src={image || "/placeholder.svg"}
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