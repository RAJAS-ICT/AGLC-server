import Affiliate from '../model/affiliateModel.js'

export const getDataAffiliate = async(req,res)=>{
    try {
        const result = await Affiliate.findAll({raw:true})
        res.status(200).json(result)
    } catch (error) {
        console.error(' Error fetching affiliates:', error);
        res.status(500).json({ message: error.message });
    }
}

export const postDataAffiliate = async(req,res)=>{
    try {
        const {name} = req.body
        const result = await Affiliate.create({
            name
        })
        if(!name){
            return res.status(400).json({
                message:'Name is required.'
            })
        }
        res.status(201).json({
            message:'Created Successfully.',
            data: result
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message: error.message})
    }
}


export const putDataAffiliate = async(req,res)=>{
    try {
        const {id} = req.params
        const {name} = req.body
        
        const result = await Affiliate.findByPk(id)
        if(!result){
            return res.status(404).json('Affiliate not found.')
        }

        result.name = name ?? result.name

        await result.save()

        res.status(201).json({
            message: 'Updated Successfully.',
            data: result
        })

    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message: error.message})
    }
}


        
