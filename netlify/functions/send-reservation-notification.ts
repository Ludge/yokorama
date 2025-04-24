import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ReservationNotification {
  customerName: string;
  reservationDate: string;
  serviceType: string;
  additionalDetails?: string;
}

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const reservation: ReservationNotification = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!reservation.customerName || !reservation.reservationDate || !reservation.serviceType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'Resend <onboarding@resend.dev>',
      to: 'yokorama.06@gmail.com',
      subject: 'New Reservation Notification',
      html: `
        <h2>New Reservation Received</h2>
        <p><strong>Customer Name:</strong> ${reservation.customerName}</p>
        <p><strong>Reservation Date:</strong> ${reservation.reservationDate}</p>
        <p><strong>Service Type:</strong> ${reservation.serviceType}</p>
        ${reservation.additionalDetails ? `<p><strong>Additional Details:</strong> ${reservation.additionalDetails}</p>` : ''}
      `,
    });

    if (error) {
      throw error;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email notification' }),
    };
  }
}; 