import modelRecord from "../models/recordatorio_model.mjs"


export const createRecords = async (req, res) => {
    try {
        const newRecord = req.body
        const recordatorio = await modelRecord.createRecord(newRecord)
        res.status(200).json(recordatorio)
    } catch (error) {
        res.status(500).json({ error })
    }
}
export const getRecords = async (req, res) => {
    try {
        const allReminders = await modelRecord.getRecord()
        res.status(200).json(allReminders)
    } catch (error) {
        res.status(500).json({ error })
    }
}
export const updateRecords = async (req, res) => {
    try {
        const { reminderID } = req.params
        const id = parseInt(reminderID, 10)
        const nowReminder = req.body
        const updateReminder = await modelRecord.updateRecord(id, nowReminder)
        res.status(200).json(updateReminder)
    } catch (error) {
        res.status(500).json({ error })
    }
}
export const deleteRecords = async (req, res) => {
    try {
        const { reminderID } = req.params
        const id = parseInt(reminderID, 10)
        const result = await modelRecord.deleteRecord(id)
        if (result) {
            res.status(200).json({ mensaje: 'Recordatorio eliminado' })
        }
        else {
            res.status(404).json({ error: 'No se encoontro recordatorio' })
        }
    }
    catch (error) {
        res.status(500).json({ error })
    }
}