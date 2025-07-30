import React from 'react'
import { Helmet } from 'react-helmet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { href, Link } from 'react-router-dom'
import { ChevronsRight } from 'lucide-react'

const photoGalleryItems = [
    {
        src: "/Home/AddmissionCell.jpeg",
        alt: "Campus Life 1",
        caption: "Departments",
        href: "https://drive.google.com/drive/u/4/folders/1s0AUtKrv9oUoCgotsB1nQaVsl-pHRp-q"

    },
    {
        src: "/Home/festad.jpeg",
        alt: "Event Highlight 1",
        href: "https://drive.google.com/drive/u/4/folders/1LQS2kFNZsnlt9NG-_Kwt6t3r5c49HR4L",
        caption: "Cultural Activities"
    },
    {
        src: "/Home/event.jpeg",
        alt: "Events",
        href: "https://drive.google.com/drive/u/4/folders/1hVAhmkpLa8CEGVtI5-fTI1iMlumByxPQ",
        caption: "Events",
    },
    {
        src:"/Home/campusvibe.jpg",
        alt: "Campus Vibes",
        caption: "Campus Vibes",
        href: "https://drive.google.com/drive/u/4/folders/1kBBTxL_jS2YUtk2Cp-eECgHwSlAN7ju_"
    },
    {
        src: "/Home/volleyball.jpeg",
        alt: "Sports",
        href: "https://drive.google.com/drive/u/4/folders/1Tgem_IXYdBdM9drUl3Pa3kwPquBMy631",
        caption: "Sports",
    },
    {
        alt: "T&P",
        src:"/Home/tandp.jpg",
        caption: "T&P",
        href: "https://drive.google.com/drive/u/4/folders/1eyOsRmG-2m9zz7BE8-T5z3DAw7SVf4yw"
    },
]

const videoGalleryItems = [
    {
        title: "Alternative Energy Source",
        embedUrl: "http://sviet.org.in/wp-content/uploads/InShot_20240204_132318749.mp4", // Placeholder YouTube embed
    },
    {
        title: "Energy Conservation Measures",
        embedUrl: "http://sviet.org.in/wp-content/uploads/InShot_20240204_130340354.mp4", // Placeholder YouTube embed
    },
    {
        title: "Green Campus Initiatives",
        embedUrl: "http://sviet.org.in/wp-content/uploads/InShot_20240204_131003320.mp4", // Placeholder YouTube embed
    },
    {
        title: "Sewage Treatment Plant",
        embedUrl: "http://sviet.org.in/wp-content/uploads/InShot_20240204_132713882.mp4", // Placeholder YouTube embed
    },
    {
        embedUrl: "http://sviet.org.in/wp-content/uploads/WhatsApp-Video-2024-02-05-at-1.01.24-PM.mp4",
        title: "Disabled Friendly Infrastructure "
    }
]
const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>
                    Gallery - SVIET
                </title>
            </Helmet>
            {/* Photo and Video Gallery Tabs */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <Tabs defaultValue="photos" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                            <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
                            <TabsTrigger value="videos">Video Gallery</TabsTrigger>
                        </TabsList>
                        <TabsContent value="photos">
                            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Photo Collection</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {photoGalleryItems.map((item, index) => (
                                    <Card key={index} className="overflow-hidden pt-0 ">
                                        <CardContent className="p-0">
                                            <LazyLoadImage
                                                effect='blur'
                                                src={item.src || "/placeholder.svg"}
                                                alt={item.alt}
                                                wrapperClassName='h-48 w-full'
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="flex flex-col gap-2 p-4">
                                                <p className="text-md text-gray-700 font-bold">{item.caption}</p>
                                                <Link to={item?.href} target='_blank' className="text-blue-600 hover:underline font-medium flex items-center">
                                                    View Gallery
                                                    <ChevronsRight className="ml-1 h-4 w-4" />
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="videos">
                            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Video Collection</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {videoGalleryItems.map((item, index) => (
                                    <Card key={index} className="overflow-hidden py-0">
                                        <CardContent className="p-0">
                                            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                                                {" "}
                                                {/* 16:9 Aspect Ratio */}
                                                <video
                                                    className="absolute top-0 left-0 w-full h-full"
                                                    src={item.embedUrl || "/placeholder.svg"}
                                                    title={item.title}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    controls

                                                ></video>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default Gallery