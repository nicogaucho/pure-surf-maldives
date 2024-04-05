'use server'
import { pureSurfContactEmail } from "../emails/index";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
 
export async function sendEmail(data) {
  const { name, email, plans, message } = data; 
  try {
    const result = await resend.emails.send({
      from: 'Pure blue retreat <info.pureblue@pureblueretreat.com>',
      to: ['info.pureblue@pureblueretreat.com'],
      subject: 'Pure Blue Surf&Yoga retreat Maldives Customer Contact Received',
      react: pureSurfContactEmail({ name, email, plans, message }),
    });
    return result;
  } catch (error) {
    console.log('Something went wrong!');
  }
}

