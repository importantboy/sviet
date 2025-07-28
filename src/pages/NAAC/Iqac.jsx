import Herosection from "@/components/Herosection"
import { Settings, CheckCircle } from "lucide-react"
import { useRef } from "react"
import { Helmet } from "react-helmet";
const qualityAssuranceActivities = [
  {
    id: 1,
    text: "Developing and applying quality benchmarks/parameters for academic and administrative activities of the university."
  },
  {
    id: 2,
    text: "Creating a learner-centric environment that promotes quality education and facilitates faculty development in adopting knowledge and technology for effective teaching and learning."
  },
  {
    id: 3,
    text: "Collecting feedback from students, parents, and stakeholders to evaluate the quality of institutional processes."
  },
  {
    id: 4,
    text: "Disseminating information about various quality parameters in higher education."
  },
  {
    id: 5,
    text: "Organizing workshops, seminars, and quality circles on quality-related themes to foster improvement and knowledge sharing."
  },
  {
    id: 6,
    text: "Documenting university programs and activities to facilitate quality enhancement."
  },
  {
    id: 7,
    text: "Acting as a central coordinating agency for quality-related activities and promoting the adoption and dissemination of good practices."
  },
  {
    id: 8,
    text: "Developing and maintaining an institutional database through Management Information Systems (MIS) to enhance institutional quality."
  },
  {
    id: 9,
    text: "Cultivating a culture of quality within the university."
  },
  {
    id: 10,
    text: "Preparing the Annual Quality Assurance Report (AQAR) based on the assessment criteria developed by relevant quality assurance bodies (e.g., NAAC, NBA, AB) in the prescribed format."
  },
  {
    id: 11,
    text: "Developing Quality Radars (QRs) and ranking integral units of the university biannually based on the AQAR."
  },
  {
    id: 12,
    text: "Collaborating with Student Quality Assurance Cells (SQACs) during pre and post-accreditation quality assessment processes to sustain and enhance quality."
  }
];

export default function Iqac() {


  return (
    <>
      <Helmet>
        <title>
          IQAC - SVIET
        </title>
      </Helmet>
      <div className="min-h-screen bg-gray-50" >
        {/* Hero Section */}

        <Herosection
          isIqac={true}
          heading={"IQAC"}
          shortDescription={"INTERNAL QUALITY ASSURANCE CELL"}
          imgSrc={"/placeholder.svg"}
        />

        {/* About IQAC Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                ABOUT IQAC
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p>
                    The reconstitution of IQAC is aimed at ensuring that quality enhancement and sustenance become a part of the institution’s regular activities. The guidelines provided by the UGC (University Grants Commission) under the XII Plan mandate the establishment and monitoring of IQAC in all universities. The primary objective behind this initiative is to promote a culture of quality consciousness within the institution, leading to overall improvement in the quality of education.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p>
                    The IQAC (Internal Quality Assurance Cell) serves as a centralized body within the university, responsible for facilitating the flow of accurate and consistent information related to quality assurance measures. It plays a crucial role in various aspects of education, including research, development, and record-keeping, among others.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p>
                    The effectiveness of external quality assessment conducted by NAAC (National Assessment and Accreditation Council) is closely linked to the efficiency and effectiveness of the internal quality systems and processes implemented by institutions. In order to ensure the success of NAAC’s assessment and accreditation process, it is important for universities to have a well-functioning IQAC in place.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Functions of IQAC Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Functions of IQAC
              </h2>
              <div className="space-y-4 text-gray-700">
                {qualityAssuranceActivities.map(item => (
                  <div id={item.id} className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p>
                      {item.text}
                    </p>
                  </div>))}


              </div>
            </div>
          </div>
        </section>

        {/* Members of IQAC Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Members of IQAC
              </h2>
              <p className="text-gray-700 mb-8">
                The following member of Internal Quality Assurance cell (IQAC) to work towards realization of the goal of quality enhancement and develop a system for conscious, consistant and catalytic improvement in the overall preformance of the institution.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                        Position
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                        Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        Chairperson
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        Dr. Pertik Garg (Principal-SVIET)                    </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        Administrative Officers
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        Mr. Ankur Gupta (Director Finance)                    </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 align-top">
                        Faculty Representative
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div>Ms. Vandana</div>
                        <div>Ms. Navdeesh Kaur</div>
                        <div>Ms. Shivani Guleria</div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        Management Representative
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        Er. Vishal Garg (Director Admin & Secretarial)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        Nominees from local society, students and alumini                    </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div>Ms. Pooja (Society Representative)</div>
                        <div>Ronit Jai Prakash (Student Representative)</div>
                        <div>Anam Rashid (Student Representative)</div>
                        <div>Mr. Monarchdeep Singh Chahal (Alumni)</div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        Employer/Industrialist Nominees                    </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div>Mr. Varun Garg (CEO, S-Digital Solutions),</div>
                        <div>Mr. Tarun Singla (MD, ENERGOS TECH)</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        IQAC Director
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        Dr. Ashok Goyal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Developing a high-class educational system dedicated to
                maintaining quality in all processes at all levels of SVIET.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Providing a flexible and accessible modern multi-disciplinary
                  knowledge system that produces future leaders for both and the
                  world.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mission Target Achievement"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}
