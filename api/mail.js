import express from 'express'
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  var data = {
    email: `${req.body.email} ${req.body.last_name}`,
    subject: "Nueva solicitud de repartidor",
    message: req.body.message
  };
  console.log(process.env.SENDGRID_API_KEY)
  var client = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  }));

  var mailOptions = {
    to: 'rigobertogomez.gf@gmail.com',
    from: 'fake@demo.com',
    subject: data.subject,
    text: data.message,
    html: '<b>Hello</b>'
  };

  client.sendMail(mailOptions, function (err, info) {
    //re-render contact page with message
    console.log(info)
    let message = null;
    if (err) {
      console.log(err)
      message = "An error has occured " + err;
      return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
    } else {
      console.log("sent")
      message = "Email has been sent!";
      return res.status(200).json({ 'message': 'OH YEAH' })
    }
  });
})

export default {
  path: '/api/mail',
  handler: app
}
