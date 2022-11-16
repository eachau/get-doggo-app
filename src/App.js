import './App.css';
import React from 'react';
import axios from 'axios';
import DogList from './DogList';
import Dog from './Dog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      types: []
    };
  }

  // GetDogMedia(props) {
  //   const index = props.index;
  //   const type = props.type[index];
  //   const url = props.url[index];
  //   if (type === ".mp4") {
  //     return (
  //       <video
  //         className="dogMedia"
  //         autoPlay={true}
  //         loop
  //         muted={true}
  //         key={url}
  //         controls
  //       >
  //         <source src={url} type="video/mp4" />
  //       </video>
  //     );
  //   } else if (type === "webm") {
  //     return (
  //       <video
  //         className="dogMedia"
  //         autoPlay={true}
  //         loop
  //         muted={true}
  //         key={url}
  //         controls
  //       >
  //         <source src={url} type="video/webm" />
  //       </video>
  //     );
  //   } else if (type === null) {
  //     return <p />;
  //   } else {
  //     return (
  //       <img className="dogMedia" src={url} key={url} alt="Broken Dog Link" />
  //     );
  //   }
  // }

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
  }

  newDoggoButton() {
    return <button onClick={() => this.fetchData()}>Get 8 New Doggos</button>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GET YOUR DOGGOS RIGHT HERE FRESH OUT THE BOX</h1>
          {this.newDoggoButton()}
        </header>
        {/* <div className="dogContainer">
          <this.GetDogMedia url={this.state.dogs} type={this.state.types} index={0}/>    
        </div> */}
        <DogList doggos={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
