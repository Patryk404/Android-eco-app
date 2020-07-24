const Account = require('../models/account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.newUser = async (req,res,next)=>{
    let search_user;
    search_user = await Account.findOne({where: {login: req.body.login}});
    if (search_user){
        const error = new Error;
        error.statusCode =  401;
        error.message = "Account already exist!";
        return next(error);
    }
    search_user = await Account.findOne({where: {email: req.body.email}});
    if (search_user){
        const error = new Error;
        error.statusCode =  401;
        error.message = "Account already exist!";
        return next(error);
    }
    const password = await bcrypt.hash(req.body.password,12);
    const user = {
        ...req.body,
        password: password
    };
    const new_account = await Account.create(user);
    res.status(201).json({
        account: new_account,
        message: 'Succesfully created user'
    });
};

module.exports.Login = async (req,res,next)=>{ 
    const data = req.body;
    const account = await Account.findOne({where: {login: data.login}});
    if (!account){
        const error = new Error;
        error.statusCode = 404;
        error.message = "Can't find a account with this login";
        return next(error);
    }
    const valid = await bcrypt.compare(data.password,account.password);
    if (!valid){
        const error = new Error;
        error.statusCode = 404;
        error.message = "Wrong password";
        return next(error);
    }
    const token = await jwt.sign({
        id: account.id,
        login: account.login
    },process.env.JWT_SECRET);
    res.status(200).json({
        message: 'Succesfully logged into the system',
        token: token
    });
};