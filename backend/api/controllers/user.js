const userModel = require("../model/user");

const users = [
    {id: 7755, name: 'John'},
    {id: 2733, name: 'Peter'},
    {id: 883, name: 'Mary'}
]
const viewUser  = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        if(!allUsers?.length > 0) res.status(404).send('Users not found!');
        res.send(allUsers);
    } catch (error) {
        console.log(error?.message)
    }
}
const fetchUserById  = async (req, res) => {
    try {
        const allUsers = await userModel.findById(req?.params?.id);
        if(!allUsers) return res.status(404).send('Users not found!');
        return res.send(allUsers);
    } catch (error) {
        return res.status(401).send(error?.message);
    }
}
const fetchUserByName  = async (req, res) => {
    try {
        const allUsers = await userModel.find({name: req?.params?.name});
        if(!allUsers) return res.status(404).send('Users not found!');
        return res.send(allUsers);
    } catch (error) {
        return res.status(401).send(error?.message);
        console.log(error?.message)
    }
}
const addUser  = async (req, res) => {
    try {
        const addUser = await userModel.create({
            email: "ali@gmail.com",
            name: "Ali",
            role: "owner",
            password: "ali@123",
        });
        if(!addUser) res.status(404).send('User not found!');
        res.send(addUser);
       } catch (error) {
        res.status(401).send(error?.message);
        console.log(error?.message)
       }
}

module.exports = {viewUser, addUser, fetchUserById, fetchUserByName};