import React from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext; //to access context inside class using contextType, adds a context prop to the class Button

  render() {
    const text = this.context === "english" ? "Submit" : "Voorlegen";
    return <Button className="ui button primary">{text}</Button>;
  }
}

export default Button;
