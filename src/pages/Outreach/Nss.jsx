
import Layout from "./Layout";
const images = ["https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-08-25-at-22.45.54-1-768x512.jpeg",
    "https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-08-18-at-02.34.47-2-768x558.jpeg"
    , "https://sviet.org.in/wp-content/uploads/2023/12/IMG_9120-768x512.jpg"
    , "https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-08-25-at-22.45.55-1-768x503.jpeg"
    , "https://sviet.org.in/wp-content/uploads/2023/12/DSC07356-768x432.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-10-20-at-00.42.54-768x576.jpeg",
    "https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-08-25-at-22.45.53-2-768x498.jpeg",
    "https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-08-25-at-21.52.41-768x512.jpeg",
    "https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-10-20-at-00.42.56-1-768x576.jpeg",
    "https://sviet.org.in/wp-content/uploads/2023/12/Girl-Education-768x432.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/DSC07332-768x432.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-08-18-at-02.34.51-1-768x554.jpeg",
    "https://sviet.org.in/wp-content/uploads/2023/12/Langar-e1702543639763-768x711.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/IMG_1091-768x512.jpg"
]
const Nss = () => {
    return (
        <Layout
            images={images}
            heading={"NSS"}
            shortDescription={"The NSS section at SVIET is dedicated to community service and social responsibility, fostering a sense of civic duty and social awareness among students."}
            imgSrc={"https://sviet.org.in/wp-content/uploads/2023/12/The_National_Service_Scheme_NSS_Marching_Contingent_passes_through_the_Rajpath_on_the_occasion_of_the_68th_Republic_Day_Parade_2017_in_New_Delhi_on_January_26_2017-1536x838.jpg" || "/placeholder.svg"}
            secondImg={"https://sviet.org.in/wp-content/uploads/2023/12/main-qimg-87bfdbeea392ec44f8885c5021141451-lq-263x300.jpeg"}
            about={" The NSS Unit at SVIET is committed to nurturing a sense of social responsibility and encouraging active involvement within the community among our students. Through various volunteering initiatives and community-centric projects, our aim is to create a positive influence on society. Students enthusiastically engage in activities focused on community development, gaining essential skills and fostering a spirit of compassion and empathy. Together, we endeavor to contribute to a more inclusive and improved world. Join us at SVIET’s NSS Unit and be a part of making a meaningful impact."}
        />
    );
}

export default Nss