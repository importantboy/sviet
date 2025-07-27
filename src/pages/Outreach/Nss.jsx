import React from "react";
import Herosection from "@/components/Herosection";
import { Helmet } from "react-helmet";
const Nss =()=>{
    return (
        <>
            <Helmet>
                <title>NSS - SVIET</title>
            </Helmet>
            <Herosection
                heading={"NSS"}
                shortDescription={"The NSS section at SVIET is dedicated to community service and social responsibility, fostering a sense of civic duty and social awareness among students."}
                imgSrc={"https://sviet.org.in/wp-content/uploads/926165C3-7256-4B01-B37C-9723B1D2F645.jpg"}
            />
        </>
    );
}

export default Nss