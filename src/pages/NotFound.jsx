import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Home, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 pt-40 pb-10 via-white to-orange-50 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Animation */}
                <div className="relative mb-8">
                    <div className="text-[150px] md:text-[200px] font-bold text-gray-200 leading-none select-none">
                        404
                    </div>
                    <div className="absolute -top-60 inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-full p-6 shadow-lg animate-bounce">
                            <AlertTriangle className="w-16 h-16 text-orange-500" />
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <p className="text-gray-500">
                        Don't worry, let's get you back on track!
                    </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-orange-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-100 rounded-full opacity-50 animate-pulse delay-500"></div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                    >
                        <Link to="/" className="flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            Go Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-50 px-6 py-3 bg-transparent"
                    >
                        <Link
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </Link>
                    </Button>
                </div>


                {/* Help Text */}
                <div className="text-sm text-gray-500">
                    <p>
                        If you believe this is an error, please contact our support team.
                    </p>
                    <p className="mt-1">
                        Email:{" "}
                        <a
                            href="mailto:info@sviet.org.in"
                            className="text-blue-600 hover:underline"
                        >
                            info@sviet.org.in
                        </a>{" "}
                        | Phone:{" "}
                        <a
                            to="tel:+911234567890"
                            className="text-blue-600 hover:underline ml-1"
                        >
                            1800 120 1200
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
