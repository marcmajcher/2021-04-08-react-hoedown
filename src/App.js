import './App.css';
import { Component } from 'react';
import DogList from './DogList';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const dogsURL = 'http://localhost:3000/dogs';

export default class App extends Component {
  state = {
    dogs: [],
    filterString: '',
    showDogs: true,
  };

  componentDidMount() {
    console.log('ComponentDidMount : fetching');

    fetch(dogsURL)
      .then((res) => res.json())
      .then((json) => this.handleDogs(json));
  }

  handleDogs(dogs) {
    console.log(' in handleDogs');
    console.log(dogs);

    this.setState({ dogs });
  }

  render() {
    console.log('Rendering');

    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link> | <Link to="/list">List</Link>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <DogList
                dogs={this.state.dogs}
                filterString={this.state.filterString}
                showDogs={this.state.showDogs}
                setFilterString={(filterString) =>
                  this.setState({ filterString })
                }
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
