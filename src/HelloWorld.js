import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HelloWorld extends React.Component{
  constructor() {
    super();
    this.state = {
      works: []
    }
  }

  add() {
    var title = this.refs.title.value;
    if(localStorage.getItem('works')== null) {
      var works = []
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }else{
      var works = JSON.parse(localStorage.getItem('works'))
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }
    this.setState ({
      works: JSON.parse(localStorage.getItem('works'))
    })
  }


  render(){
    var myStyle = {
      fontSize: 35,
   }
    return(
      <div>
      <center>
        <h2>Put Your Infos Here</h2>
        <h5>Name:</h5>
        <input type="text" ref="title"/>
        <h5>Choose A Team:</h5>
          <select ref="team" label="Select A Team">
          <optgroup label="Team Web">
            <option ref="web">WEB</option>
            </optgroup>
            <optgroup label="Team GAME">
            <option ref="game">GAME</option>
            </optgroup>
            <optgroup label="Team AI">
            <option ref="ai">AI</option>
            </optgroup>
          </select>
        <h5>Description:</h5>
        <textarea ref="dec"></textarea><br/><br/>
        <input type="button" value="Submit" onClick={this.add.bind(this)}/>
        <br/><br/><br/><br/>
      </center>
        <ul style = {myStyle}>
          {this.state.works.map(function(work,index){
            return(
              <li key={index}><Link to="/test">{work}</Link></li>
            )
          },this)}

        </ul>
      </div> 
    );
  }
}

export default HelloWorld;