const fs = require('fs');

const output ={
    photos: []
};

const QUANTITY = 30489; // this can be change lol

module.exports.scrap = () =>{
    for(var i=0; i<QUANTITY; i++){
        output.photos.push({
            link: `http://www.pzstudio.pl/public/foto/photo/big/${i}.jpg`
        });
    }
    return output;
};
