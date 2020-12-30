import React, { Component } from 'react'; //import React Component
import './style.css';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.pets
    };
  }

  adopt = (petName) => {
    this.setState((state) =>
      _.find(this.state.pets, ["name", petName]).adopted = true
    );
  }

  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>
  
        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">      
              <BreedNav breeds={Object.keys(_.groupBy(this.state.pets, "breed"))}/>
              <AboutNav />
            </div>
  
            <div id="petList" className="col-9">
              <PetList pets={this.state.pets} adoptCallback={this.adopt} />
            </div>
          </div>
        </main>
  
        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    );
  }
}

class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
          <h2>About</h2>
          <ul className="list-unstyled">
            <li><a href="#/">How to Adopt</a></li>
            <li><a href="#/">Volunteering</a></li>
            <li><a href="#/">Events</a></li>
            <li><a href="#/">Donate</a></li>
            <li><a href="#/">About Us</a></li>
          </ul>
        </nav>
    );
  }
}

class BreedNav extends Component {
  render() {
    let breedLinks = this.props.breeds.map((breed) => 
      <li key={breed}><a href="#/">{breed}</a></li>
      );
    return (
    <nav id="breedLinks">
      <h2>Pick a Breed</h2>
      <ul className="list-unstyled">
        {breedLinks}
      </ul>            
    </nav>
    );
  }
}

class PetCard extends Component {
  render() {
    let callback = this.props.adoptCallback;

    let displayedName = this.props.pets.name;
    if (this.props.pets.adopted) {
      displayedName = displayedName + " (Adopted)"
    } 

    return (
      <div className="card" onClick={() => {callback(this.props.pets.name)}}>
        <img className="card-img-top" src={this.props.pets.img} alt={displayedName} />
        <div className="card-body">
          <h3 className="card-title">{displayedName}</h3>
          <p className="card-text">{this.props.pets.sex + " " + this.props.pets.breed}</p>
        </div>
      </div>
    );
  }
}

class PetList extends Component {
  render() {
    let callback = this.props.adoptCallback;
    let petCards = this.props.pets.map((pet) => 
      <PetCard key={pet.name} pets={pet} adoptCallback={callback}/>
    );
    return (
      <div>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
          {petCards}
        </div>
      </div>
      
    );
  }

}

export default App;
