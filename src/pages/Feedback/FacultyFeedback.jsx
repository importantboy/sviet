import FeedbackForm from "@/components/FeedbackForm"

export default function FacultyFeedback() {
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
    { type: "text", name: "firstName", label: "First Name", placeholder: "First Name", required: true },
    { type: "text", name: "lastName", label: "Last Name", placeholder: "Last Name", required: true },
    { type: "text", name: "Name of the Department", label: "Name of the Department", placeholder: "Name of the Department", required: true },
    { type: "text", name: "Specialization", label: "Specialization", placeholder: "Specialization", required: true },
    {
      type: "radio",
      name: "How would you rate the ambience of your department?",
      label: "How would you rate the ambience of your department?",
      options: ratingOptions,
    },

    {
      type: "radio",
      name: "How effectively do you feel your department has utilized your talent?",
      label: "How effectively do you feel your department has utilized your talent?",
      options: ratingOptions,
    },
    {
      type: "radio",
      name: "How do you rate the research related facilities in the campus",
      label: "How do you rate the research related facilities in the campus",
      options: ratingOptions,
    },
    {
      type: "radio",
      name: "How satisfied you are with the availability of facilities like Lab, library, Computer, Internet, Research, etc?",
      label:
        "How satisfied you are with the availability of facilities like Lab, library, Computer, Internet, Research, etc?", options: ratingOptions,
    },
    {
      type: "radio",
      name: "How satisfied you are with the workload provided to you by the college?",
      label: "How satisfied you are with the workload provided to you by the college?",
      options: ratingOptions,
    },
    {
      type: "radio",
      name: "How effective is the leadership of your HOD and the Principal?",
      label: "How effective is the leadership of your HOD and the Principal?",
      options: ratingOptions
    },
    {
      type: "radio",
      name: "How would you rate the appreciation received from the management for the creative work you have done?",
      label: "How would you rate the appreciation received from the management for the creative work you have done?",
      options: ratingOptions,
    },
    {
      type: "radio",
      name: "How would you rate the time given to you for teaching a particular subject?",
      label: "How would you rate the time given to you for teaching a particular subject?",
      options: ratingOptions,
    },
    {
      type: "radio",
      name: "How satisfied you are with the availability of books related to your subject in the library?",
      label: "How satisfied you are with the availability of books related to your subject in the library?",
      options: ratingOptions,
    },
    {
      type: "radio",
      name: "How would you rate the overall facilities in the campus for?",
      label: "How would you rate the overall facilities in the campus for?",
      options: ratingOptions,
    },
    {
      type: "radio",
      name: "Overall impression based on content of the course and its relevance in the context of career development",
      label: "Overall impression based on content of the course and its relevance in the context of career development",
      options: yesNoOptions,
    },
    {
      type: "textarea",
      name: "Suggestions if any",
      label: "Suggestions if any :",
      placeholder: "Type your suggestion here...",
    },
    {
      type: "textarea",
      name: "Additional Remarks",
      label: "Additional Remarks (If any):",
      placeholder: "Type your suggestion here...",
    },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <FeedbackForm
          heading="Faculty Feedback"
          subHeading="Your Feedback Matters"
          fields={feedbackFields}
          submitButtonText="Submit Feedback"
        />
      </main>
    </div>
  )
}


