import FeedbackForm from "@/components/FeedbackForm"

export default function EmployeeFeedback() {
    const ratingOptions = [
        { value: "very-good", label: "Very Good" },
        { value: "good", label: "Good" },
        { value: "fair", label: "Fair" },
        { value: "satisfactory", label: "Satisfactory" },
        { value: "unsatisfactory", label: "Unsatisfactory" },
    ]

    const yesNoOptions = [
        { value: "Strongly-Agree", label: "Strongly Agree" },
        { value: "Neither-Agree-not-Disagree", label: "Neither Agree not Disagree" },
        { value: "Disagree", label: "Disagree" },
    ]

    const feedbackFields = [
        { type: "text", name: "Name", label: "Name", placeholder: "Name", required: true },
        { type: "text", name: "Designation", label: "Designation", placeholder: "Designation", required: true },
        { type: "text", name: "Company / Organisation Name", label: "Company / Organisation Name", placeholder: "Company / Organisation Name", required: true },
        { type: "text", name: "Employer Phone", label: "Employer Phone", placeholder: "Employer Phone", required: true },
        { type: "text", name: "Employer Email", label: "Employer Email", placeholder: "Employer Email", required: true },
        {
            type: "radio",
            name: "Is the curriculum relevant for employability",
            label: "Is the curriculum relevant for employability",
            options: yesNoOptions,
        },

        {
            type: "radio",
            name: "Is the curriculum effective in developing innovative thinking",
            label: "Is the curriculum effective in developing innovative thinking",
            options: yesNoOptions,
        },
        {
            type: "radio",
            name: "Current syllabus is need based",
            label: "Current syllabus is need based",
            options: yesNoOptions,
        },
        {
            type: "radio",
            name: "Effectiveness of curriculum for development of entrepreneurship",
            label:
                "Effectiveness of curriculum for development of entrepreneurship", options: yesNoOptions,
        },
        {
            type: "radio",
            name: "How would you rate the personality of the student",
            label: "How would you rate the personality of the student",
            options: ratingOptions,
        },

        {
            type: "textarea",
            name: "Suggestions",
            label: "Suggestions : ",
            placeholder: "Type your suggestion here...",
        },
    ]
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <FeedbackForm
                    heading="Employer Feedback"
                    subHeading="Your Feedback Matters"
                    fields={feedbackFields}
                    submitButtonText="Submit Feedback"
                />
            </main>
        </div>
    )
}



