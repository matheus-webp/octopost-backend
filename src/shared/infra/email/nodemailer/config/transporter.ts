import env from '@/config/env.js';
import { createTransport } from 'nodemailer';

export const transporter = createTransport({
  auth: {
    pass: env.EMAIL_PASS,
    user: env.EMAIL_USER,
  },
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  secure: Boolean(env.SMTP_SECURE),
});
