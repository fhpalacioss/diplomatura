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

module.exports = {getNovedades, insertNovedades}