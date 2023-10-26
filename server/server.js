const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const contactModel = require('./models/db');

mongoose.connect('mongodb+srv://sandra:Sandra@contact-app.ufewsfa.mongodb.net/?retryWrites=true&w=majority')
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const contacts = await contactModel.find();
        res.json(contacts);
    } catch (err) {                            
        res.status(500).send(err.message);
    }
});
app.post('/',(req,res)=>{
    contactModel.create(req.body)
    .then(contact=>res.json(contact))
    .catch(err=>res.json(err));
})
app.listen(3000,()=>{
    console.log('listening to port 3000');
})