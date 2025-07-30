import React from 'react'
import { Helmet } from 'react-helmet'

const data = [
    {
        srNo: 1, name: "Er. Vishal Garg", Designation: "Director", Contact: "8557860408"
    },
    {
        srNo: 2, name: "Ms. Roop Shikha", Designation: "Assistant Professor	", Contact: "9888871683"
    },
    {
        srNo: 3, name: "Ms. Shivani Anand", Designation: "Assistant Professor", Contact: "9878086666"
    },
    {
        srNo: 4, name: "Mr. Mani Ram", Designation: "Hostel Warden (Boys)", Contact: "7827295510"
    },
    {
        srNo: 5, name: "Ms. Pushpa Goyal", Designation: "Hostel Warden (Girls)", Contact: "7837300466"
    },
    {
        srNo: 6, name: "Mr. Eshaan Singh Kushwaha", Designation: "Student", Contact: "9988932675"
    },
    {
        srNo: 7, name: "Ms. Vaishnavi Bajpai", Designation: "Student", Contact: "9455688680"
    },
]
const InternalComplaintCell = () => {
    return (
        <>
            <Helmet>
                <title>
                   Internal Complaints Cell - SVIET
                </title>
            </Helmet>

    
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of  Committee                        </h2>


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
                                            Contact No
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
                                            {item.Contact}
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

export default InternalComplaintCell