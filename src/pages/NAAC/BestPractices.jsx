import Herosection from "@/components/Herosection";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry from "react-masonry-css";
export default function BestPractices() {
    const images = [
        "https://sviet.org.in/wp-content/uploads/pulse20.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse25.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse41-1536x864.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse43.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse40-1536x864.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse38-1536x861.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse36.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse35.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse22-1536x864.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse22-1536x864.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse31.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse34.jpeg",
        "https://sviet.org.in/wp-content/uploads/pulse28-1536x1046.jpeg",
        "https://sviet.org.in/wp-content/uploads/358139803_669733395197690_6512776186191135969_n-1536x864.jpg",
        "https://sviet.org.in/wp-content/uploads/358399968_668071805363849_5284443530371789317_n.jpg",
        "https://sviet.org.in/wp-content/uploads/358097510_665912792246417_2438629937410504106_n.jpg",
        "https://sviet.org.in/wp-content/uploads/357747317_665912375579792_2292586870342017264_n-1471x1536.jpg",
        "https://sviet.org.in/wp-content/uploads/329230765_701523275031816_7501344466731472107_n.jpg", "https://sviet.org.in/wp-content/uploads/326428778_527391419396139_282869589289051699_n.jpg",
        "https://sviet.org.in/wp-content/uploads/320580253_698347238627220_8499614623303139643_n.jpg"
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
                    imgSrc={"/Programs/pulse19-1536x864.webp" || "/placeholder.svg"}
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
                                            className="w-full cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                        />
                                    </div>
                                ))}
                            </Masonry>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
