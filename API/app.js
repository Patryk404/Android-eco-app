const app = require('express')();
const bodyParser =require('body-parser');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const account = require('./models/account');
const cart = require('./models/shoppingCart');
const product = require('./models/product');
const cartItem = require('./models/cartItem');
const db = require('./utils/database/database');

app.use(bodyParser.json());

app.use((req, res, next) => {//cors policy
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/products',productRoute);

app.use('/user',userRoute);

app.use('/auth',authRoute); // finish

app.use((error, req, res, next) => {// catching errors; 
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data; 
    res.status(status).json({ message: message, data:data });
  });

account.hasOne(cart);
cart.belongsTo(account);
cart.belongsToMany(product,{through: cartItem});
product.belongsToMany(cart,{through: cartItem});

db.sync()
.then(()=>{
  app.listen(3000);
})
