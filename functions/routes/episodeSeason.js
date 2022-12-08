const bbt = require('big-bang-theory');

const episodeSeason = (req, res) => {
  const parsed = bbt._embedded.episodes.filter(episode => episode.season == req.params.season)
                                       
  if(parsed.length > 0){
    res.status(200).json({
    success: true,
    season: req.params.season,
    data: parsed
  })
  } else {
    res.status(400).json({
    success: false,
    season: req.params.season,
    message: "Not a valid range. Please try again."
  })
  }
}

module.exports = episodeSeason;

