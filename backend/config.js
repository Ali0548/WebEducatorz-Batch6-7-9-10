const mongoose = require('mongoose');
const connectToMongoDB =  async()=>{
  try {
    await mongoose.connect('mongodb+srv://alihacker8ballpool2:gbIFhhi4sgiWx92n@cluster0.iaa5mnf.mongodb.net/?retryWrites=true&w=majority',
     {useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', ()=>{
        console.log('Connected to MongoDB');
    });
  } catch (error) {
    console.log(error?.message)
  }
}
module.exports = connectToMongoDB;