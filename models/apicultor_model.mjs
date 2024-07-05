import { application } from 'express'
import {db_pool} from '../config.mjs'

const modelApicultor = {
    createApicultor: async (apicultor) => {
        try {
    
            const createapicultor = await db_pool.one(`
            INSERT INTO personal.apicultor (nombre,apellidos,dni)
            VALUES($1,$2,$3) RETURNING *`,[apicultor.nombre,apicultor.apellidos,apicultor.dni])

            return createapicultor
        }
        catch (e) {
            throw new Error(`Error query create:${e}`)
        } 
    },
    getApicultor: async() => {
        try {
            const apicultor = await db_pool.any('SELECT * FROM personal.apicultor')
            return apicultor
        } catch (error) {
            throw new Error(`Error query ${error}`)
        }
    },
    updateApicultor: async(id,apicultor) => {
        try{
            const apicultors = await db_pool.one('UPDATE personal.conductor SET nombre=$1,apellidos=$2,dni=$3 WHERE id=$4 RETURNING *',
                [apicultor.nombre,apicultor.apellidos,apicultor.dni,id])
            return apicultors
        } catch (error) {
            throw new Error(`Error query ${error}`)
        }
    }
   
}
export default modelApicultor;