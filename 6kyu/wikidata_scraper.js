/* 
6kyu - Wikidata Json Scraper
https://www.codewars.com/kata/643869cb0e7a563b722d50ad/train/javascript

ex: https://www.wikidata.org/wiki/Special:EntityData/Q42.json
*/


const axios = require('axios')
// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate' };

const wikidata_scraper = async (url) => {
  const id = url.match(/(.+)\/(.+?)\.json/)[2];
  try {
    let resp = await axios.get(url, { headers });
    return {
      ID: id,
      LABEL: resp.data.entities[id].labels.en?.value || "No Label",
      DESCRIPTION: resp.data.entities[id].descriptions.en?.value || "No Description"
    }
  } catch (e) {
    return {
      ID: id,
      LABEL: "No Label",
      DESCRIPTION: "No Description"
    }
  }
};

wikidata_scraper('https://www.wikidata.org/wiki/Special:EntityData/Q42.json')
  .then(res => console.log(res));


// best

/* 
const axios = require('axios');
const headers = {'Accept-Encoding': 'gzip,deflate'};

const wikidata_scraper = async url => {
  const {data: {entities: data}} = await axios.get(url, {headers});
  
  const [[ID, {labels:       {en: {value: LABEL}       = {value: 'No Label'      }},
               descriptions: {en: {value: DESCRIPTION} = {value: 'No Description'}},
              }
        ]] = Object.entries(data);
  
  return {ID, LABEL, DESCRIPTION};
}
*/

/* 
const axios = require('axios');
const headers = {'Accept-Encoding': 'gzip,deflate'};

const wikidata_scraper = async url => {
  const {data} = await axios.get(url);
  const ID = Object.keys(data.entities)[0];
  const filling = data.entities[ID];
  const LABEL = filling.labels['en']?.value || 'No Label';
  const DESCRIPTION = filling.descriptions['en']?.value || 'No Description';
  return {ID, LABEL, DESCRIPTION};
}
*/