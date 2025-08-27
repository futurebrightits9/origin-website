'use server';

/**
 * @fileOverview Provides personalized course recommendations based on user input.
 *
 * - getPersonalizedLearningPath - A function that returns personalized course recommendations.
 * - PersonalizedLearningPathInput - The input type for the getPersonalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the getPersonalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  candidateName: z.string().describe("The candidate's name."),
  candidateGmail: z.string().email().describe("The candidate's Gmail address."),
  candidateContactNumber: z.string().describe("The candidate's contact number."),
  purpose: z.enum(['Development Work', 'Training Purpose']).describe('The purpose of the inquiry.'),
  courseInterestedIn: z.enum([
    'Python',
    'GenAI',
    'DevOps',
    'DSA',
    'Data Science',
    'Soft Skills',
  ]).describe('The course the candidate is interested in.'),
  messageQuery: z.string().describe('Any additional message or query from the candidate.'),
});
export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  learningPath: z.string().describe('A personalized learning path tailored to the candidate\'s interests and background.'),
});
export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function getPersonalizedLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an AI career coach who will generate a personalized learning path based on the candidate's information.

  Candidate Name: {{{candidateName}}}
  Candidate Gmail: {{{candidateGmail}}}
  Candidate Contact Number: {{{candidateContactNumber}}}
  Purpose: {{{purpose}}}
  Course Interested In: {{{courseInterestedIn}}}
  Message / Query: {{{messageQuery}}}

  Consider their course interest, purpose, and message to recommend a sequence of courses or learning activities that will help them achieve their goals. 
  If the purpose is "Development Work", provide a brief, courteous message acknowledging their interest and stating that our team will contact them shortly.
  If the purpose is "Training Purpose", generate a learning path. If no course is selected, or the message mentions career interests, recommend courses relevant to those career interests.

  Format the learning path as a numbered list with a brief description of each step.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
