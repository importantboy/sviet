const notices = [
    {
        id: 1,
        title: "Annual Sports Day 2024 - Registration Open",
        date: "2024-01-15",
        type: "Event",
        isNew: true
    },
    {
        id: 2,
        title: "Mid-term Examination Schedule Released",
        date: "2024-01-14",
        type: "Academic",
        isNew: true
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting - Class 9th & 10th",
        date: "2024-01-13",
        type: "Meeting",
        isNew: false
    },
    {
        id: 4,
        title: "Science Exhibition - Project Submission Deadline",
        date: "2024-01-12",
        type: "Academic",
        isNew: false
    },
    {
        id: 5,
        title: "Winter Break Holiday Notice",
        date: "2024-01-10",
        type: "Holiday",
        isNew: false
    }
]
const quickLinks = [
   
    {
        title: "Application Form",
        href: "https://sviet.org.in/wp-content/uploads/2023/07/application_form.pdf",
        icon: NotebookPen,
        color: "blue"
    },
    {
        title: "E-Brochure",
        href: "https://sviet.org.in/wp-content/uploads/2023/07/SVGOI-Brochure-2023.pdf",
        icon: BookText,
        color: "purple"
    },
    {
        title: "Placement",
        href: "/placements",
        icon: GraduationCapIcon,
        color: "orange"
    },

]


import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, DollarSign, NotebookPen, BookText, GraduationCapIcon, Calendar } from "lucide-react"
import { Link } from 'react-router-dom'
const Notice = () => {
    return (
        <section className="py-12 md:py-16 bg-white" >
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                        Daily Updates & Notice Board
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">Stay updated with the latest announcements and events</p>
                </div>
                <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Notice Board - Now takes full width */}
                    <div className="lg:col-span-3">
                        <Card className="shadow-lg">
                            <CardHeader className="border-b shadow-md">
                                <CardTitle className="flex items-center text-blue-900">
                                    <Bell className="mr-2 h-5 w-5" />
                                    Latest Notices
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
                                    <div>
                                        {/* Repeat notices multiple times for infinite effect */}
                                        {notices.map((notice, index) => (
                                            <div
                                                key={`${notice.id}`}
                                                className={`p-4 border-b hover:bg-gray-50 transition-colors ${index < 2 ? "bg-blue-50/30" : ""
                                                    }`}
                                            >
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">

                                                    <h3 onClick={() => window.open(`${notice?.link ?? "https://google.com"}`, "_blank")} className="cursor-pointer font-semibold hover:text-blue-500 underline underline-offset-3 text-gray-900 flex-1">{notice.title}</h3>
                                                    <div className="flex items-center space-x-2">
                                                        <Badge variant="outline" className="text-xs">
                                                            {notice.type}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Calendar className="mr-1 h-4 w-4" />
                                                    {new Date(notice.date).toLocaleDateString("en-IN", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Links - Now single column */}
                    <div className="space-y-6">

                        <Card className="shadow-lg">
                            <CardHeader className="border-b shadow-md">
                                <CardTitle className="flex items-center text-blue-900">
                                    <Bell className="mr-2 h-5 w-5" />
                                    Quick Links
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                                <div className="space-y-3">
                                    {quickLinks.map((link) => {
                                        const Icon = link.icon
                                        return (
                                            <Link
                                                key={link.href}
                                                to={link.href}
                                                className={`block p-3 rounded-lg transition-colors ${link.color === "green"
                                                    ? "bg-green-50 hover:bg-green-100"
                                                    : link.color === "blue"
                                                        ? "bg-blue-50 hover:bg-blue-100"
                                                        : link.color === "purple"
                                                            ? "bg-purple-50 hover:bg-purple-100"
                                                            : link.color === "orange" && "bg-orange-50 hover:bg-orange-100"
                                                    }`}
                                            >
                                                <div className="flex items-center">
                                                    <Icon className={`mr-3 h-5 w-5 ${link.color === "green"
                                                        ? "text-green-600"
                                                        : link.color === "blue"
                                                            ? "text-blue-600"
                                                            : link.color === "purple"
                                                                ? "text-purple-600"
                                                                : link.color === "orange" && "text-orange-600"
                                                        }`} />
                                                    <span className="font-medium">{link.title}</span>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Notice