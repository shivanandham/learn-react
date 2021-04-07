// import classes from "*.module.css";
import { Component } from "react";
import App from "./App";
import Person from './Person/Person'
import './Test.css';


class Test extends Component {
  state = {
    Persons: [
      { id: '0', name: "shiva", age: 21 },
      { id: '1', name: "shiva", age: 22 },
      { id: '2', name: "shiva", age: 23 }
    ],

    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.Persons];
    persons.splice(personIndex, 1);
    this.setState({
      Persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.Persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[personIndex] = person;
    this.setState({
      Persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #ccc',
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius: '20px',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px',
      padding: '5px 10px',
      coursor: 'pointer',
      marginBottom: '16px',
      outline: 'none',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.Persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changes={(event) => this.nameChangedHandler(event, person.id)} >
            </Person>
          })}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    console.log(this.state.Persons.length)
    if (this.state.Persons.length <= 2) {
      classes.push('red');
      console.log(classes)
    }
    if (this.state.Persons.length <= 1) {
      classes.push('bold');
      console.log(classes)
    }

    return (
      <div className="App">
        <h1>Hello Test</h1>
        <p className={classes.join(' ')}> testing</p>
        <button className="button" alt={this.state.showPersons} onClick={() => this.togglePersonHandler('shiva!!!')}>Switch Name</button>
        {persons}
      </div>
    );
  }

}
export default Test;