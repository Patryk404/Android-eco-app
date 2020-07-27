const {scrap} = require('../utils/scraper/scrap');

module.exports.get_photos = async (req,res,next)=>{
    const output = scrap();
    const photos = [];
    for(var i=30384; i<30484; i++){
         photos.push(output.photos[i]);
    }
    res.status(200).json({
        photos: photos
    });
};