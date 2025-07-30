import React from 'react'
import { CheckCircle, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet'
const qualityAssuranceActivities
    = [{
        id: 1,
        text: "The official/faculty members should desist from any act of discrimination against SC/ST students on grounds of their social origin."
    },
    {
        id: 2,
        text: "The Universities/College may develop a page on their website for lodging such complaints of caste discrimination by SC/ST students and also place a complaint register in the Registrar/Principal Office for the purpose. If any such incident comes to the notice of the authorities, action should be taken against the erring official/faculty members promptly."
    },
    {
        id: 3,
        text: "The University and colleges should ensure that no official/faculty members indulge in any kind of discrimination against any community or category of students."
    },
    {
        id: 4,
        text: "The University may constitute a committee to look into the discrimination complaints received from the SC/ST/OBC students/Teachers and non-teaching staff."
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
const ScSt = () => {
    return (
        <>
            <Helmet>
                <title>
                    SC/ST Committee - SVIET
                </title>
            </Helmet>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            COMMITTEE FOR SC/ST

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    In the College, a Standing Committee has been constituted to oversee the welfare of SC/ST students. The committee is headed by the Principal who serves as the Chairman. Its primary objective is to ensure the well-being and support of students belonging to Scheduled Castes and Scheduled Tribes.                             </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    Additionally, a Special Cell has been established in the college specifically dedicated to the welfare of SC/ST students. The main purpose of this cell is to effectively implement various schemes provided by the UGC (University Grants Commission), Government of India, and State Governments. These schemes include scholarships, stipends, and other forms of financial assistance.                         </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    To ensure transparency and awareness, the college notifies and displays the guidelines for different types of scholarships and stipends. These guidelines are revised periodically by the Central and State Governments. By making them publicly available on notice boards, students can easily access the necessary information regarding eligibility, application procedures, and other relevant details.                       </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            UGC Guidelines
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
                            Members of SC/ST Committee                        </h2>


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

export default ScSt