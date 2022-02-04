const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", function (req,res) {
  Movie.find()
    .then((results) => {
      console.log("SUCCESS: ", results)
      res.render("movies", {movies: results})
    })
    .catch((err) => console.log("ERROR::: ", err))
})

router.get("/movies/:movieId", function (req, res) {
  Movie.findById(req.params.movieId)
  .then((results) => {
    console.log("Movie was found!", results)
    res.render("about-movie", {
      title: results.title,
      director: results.director,
      stars: results.stars,
      image: results.image,
      description: results.description,
      showtimes: results.showtimes
    })
  })
  .catch((err) => console.log("movie was not found :(", err))
})

module.exports = router;
