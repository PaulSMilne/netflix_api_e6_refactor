var React = require('react');
var FilmDetail = require('./FilmDetail.jsx')

var FilmList = function(props){

  var movies = props.films.map(
    function(movie){
      return (
        <FilmDetail film={movie} key={movie.show_id}/>
        )
    }
  );

  return (
      <div className='film_list'>
      <h2>{props.actor}</h2>
        {movies}
      </div>
    )

}
module.exports = FilmList;
