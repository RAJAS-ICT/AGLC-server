import LocalGovernmentAgency from '../model/localGovernmentAgencyModel.js'

export const getDataLocalGovernmentAgency = async(req,res)=>{
    try {
        const result = await LocalGovernmentAgency.findAll({raw:true})
        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}

export const postDataLocalGovernmentAgency = async(req,res)=>{
    try {
        const {name} = req.body
        if(!name){
            res.status(400).json({
                message:'Name is required.'
            })
        }
        const result = await LocalGovernmentAgency.create({
            name
        })
        res.status(201).json({
            message: 'Created Successfully',
            data: result
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}

export const putDataLocalGovernmentAgency = async(req,res)=>{
    try {
        const {id} = req.params
        const {name} = req.body

        const result = await LocalGovernmentAgency.findByPk(id)
        result.name = name ?? result.name
        await result.save()

        res.status(200).json({
            message:'Updated Successfully',
            data: result
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}
