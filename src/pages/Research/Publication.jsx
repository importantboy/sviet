import React from 'react'
import { Helmet } from 'react-helmet'

import { data } from './output'
const Publication = () => {
    return (
        <>
            <Helmet>
                <title>
                    Publications - SVIET
                </title>
            </Helmet>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Publications
                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Title of Paper
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name of the Author/s
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Year
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            ISSN Number
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Link for Papers
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, key) => (<tr key={key}>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {key + 1}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item["Title of Paper"]}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item["Name of the Author/s"]}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item["Year "]}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item["ISSN Number"]}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            <a
                                                className='text-blue-400 underline'
                                                target='_blank'
                                                href={item['Link for Papers']}
                                            >
                                                View
                                            </a>
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

export default Publication