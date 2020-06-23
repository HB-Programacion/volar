const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const cors = require('cors')({
    origin: true
})

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
})

exports.submit = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')

    if (req.method === 'OPTIONS') {
        res.end()
    } else {
        cors(req, res, () => {
            if (req.method !== 'POST') {
                return
            }

            const mailOptions = {
                from: req.body.email,
                replyTo: req.body.email,
                to: gmailEmail,
                subject: `${req.body.name} acaba de enviar un mensaje dede el sitio web Volar`,
                text: req.body.message,
                html: `<p>${req.body.message}</p>`,
            }

            return mailTransport.sendMail(mailOptions).then(() => {
                console.log('Nuevo correo electrónico enviado a:', gmailEmail)
                res.status(200).send({
                    isEmailSend: true
                })
                return
            })
        })
    }
})

