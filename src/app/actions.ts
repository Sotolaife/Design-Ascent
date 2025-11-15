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
    };
  }

  // Simulate network delay and database operation
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log("New Registration:", validatedFields.data);

  return {
    message: "Success! Your spot is reserved. We'll be in touch.",
    errors: {},
  };
}
