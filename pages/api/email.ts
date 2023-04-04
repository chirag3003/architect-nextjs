import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer"
import * as process from "process";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!(req.method === "POST")) {
        return res.status(404)
    }
    const {firstName = "", lastName = "", email = "", phoneNumber = "", message = ""} = req.body
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
        },
    });
    let error = false
    await transporter.sendMail(
        {
            from: "chiragbhalotia0412@gmail.com",
            to: "me@chirag.codes",
            subject: `You have received a mail from ${firstName} ${lastName}`,
            html: "<div style='width:100%;'><div style='width:100%;background-color:rgb(202 138 4 );padding:20px'>" +
                `<h1>Email: ${email}</h1><h1>Phone Number: ${phoneNumber}</h1><h1>Message:</h1><h2>${message}</h2>` +
                "</div></div>",
        },
        function (err, info) {
            if (err) {
                console.error(err);
                error = true
                return res.status(500)
            }
        }
    );
    if (!error)
        res.status(200).send({})
}
