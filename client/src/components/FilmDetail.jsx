var React = require('react');

var FilmDetail = function(props){

     return(
          <section className='search_result'>
               <h3>{props.film.show_title}</h3>
               <img src={props.film.poster} />
               <ul>
                    <li><strong>Director:</strong> {props.film.director}</li>
                    <li><strong>Year:</strong> {props.film.release_year}</li>
                    <li><strong>Summary:</strong><br />{props.film.summary}</li>

               </ul>
          </section>
     )
};

module.exports = FilmDetail;