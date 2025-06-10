// Instructions to find Google Form entry IDs:
console.log(`
To integrate with Google Forms, you need to find the entry IDs for each field:

1. Open your Google Form in edit mode
2. Click on the preview button (eye icon)
3. Right-click on the page and select "View Page Source" or "Inspect Element"
4. Search for "entry." in the source code
5. You'll find entries like: entry.123456789, entry.987654321, etc.
6. Map each field to its corresponding entry ID:

Example mapping:
- Full Name: entry.123456789
- City & LGA: entry.987654321  
- Phone: entry.456789123
- Email: entry.789123456
- Investment Range: entry.321654987
- Interest: entry.654987321

Alternative method:
1. Open your Google Form
2. Click "Send" button
3. Click the link icon (<>)
4. Copy the link and open it in a new tab
5. Right-click and "View Page Source"
6. Search for "entry." to find the IDs

Once you have the entry IDs, replace them in the server action code.
`)

// You can also use this function to test form submission
async function testGoogleFormSubmission() {
  const formData = {
    "entry.123456789": "John Doe",
    "entry.987654321": "Lagos, Ikeja LGA",
    "entry.456789123": "+2348012345678",
    "entry.789123456": "john@example.com",
    "entry.321654987": "₦250,000 - ₦500,000",
    "entry.654987321": "I want to build a business in my community",
  }

  const params = new URLSearchParams(formData)

  console.log("Test form data:", params.toString())
  console.log("Use this data structure in your server action")
}

testGoogleFormSubmission()
