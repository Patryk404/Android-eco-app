const Product = require('../models/product');
const {scrap} = require('../utils/real_scraper/scraper');

module.exports.getProducts = async (req,res,next)=>{
    const photos = [];
    for(var i=30000; i<30500; i++){
        console.log('tick');
        photos.push(await scrap(i));
    }
    res.status(200).json({
        photos: photos
    });
};