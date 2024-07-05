import {createApicultors,getApicultors} from '../controllers/apicultor_controller.mjs'
import express from 'express'

const routerApicultors = express.Router();
routerApicultors.post('/apicultor',createApicultors)
routerApicultors.get('/apicultor',getApicultors)



export default routerApicultors;