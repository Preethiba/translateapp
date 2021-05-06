import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  // static contextType = LanguageContext; //to access context inside class using contextType, adds a context prop to the class Button

  renderButton(color) {
    return (
      <Button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => (language === "english" ? "Submit" : "Voorlegen")}
          {/*  provided as child to consumer component and it is automatically invoked , value is the value present in context */}
        </LanguageContext.Consumer>
      </Button>
    );
  }

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorlegen";
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
