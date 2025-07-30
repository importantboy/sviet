import React from 'react'
import { CheckCircle, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const objectives = [{
    id: 1,
    text: "Prevent gender discrimination and sexual harassment, by promoting gender equality amongst all employees and students"
},
{
    id: 2,
    text: "Deal with cases of sexual harassment, in a time bound manner, aiming at ensuring support services to the victimised in event of any harassment"
},
{
    id: 3,
    text: "Recommend appropriate punitive action against the accused to the Director."
},

]
const roles = [{
    id: 1,
    text: "To ensure that appropriate action is taken against the offender"
},
{
    id: 2,
    text: "To ensure that victims and witnesses are not victimized or discriminated because of their complaint."
},
{
    id: 3,
    text: "Recommend appropriate punitive action against the accused to the Director."
},

]
const complaints = [{
    id: 1,
    text: "A complaint of gender discrimination/sexual harassment may be lodged with any member of Women Cell in writing by the complainant."

},
{ id: 2, text: "Under special circumstances an individual, who may be a friend/colleague/teacher/parent of the complainant, may make a written complaint on behalf of the complainant." },
{ id: 3, text: "A written complaint to the Women Cell may be addressed to the Convener of the Women Cell. If a written complaint is made to the Director, Dean, Registrar or any of the SVIET members, the complaint shall be forwarded to the Convener of the Women Cell." }]
const data = [
    {
        srNo: 1, name: "Dr. Meena Thakur", Designation: "Convenor",
    },
    {
        srNo: 2, name: "Ms. Roopshikha", Designation: "Co-Ordinator",
    },
    {
        srNo: 3, name: "Dr. Savita", Designation: "Member",
    },
    {
        srNo: 4, name: "Dr. Indu Batra", Designation: "Member",
    },
    {
        srNo: 5, name: "Dr. Manpreet Kaur", Designation: "Member",
    },
]
const WomenCell = () => {
    return (
        <>
            <Helmet>
                <title>
                    WOMEN GRIEVANCES CELL - SVIET
                </title>
            </Helmet>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            WOMEN GRIEVANCES CELL

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <p>
                                    According to the Constitution of India, Equality is a Fundamental Right that includes the right to equality before law, forbidding discrimination and equality of opportunities in matters of public employment. Equality between men and women, right to work, education and to public assistance in case of unemployment, old age, sickness, disablement, provision of just and humane conditions for work and maternity relief, are important Directive Principles of State Policy.                            </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            OBJECTIVES
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            {objectives.map(item => (
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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            THE ROLE OF THE WOMEN GRIEVANCES CELL
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            {roles.map(item => (
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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            COMPLAINT REDRESSAL
                            PROCEDURE FOR THE COMPLAINT                        </h2>
                        <div className="space-y-4 text-gray-700">
                            {complaints.map(item => (
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
                            Members of Women Grievances Cell                       </h2>


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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                            Link to the UGC Saksham Portal
                        </h2>
                        <div className="flex gap-4 w-full items-center justify-center  text-gray-700">
                            <Button variant={"outline"}>
                                <Link to="https://saksham.ugc.ac.in/" target='_blank'>
                                    Click here
                                </Link>
                            </Button>
                            <Button variant={"secondary"}>
                                <Link to="https://sviet.org.in/wp-content/uploads/2023/11/Women-Complaint-Form.pdf" target='_blank'>
                                    Download Complaint Form
                                </Link>
                            </Button>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WomenCell
