"use server";

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { getPersonalizedLearningPath, type PersonalizedLearningPathInput } from '@/ai/flows/personalized-learning-path';
import { google } from 'googleapis';

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
    const { name, gmail, contactNumber, visitingPurpose, messageQuery } = validationResult.data;
    
    // Google Sheets Logic
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F', // Assuming you want to write to Sheet1
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [new Date().toISOString(), name, gmail, contactNumber, visitingPurpose, messageQuery],
        ],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { error: 'Failed to submit the form due to a server error. Please try again later.' };
  }
}
