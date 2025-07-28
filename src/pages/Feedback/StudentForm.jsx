import FeedbackForm from "@/components/FeedbackForm"

export default function StudentFeedbackForm() {
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
        { type: "text", name: "semester", label: "Semester", placeholder: "Semester", required: true },
        { type: "text", name: "academicYear", label: "Academic year", placeholder: "Academic year", required: true },
        { type: "text", name: "branch", label: "Branch", placeholder: "Branch", required: true },
        { type: "text", name: "session", label: "Session", placeholder: "Session", required: true },
        { type: "date", name: "dateOfFeedback", label: "Date of Feedback", required: true },
        {
            type: "radio",
            name: "syllabusCovered",
            label: "Has the teacher covered entire syllabus as preferred by University (Yes/No)",
            options: yesNoOptions,
        },
        
        {
            type: "radio",
            name: "technicalContent",
            label: "Effectiveness of Teacher in terms of Technical content",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "communicationSkills",
            label: "Effectiveness of Teacher in terms of communication skills",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "availability",
            label:
                "Effectiveness of Teacher in terms of Availability beyond normal classes and co-operation to solve individual problems",
            options: ratingOptions,
        },
        {
            type: "radio",
            name: "paceOfContent",
            label: "Effectiveness of Teacher in terms of pace on which contents were covered",
            options: ratingOptions,
        },
        { type: "radio", name: "overallEffectiveness", label: "Overall effectiveness", options: ratingOptions },
        {
            type: "radio",
            name: "labFacilities",
            label: "How would you rate the lab facilities if applicable",
            options: ratingOptions,
        },
        {
            type: "textarea",
            name: "librarySuggestion",
            label: "Any suggestion regarding library Facility",
            placeholder: "Type your suggestion here...",
        },
        {
            type: "textarea",
            name: "internetSuggestion",
            label: "Any suggestion regarding internet Facility",
            placeholder: "Type your suggestion here...",
        },
        {
            type: "textarea",
            name: "coCurricularSuggestion",
            label: "Any suggestion regarding Co-Curricular activity",
            placeholder: "Type your suggestion here...",
        },
        {
            type: "textarea",
            name: "extraCoCurricularSuggestion",
            label: "Any suggestion regarding Extra Co-Curricular activity",
            placeholder: "Type your suggestion here...",
        },
        {
            type: "textarea",
            name: "otherSuggestions",
            label: "Any other suggestions",
            placeholder: "Type your suggestion here...",
        },
        { type: "textarea", name: "message", label: "Message", placeholder: "Type your message here..." },
    ]
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <FeedbackForm 
                    heading="Student Feedback"
                    subHeading="Your Feedback Matters"
                    fields={feedbackFields}
                    submitButtonText="Submit Feedback"
                />
            </main>
        </div>
    )
}
