const userModel = require("../model/user")

const login = async (req,res)=>{
    try {
        const user = await userModel.findOne({email:req?.body?.email});
        if(!user) return res.status(404).send('Invalid Credentials!');
        if(user?.password===req?.body?.password) {
            return res?.json({status:true, data:"0548"})
        } else {
            return res.json({status:false, data:"Invalid Credentials!", message:"Invalid Credentials!"});
        }
    } catch (error) {
       return res.status(401).send(error?.message); 
    }
}
const registration = async (req,res)=>{
    try {
       const newUser = await userModel.create(req.body);
         if(!newUser) return res.status(404).send('User not found!');
            return res.send(newUser);
    } catch (error) {
       return res.status(401).send(error?.message); 
    }
}
module.exports = {login, registration};