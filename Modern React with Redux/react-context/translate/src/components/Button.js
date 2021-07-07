import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // IT HAS TO BE contextType
  // static adds a property to our class itself
  // including the property directly to the class
  // static contextType = LanguageContext;

  // render() {
  //   // console.log(this.context); //english
  //   const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
  //   return <button className="ui button primary">{text}</button>;
  // }

  renderSubmit = (language) => {
    return language === "english" ? "Submit" : "Voorleggen";
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        {/* function for a child component */}
        {/* <LanguageContext.Consumer>{(value) => value === 'english' ? 'Submit' : 'Voorleggen'}</LanguageContext.Consumer> */}
        <LanguageContext.Consumer>{({language}) => this.renderSubmit(language)}</LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
  }
}

// WE CAN DO THIS WAY TOO
// Button.contextType = LanguageContext;

export default Button;
