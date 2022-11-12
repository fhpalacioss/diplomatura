var express = require('express');
var router = express.Router();

var novedadesModel = require('../../models/novedadesModel')

/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{
    layout:'admin/novedades',
    persona: req.session.nombre,
    novedades
  });
});

/* GET home page. */
router.get('/agregar',  function(req, res, next) {

  res.render('admin/agregar',{
    layout:'admin/agregar'
  });
});


router.post('/agregar',  async(req, res, next) => {

  try {
    console.log(req.body)
    console.log(req.subtitulo)
    console.log(req.cuerpo)
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades');
     }else{
       res.render('admin/agregar',{
         layout:'admin/agregar',
         error: true,
         message: 'Todos los campos so nrequeridos'
       })
     }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar',{
      layout:'admin/agregar',
      error: true,
      message: 'no se cargo la novedad'
    });
  }
  
});





module.exports = router;