import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "hindi" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}
export default App;
