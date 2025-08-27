"use server";

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { getPersonalizedLearningPath, type PersonalizedLearningPathInput } from '@/ai/flows/personalized-learning-path';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  gmail: z.string().email("Please enter a valid email address."),
  contactNumber: z.string().min(10, "Please enter a valid 10-digit contact number.").max(15),
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
  
  const validationResult = formSchema.safeParse({
    name: rawFormData.candidateName,
    gmail: rawFormData.candidateGmail,
    contactNumber: rawFormData.candidateContactNumber,
    courseInterestedIn: rawFormData.courseInterestedIn,
    messageQuery: rawFormData.messageQuery,
  });

  if (!validationResult.success) {
    console.error("Server-side validation failed:", validationResult.error.flatten());
    return { error: 'Invalid form data submitted. Please check your inputs.' };
  }
  
  const data: PersonalizedLearningPathInput = {
    candidateName: validationResult.data.name,
    candidateGmail: validationResult.data.gmail,
    candidateContactNumber: validationResult.data.contactNumber,
    purpose: "Training", // Always "Training" now
    courseInterestedIn: validationResult.data.courseInterestedIn,
    messageQuery: validationResult.data.messageQuery,
  };

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
