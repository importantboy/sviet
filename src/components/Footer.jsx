import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
    { title: "About", href: "/about" },
    { title: "Courses", href: "/computer-science-engineering" },
    { title: "Contact Us", href: "https://www.sviet.ac.in/contact-us", target: true },
    {
        title: "Student ERP Login",
        href: "http://uj.servergi.com:8089/iSIMSVIET/Login",
        target: true
    },
    {
        title: "Faculty ERP Login",
        href: "http://uj.servergi.com:8089/SIMWEBSVIET/Login",
        target: true
    },
    {
        title: "E-Governance",
        href: "https://sviet.org.in/wp-content/uploads/E-Governance-Policy-_SVIET.pdf",
        target: true
    },
    { title: "SVGOI", href: "http://sviet.ac.in/", target: true },
    { title: "Examination Cell", href: "/exam-committee" },
    {
        title: "Mandatory Disclosure",
        href: "https://sviet.org.in/wp-content/uploads/Mandatory-Disclosure-SVIET-1-1.pdf",
        target: true
    },
];

const importantLinks = [
    { title: "RTI", href: "/rti" },
    {
        title: "IQAC",
        href: "https://sviet.org.in/wp-content/uploads/Composition-of-IQAC.pdf",
        target: true
    },
    { title: "NAAC", href: "http://naac.gov.in/index.php/en/", target: true },
    {
        title: "SSR",
        href: "https://sviet.org.in/wp-content/uploads/PBCOGN114641-Latest.pdf",
        target: true
    },
    { title: "NAD", href: "https://nad.gov.in/", target: true },
    { title: "AISHE", href: "https://aishe.gov.in/", target: true },
    { title: "ABC", href: "https://www.abc.gov.in/about.php", target: true },
];

const statutoryCells = [
    { title: "SC/ST Committee", href: '/sc-st-committee' },
    { title: "Grievance Redressal Committee", href: "/grievance-redressal-committee" },
    { title: "Women Grievances Cell", href: "/womens-cell" },
    { title: "Anti-ragging Committee", href: "/anti-ragging-policy" },
    { title: "OBC Cell", href: "/obc-cell-2" },
    { title: "Internal Complaints Cell", href: "/internal-complaint-cell" },
    { title: "Women Helpline", href: "https://sviet.org.in/wp-content/uploads/WhatsApp-Image-2024-04-09-at-19.17.31_881ebde6.jpg", target: true },
];

const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/svietofficial", label: "Facebook", target: true, },
    { icon: Instagram, href: "https://www.instagram.com/svietofficial", label: "Instagram", target: true },
    { icon: Youtube, href: "https://www.youtube.com/@svietchandigarh3067", label: "YouTube", target: true },
];

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
                        <a target="_blank" href="https://admission.sviet.ac.in/">Apply</a>
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
                                            Chandigarh - Patiala Highway, Ram
                                            Nagar, Banur 140601
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">
                                            Mobile:
                                        </p>
                                        <p className="text-sm text-slate-300">
                                            +91- 94652 33333
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">
                                            Toll Free:
                                        </p>
                                        <p className="text-sm text-slate-300">
                                            1800 120 1200
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">
                                            Email:
                                        </p>
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
                                {quickLinks.map((link) => (
                                    <a
                                        target={link.target ? "_blank" : undefined}
                                        key={link.href}
                                        href={link.href}
                                        className="block text-sm text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Important Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Important Links
                            </h3>
                            <nav className="space-y-2">
                                {importantLinks.map((link) => (
                                    <a
                                        target={link.target ? "_blank" : undefined}
                                        key={link.href}
                                        href={link.href}
                                        className="block text-sm text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Statutory Cells */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Statutory Cells
                            </h3>
                            <nav className="space-y-2">
                                {statutoryCells.map((link) => (
                                    <a
                                        target={link.target ? "_blank" : undefined}
                                        key={link.href}
                                        href={link.href}
                                        className="block text-sm text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-12 pt-8 border-t border-slate-700">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            target={social.target ? "_blank" : undefined}
                                            key={social.href}
                                            href={social.href}
                                            className="p-2 rounded-full bg-slate-700 hover:bg-blue-600 transition-colors"
                                            aria-label={social.label}
                                        >
                                            <Icon className="h-5 w-5 text-white" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
