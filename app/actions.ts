"use server"

export async function submitWaitlistForm(formData: FormData) {
  // Your Google Form submission URL (you'll need to get this from your actual form)
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"

  // Map your form fields to Google Form entry IDs
  // You'll need to inspect your Google Form to get these entry IDs
  const googleFormData = new URLSearchParams({
    "entry.XXXXXX": formData.get("fullName") as string, // Replace XXXXXX with actual entry ID
    "entry.YYYYYY": formData.get("cityLga") as string, // Replace YYYYYY with actual entry ID
    "entry.ZZZZZZ": formData.get("phone") as string, // Replace ZZZZZZ with actual entry ID
    "entry.AAAAAA": formData.get("email") as string, // Replace AAAAAA with actual entry ID
    "entry.BBBBBB": formData.get("investmentRange") as string, // Replace BBBBBB with actual entry ID
    "entry.CCCCCC": formData.get("interest") as string, // Replace CCCCCC with actual entry ID
  })

  try {
    // Submit to Google Forms
    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: googleFormData.toString(),
    })

    // Google Forms always returns a redirect, so we don't check response.ok
    console.log("Form submitted to Google Forms")

    return { success: true, message: "Successfully joined the waitlist!" }
  } catch (error) {
    console.error("Error submitting to Google Forms:", error)
    return { success: false, message: "There was an error submitting your information. Please try again." }
  }
}
