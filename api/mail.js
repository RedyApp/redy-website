import express from 'express'
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  var data = {
    email: `${req.body.email} ${req.body.last_name}`,
    subject: "Neuva solicitud de repartidor",


    message: req.body.message
  };
  var client = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: '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'
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
