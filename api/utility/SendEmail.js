import nodemailer from 'nodemailer';


// create emial
export const SendEmail = async (to, subject, text) => {

    try {
        let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "e160a8ee0184f6",
                pass: "97af80dae9f8c3"
            }
        });

        // send email
        await transport.sendMail({
            from : 'emaildefaultemail@gmail.com',
            to : to,
            subject : subject,
            text : text
        });

    } catch (error) {
        console.log(error);
    }

}