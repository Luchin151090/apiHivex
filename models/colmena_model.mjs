import {db_pool} from '../config.mjs'
import { io } from '../index.mjs';

var cont = 1
const modelColmena = {
    getColmenaById : async(id) =>{
        try {
            const colmena = await db_pool.oneOrNone(
                `SELECT * FROM habitat.colmena WHERE id = $1;`,
                [id]
            )
           return colmena
            
        } catch (e) {
            throw new Error(`Error query create:${e}`)
        } 
    },

    createColmena: async (colmena) => {
        
        
        try {
    
            const createcolmena = await db_pool.one(`
            INSERT INTO habitat.colmena (nombre,material,tipo,ancho,
                largo,alto,apicultor_id,poblacion_id)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,[
                colmena.nombre,
                colmena.material,colmena.tipo,colmena.ancho,colmena.largo,
                colmena.alto,
                colmena.apicultor_id,colmena.poblacion_id
                ])

            return createcolmena
        }
        catch (e) {
            throw new Error(`Error query create:${e}`)
        } 
    },
 
    updateColmena: async (id,colmena) => {
        
        try {
            const nowColmena = await db_pool.oneOrNone(`UPDATE habitat.colmena SET
             rayos_uv=$1,temperatura=$2,humedad=$3,frecuencia_sonido=$4 WHERE id = $5 RETURNING *`,[
                colmena.rayos_uv,colmena.temperatura,colmena.humedad,colmena.frecuencia_sonido,id
             
            ])
            
            console.log(cont++)
            // EMITE LA ACTUALIZACION EN TIEMPO REAL
            io.emit('actualDataSensor',nowColmena)

            // LUEGO CONTINÚA SU ACTUALIZACIÓN EN LA BD
            return nowColmena
            
        } catch (error) {
            throw new Error(`Error en la actualización de la colmena: ${error.message}`);

        }
    },

    getColmena: async () => {
        try {
            const allColmena = await db_pool.any('SELECT * FROM habitat.colmena;')
            return allColmena
            
        } catch (error) {
            throw new Error(`Error query ${error}`)
        }
    },
    deleteColmena: async (id) => {
        try {
            const result = await db_pool.result('DELETE FROM habitat.colmena WHERE id = $1', [id]);
            return result.rowCount === 1; // Devuelve true si se eliminó un registro, false si no se encontró el registro
        } catch (error) {
            throw new Error(`Error en la eliminación de la colmena: ${error.message}`);
        }
    },
   
}
export default modelColmena;