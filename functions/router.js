const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const episodeLookup = require('./routes/episodeLookup');
const airedBetween = require('./routes/airedBetween');
const promoImage = require('./routes/promoImage');
const episodeSeason = require('./routes/episodeSeason');
const { byName, byYear } = require('us-baby-names');

// Transform the data object elements into an
// HTML table
const formatToHTML = function(dataArr) {
    // If dataArr is undefined or null, make an empty array
    if (!dataArr) {
      dataArr = [];
    }
    // Use the Array.map function to convert each record 
    // into an HTML table element.
    dataArr = dataArr.map(item => {
      // Create the HTML here
      let html = '<tr>'
      html += (item.year) ? '<td>'+item.year+'</td>' : '';
      html += (item.name) ? '<td>'+item.name+'</td>' : '';
      html += (item.sex) ? '<td>'+item.sex+'</td>' : '';
      html += (item.count) ? '<td>'+item.count+'</td>' : '';
      html += '</tr>';
      return html
    })
    // Now join all the elements together inside the 
    // <table><tbody> elements.
    return '<table><tbody>'+
      dataArr.join('')+'</tbody></table>';
  }
  
  // Transform name with first character capitalized and the 
  // rest lower case
  const fixName = function(name) {
    let newName = name.toLowerCase();
    newName = newName.charAt(0).toUpperCase() +
      newName.substr(1)
    return newName
  }
  
router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/episode-lookup/:code", episodeLookup);
router.get("/aired-between/:date1/:date2", airedBetween);
router.get("/promo-image/:code", promoImage);
router.get("/episode-season/:season", episodeSeason)

router.get('/baby-name/:name', function(req, res) {
    let data = byName[fixName(req.params.name)];
    res.send(formatToHTML(data));
  })

router.get('/baby-name/:name/:year', function(req, res) {
    let data = byName[fixName(req.params.name)];
    res.send(formatToHTML(data));
  })

module.exports = router;

