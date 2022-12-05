var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
const cloudinary = require('cloudinary').v2;

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

  module.exports = router;
  