import modelColmena from '../models/colmena_model.mjs'


export const createColmenas = async (req, res) => {
    try {
        const newColmena = req.body
        const createColmena = await modelColmena.createColmena(newColmena)
        res.status(200).json(createColmena)
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
}
export const getColmenaByIds = async (req,res) => {
    try {
        const {colmenaID} = req.params
        console.log("paraaam")
        console.log(colmenaID)
        const idcolmena = parseInt(colmenaID,10)
        const getResult =  await modelColmena.getColmenaById(idcolmena)
        if(getResult){
            res.status(200).json(getResult)
        }
        else{
            res.status(404).json({ message: "Colmena not found" })
        }
        
    } catch (error) {
        res.status(500).json({ error: `Error querying database: ${error.message}` })
    }
}


export const getColmenas = async (req, res) => {
    try {
        const allColmenas = await modelColmena.getColmena()
        res.status(200).json(allColmenas)
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
}
export const updateColmenas = async (req, res) => {
    try {
        const { colmenaID } = req.params;
        console.log(colmenaID)
        const idcolmena = parseInt(colmenaID, 10)
        const nowColmenas = req.body;
        const colmenaUpdate = await modelColmena.updateColmena(idcolmena, nowColmenas)
        if (colmenaUpdate){
            res.status(200).json(colmenaUpdate)
        }
        else{
            res.status(404).json({ message: "Colmena not found" }) 
        }
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
}
export const deleteColmenas = async (req, res) => {
    try {
        const { colmenaID } = req.params;
        const idcolmena = parseInt(colmenaID, 10)
        const deleteResult = modelColmena.deleteColmena(idcolmena)
        if (deleteResult) {
            res.status(200).json({ mensaje: 'Colmena eliminada' })
        }
        else {
            res.status(404).json({ error: 'No se encontró la colmena' })
        }
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
}
