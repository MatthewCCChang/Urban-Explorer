require("dotenv").config();
const axios = require("axios");

const apiKey = process.env.API_KEY;

const endpoint = "https://api.yelp.com/v3/businesses/search";
const endpoint2 = "https://api.yelp.com/v3/businesses";

async function getAdditionalInfo(element) {
  const params2 = {
    business_id_or_alias: element,
  };
  const res2 = await axios.get(endpoint2 + `/${element}`, {
    params: params2,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  data2 = [
    res2.data.photos,
    res2.data.hours ? res2.data.hours[0].open : null,
    1.0,
    0,
  ];
  //   console.log(res2.data.hours[0].open);
  console.log(res2.data);
  return data2;
}

async function searchBus(term) {
  const params = {
    location: "Irvine",
    term: term,
  };
  const res = await axios.get(endpoint, {
    params: params,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  //   console.log(res.data.businesses[0]);
  /*
            .id = get the id
            .name = get the name
            .image_url = get image url
            .is_closed = open?
            .categories = array of categories
            .location = dict of addresses
            .phone = phone num or maybe .display_phone
        */

  //   console.log(res2);
  let data = [];
  // console.log(res.data.businesses[0].name);
  res.data.businesses.forEach(async (element) => {
    data.push({
      _id: element.id,
      name: element.name,
      image: element.image_url,
      categories: element.categories,
      location: element.location.display_address,
      phone: element.display_phone,
      //   menu: element.attributes.menu_url,
    });
  });
  // console.log(Array.isArray(data));
  return data;
}
// searchBus("activities").then((data) => {
//   const elem = data[0]._id;
//   console.log(data[0]._id);
//   const li = getAdditionalInfo(elem).then((data) => {
//     console.log(data);
//   });
// });

module.exports = { searchBus, getAdditionalInfo };
