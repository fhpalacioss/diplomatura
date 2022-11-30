var pool = require('./bd');

async function getNovedades() {
    try {
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
    
}

async function insertNovedades(obj) {
    try {
        var query = 'insert into novedades set ? ';
        var rows = await pool.query(query,[obj]);
        return rows;
    } catch (error) {
        console.log(error);
        console.log("error al insertar")
        throw error;
    }
    
}

async function deleteNovedadesById(obj) {
    try {
        console.log(" este es el id" + obj)
        var query = 'delete from novedades where id_nov = ? ';
        var rows = await pool.query(query,[+obj]);
        return rows;
    } catch (error) {
        console.log(error);
    }
    
}
/* traer novedad por el id*/ 

async function getNovedadesById(id) {
    try {
        var query = 'select * from novedades where id_nov = ? ';
        var rows = await pool.query(query,[id]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
    
}

/*actualizacion*/
async function modificarNovedadesById(obj,id) {
    try {
        var query = 'update novedades set ?  where id_nov = ? ';
        var rows = await pool.query(query,[obj,id]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
    
}


module.exports = {getNovedades, insertNovedades,deleteNovedadesById,
    getNovedadesById,modificarNovedadesById}