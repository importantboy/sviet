import React from "react";
import Herosection from "@/components/Herosection";
import { Helmet } from "react-helmet";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const images = [
    "https://sviet.org.in/wp-content/uploads/370556102_698932872277742_4913615132469267958_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/370556102_698932872277742_4913615132469267958_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/370040082_698930408944655_2046864550725942265_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/370040082_698930408944655_2046864550725942265_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/370040082_698930408944655_2046864550725942265_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/370040082_698930408944655_2046864550725942265_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/369872512_698931512277878_6362315003438415201_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/369872512_698931512277878_6362315003438415201_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/369856145_698929102278119_8981648310497760128_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/369274811_698932698944426_5496283153453465485_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/369274510_698931052277924_4686148509081813964_n-1536x1190.jpg",
    "https://sviet.org.in/wp-content/uploads/428673055_824888189682209_6315433924731681925_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428671264_824889659682062_2819994907906042509_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428671264_824889659682062_2819994907906042509_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428671264_824889659682062_2819994907906042509_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428671264_824889659682062_2819994907906042509_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428704918_824890573015304_1773692209568672507_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428699502_824889073015454_7883010473954407824_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428699502_824889073015454_7883010473954407824_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428688254_824887466348948_4092351607949230932_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428688254_824887466348948_4092351607949230932_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428686596_824890763015285_4508684362716687969_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428686596_824890763015285_4508684362716687969_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428686596_824890763015285_4508684362716687969_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428673634_824889399682088_8194790663539315994_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/428673634_824889399682088_8194790663539315994_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/463483732_999260368911656_5693736811198158954_n.jpg",
    "https://sviet.org.in/wp-content/uploads/316423870_509111617926536_5656541623125700827_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/463483732_999260368911656_5693736811198158954_n.jpg",
    "https://sviet.org.in/wp-content/uploads/463483732_999260368911656_5693736811198158954_n.jpg",
    "https://sviet.org.in/wp-content/uploads/463483732_999260368911656_5693736811198158954_n.jpg",
    "https://sviet.org.in/wp-content/uploads/316687326_509112307926467_8784030396483126604_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/316166458_509113854592979_8527336557573690212_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/316134880_509112234593141_7416167744171604953_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/316134880_509112234593141_7416167744171604953_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/248871436_10158015167376721_7112711674772749521_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/248757229_10158015167476721_5919166442067087571_n.jpg", "https://sviet.org.in/wp-content/uploads/248757229_10158015167476721_5919166442067087571_n.jpg", "https://sviet.org.in/wp-content/uploads/248616025_10158015167256721_3331560127014589482_n-1536x1365.jpg", "https://sviet.org.in/wp-content/uploads/248428995_10158015167206721_3570782955798238717_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/248394281_10158015167661721_1881620418243539898_n-1536x1303.jpg", "https://sviet.org.in/wp-content/uploads/380346520_715253060645723_6361082007061343604_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/380345193_715251860645843_7981581100822277596_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/380345193_715251860645843_7981581100822277596_n-1536x1024.jpg", "https://sviet.org.in/wp-content/uploads/93c5b053-ef4e-4990-a02e-50bfce20bb26.jpg",
    "https://sviet.org.in/wp-content/uploads/66b8a828-5fcb-40bf-a651-e4c32f1c4939.jpg",
    "https://sviet.org.in/wp-content/uploads/333834572_3479983402270645_4056718100747366150_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/333537140_587615529923317_3714043872433607417_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/333817201_1228727874734223_5813847537844253859_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/334435803_691821832630911_3883925620936567858_n-1536x1024.jpg",
    "https://sviet.org.in/wp-content/uploads/363391880_684601730377523_136257783072353_n-1536x1152.jpg",
    "https://sviet.org.in/wp-content/uploads/363386566_684609707043392_8187152458376467595_n.jpg",
    "    https://sviet.org.in/wp-content/uploads/364056429_684610993709930_8550861362856102529_n-1536x1152.jpg"
]
const Activity = () => {
    const heading = "Activities"
    const shortDescription = "Various activities are organized within SVIET where students get the opportunity to learn and enhance their skills."
    return (
        <>
            <Helmet>
                <title>{heading} - SVIET</title>
            </Helmet>
            <Herosection
                heading={heading}
                shortDescription={shortDescription}
                imgSrc={"/Home/activity.webp"}
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Photo Gallery
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
                            {images.map((image,key) => (
                                <div className="mb-4" key={key}>
                                    <LazyLoadImage
                                        onClick={() => { window.open(image) }}
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
        </>
    );
}

export default Activity