const bbt = require('big-bang-theory');

const airedBetween = (req, res) => {
  const parsed = bbt._embedded.episodes.filter(episode => (episode.airdate >= req.params.date1) && (episode.airdate <= req.params.date2))
                                       
  if(parsed.length > 0){
    res.status(200).json({
    success: true,
    date1: req.params.date1,
    date2: req.params.date2,
    data: parsed
  })
  } else {
    res.status(400).json({
    success: false,
    date1: req.params.date1,
    date2: req.params.date2,
    message: "Not a valid range. Please try again."
  })
  }
}

module.exports = airedBetween;

