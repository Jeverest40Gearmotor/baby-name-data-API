const bbt = require('big-bang-theory');

const episodeIndex = (req, res) => {
  if((req.params.index < bbt._embedded.episodes.length)&&(req.params.index >= 0)){
    res.status(200).json({
    success: true,
    index: req.params.index,
    data: bbt._embedded.episodes[req.params.index]
    })
  } else {
    res.status(400).json({
    success: false,
    index: req.params.index,
    message: "Index value is out of range. There are only "+bbt._embedded.episodes.length+" episodes of this show."
    })
  }
}

module.exports = episodeIndex;

