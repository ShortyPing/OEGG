import { HttpException, Injectable, Logger, NotImplementedException } from '@nestjs/common';
import { MailTransporter } from 'src/mail/mail.transporter';
import { StaticVariables } from 'src/static.variables';
import { ContactRequest } from './properties/contactRequest.property';
import * as requestIp from 'request-ip'
import * as request from 'request'
@Injectable()
export class ContactService {


    async createContactRequest(body: ContactRequest, req) {
        body = body["values"]
        return new Promise((resolve, reject) => {

            if (body.hp == "application-hp-verify") {
                request(`https://www.google.com/recaptcha/api/siteverify?secret=${StaticVariables.reCaptchaSecret}&response=${body.captchaToken}&remoteip=${requestIp.getClientIp(req)}`, {}, (err, resp, capbody) => {
                    capbody = JSON.parse(capbody)
                    if (capbody["success"] == true && capbody["score"] >= 0.5) {
                        MailTransporter.sendMail({
                            to: "m.steinmoetzger@gmx.at",
                            from: "ÖGG - Kontaktformular <contact@oe-gg.org>",
                            subject: "ÖGG - Kontaktformularanfrage",
                            html: `
                            <h1>E-Mail</h1>
                            <p>${body.email}</p>
                            <hr>
                            <h1>Name</h1>
                            <p>${body.name}</p>
                            <hr>
                            <h1>Text</h1>
                            <p>${body.text}</p>
                            `
                        })
                        resolve({
                            status: "Sent"
                        })
                    } else {
                        reject(new HttpException("Spam blocking", 418))
                    }
                })
            } else {
                reject(new HttpException("Spam blocking", 418))

            }
        })
    }
}
