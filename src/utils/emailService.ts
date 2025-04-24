import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.VITE_RESEND_API_KEY);

interface ReservationNotification {
  customerName: string;
  reservationDate: string;
  serviceType: string;
  additionalDetails?: string;
}

export const sendReservationNotification = async (reservation: ReservationNotification) => {
  try {
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
      console.error('Error sending email:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}; 