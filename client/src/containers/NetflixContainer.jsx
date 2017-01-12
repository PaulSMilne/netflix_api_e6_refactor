var React = require('react');
var Form = require('../components/Form.jsx');
var FilmList = require('../components/FilmList.jsx');

var NetflixContainer = React.createClass({
  getInitialState: function(){
    return {films: [], actor: ''};
  },

  handleFormSubmit: function (text) {
    var url='http://netflixroulette.net/api/api.php?actor=' + text;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      //TO DO send data up to top level
      this.setState({films: data, actor: text});
    }.bind(this);
    request.send();
  },

  render: function () {
    return (
        <div className='Netflix'>
          <Form onFormSubmit={this.handleFormSubmit}/>
          <FilmList films = {this.state.films} actor={this.state.actor} />
        </div>
      )
  }

});

module.exports = NetflixContainer;
