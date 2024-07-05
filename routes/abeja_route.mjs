import {createAbejas,getAbejas,updateAbejas,deleteAbejas} from '../controllers/abeja_controller.mjs'
import express from 'express'

const routerAbejas = express.Router()

routerAbejas.post('/abeja',createAbejas)
routerAbejas.get('/abeja',getAbejas)
routerAbejas.put('/abeja/:abejaID',updateAbejas)
routerAbejas.delete('/abeja/:abejaID',deleteAbejas)

export default routerAbejas