
const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      coinRoutes = require('./expressRouter/coinRouter');



//Datase connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );


// mongoose.connect('mongodb://localhost:27017/cn');

// mongoose.connection.on('connected',()=>{
//   console.log('Connected to mongo db at port @27017');
//    });

// mongoose.connection.on('error',(err)=>{ 
//   if(err){
//               console.log('Error in database connection :'+err);
//          }
// });


const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/coins', coinRoutes);
 
 const server = app.listen(port, function(){
   console.log('Listening on port ' + port);
 });

// coinRoutes = require('./router/coinRouter.js');

// app.use('/coins', coinRoutes);