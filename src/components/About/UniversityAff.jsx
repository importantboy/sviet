import React from 'react'
import { Card, CardContent, } from '../ui/card'
import { Trophy } from "lucide-react";
import { Badge } from 'lucide-react';
import { Button } from '../ui/button';
const UniversityAff = ({ data, UNINAME, }) => {
    return (<div className="max-w-4xl mb-2 mx-auto">
        <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R5W0BnG0MX2G0jgHvMWBDo6YFu8cRa.png"
                    alt="IKGPTU Logo"
                    className="w-32 h-32 mx-auto mb-6 bg-white rounded-full p-4 shadow-lg"
                />
                <h3 className="text-3xl font-bold mb-2">{UNINAME}</h3>
                <p className="text-blue-100 text-lg"></p>
            </div>

            <CardContent className="p-8">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Academic Year Affiliations</h4>
                    <p className="text-gray-600">Our sustained partnership across multiple academic years</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200"
                        >
                            <CardContent className="p-6 text-center">
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Trophy className="h-8 w-8 text-white" />
                                </div>
                                <h5 className="text-lg font-bold text-gray-900 mb-2">{item.year}</h5>
                                <Badge className="bg-green-100 text-green-800 font-medium">{item.status}</Badge>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full bg-transparent hover:bg-blue-50 hover:text-blue-700 border-blue-200"
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>


            </CardContent>
        </Card>
    </div>

    )
}

export default UniversityAff