import { db_pool } from "../config.mjs";

const modelAbeja = {
    createAbeja: async (abeja) => {
        try {
            const newAbeja = await db_pool.one(`INSERT INTO conjunto.abeja (nombre,tamanio,familia,tipo,especie,poblacion_id) 
            VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
                [abeja.nombre, abeja.tamanio, abeja.familia, abeja.tipo, abeja.especie, abeja.poblacion_id])
            return newAbeja

        } catch (error) {
            throw new Error(`Error query create: ${error}`)
        }
    },
    getAbeja: async () => {
        try {
            const allAbeja = await db_pool.any(`SELECT * FROM conjunto.abeja`)
            return allAbeja
        } catch (error) {
            throw new Error(`Error query get: ${error}`)
        }
    },
    updateAbeja: async (id,abeja) => {
        try {
            const actualAbeja = await db_pool.one(`UPDATE conjunto.abeja SET nombre=$1,tamanio=$2,familia=$3,tipo=$4,especie=$5,poblacion_id=$6
            WHERE id=$7`,
                [abeja.nombre,abeja.tamanio,abeja.familia,abeja.tipo,abeja.especie,abeja.poblacion_id,id]
            )
            return actualAbeja
        } catch (error) {
            throw new Error(`Error query update: ${error}`)
        }
    },
    deleteAbeja: async (id) => {
        try {
            const result = await db_pool.result(`DELETE FROM conjunto.abeja WHERE id =$1`,[id])
            return result.rowCount === 1 
        } catch (error) {
            throw new Error(`Error query delete:${error}`)
        }
    }
}

export default modelAbeja