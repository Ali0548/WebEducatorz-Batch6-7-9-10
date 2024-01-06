const express = require('express');
const connectToMongoDB = require('./config');
const userModel = require('./api/model/user');
const app = express();
const port = 6001;
connectToMongoDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(helmet());
const users = [
    {id: 7755, name: 'John'},
    {id: 2733, name: 'Peter'},
    {id: 883, name: 'Mary'}
]
// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/user/:id', (req, res) => {
//     const id = req.params.id;
//     const user = users?.find((user)=>user.id === parseInt(id))
//     // const user = users.find(user => user.id === parseInt(id));
//     if(!user) res.status(404).send('User not found!');
//     res.send(user);
// });
// app.get('/about', (req, res) => res.send('Hello, You are on about page!'));

app.use('/web-educatorz', require('./api/routes/index'));
app?.post('/web-educatorz/addUser', async (req, res) => {
   try {
    const addUser = await userModel.create({
        email: "sajjad@gmail.com",
        name: "sajjad",
        role: "owner",
        password: "sajjad123",
    });
    if(!addUser) res.status(404).send('User not found!');
    res.send(addUser);
   } catch (error) {
    console.log(error?.message)
   }
})

app.listen
    (  port,
        () => console.log(`Web educatorz app is listening on port: ${port}!`)
    );