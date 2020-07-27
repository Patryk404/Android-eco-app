const {scrap} = require('../utils/scraper/scrap');

module.exports.get_photos = async (req,res,next)=>{
    const output = await scrap();
    const photos = [];
    for(var i=0; i<100; i++){
        photos.push(output.photos[Math.floor((Math.random()*30000)+0)]);
    }
    res.status(200).json({
        photos: photos
    });
};