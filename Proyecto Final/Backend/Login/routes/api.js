var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
const cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function(req, res, next) {

    var novedades = await novedadesModel.getNovedades();
  
    novedades = novedades.map(novedades =>{
      if(novedades.img_id){
        const imagen = cloudinary.image(novedades.img_id);
        return {...novedades, imagen}
      }else{
        return{...novedades, imagen:''}
      }
    });
  
    res.json(novedades);
  });

  router.post('/contacto', async (req,res)=>{
    var a = req.body.email
    const mail ={
      to : 'flavia.ursino@gmail.com',
      subject: 'Contacto web',
      hmtl: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email} <br>
      ademas. hizo el siguiente comentario: ${req.body.mensaje} <br>
      su telefono es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
      host:"smtp.mailtrap.io",
      port:2525,
      auth:{
        user:"9423273b8a0076",
        pass:"5e7c005804f924"
      }
    })

    await transport.sendMail(mail)

    res.status(201).json({
      error:false,
      message: 'mensaje enviado'
    })

  })


  module.exports = router;
  