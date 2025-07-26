import Herosection from "@/components/Herosection"
import { CheckCircle } from "lucide-react"
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry from "react-responsive-masonry";


export default function BestPractices() {

    const images = ["/ankur.jpg", "/library.jpeg", "/international.JPG", "/research.JPG", "/placeholder.svg"]

    return (
        <>
            <Helmet>
                <title>
                    Best Practices &
                    Distinctiveness - SVIET
                </title>
            </Helmet>
            <div className="min-h-screen bg-gray-50" >
                {/* Hero Section */}

                <Herosection
                    isIqac={true}
                    heading={"Best Practices & Distinctiveness"}
                    shortDescription={"Revolutionizing Connectivity: Unleashing the Power of the Digital Pulse for a Connected Future"}
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
                                        Embark on a transformative academic journey at SVIET College, where we seamlessly integrate innovation and connectivity through our pioneering Digital Pulse initiative. More than a technological heartbeat, it propels us into the digital frontier, revolutionizing learning, communication, and collaboration. Immerse yourself in a dynamic educational experience, where cutting-edge technology amplifies knowledge and shapes the future. Join SVIET College, where the pulse of the digital revolution resonates in every facet of our academic landscape.                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
                {/* Gallery Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Gallery</h2>
                            {/* 

                                    className="rounded-lg shadow-md w-full h-full object-top object-cover"
                                    wrapperClassName=' w-full h-[30rem] '
*/}
                            <Masonry columnsCount={3} gutter="10px">
                                {images.map((image, i) => (
                                    <LazyLoadImage
                                        key={i}
                                        effect='blur'
                                        src={image || "/placeholder.svg"}
                                        style={{ width: "100%", display: "block" }}
                                    />
                                ))}
                            </Masonry>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}
