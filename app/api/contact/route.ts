import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: 'sauvairelino@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .container {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 12px;
                overflow: hidden;
              }
              .header {
                background: rgba(255, 255, 255, 0.95);
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                color: #667eea;
                font-size: 28px;
              }
              .content {
                background: white;
                padding: 30px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                display: block;
                font-weight: 600;
                color: #667eea;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                display: block;
                color: #333;
                font-size: 16px;
                padding: 12px;
                background: #f7f7f7;
                border-radius: 6px;
                border-left: 3px solid #667eea;
              }
              .message-box {
                background: #f7f7f7;
                padding: 20px;
                border-radius: 6px;
                border-left: 3px solid #667eea;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                background: rgba(255, 255, 255, 0.95);
                padding: 20px;
                text-align: center;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 Nouveau message du portfolio</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="field-label">De</span>
                  <span class="field-value">${name}</span>
                </div>
                <div class="field">
                  <span class="field-label">Email</span>
                  <span class="field-value">${email}</span>
                </div>
                <div class="field">
                  <span class="field-label">Sujet</span>
                  <span class="field-value">${subject}</span>
                </div>
                <div class="field">
                  <span class="field-label">Message</span>
                  <div class="message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                Ce message a été envoyé depuis votre portfolio<br>
                <strong>sauvairelino.fr</strong>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nouveau message du portfolio

De: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
