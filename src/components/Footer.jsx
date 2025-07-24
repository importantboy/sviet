import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
    { title: "About", href: "/about" },
    { title: "Courses", href: "/courses" },
    { title: "Contact Us", href: "/contact" },
    { title: "Student ERP Login", href: "/student-erp" },
    { title: "Faculty ERP Login", href: "/faculty-erp" },
    { title: "E-Governance", href: "/e-governance" },
    { title: "SVGOI", href: "/svgoi" },
    { title: "Examination Cell", href: "/examination-cell" },
    { title: "Mandatory Disclosure", href: "/mandatory-disclosure" }
]

const importantLinks = [
    { title: "RTI", href: "/rti" },
    { title: "IQAC", href: "/iqac" },
    { title: "NAAC", href: "/naac" },
    { title: "SSR", href: "/ssr" },
    { title: "NAD", href: "/nad" },
    { title: "AISHIE", href: "/aishie" },
    { title: "ABC", href: "/abc" }
]

const statutoryCells = [
    { title: "SC/ST Committee", href: "/sc-st-committee" },
    { title: "Grievance Redressal Committee", href: "/grievance-redressal" },
    { title: "Women Grievances Cell", href: "/women-grievances" },
    { title: "Anti-ragging Committee", href: "/anti-ragging" },
    { title: "OBC Cell", href: "/obc-cell" },
    { title: "Internal Complaints Cell", href: "/internal-complaints" },
    { title: "Women Helpline", href: "/women-helpline" }
]

const socialLinks = [
    { icon: Facebook, href: "/facebook", label: "Facebook" },
    { icon: Instagram, href: "/instagram", label: "Instagram" },
    { icon: Youtube, href: "/youtube", label: "YouTube" }
]

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Top Section - Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
                        Join Us
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-700 mb-6 max-w-4xl mx-auto leading-tight">
                        And Give Your Learning The Flight it Deserves
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors bg-transparent"
                        asChild
                    >
                        <Link to="/apply">Apply</Link>
                    </Button>
                </div>
            </div>

            {/* Main Footer Section */}
            <div className="bg-slate-800 text-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Contact Info
                            </h3>
                            <p className="text-slate-300 text-sm mb-6">
                                Get in touch with us:
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">
                                            Address:
                                        </p>
                                        <p className="text-sm text-slate-300">
                                            Chandigarh - Patiala Highway, Ram Nagar, Banur 140601
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">
                                            Mobile:
                                        </p>
                                        <p className="text-sm text-slate-300">+91- 94652 33333</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">
                                            Toll Free:
                                        </p>
                                        <p className="text-sm text-slate-300">1800 120 1200</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">Email:</p>
                                        <div className="text-sm text-slate-300 space-y-1">
                                            <p>info@sviet.org.in</p>
                                            <p>admission@sviet.org.in</p>
                                            <p>hr@sviet.org.in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Quick Links
                            </h3>
                            <nav className="space-y-2">
                                {quickLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className="block text-sm text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Important Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Important Links
                            </h3>
                            <nav className="space-y-2">
                                {importantLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className="block text-sm text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Statutory Cells */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Statutory Cells
                            </h3>
                            <nav className="space-y-2">
                                {statutoryCells.map(link => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className="block text-sm text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-12 pt-8 border-t border-slate-700">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                            <div className="text-sm text-slate-400">
                                © 2024 SVIET. All rights reserved.
                            </div>

                            <div className="flex space-x-4">
                                {socialLinks.map(social => {
                                    const Icon = social.icon
                                    return (
                                        <Link
                                            key={social.href}
                                            to={social.href}
                                            className="p-2 rounded-full bg-slate-700 hover:bg-blue-600 transition-colors"
                                            aria-label={social.label}
                                        >
                                            <Icon className="h-5 w-5 text-white" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
