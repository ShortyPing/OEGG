import * as nodemailer from 'nodemailer'

export const MailTransporter = nodemailer.createTransport({
    host: "vweb01.shoxyhost.de",
    port: 465,
    secure: true,
    auth: {
        user: "contact@oe-gg.org",
        pass: "xxJ3z5$4"
    }
})