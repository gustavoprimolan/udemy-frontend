import React from "react";

class SearchBar extends React.Component {

  state = { term: "" };

  // constructor(props) {
    // super(props);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log('input was clicked');
  // }

  // onFormSubmit = (event) => {
    
  //   event.preventDefault();

  //   console.log(this.state.term);

  // }

  onFormSubmit(event) {
    
    event.preventDefault();

    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/> */}
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
