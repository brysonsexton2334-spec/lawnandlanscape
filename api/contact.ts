import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, address, service } = req.body

  if (!name || !email || !phone || !address || !service) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'Bryson\'s Lawn & Landscape <quotes@brysonslawn.com>',
      to: ['brysonsexton2334@gmail.com'],
      replyTo: email,
      subject: `🌿 New Quote Request — ${name} | ${service}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:540px;margin:0 auto;">
          <div style="background:#2D6A2D;color:white;padding:24px 28px;border-radius:16px 16px 0 0;">
            <h1 style="margin:0;font-size:20px;">🌿 New Quote Request</h1>
            <p style="margin:4px 0 0;opacity:0.8;font-size:14px;">From brysonslawn.com</p>
          </div>
          <div style="background:#f9fafb;padding:24px 28px;border-radius:0 0 16px 16px;border:1px solid #e5e7eb;border-top:none;">
            <table style="border-collapse:collapse;width:100%;">
              <tr>
                <td style="padding:12px 0;font-weight:600;color:#1A2E1A;vertical-align:top;width:100px;font-size:14px;">Name</td>
                <td style="padding:12px 0;color:#374151;font-size:14px;">${name}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:12px 0;font-weight:600;color:#1A2E1A;vertical-align:top;font-size:14px;">Phone</td>
                <td style="padding:12px 0;font-size:14px;"><a href="tel:${phone}" style="color:#2D6A2D;text-decoration:none;">${phone}</a></td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:12px 0;font-weight:600;color:#1A2E1A;vertical-align:top;font-size:14px;">Email</td>
                <td style="padding:12px 0;font-size:14px;"><a href="mailto:${email}" style="color:#2D6A2D;text-decoration:none;">${email}</a></td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:12px 0;font-weight:600;color:#1A2E1A;vertical-align:top;font-size:14px;">Address</td>
                <td style="padding:12px 0;color:#374151;font-size:14px;">${address}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:12px 0;font-weight:600;color:#1A2E1A;vertical-align:top;font-size:14px;">Service</td>
                <td style="padding:12px 0;font-size:14px;"><span style="background:#7CB518;color:white;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:600;">${service}</span></td>
              </tr>
            </table>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:16px;">
            Sent from brysonslawn.com contact form
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
