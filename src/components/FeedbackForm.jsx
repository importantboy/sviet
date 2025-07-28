import * as React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Helmet } from "react-helmet"

export default function FeedbackForm({
    heading = "Student Feedback",
    subHeading = "Your Feedback Matters",
    fields,
    submitButtonText = "Submit"
}) {
    const initialFormData = {}
    fields.forEach(field => {
        initialFormData[field.name] = ""
    })
    const [formData, setFormData] = React.useState(initialFormData)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleRadioChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Feedback Form Data:", formData)
        // Here you would typically send the data to a backend API
        alert("Feedback submitted! Check console for data.")
        // Optionally reset form
        setFormData(initialFormData)
    }

    return (
        <>
            <Helmet>
                <title>{heading} - SVIET</title>
            </Helmet>
            <div className="container mx-auto px-4 py-8 md:py-12">
                {heading && (
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                        {heading}
                    </h1>
                )}
                {subHeading && <p className="text-lg text-gray-700 mb-8">{subHeading}</p>}

                <Card className="shadow-lg p-6 md:p-8">
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {fields.map((field, index) => (
                                <div key={index} className="space-y-2">
                                    <Label htmlFor={field.name}>{field.label}</Label>
                                    {field.type === "text" && (
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type="text"
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            required={field.required}
                                        />
                                    )}
                                    {field.type === "date" && (
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type="date"
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            required={field.required}
                                        />
                                    )}
                                    {field.type === "textarea" && (
                                        <Textarea
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            rows={4}
                                            required={field.required}
                                        />
                                    )}
                                    {field.type === "radio" && field.options && (
                                        <RadioGroup
                                            name={field.name}
                                            value={formData[field.name]}
                                            onValueChange={value =>
                                                handleRadioChange(field.name, value)
                                            }
                                            className="flex flex-col space-y-1"
                                        >
                                            {field.options.map(option => (
                                                <div
                                                    key={option.value}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <RadioGroupItem
                                                        value={option.value}
                                                        id={`${field.name}-${option.value}`}
                                                    />
                                                    <Label htmlFor={`${field.name}-${option.value}`}>
                                                        {option.label}
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    )}
                                </div>
                            ))}

                            <Button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white"
                            >
                                {submitButtonText}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
