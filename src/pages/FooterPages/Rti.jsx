import { CheckCircle, Settings } from 'lucide-react';
import React from 'react'
import { Helmet } from 'react-helmet'
const qualityAssuranceActivities = [
    {
        id: 1,
        text: "Responsibilities and duties of its officers and employees."
    },
    {
        id: 2,
        text: "Rules, regulations, instructions, and records for discharging functions."
    },
    {
        id: 3,
        text: "Decision making process, including channels of supervision and accountability."
    },
    {
        id: 4,
        text: "Statement of the categories of documents that are held by the authorities and/or under their control."
    },
    {
        id: 5,
        text: "Rules set for discharge of its functions as part of the decision making process."
    },
    {
        id: 6,
        text: "Annual Accounts."
    },
    {
        id: 7,
        text: "Monthly remuneration received by each of its officers and employees."
    },
    {
        id: 8,
        text: "Arrangement for consultation with, or representation by the members of the public, through Research Council members who represent public interest and help formulate and oversee policies."
    },
    {
        id: 9,
        text: "Recipients of concessions, permits, etc. (not applicable)."
    },
    {
        id: 10,
        text: "Statement of Boards, Councils, Committees, and other bodies constituted as its part, such as the Research Council and Management Council."
    },
    {
        id: 11,
        text: "Information available in electronic form (Please browse concerned sections of this website)."
    }
];

const Rti = () => {
    return (
        <>
            <Helmet>
                <title>
                    Right To Information - SVIET
                </title>
            </Helmet>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            ABOUT RTI
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    Information sought under the Act would be scrutinized and considered if the RTI application received by Swami Vivekanand Institute of Engineering & Technology fulfils the criteria for providing the information sought and is in accordance with the provisions stipulated in the Act.                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Mandatory Disclosures:
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    Under the Right to Information Act (RTI) 2005 section 4(1) (b), following information has been disclosed and complied with RTI act 2005.                               </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            General Information and Mandate:
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            {qualityAssuranceActivities.map(item => (

                                <div key={item.id} className="flex items-start gap-3">
                                    <Settings className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <p>
                                        {item.text}
                                    </p>
                                </div>))}


                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Names, Designations and other particulars of the Public Information Officers (PIOs) and Assistant Publication Information Officers (APIOs):
                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Position
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">

                                            Contact Detail
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Email
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3">
                                            1
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            Ms. Pratibha
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            Legal Advisor
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            Public Information Officer
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            01762-507353
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            rti@sviet.org.in
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3">
                                            2
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            Mr. Rakesh Gupta
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            Assistant Registrar
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            Appellate Authority
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            01762-507353
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            rti@sviet.org.in
                                        </td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rti