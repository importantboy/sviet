
import * as React from "react"
import { href, Link } from "react-router-dom"
import { ChevronDown, Menu, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const navigationItems = [
    {
        title: "About",
        items: [
            { title: "Overview", href: "/about" },
            { title: "About SVGOI", href: "/about-svgoi" },
            { title: "About SVIET", href: "/about-sviet" },
            { title: "Vision and Mission", href: "/vision-mission" },
            { title: "Strategic Plan", href: "https://sviet.org.in/wp-content/uploads/Strategic-Plan_0001-3.pdf", target: true },
            {
                title: "Board of Management",
                subItems: [

                    { title: "Overview", href: "/board-of-management", },
                    { title: "Governing Council", href: "/governing-council-2" },
                    { title: "Finance Committee", href: "/finance-committee-2" },

                ]
            },
            { title: "From The Management Desk", href: "/from-the-management" },
            { title: "Awards & Recognitions", href: "/awards-and-recognitions" }
        ]
    },
    {
        title: "Programs",
        items: [
            {
                title: "U.G",
                subItems: [
                    {
                        title: "B. Tech",
                        subItems: [
                            {
                                title: "Computer Science Engineering",
                                href: "/computer-science-engineering"
                            },
                            {
                                title: "Civil Engineering",
                                href: "/civil-engineering"
                            },
                            {
                                title: "Mechanical Engineering",
                                href: "/mechanical-engineering"
                            },
                            {
                                title: "Electrical Engineering",
                                href: "/electrical-engineering"
                            },
                            {
                                title: "Electronics and Communication Engineering",
                                href: "/ece"
                            },
                            {
                                title: "Computer Science & Design",
                                href: "/csd"
                            }
                        ]
                    },

                ]
            },
            {
                title: "P.G",
                subItems: [
                    {
                        title: "M. Tech",
                        subItems: [
                            {
                                title: "M.Tech– Computer Science & Engineering",
                                href: "/m-tech"
                            },
                            {
                                title: "M.Tech– Electronics and Communication Engineering",
                                href: "/m-tech-electronics"
                            },
                            {
                                title: "M. Tech Mechanical Engineering",
                                href: "/mtech-me"
                            },

                        ]
                    },
                    {
                        title: "Master of Computer Applications",
                        href: "/mca",

                    },
                    {
                        title: "Master of Business Administration",
                        href: "/business-administration",

                    },

                ]
            },
            {
                title: "Diploma",
                subItems: [
                    {
                        title: "Mechanical Engineering – Diploma",
                        href: "/mechanical-engineering-diploma",

                    },
                    {
                        title: "Civil Engineering – Diploma",
                        href: "/civil-engineering-diploma",

                    },


                ]
            },
        ]
    },
    {
        title: "NAAC",
        items: [
            { title: "IQAC", href: "/iqac" },

            { title: "Declaration", href: "/" },
            {
                title: "Best Practices & Distinctiveness", href: "/best-practices-distinctiveness"
            },
        ]
    },
    {
        title: "Placements",
        href: "/placements"
    },
    {
        title: "Research",
        items: [
            { title: "Publications", href: "/pubications", },
            { title: "Patents", href: "/patents" },
            { title: "Books and Edited Chapters", href: "/books" },
            { title: "Collaborations", href: "/mous" },
            { title: "Research Projects", href: "/research-projects" },
            { title: "Earn While Learn", href: "/earn-while-learn" },
        ]
    },
    {
        title: "More",
        items: [
            {
                title: "Outreach", subItems: [
                    { title: "NSS", href: "/nss" },
                    { title: "NCC", href: "/ncc" },
                    { title: "Activities", href: "/activity" },

                ]
            },
            {
                title: "Feedback", subItems: [
                    { title: "Student Feedback", href: "/student-feedback" },
                    { title: "Alumini Feedback", href: "/alumini-feedback-form" },
                    { title: "Faculty Feedback", href: "/faculty-feedback" },
                    { title: "Employer Feedback Form", href: "/employer-feedback-form" },
                    { title: "Action Taken Report", href: "https://sviet.org.in/wp-content/uploads/ATR.pdf", target: true },
                ]
            },
            { title: "Contact Us", href: "https://www.sviet.ac.in/contact-us", target: true },
            {
                title: "Green & Clean Campus", subItems: [
                    { title: "Waste Management Policy", href: "https://sviet.org.in/wp-content/uploads/Waste_0001.pdf", target: true },
                    { title: "Green Policy", href: "https://sviet.org.in/wp-content/uploads/Green-policy1_0001.pdf", target: true },
                    { title: "Waste Management Policy", href: "https://sviet.org.in/wp-content/uploads/Water_0001.pdf", target: true },
                ]
            },
            {
                title: "We are International", subItems: [
                    { title: "International Students", href: "/international-students" },
                ]
            },
            { title: "HR Manual", href: "https://sviet.org.in/wp-content/uploads/HR-Manual.pdf", target: true },
        ]
    }
]

const topNavLinks = [
    { title: "Sviet In Media", href: "/media" },
    { title: "Gallery", href: "/gallery" },
    { title: "Scholarships", href: "https://sviet.org.in/wp-content/uploads/2023/12/SS-FORM.pdf", target: true },
    { title: "Apply Online", href: "https://admission.sviet.ac.in/", highlight: true, target: true }
]

// Recursive component for dropdown menu items
function DropdownMenuItems({ items }) {
    return (
        <>
            {items.map(item => {
                if (item.subItems) {
                    return (
                        <DropdownMenuSub key={item.title}>
                            <DropdownMenuSubTrigger>
                                <Link
                                    target={item.target ? "_blank" : undefined}
                                    rel={item.target ? "noopener noreferrer" : undefined}
                                    to={item.href}
                                    className="flex items-center w-full">
                                    {item.title}
                                </Link>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                                <DropdownMenuItems items={item.subItems} />
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    )
                }
                return (
                    <DropdownMenuItem key={item.title} asChild>
                        <Link target={item.target ? "_blank" : undefined}
                            rel={item.target ? "noopener noreferrer" : undefined} to={item.href}>{item.title}</Link>
                    </DropdownMenuItem>
                )
            })}
        </>
    )
}

// Mobile navigation recursive component
function MobileNavItem({ item }) {
    const [isOpen, setIsOpen] = React.useState(false)

    if (!item.items && !item.subItems) {
        return (
            <Link
                to={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md"
            >
                {item.title}
            </Link>
        )
    }

    const itemsToRender = item.items || item.subItems

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md">
                {item.title}
                <ChevronDown
                    className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1">
                {itemsToRender.map((subItem, index) => (
                    <MobileNavItem key={index} item={subItem} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)


    return (
        <>
            {/* Top Header */}
            <div className="bg-blue-900 text-white py-2 px-4">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
                        <span className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            1800 120 1200
                        </span>
                        <span className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            <a href="mailto:info@sviet.org.in">
                                info@sviet.org.in
                            </a>
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <nav className="flex gap-3 font-medium">
                            {topNavLinks.map(link => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    target={link.target ? "_blank" : undefined}
                                    rel={link.target ? "noopener noreferrer" : undefined}
                                    className={cn(
                                        "hover:border-b border-white transition-colors",
                                        link.highlight && "text-yellow-300 hover:border-yellow-300"
                                    )}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <Link to="/">
                                <img
                                    src="https://sviet.org.in/wp-content/uploads/accrediated-2.png" alt="College Logo"
                                    className="h-14"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navigationItems.map(item => (
                                <DropdownMenu key={item.title}>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "flex items-center text-blue-900 hover:text-blue-700 font-medium hover:bg-transparent",
                                            )}
                                        >
                                            {
                                                item.title !== "Placements" ? <>{item.title}<ChevronDown className="ml-1 h-4 w-4" /></> : <><Link
                                                    className="flex items-center text-blue-900 hover:text-blue-700 font-medium hover:bg-transparent"
                                                    to={item.href}>
                                                    {item.title}
                                                </Link></>
                                            }

                                        </Button>
                                    </DropdownMenuTrigger>
                                    {item.items?.length > 0 && <DropdownMenuContent className="w-64" align="start">
                                        <DropdownMenuItems items={item.items} />
                                    </DropdownMenuContent>}
                                </DropdownMenu>
                            ))}


                        </div>

                        {/* Mobile Menu Button */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="lg:hidden bg-transparent"
                                >
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-80 overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle className="text-left">Navigation</SheetTitle>
                                </SheetHeader>
                                <div className="mt-6 space-y-2">
                                    {/* Top nav links for mobile */}
                                    <div className="border-b pb-4 mb-4">
                                        <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-2">
                                            Quick Links
                                        </h3>
                                        <div className="space-y-1">
                                            {topNavLinks.map(link => (
                                                <Link
                                                    target={link.target ? "_blank" : undefined}
                                                    rel={link.target ? "noopener noreferrer" : undefined}
                                                    key={link.href}
                                                    to={link.href}
                                                    className={cn(
                                                        "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md",
                                                        link.highlight && "text-yellow-600 font-medium"
                                                    )}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {link.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Main navigation */}
                                    {navigationItems.map(item => (
                                        <MobileNavItem key={item.title} item={item} />
                                    ))}


                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </>
    )
}
