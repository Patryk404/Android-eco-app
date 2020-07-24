const app = require('express')();
const bodyParser =require('body-parser');
const authRoute = require('./routes/auth');
const db = require('./utils/database/database');

app.use(bodyParser.json());

app.use('/auth',authRoute); // finish

app.use((error, req, res, next) => {// catching errors; 
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data; 
    res.status(status).json({ message: message, data:data });
  });

db.sync()
.then(()=>{
  app.listen(3000);
})
