import React from "react";

const Context = React.createContext("english"); //Components should have capital letter

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState(language);
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
