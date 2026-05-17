import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.enum(['piping', 'solar', 'it', 'mining', 'general']),
  message: z.string().min(10),
})

const interestLabel: Record<string, string> = {
  piping: 'Piping Solutions',
  solar: 'Solar Energy',
  it: 'IT Solutions',
  mining: 'Mining',
  general: 'Umum / Lainnya',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    const resend = new Resend(process.env.RESEND_API_KEY)
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'info@pancapunggawatirta.co.id'

    await resend.emails.send({
      from: 'Website PT PPT <noreply@pancapunggawatirta.co.id>',
      to: [toEmail],
      replyTo: data.email,
      subject: `[PPT Website] Pesan dari ${data.name}${data.company ? ` — ${data.company}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0F1B2D;">
          <div style="background: linear-gradient(135deg, #0A2540, #1B4F8F); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Pesan Baru dari Website PT PPT</h1>
          </div>
          <div style="background: #F4F7FB; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #E3E8EF; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6B7A90; width: 140px; vertical-align: top;">Nama</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${data.name}</td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6B7A90; vertical-align: top;">Perusahaan</td>
                <td style="padding: 8px 0; font-size: 14px;">${data.company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6B7A90; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #1B4F8F;">${data.email}</a></td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6B7A90; vertical-align: top;">No. HP</td>
                <td style="padding: 8px 0; font-size: 14px;">${data.phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6B7A90; vertical-align: top;">Minat Layanan</td>
                <td style="padding: 8px 0; font-size: 14px;">
                  <span style="background: #00B4D820; color: #00B4D8; padding: 2px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                    ${interestLabel[data.interest]}
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 16px 0 8px;">
                  <div style="background: white; border-radius: 10px; padding: 16px; border: 1px solid #E3E8EF; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</div>
                </td>
              </tr>
            </table>
            <p style="font-size: 11px; color: #6B7A90; margin-top: 24px; padding-top: 16px; border-top: 1px solid #E3E8EF;">
              Dikirim dari website PT Panca Punggawa Tirta — pancapunggawatirta.co.id
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: err.issues }, { status: 400 })
    }
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
