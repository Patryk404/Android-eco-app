const axios = require('axios');
const cheerio = require('cheerio');




module.exports.scrap=async (i)=>{
    return new Promise(
       async (resolve) =>{
            let photo={};
            const url = `http://www.pzstudio.pl/window,${i}.html`;
            const response = await axios.get(url);
            const photo_title =  get_photo_title(response);
            const photo_description =  get_photo_description(response);
            photo = {
                link: url,
                title: photo_title,
                description: photo_description
            };
            resolve(photo);
        }
    )
}

/*(async()=>{
    console.log(await this.scrap(30400));
})();*/ //test 

/*module.exports.scrap=async (i)=>{
        let photo={};
        const url = `http://www.pzstudio.pl/window,${i}.html`;
        const response = await axios.get(url);
        const photo_title = await get_photo_title(response);
        const photo_description = await get_photo_description(response);
        photo = {
            link: url,
            title: photo_title,
            description: photo_description
        };
        return photo;
}*/



const get_photo_title = response =>{
    const html =  response.data;
    const $ =   cheerio.load(html);
    const table =  $('table').text(); 
    let part_of_name_of_photo;
    let name_of_photo;
    try { // avoiding empty sites
    part_of_name_of_photo = table.split('Nazwa zdjęcia:')[1];
    name_of_photo= part_of_name_of_photo.split('Opis zdjęcia:')[0].trimLeft().trimRight();
    }
    catch {
        part_of_name_of_photo = null;
        name_of_photo = null;
    }
    return name_of_photo;
}


const get_photo_description = response =>{
    const html = response.data;
    const $ =  cheerio.load(html);
    const table = $('table').text();
    let part_of_description;
    let description_of_photo;
    try{
     part_of_description = table.split('Opis zdjęcia:')[1];
     description_of_photo = part_of_description.split('Słowa kluczowe:')[0].trimRight().trimLeft();
    }
    catch {
        part_of_description = null; 
        description_of_photo = null;
    }
    return description_of_photo;
};
