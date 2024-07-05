import {createColmenas,getColmenaByIds,getColmenas,updateColmenas,deleteColmenas} from '../controllers/colmena_controller.mjs'
import express from 'express'

const routerColmenas = express.Router()
routerColmenas.get('/colmenas',getColmenas)
routerColmenas.post('/colmenas',createColmenas)
routerColmenas.put('/colmenas/:colmenaID',updateColmenas)
routerColmenas.delete('/colmenas/:colmenaID',deleteColmenas)
routerColmenas.get('/colmenas/:colmenaID',getColmenaByIds)

export default routerColmenas;