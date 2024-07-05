import modelPoblacion from "../models/poblacion_model.mjs"


export const createPoblaciones = async(req,res) => {
    try {
        const newPoblacion = req.body
        const createPoblacion = await modelPoblacion.createPoblacion(newPoblacion)
        res.status(200).json(createPoblacion)
    } catch (error) {
        res.status(500).json({error})
    }
}
export const getPoblaciones = async (req,res) => {
    try {
        const allPoblacion = await modelPoblacion.getPoblacion()
        res.status(200).json(allPoblacion)
    } catch (error) {
        res.status(500).json({error})
    }
}
export const updatePoblaciones = async (req,res) => {
    try {
        const {poblacionID} = req.params
        const id = parseInt(poblacionID,10)
        const nowPoblacion = req.body
        const poblacionupdate = await modelPoblacion.updatePoblacion(id,nowPoblacion)
        res.status(200).json(poblacionupdate)
    } catch (error) {
        res.status(500).json({error})
    }
}
export const deletePoblaciones = async (req,res) => {
    try {
        const {poblacionID} = req.params
        const id = parseInt(poblacionID,10)
        const result = await modelPoblacion.deletePoblacion(1)
        if(result){
            res.status(200).json({mensaje:'Poblacion descartada'})
        }
        else{
            res.status(404).json({error:'No se encoontro la poblacion'})
        }
    } catch (error) {
        res.status(500).json({error})
    }
}