import modelAbeja from "../models/abeja_model.mjs";

export const createAbejas = async(req,res) => {
    try {
        const newBee = req.body
        const newAbeja = await modelAbeja.createAbeja(newBee)
        res.status(200).json(newAbeja)
    } catch (error) {
        res.status(500).json({error})
    }
}
export const getAbejas = async (req,res) => {
    try {
        const allBees = await modelAbeja.getAbeja()
        res.status(200).json(allBees)
    } catch (error) {
        res.status(500).json({error})
    }
}
export const updateAbejas = async (req,res) => {
    try {
        const {abejaID} = req.params
        const id = parseInt(abejaID,10)
        const nowBee = req.body
        const updateAbeja = await modelAbeja.updateAbeja(id,nowBee)
        res.status(200).json(updateAbeja)
    } catch (error) {
        res.status(500).json({error})
    }
}
export const deleteAbejas = async (req,res) => {
    try {
        const {abejaID} = req.params
        const id = parseInt(abejaID,10)
        const result = await modelAbeja.deleteAbeja(id)
        if(result){
            res.status(200).json({mensaje:'Abeja descartada'})
        }
        else{
            res.status(404).json({error:'No se encoontro la abeja'})
        }
    } catch (error) {
        res.status(500).json({error})
    }
}