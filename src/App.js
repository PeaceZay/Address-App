import React, { Component } from 'react';
import './App.css';
import PeopleCard from './PeopleCard';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayOfPeople: []
    }
  };

  componentDidMount(){
    fetch("https://randomuser.me/api?results=25")
    .then(res => res.json())
    .then(data => {
      console.log("data", data)
      console.log("data res", data.results[0])
      this.setState({
        arrayOfPeople: data.results
      })
    })
  };

  render() {
    return (
      <div className="App">
        <ol>{this.state.arrayOfPeople.map((people, index) => {
          console.log("person", people)
          return (
          <PeopleCard key={index}
            gender={people["gender"]}
            name={people.name.first}
             city={people.location.city}
             state={people.location.state}
             country={people.location.country}
            email={people.email}
            // login={people.login}
            // dob={people.login}
            // registered={people.registered}
            phone={people.phone}
            cell={people.cell}
            // id={people.id}
            picture={people.picture.large}
            ></PeopleCard>
            )
          })}</ol>
          

      </div>
    )
  }
}
  export default App

  





// APP should do this!!!
// Spec 1: minimum 25 users
// Spec 2: displays the user's name and thumbnail picture
// Spec 3: When the "show details" button is clicked the user's 
// details are revealed and button text turns to "hide details"
// Spec 4 When "hide details" is clicked the user's details disappear.