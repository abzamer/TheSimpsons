import React, { Component } from "react";
import SimpsonsCard from "./components/SimpsonsCard/index";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import simpsons from "./simpsons.json";
import Wrapper from "./components/Wrapper";


class App extends Component {
  // set this.state.simpsons to the simpsons array
  state = {
    simpsons
  };

  removeSimpson = id => {
    const simpsons = this.state.simpsons.filter(simpson => simpson.id !== id);
    // set state
    this.setState({ simpsons });
  };

  // map over this.state.simpsons and render a SimpsonsCard component for each
  render() {
    return (
      <Wrapper>
        <NavBar />
        <Title>The Simpsons</Title>
        {this.state.simpsons.map(simpson => (
          <SimpsonsCard
            removeSimpson={this.removeSimpson}
            id={simpson.id}
            key={simpson.id}
            image={simpson.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
