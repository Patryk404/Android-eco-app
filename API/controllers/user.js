const Account = require('../models/account');
module.exports.get_user = async (req,res,next)=>{
    const account = await Account.findOne({where: {id: req.userId}});
    if(!account){
        const error = new Error;
        error.statusCode =  404;
        error.message = "We can't find a profile :(";
        return next(error);
    }
    res.status(200).json({
        account: account
    });
}