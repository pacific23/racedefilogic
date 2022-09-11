import { Component } from "react";
import "./styles.css";

import StartTop from "./StartTop";
import StartAlready from "./StartAlready";
import StartBottom from "./StartBottom";

class Start extends Component {
  render() {
    return (
      <table className="main">
        <tbody>
          <StartTop whichgame={this.props.whichgame} />
          {!this.props.alreadyPlayed ? null : (
            <StartAlready
              alreadyPlayed={this.props.alreadyPlayed}
              onStartAgain={this.props.onStartAgain}
              nbHist={this.props.nbHist}
              moyHist={this.props.moyHist}
              streakHist={this.props.streakHist}
            />
          )}
          {!this.props.alreadyPlayed ? (
            <StartBottom play={this.props.play} />
          ) : null}
        </tbody>
      </table>
    );
  }
}

export default Start;
