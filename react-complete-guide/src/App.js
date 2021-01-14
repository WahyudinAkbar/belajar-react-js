import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "wahyu1", name: "Wahyu", age: 19 },
      { id: "wahyu2", name: "Akbar", age: 22 },
      { id: "wahyu3", name: "Erv", age: 18 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, i am Wahyu</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Work or Not")
    // );
  }
}

export default App;

// React Hooks

// const app = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Wahyu", age: 19 },
//       { name: "Akbar", age: 22 },
//       { name: "Erv", age: 18 },
//     ],
//   });

//   const [otherValue, setOtherValue] = useState({
//     otherValue: "Some other value",
//   });

//   console.log(personState, otherValue);

//   const switchPersonHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "Wahyu", age: 19 },
//         { name: "Akbar", age: 22 },
//         { name: "Ervia", age: 18 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, i am Wahyu</h1>
//       <p>My age 19</p>
//       <button onClick={switchPersonHandler}>Switch Person</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       >
//         hobbies: listen music
//       </Person>
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//     </div>
//   );
//   // return React.createElement(
//   //   "div",
//   //   { className: "App" },
//   //   React.createElement("h1", null, "Work or Not")
//   // );
// };

// export default app;
