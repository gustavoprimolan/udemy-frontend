import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";


// const App = () => {
//   //SUCCESS CALLBACK AND FAILURE CALLBACK
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

class App extends React.Component {


  //ALTERNATIVE TO this.state in constructor
  state = { lat: null, errorMessage: '' };

  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS .state
  //   // IT HAS TO BE NAMED AS state
  //   this.state = { lat: null, errorMessage: '' };
  // }

  
  componentDidMount() {
    console.log('component did mount');
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // call setState to set the state! Not calling directing the attribute
        this.setState({ lat: position.coords.latitude });

        // WE DO NOT!!
        // this.state.lat = position.coords.latitude;
      },
      (err) => {
        // IT'S NOT DELETE lat.
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  renderContent() {
    if(this.state.errorMessage && ! this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }    
    
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    
    return <Spinner />
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );   
  }

}

ReactDOM.render(<App />, document.querySelector("#root"));
