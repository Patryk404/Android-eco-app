const Product = require('../models/product');
const {scrapUrl,scrap} = require('../utils/scraper/scraper');

module.exports.getProducts = async (req,res,next)=>{
    const photos = [];
    for(var i=30384; i<30485; i++){
        photos.push(await scrap(i));
    }
    res.status(200).json({
        photos: photos
    });
};

module.exports.getProduct = async (req,res,next)=>{
    const url = await req.get('url');
    const product = await scrapUrl(url);
    res.status(200).json({
        product: product
    });
};