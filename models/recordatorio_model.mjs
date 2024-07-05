import { db_pool } from "../config.mjs";

const modelRecord = {
    createRecord: async (recordatorio)=>{
        console.log("recordatorio")
            console.log(recordatorio)
        try {
            console.log("res")
            
            const createR = await db_pool.one(`INSERT INTO habitat.recordatorio(nombre,fecha_inicio,fecha_fin,descripcion,colmena_id)
             VALUES($1,$2,$3,$4,$5) RETURNING *`,[
                recordatorio.nombre,recordatorio.fecha_inicio,recordatorio.fecha_fin,recordatorio.descripcion,recordatorio.colmena_id
            ])
            
            
            
            console.log(createR)
            return createR
        } catch (error) {
            throw new Error(`Error query create:${error}`)
        }
    },
    getRecord:async()=>{
        try {
            const allRecor = await db_pool.any(`SELECT * FROM habitat.recordatorio`);
            return allRecor
            
        } catch (error) {
            throw new Error(`Error query get ${error}`)
        }
    },
    updateRecord:async(id,recordatorio)=>{
        try {
            const updateRecor = await db_pool.one(`
            UPDATE habitat.recordatorio SET nombre=$1,fecha_inicio=$2,fecha_fin=$3,descripcion=$4,colmena_id=$5
            WHERE id = $6`,[recordatorio.nombre,recordatorio.fecha_inicio,recordatorio.fecha_fin,recordatorio.descripcion,
                recordatorio.colmena_id,id
            ])
            return updateRecor
        } catch (error) {
            throw new Error(`Error query update: ${error}`)
        }
    },
    deleteRecord:async(id)=>{
        try {
            const result = await db_pool.result(`DELETE FROM habitat.recordatorio WHERE id = $1`,[id])
            return result.rowCount === 1 
        } catch (error) {
            throw new Error(`Error query delete: ${error}`)
        }
    }
}

export default modelRecord