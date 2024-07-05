import {createPoblaciones,getPoblaciones,updatePoblaciones,deletePoblaciones} from '../controllers/poblacion_controller.mjs'
import express from 'express'

const routerPoblacion = express.Router()

routerPoblacion.get('/poblacion',getPoblaciones)
routerPoblacion.post('/poblacion',createPoblaciones)
routerPoblacion.put('/poblacion/:poblacionID',updatePoblaciones)
routerPoblacion.get('/poblacion/:poblacionID',deletePoblaciones)

export default routerPoblacion