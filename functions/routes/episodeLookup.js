const bbt = require('big-bang-theory');

const episodeLookup = (req, res) => {
  const parsed = bbt._embedded.episodes.filter(episode => episode.season + "x" + episode.number === req.params.code
                                       .replace(req.params.code
                                       .split("x")[1],req.params.code
                                       .split("x")[1]
                                       .replace(/^0/, "")))
                                       
  if(parsed.length > 0){
    res.status(200).json({
    success: true,
    code: req.params.code, // code is the episode code, e.g. 1x01 is the first episode of the first season
    data: parsed
  })
  } else {
    res.status(400).json({
    success: false,
    code: req.params.code,
    message: "Episode code is invalid. Please try again."
  })
  }
}

module.exports = episodeLookup;