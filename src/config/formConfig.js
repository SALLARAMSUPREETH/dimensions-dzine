// Google Forms Configuration
// Update these values when you want to use a different Google Form

export const GOOGLE_FORM_CONFIG = {
  // Form action URL - replace with your Google Form's action URL
  action: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdn6ftOtH0QXZoy-Z4S1ehe8_gqAF-SnetF6AgZRZ5dWZI1qA/formResponse",
  
  // Entry IDs for each field (extracted from your Google Form)
  entryIds: {
    name: "entry.952238076",           // Name field
    email: "entry.969092375",          // Email field
    phone: "entry.756527878",          // Phone field
    projectTypeInquiry: "entry.1892924028", // Project Type dropdown
    message: "entry.114760845",        // Message field
    projectName: "entry.1795177808",   // Project Name (hidden)
    projectType: "entry.509780658",    // Project Type (hidden)
    source: "entry.19299160"           // Source (hidden)
  }
};

// Instructions for updating:
// 1. Create a new Google Form with the same field structure
// 2. Get the form action URL from the form's page source
// 3. Get the entry IDs for each field from the form's page source
// 4. Update the values above
// 5. The form will automatically use the new configuration
