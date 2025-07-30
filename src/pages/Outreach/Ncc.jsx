import React from 'react'
import Layout from './Layout'
const images = [
    "https://sviet.org.in/wp-content/uploads/2023/12/IMG_1091-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/261495127_10158072514476721_2861283463974100364_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/312016788_10158555273826721_948250416214389255_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/312480589_10158555272856721_3215751520926498344_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/312480589_10158555272856721_3215751520926498344_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/73085776_10156342171561721_6019956406956851200_n-768x432.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/73085776_10156342171561721_6019956406956851200_n-768x432.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/74311379_10156342171661721_5080936896599687168_n-768x432.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/89682082_10156720483166721_7558392518195281920_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/312585182_10158555273976721_2272687672607866918_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/321452627_5673089966132087_4338554803525324855_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/321452627_5673089966132087_4338554803525324855_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/321452627_5673089966132087_4338554803525324855_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/321739891_884333942584614_3730949888617052183_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/345924971_208272055301005_5204965506166942082_n-768x570.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/347268725_664508825720147_3744353120201666290_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/353768467_650148857156144_2088404038360915433_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/358034938_664508822386814_6488970144144390572_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/358101627_664508802386816_5195860524878364808_n-768x576.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/369877013_699848662186163_2934343090274465505_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/369877013_699848662186163_2934343090274465505_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/381834129_719529706884725_7783806463256877815_n-768x512.jpg",

    "https://sviet.org.in/wp-content/uploads/2023/12/381834129_719529706884725_7783806463256877815_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/386340821_728235362680826_262149617540361860_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/386340821_728235362680826_262149617540361860_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/161781646_10157624589231721_3460662827424543599_n-768x512.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/256815280_10158051495001721_7615990414712914570_n-768x825.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/357747372_664507919053571_2939064929629938445_n-768x533.jpg",
    "https://sviet.org.in/wp-content/uploads/2023/12/357747372_664507919053571_2939064929629938445_n-768x533.jpg"
]
const Ncc = () => {
    return (
        <Layout
            heading={"NCC"}
            shortDescription={"The NCC wing at SVIET, Chandigarh, is a dynamic and disciplined organization dedicated to fostering leadership, discipline, and a sense of national pride among our students."}
            imgSrc={"https://sviet.org.in/wp-content/uploads/2023/12/16.webp" || "/placeholder.svg"}
            secondImg={"https://sviet.org.in/wp-content/uploads/2023/12/Emblem_of_National_Cadet_Corps_India-200x300.png"}
            about={"The NCC wing at SVIET, Chandigarh, is a dynamic and disciplined organization dedicated to fostering leadership, discipline, and a sense of national pride among our students. Committed to shaping future leaders, the NCC wing provides a platform for holistic development through various military training programs, adventure activities, and community service initiatives. At SVIET, we believe in instilling values of patriotism, responsibility, and camaraderie, preparing our students not just for academic success but also for a fulfilling and responsible role in society. Join the NCC wing at SVIET and embark on a journey of self-discovery, leadership, and service to the nation."}
            images={images}
        />
    )
}

export default Ncc