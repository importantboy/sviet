import Herosection from "@/components/Herosection";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Ms from "react-masonry-css";
export default function BestPractices() {
    const images = [
        "/ankur.jpg",
        "/library.jpeg",
        "/international.JPG",
        "/research.JPG",
        "/placeholder.svg",
    ];

    return (
        <>
            <Helmet>
                <title>Best Practices & Distinctiveness - SVIET</title>
            </Helmet>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}

                <Herosection
                    isIqac={true}
                    heading={"Best Practices & Distinctiveness"}
                    shortDescription={
                        "Revolutionizing Connectivity: Unleashing the Power of the Digital Pulse for a Connected Future"
                    }
                    imgSrc={"/placeholder.svg"}
                />

                {/* About IQAC Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                About Digital Pulse
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <p>
                                        Embark on a transformative academic
                                        journey at SVIET College, where we
                                        seamlessly integrate innovation and
                                        connectivity through our pioneering
                                        Digital Pulse initiative. More than a
                                        technological heartbeat, it propels us
                                        into the digital frontier,
                                        revolutionizing learning, communication,
                                        and collaboration. Immerse yourself in a
                                        dynamic educational experience, where
                                        cutting-edge technology amplifies
                                        knowledge and shapes the future. Join
                                        SVIET College, where the pulse of the
                                        digital revolution resonates in every
                                        facet of our academic landscape.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Gallery Section */}

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                                Our Gallery
                            </h2>

                            <Ms
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
                                            className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                        />
                                    </div>
                                ))}
                            </Ms>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
