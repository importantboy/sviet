import React from 'react'
import { Helmet } from 'react-helmet'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableCell, TableHead, TableBody } from '@/components/ui/table'

const boardMembers = [
  {
    position: "Chairman",
    name: "Mr. Ashwani Garg",
  },
  {
    position: "President",
    name: "Ms. Ashok Garg",
  },
  {
    position: "Member (Director Secretarial)",
    name: "Mr. Vishal Garg",
  },
  {
    position: "Member (Director Project)",
    name: "Mr. Sahil Garg",
  },
  {
    position: "Member (Director Finance)",
    name: "Mr. Ankur Gupta",
  },
  {
    position: "Member (Director Placement)",
    name: "Adv. Shubham Garg",
  },
  {
    position: "Member (Director Operations)",
    name: "Mr. Ankur Gill",
  },
  {
    position: "Member (Director Academics)",
    name: "Dr. Sanjeev Saini",
  },
  {
    position: "Member Secretary (Principal-SVIET)",
    name: "Dr. Pertik Garg"
  },
  {
    name: "Dr. Ashok Goyal",
    position: "Member (Director-IQAC)"
  },
  {
    position: "Member (Finance Officer)",
    name: "CA Sachin Jain",
  },
  {
    position: "Member (Industrialist Member)",
    name: "Mr. Navpreet Singh",
  },

]


const GoverningCouncil = () => {
  return (
    <>
      <Helmet>
        <title>
          Governing Council - SVIET
        </title>
      </Helmet>
      {/* Board Constitution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Board Constitution
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our Board of Management comprises distinguished professionals from
              various fields, bringing diverse expertise to guide the institution's
              growth and development.
            </p>
          </div>

          {/* Table View for Desktop */}
          <div className="block">
            <Card className="shadow-lg pt-0 overflow-hidden ">
              <CardContent className="p-0">
                <Table >
                  <TableHeader>
                    <TableRow className="bg-blue-50">

                      <TableHead className="font-bold py-4 px-10 text-blue-900">
                        Sr. No
                      </TableHead>
                      <TableHead className="font-bold py-4 px-10 text-blue-900">
                        Name
                      </TableHead>
                      <TableHead className="font-bold py-4  px-10 text-blue-900">
                        Position
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

        </div>
      </section>
    </>)
}

export default GoverningCouncil