require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.API_KEY;

const endpoint = 'https://api.yelp.com/v3/businesses/search';

async function searchBus(term) {
    const params = {
        location: 'Irvine',
        term: term,
    };
    const res = await axios.get(endpoint,{
        params: params,
        headers: {
            Authorization: `Bearer ${apiKey}`
        },
    });
    // console.log(res.data.businesses[0]);
        /*
            .id = get the id
            .name = get the name
            .image_url = get image url
            .is_closed = open?
            .categories = array of categories
            .location = dict of addresses
            .phone = phone num or maybe .display_phone
        */
    let data = []
    // console.log(res.data.businesses[0].name);
    res.data.businesses.forEach(element => {
        data.push({
            "_id": element.id,
            "name": element.name,
            "image": element.image_url,
            "categories": element.categories,
            "location": element.display_address,
            "phone": element.display_phone
        })
    });
    // console.log(Array.isArray(data)); 
    return data;
}
// searchBus("restaurants").then(data => {
//     console.log(data.length);
// })
module.exports = searchBus;



