const nodemailer = require('nodemailer')
class MailService {
    sendOTP(name, email, otp, callback) {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: 'justsample4mail@gmail.com',
                pass: 'just@sample',
            },
            secure: true,
        });

        var message = `<html>
            <body>
                <h1>Hello ${name}</h1>
                <hr><br>
                &nbsp;&nbsp;&nbsp; <b>
                    Your account is successfully created .
                    This is a Verification mail for your account, 
                    so verify your account via this link: <br>
                    <a href='http://localhost:8989/user/verify?email=${email}&otp=${otp}'>
                    Verify Account </a>
                </b>
            </body>
        </html>
    `;

        const mailData = {
            from: 'justsample4mail@gmail.com',  // sender address
            to: email,
            subject: 'Verification Mail from Lighten Ecommerce App',
            html: message,
        };

        transporter.sendMail(mailData, function (err, info) {
            if (err)
                callback(false)
            else
                callback(true)
        });
    }
}

module.exports = new MailService()