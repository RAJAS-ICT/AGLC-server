import Agents from '../model/agentsModel.js'

export const getDataAgents = async(req,res)=>{
    try {
        const result = await Agents.findAll({raw:true})
        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error),
        res.status(500).json({message: error.message})
    }
}

export const postDataAgents = async(req,res)=>{
    try {
        const {name} = req.body
        if(!name){
            return res.status(400).json({
                message:'Name is required'
            })
        }
        const result = await Agents.create({
            name
        })
        res.status(201).json({
            message:'Created Successfully',
            data: result
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message: error.message})
    }
}

export const putDataAgents = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body

        const result = await Agents.findByPk(id)

        if (!result) {
            return res.status(404).json({
                message: 'Agent not found'
            })
        }

        result.name = name ?? result.name
        await result.save()

        res.status(200).json({
            message: 'Updated Successfully',
            data: result
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({ message: error.message })
    }
}

