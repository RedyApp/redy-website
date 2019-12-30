import express from 'express'
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const app = express()
app.use(express.json())

const client = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
)

app.post('/commerce', (req, res) => {
  var mailCommerceOptions = {
    to: 'info@pideloredy.com',
    from: req.body.email,
    subject: 'Nueva solicitud de Comercio 🛍',
    html: `<b>Comercio: </b>${req.body.restaurant_name}<br/>
           <b>Dirección: </b>${req.body.restaurant_address}<br/>
           <b>Nombre: </b>${req.body.name}<br/>
           <b>Apellido: </b>${req.body.last_name}<br/>
           <b>Teléfono: </b>${req.body.phone}<br/>
           <b>Correo: </b>${req.body.email}<br/>`
  }

  client.sendMail(mailCommerceOptions, function(err, info) {
    let message = null
    if (err) {
      console.log(err)
      message = 'An error has occured ' + err
      return res.status(422).json({ status: '422', message: message })
    } else {
      return res
        .status(200)
        .json({ status: '200', message: 'Request sent successfully' })
    }
  })
})

app.post('/dealer', (req, res) => {
  var mailDealerOptions = {
    to: 'info@pideloredy.com',
    from: req.body.email,
    subject: 'Nueva solicitud de Repartidor 🛵',
    html: `
          <b>Nombre: </b>${req.body.name}<br/>
          <b>Apellido: </b>${req.body.last_name}<br/>
          <b>Teléfono: </b>${req.body.phone}<br/>
          <b>Ciudad: </b>${req.body.city}<br/>
          <b>Correo: </b>${req.body.email}<br/>
          <b>Contraseña: </b>${req.body.password}<br/>
          `
  }

  client.sendMail(mailDealerOptions, function(err, info) {
    let message = null
    if (err) {
      console.log(err)
      message = 'An error has occured ' + err
      return res.status(422).json({ status: '422', message: message })
    } else {
      return res
        .status(200)
        .json({ status: '200', message: 'Request sent successfully' })
    }
  })
})

export default {
  path: '/api/mail',
  handler: app
}
