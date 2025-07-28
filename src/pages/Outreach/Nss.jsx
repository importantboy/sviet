
import Layout from "./Layout";
const images = [
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
const Nss = () => {
    return (
        <Layout
            images={images}
            heading={"NSS"}
            shortDescription={"The NSS section at SVIET is dedicated to community service and social responsibility, fostering a sense of civic duty and social awareness among students."}
            imgSrc={"https://sviet.org.in/wp-content/uploads/2023/12/The_National_Service_Scheme_NSS_Marching_Contingent_passes_through_the_Rajpath_on_the_occasion_of_the_68th_Republic_Day_Parade_2017_in_New_Delhi_on_January_26_2017-1536x838.jpg"}
            secondImg={"https://sviet.org.in/wp-content/uploads/2023/12/main-qimg-87bfdbeea392ec44f8885c5021141451-lq-263x300.jpeg"}
            about={" The NSS Unit at SVIET is committed to nurturing a sense of social responsibility and encouraging active involvement within the community among our students. Through various volunteering initiatives and community-centric projects, our aim is to create a positive influence on society. Students enthusiastically engage in activities focused on community development, gaining essential skills and fostering a spirit of compassion and empathy. Together, we endeavor to contribute to a more inclusive and improved world. Join us at SVIET’s NSS Unit and be a part of making a meaningful impact."}
        />
    );
}

export default Nss