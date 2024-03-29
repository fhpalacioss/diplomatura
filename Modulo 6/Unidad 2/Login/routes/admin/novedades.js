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

/* agregar */
router.get('/agregar',  function(req, res, next) {

  res.render('admin/agregar',{
    layout:'admin/agregar'
  });
});

/* eliminar */
router.get('/eliminar/:id', async function(req, res, next) {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);

  res.redirect('/admin/novedades');
});

/* modificar la vista > formularios y los datos cargados*/

router.get('/modificar/:id', async function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  var novedad = await novedadesModel.getNovedadesById(id);
  
  res.render('admin/modificar',{
    layout:'admin/modificar',
    novedad
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

/*Actualziar*/

router.post('/modificar', async (req,res,next) =>{

  try {
    
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj);

    await novedadesModel.modificarNovedadesById(obj,req.body.id)
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error);
    res.redirect('admin/modificar',{
      layout: 'admin/modificar',
      error: true,
      message: 'no se modifico la tarea'
    })
  }
})


module.exports = router;