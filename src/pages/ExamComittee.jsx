import React from 'react'
import { Helmet } from 'react-helmet'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableCell, TableHead, TableBody } from '@/components/ui/table'

const boardMembers = [
    {
        position: "Controller of Examination",
        name:"Dr. Pertik Garg"
    },
    {
        position: "Assistant Controller of Examination",
        name: "Dr. Vandana",
    },
    {
        position: "Superintendent",
        name: "Er. Shivani Guleria",
    },
    {
        position: "Deputy Superintendent",
        name: "Ms. Gurwinder Kaur",
    },
    {
        position: "Printing Cell Coordinator",
        name: "Er. Anchal Goyal",
    },
    {
        name: "Mr. Ranbir Singh",
        position: "Helper Printing Cell",
    },
    {
        name: "Ms. Rajwinder Kaur",
        position: "Member (Clerk)",
    },
    {
        position: "Member (Dastry)",
        name: "Ms. Sandeep Kaur",
    },
    

]

const ExamComittee = () => {
    return (
        <>
            <Helmet>
                <title>
                    Exam Committee - SVIET
                </title>
            </Helmet>
            {/* Board Constitution */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            Exam Committee
                        </h2>
                       
                    </div>

                    {/* Table View for Desktop */}
                    <div className="hidden lg:block">
                        <Card className="shadow-lg pt-0 overflow-hidden ">
                            <CardContent className="p-0">
                                <Table >
                                    <TableHeader>
                                        <TableRow className="bg-blue-50">

                                            <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                Sr. No
                                            </TableHead>
                                            <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                Name of Employee
                                            </TableHead>
                                            <TableHead className="font-bold py-4  px-10 text-blue-900">
                                                Designation
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody >
                                        {boardMembers.map((member, index) => (
                                            <TableRow key={index} className=" hover:bg-gray-50">
                                                <TableCell className="font-semibold py-4 px-10">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10">
                                                    {member.name}
                                                </TableCell>
                                                <TableCell className="py-4 font-medium px-10 text-blue-900">
                                                    {member.position}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Card View for Mobile/Tablet */}
                    <div className="lg:hidden grid md:grid-cols-2 gap-6">
                        {boardMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-4 mb-4">

                                        <div>
                                            <h3 className="text-lg font-bold text-blue-900">
                                                {member.name}
                                            </h3>
                                            <p className="text-blue-600 font-medium">{member.position}</p>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExamComittee