const axios = require('axios');
const cheerio = require('cheerio');

async function webScraping(url, selector) {
    let res = [];
    let html = await axios.get(url);
    let $ = cheerio.load(html.data);
  
    for(let v of $(selector)) {   
        res.push($(v).text());
    }
  
    return res;
}

let url = 'https://upbit.com/service_center/wallet_status';
let selector = '#UpbitLayout > div.subMain > div > section.ty02 > article > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > span';

webScraping(url, selector).then((res) => {
  console.log(res)
});