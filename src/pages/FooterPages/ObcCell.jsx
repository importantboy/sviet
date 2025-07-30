import React from 'react'
import { CheckCircle, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet'
const qualityAssuranceActivities
    = [{
        id: 1,
        text: "To ensure there is no caste-based discrimination in the Institution."
    },
    {
        id: 2,
        text: "To take up measures for achieving the objectives and targets laid down by the Government of India for the OBC students and employees."
    },
    {
        id: 3,
        text: "Guide the OBC students of the Institute, to optimally utilize the benefits of the schemes offered by the State Governments, Government of India (GOI) and UGC."
    },

    ]
const data = [
    {
        srNo: 1, name: "Dr.Pertik Garg", Designation: "Chairperson", Emails: "principal@sviet.ac.in"
    },
    {
        srNo: 2, name: "Mr. Himanshu Rao", Designation: "Co-Ordinator", Emails: "registrar@sviet.org.in"
    },
    {
        srNo: 3, name: "Er. Ankur Gill", Designation: "Member", Emails: "registrar@sviet.org.in"
    },
    {
        srNo: 4, name: "Mr. Talwinder Singh", Designation: "Member", Emails: "registrar@sviet.org.in"
    },
    {
        srNo: 5, name: "Mr. Jaspreet Singh", Designation: "Member", Emails: "registrar@sviet.org.in"
    },
]
const ObcCell = () => {
    return (
        <>
            <Helmet>
                <title>
                    OBC Cell - SVIET
                </title>
            </Helmet>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            OBC welfare and Grievance Committee

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    To adhere to the rules of Government of India and Following the directions issued by UGC and I.K. Gujral Punjab Technical University, the other backward Caste Committee in the Institution is constituted to ensure the continued welfare of the reserved category. The committee also acts as a redressal forum for the students and employees belonging to the OBC category to reach out in case of any grievances that they may face.                            </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Objectives of the Committee:
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

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of Committee                        </h2>


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
                                            Email
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (<tr key={item.srNo}>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.srNo}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Designation}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Emails}
                                        </td>

                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ObcCell