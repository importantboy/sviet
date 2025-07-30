import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const ITEMS_PER_PAGE = 10;
import { data } from './output'
import { FastForward, StepBack, StepForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const Publication = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const currentData = data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        }
    };
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

                        <section className="py-16 bg-white">
                            <div className="container mx-auto px-4">
                                <div className="max-w-6xl mx-auto">

                                    <div className="block">
                                        <Card className="shadow-lg pt-0 overflow-hidden ">
                                            <CardContent className="p-0">
                                                <Table >
                                                    <TableHeader>
                                                        <TableRow className="bg-blue-50">

                                                            <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                                Sr. No
                                                            </TableHead>

                                                            <TableHead className="font-bold py-4  px-10 text-blue-900">
                                                                Title of Paper
                                                            </TableHead>
                                                            <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                                Name of the Author/s
                                                            </TableHead>
                                                            <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                                Year
                                                            </TableHead>
                                                            <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                                ISSN Number
                                                            </TableHead>
                                                            <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                                Link for Papers
                                                            </TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody >

                                                        {currentData.map((item, index) => (
                                                            <TableRow key={index} className=" hover:bg-gray-50">
                                                                <TableCell className="font-semibold py-4 px-10">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</TableCell>
                                                                <TableCell className="py-4 max-w-60 whitespace-normal break-words font-medium px-10">
                                                                    {item['Title of Paper']}
                                                                </TableCell>
                                                                <TableCell className="font-semibold py-4 px-10">
                                                                    {item['Name of the Author/s']}
                                                                </TableCell>
                                                                <TableCell className="font-semibold py-4 px-10">
                                                                    {item['Year ']}
                                                                </TableCell>
                                                                <TableCell className="font-semibold py-4 px-10">
                                                                    {item['ISSN Number']}
                                                                </TableCell>
                                                                <TableCell className="text-center text-blue-500 underline font-semibold py-4 px-10">
                                                                    <span className='cursor-pointer' onClick={() => window.open(`${item['Link for Papers']}`)}>
                                                                        View
                                                                    </span>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </CardContent>
                                        </Card>
                                        {/* Pagination Controls with Instruction */}

                                        <div className="mt-6 px-4">
                                            <p className="text-sm text-gray-600 mb-3 text-center lg:text-left">
                                                👉 Scroll left or right if the table is cut off on your screen.
                                            </p>

                                            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4">
                                                <div className="flex gap-2 flex-wrap">
                                                    <Button
                                                        onClick={() => goToPage(1)}
                                                        variant={"ghost"}

                                                        disabled={currentPage === 1}
                                                        className=" disabled:cursor-not-allowed"
                                                    >
                                                        <FastForward className="rotate-180" />
                                                    </Button>
                                                    <Button
                                                        variant={"ghost"}

                                                        onClick={() => goToPage(currentPage - 1)}
                                                        disabled={currentPage === 1}
                                                        className="disabled:cursor-not-allowed"
                                                    >
                                                        <StepBack />
                                                    </Button>

                                                    <Badge variant={"outline"}>

                                                        {currentPage} of {totalPages}
                                                    </Badge>

                                                    <Button
                                                        variant={"ghost"}
                                                        onClick={() => goToPage(currentPage + 1)}
                                                        disabled={currentPage === totalPages}
                                                        className="disabled:cursor-not-allowed"
                                                    >
                                                        <StepForward />
                                                    </Button>
                                                    <Button
                                                        variant={"ghost"}

                                                        onClick={() => goToPage(totalPages)}
                                                        disabled={currentPage === totalPages}
                                                        className="disabled:cursor-not-allowed"
                                                    >
                                                        <FastForward />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div></section>
                    </div></div></section>
        </>
    )
}

export default Publication