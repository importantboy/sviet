import React from 'react'
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet'

const data = [
    {
        srNo: 1, name: "Dr.Pertik Garg", Designation: "CHAIRPERSON", Emails: "principal@sviet.ac.in"
    },
    {
        srNo: 2, name: "Ms. Shivani Guleria", Designation: "CONVENER", Emails: "registrar@sviet.org.in"
    },
    {
        srNo: 3, name: "Mr. Tajamul Saqib", Designation: "Member", Emails: "registrar@sviet.org.in"
    },
    {
        srNo: 4, name: "Mr. Mani Ram", Designation: "HOSTEL WARDEN (Boys)", Emails: "registrar@sviet.org.in"
    },
    {
        srNo: 5, name: "Ms. Pushpa Goyal", Designation: "HOSTEL WARDEN (Girls)", Emails: "registrar@sviet.org.in"
    },
]
const Grivence = () => {
    return (
        <>
            <Helmet>
                <title>
                    GRIEVANCE REDRESSAL COMMITTEE - SVIET
                </title>
            </Helmet>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            GRIEVANCE REDRESSAL COMMITTEE

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    Students Grievance Redressal Committee (SGRC) is established to listen to the grievances of student as well as to resolve it immediately based on the sensitivity of the problem. Students can express their grievance by Contact Us. They can meet the Chairman of the Redressal committee in person if they want to. The committee will take action immediately and assures the grievance within a week.                             </p>
                            </div>



                        </div>
                    </div>
                </div>
            </section>




            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Grievance Redressal Committee Members:
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

export default Grivence

