import FeedbackForm from "@/components/FeedbackForm"

export default function AlumaniFeedback() {
    const ratingOptions = [
        { value: "very-good", label: "Very Good" },
        { value: "good", label: "Good" },
        { value: "fair", label: "Fair" },
        { value: "satisfactory", label: "Satisfactory" },
        { value: "unsatisfactory", label: "Unsatisfactory" },
    ]

    const yesNoOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
    ]

    const feedbackFields = [
        { type: "text", name: "firstName", label: "First Name", placeholder: "First Name", required: true },
        { type: "text", name: "lastName", label: "Last Name", placeholder: "Last Name", required: true },
        { type: "text", name: "University Roll No.", label: "University Roll No.", placeholder: "University Roll No.", required: true },
        { type: "text", name: "Email", label: "Email", placeholder: "Email", required: true },
        { type: "text", name: "Phone / Mobile Number", label: "Phone / Mobile Number", placeholder: "Phone / Mobile Number", required: true },
        { type: "text", name: "Program", label: "Program", placeholder: "Program", required: true },
        { type: "text", name: "Branch", label: "Branch", placeholder: "Branch", required: true },
        { type: "date", name: "Year of Passing", label: "Year of Passing", required: true },
        { type: "text", name: "Name of Organization", label: "Name of Organization", placeholder: "Name of Organization", required: true },
        { type: "text", name: "Designation", label: "Designation", placeholder: "Designation", required: true },
        { type: "date", name: "Year of Joining", label: "Year of Joining", required: true },
        {
            type: "radio",
            name: "Admission Procedure",
            label: "Admission Procedure",
            options: ratingOptions,
        },

        {
            type: "radio",
            name: "Ambience",
            label: "Ambience",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Infrastructure & Lab facilities",
            label: "Infrastructure & Lab facilities",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Faculty",
            label:
                "Faculty",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Project Guidance",
            label: "Project Guidance",
            options: ratingOptions,
        },
        { type: "radio", name: "Quality of Support Services", label: "Quality of Support Services", options: ratingOptions },
        {
            type: "radio",
            name: "Training and Placement",
            label: "Training and Placement",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Library",
            label: "Library",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Canteen facilities",
            label: "Canteen facilities",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Hostel Facilities",
            label: "Hostel Facilities",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Overall rating of the college",
            label: "Overall rating of the college",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "Alumni Association/Network of Old Friends",
            label: "Alumni Association/Network of Old Friends",
            options: ratingOptions,
        },
        {
            type: "textarea",
            name: "Relevance of curriculum in your job",
            label: "Relevance of curriculum in your job:",
            placeholder: "Type your suggestion here...",
        },
        {
            type: "textarea",
            name: "Improvements in teaching and learning Process",
            label: "Improvements in teaching and learning Process:",
            placeholder: "Type your suggestion here...",
        },
        {
            type: "textarea",
            name: "Suggestions regarding opening of a new program",
            label: "Suggestions regarding opening of a new program:",
            placeholder: "Type your suggestion here...",
        },
        {
            type: "textarea",
            name: "Any other suggestion",
            label: "Any other suggestion",
            placeholder: "Type your suggestion here...",
        },
       
    ]
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <FeedbackForm
                    heading="Alumni Feedback"
                    subHeading="Your Feedback Matters"
                    fields={feedbackFields}
                    submitButtonText="Submit Feedback"
                />
            </main>
        </div>
    )
}

