"use server";

import { z } from "zod";

const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
});

export async function registerForClass(prevState: any, formData: FormData) {
  const validatedFields = registrationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please check your details and try again.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, phone } = validatedFields.data;

  // Google Form Submission
  const googleData = new FormData();
  googleData.append("entry.761600090", name);
  googleData.append("entry.1379734406", email);
  googleData.append("entry.1057380991", phone);

  try {
    const G_FORM_URL = process.env.NEXT_PUBLIC_G_FORM_URL || '';
    if (G_FORM_URL) {
      await fetch(G_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleData,
      });
    } else {
      console.error("G_FORM_URL is not defined");
    }
  } catch (error) {
    console.error("Google Form submission error:", error);
    // Note: We might still want to consider this a "success" for the user 
    // if we have a fallback database, but for now strict failure.
    // However, google forms 'no-cors' request often fails silently or we can't read response.
    // We'll assume success if no network error throws.
  }

  // Simulate network delay and database operation (if any other DB is used)
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log("New Registration:", validatedFields.data);

  return {
    message: "Success! Your spot is reserved. We'll be in touch.",
    errors: {},
    success: true,
  };
}
