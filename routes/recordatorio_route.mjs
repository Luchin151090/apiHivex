import{getRecords,createRecords,updateRecords,deleteRecords} from '../controllers/recordatorio_controller.mjs'
import express from 'express'

const routerRecordatorio = express.Router()

routerRecordatorio.get('/reminder',getRecords)
routerRecordatorio.post('/reminder',createRecords)
routerRecordatorio.put('/reminder/:reminderID',updateRecords)
routerRecordatorio.delete('/reminder/:reminderID',deleteRecords)

export default routerRecordatorio