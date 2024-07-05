import { db_pool } from "../config.mjs";

const modelPoblacion = {
    createPoblacion: async (poblacion)=>{
        try {
            const newPoblacion = await db_pool.one(`INSERT INTO conjunto.poblacion (nombre,cantidad,edad_promedio) VALUES($1,$2,$3) RETURNING *`,
            [poblacion.nombre,poblacion.cantidad,poblacion.edad_promedio])
            return newPoblacion 
        } catch (error) {
            throw new Error(`Error query create: ${error}`)
        }
    },
    
    updatePoblacion:async(id,poblacion)=>{
        try {
            const nowPoblacion = await db_pool.one(`UPDATE conjunto.poblacion SET nombre=$1,cantidad=$2,edad_promedio=$3
            WHERE id = $4 `,[poblacion.nombre,poblacion.cantidad,poblacion.edad_promedio,id])
            return nowPoblacion
        } catch (error) {
            throw new Error (`Error query update: ${error}`)
        }
    },
    getPoblacion:async()=>{
        try {
            const allPoblacion = await db_pool.any(`SELECT * FROM conjunto.poblacion`)
            return allPoblacion
        } catch (error) {
            throw new Error(`Error query get: ${error}`)
        }
    },
    deletePoblacion:async(id)=>{
        try {
            const result = await db_pool.result(`DELETE FROM conjunto.poblacion WHERE id =$1`,[id])
            return result.rowCount === 1
        } catch (error) {
            throw new Error(`Error query delete: ${error}`)
        }
    }
}

export default modelPoblacion