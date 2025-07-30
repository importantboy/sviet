import Herosection from "@/components/Herosection";
import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry from "react-masonry-css";
const Books = () => {
  const images = [
    "/books/1.jpeg",
    "/books/2.jpeg",
    "/books/3.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.35-PM-1-e1708253473241-768x946.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.03-PM-e1708253519281.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.05-PM-e1708253554757-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.05-PM-1-e1708253574548-768x948.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.07-PM-e1708253592785-768x943.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.07-PM-1-e1708253617549-768x943.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.09-PM-e1708253649414-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.09-PM-1-e1708253676879-768x939.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.23-PM-2-e1708253704379-768x943.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.20-PM-e1708253725209-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.19-PM-e1708253744483-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.18-PM-1-e1708253771661-768x948.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.18-PM-e1708253794857-768x951.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.17-PM-e1708253842605-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.14-PM-e1708253862990-768x942.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.13-PM-e1708253970241-768x940.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.10-PM-e1708254011161-768x944.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.23-PM-e1708254037633-768x939.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.32-PM-1-e1708254074950-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.34-PM-e1708254176819-768x940.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.35-PM-e1708254192224-768x931.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.26-PM-e1708254221849-768x943.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.23-PM-1-e1708254248385-768x948.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.27-PM-e1708254271437-768x944.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.26-PM-1-e1708254290923-768x949.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.28-PM-e1708254308702-768x945.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.30-PM-e1708254328505-768x943.jpeg",
    "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-02-17-at-4.15.32-PM-2-e1708254350973-768x948.jpeg",
    "https://sviet.org.in/wp-content/uploads/IMG-20240218-WA0004-e1708255025117-768x946.jpg",
    "https://sviet.org.in/wp-content/uploads/IMG-20240218-WA0005-e1708254997972-768x939.jpg",
    "https://sviet.org.in/wp-content/uploads/IMG-20240218-WA0006-e1708254972355-768x939.jpg",
    "https://sviet.org.in/wp-content/uploads/IMG-20240218-WA0007-e1708254948939-768x943.jpg",
    "https://sviet.org.in/wp-content/uploads/Screenshot-2024-03-13-at-9.34.41%E2%80%AFAM-e1710303368665-768x961.png",
    "https://sviet.org.in/wp-content/uploads/AI.png",
    "https://sviet.org.in/wp-content/uploads/handbook-ml.png",
    "https://sviet.org.in/wp-content/uploads/cloud.png",
    "https://sviet.org.in/wp-content/uploads/big-data.png",
  ];
  return (
    <>
      <Helmet>
        <title>Books - SVIET</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}

        <Herosection
          isIqac={false}
          heading={"Books and Edited Chapters"}
          shortDescription={`Books and edited chapters are compilations where individual authors contribute specific sections, curated and organized by editors.
`}
          imgSrc={"https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg"}
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Books and Edited Chapters
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
                {images.map((image, index) => (
                  <div className="mb-4" key={index}>
                    <LazyLoadImage
                      effect="blur"
                      src={image || "/placeholder.svg"}
                      className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
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
};

export default Books;
