exports.signupController =  (req, res)=>{
    const {name} = req.body
    if(!name){
        res.status(400).json({msg: `Field(s) are missing! Try again later`})
        return
    }
        res.status(200).json({msg: `Welcome, ${name}`})
    }


