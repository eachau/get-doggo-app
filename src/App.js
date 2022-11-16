import './App.css';
import React from 'react';
import axios from 'axios';
import DogList from './DogList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      types: []
    };
  }

  fetchData = () => {
    this.setState({
      dogs: [],
      types: []
    });
    for (var i = 0; i < 8; i++) {
      axios
        .get("https://random.dog/woof.json")
        .then(response => {
          if (response.status === 200 && response.statusText === "OK") {
            let fileType = response.data.url
              .slice(response.data.url.length - 4)
              .toLowerCase();

            if ((fileType === ".jpg") || (fileType === "jpeg") 
                || (fileType === ".png") || (fileType === ".gif") 
                || (fileType === ".mp4") || (fileType === "webm")) {
              
              this.setState({
                dogs: [...this.state.dogs, response.data.url],
                types: [...this.state.types, fileType]
              });
            }
          } 
        })
        .catch(error => {
          this.setState({
            dogs: [...this.state.dogs, "Doggo not found"],
            types: [...this.state.types, null]
          });
        });
    }
    
  };

  componentDidMount() {
    this.fetchData();
    if (this.state.dogs.length < 8) {
      this.fetchData();
    }
  }

  newDoggoButton() {
    return <button onClick={() => {this.fetchData();
      if (this.state.dogs.length < 8) {
        this.fetchData();
      }
    }}>Get 8 New Doggos</button>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GET YOUR DOGGOS RIGHT HERE FRESH OUT THE BOX</h1>
          {this.newDoggoButton()}
        </header>
        <DogList doggos={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
