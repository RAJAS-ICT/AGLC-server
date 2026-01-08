import Banks from '../model/banksModel.js'

export const getDataBanks = async(req,res)=>{
    try {
        const result = await Banks.findAll({raw:true})
        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message: error.message})
    }
}

export const  getDataBanksById = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Banks.findByPk(id, {raw:true})
        if(!result){
            return res.status(404).json({message:'Banks not found.'})
        }
        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}

export const postDataBanks = async(req,res)=>{
    try {
        const {name} = req.body
        if(!name){
            return res.status(400).json({
                message:'Name is required.'
            })
        }
        const result = await Banks.create({
            name
        })
        res.status(201).json({
            message:'Created Successfully',
            data: result
        })
    } catch (error) {
        
    }
}

export const putDataBanks = async(req,res)=>{
    try {
        const {id} = req.params
        const {name} = req.body

        const result = await Banks.findByPk(id)
        result.name =  name ?? result.name

        await result.save()
        res.status(200).json({
            message:'Updated Successfully',
            data: result
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:message.error,})
    }
}

