const express= require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride = require('method-override');

if(process.env.NODE_ENV !='production')
 require('dotenv').config();


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));



// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://aksh0393:skadoosh@123@cluster0.iukm3.mongodb.net/guest?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect((err,data) => {
//    if(err)
//     console.log(err);
//     console.log(data);

// });






app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const guestRoutes = require('./routes/guestRoutes');


app.get('/', (req, res) => {
    res.send('Home Page');
});


app.use(guestRoutes);



app.listen(3000, (req, res) => {
    console.log('server running at port 3000');
});
