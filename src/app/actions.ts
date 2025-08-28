"use server";

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { getPersonalizedLearningPath, type PersonalizedLearningPathInput } from '@/ai/flows/personalized-learning-path';

const learningPathFormSchema = z.object({
  candidateName: z.string().min(2, "Name must be at least 2 characters."),
  candidateGmail: z.string().email("Please enter a valid email address."),
  candidateContactNumber: z.string().min(10, "Please enter a valid 10-digit contact number.").max(15),
  courseInterestedIn: z.enum(['Python', 'GenAI', 'DevOps', 'DSA', 'Data Science', 'Soft Skills']),
  messageQuery: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must not exceed 500 characters."),
});

export async function generateLearningPathAction(formData: FormData) {
  const rawFormData = {
    candidateName: formData.get('name'),
    candidateGmail: formData.get('gmail'),
    candidateContactNumber: formData.get('contactNumber'),
    courseInterestedIn: formData.get('courseInterestedIn'),
    messageQuery: formData.get('messageQuery'),
  };
  
  const validationResult = learningPathFormSchema.safeParse(rawFormData);

  if (!validationResult.success) {
    console.error("Server-side validation failed:", validationResult.error.flatten());
    return { error: 'Invalid form data submitted. Please check your inputs.' };
  }
  
  const data: PersonalizedLearningPathInput = validationResult.data;

  try {
    const result = await getPersonalizedLearningPath(data);
    const path = result.learningPath;
    
    if (!path) {
      throw new Error("The AI flow returned an empty path.");
    }
    
    redirect(`/learning-path?path=${encodeURIComponent(path)}`);
  } catch (error) {
    console.error('Error generating learning path:', error);
    return { error: 'Failed to generate learning path due to a server error. Please try again later.' };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  gmail: z.string().email("Please enter a valid email address."),
  contactNumber: z.string().min(10, "Please enter a valid 10-digit contact number.").max(15),
  visitingPurpose: z.string().min(3, "Purpose must be at least 3 characters."),
  messageQuery: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must not exceed 500 characters."),
});


export async function submitContactForm(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    gmail: formData.get('gmail'),
    contactNumber: formData.get('contactNumber'),
    visitingPurpose: formData.get('visitingPurpose'),
    messageQuery: formData.get('messageQuery'),
  };

  const validationResult = contactFormSchema.safeParse(rawFormData);

  if (!validationResult.success) {
    console.error("Server-side validation failed:", validationResult.error.flatten());
    return { error: 'Invalid form data submitted. Please check your inputs.' };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log the data to the console.
    console.log("New contact form submission:", validationResult.data);
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { error: 'Failed to submit the form due to a server error. Please try again later.' };
  }
}
