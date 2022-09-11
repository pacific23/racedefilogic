import { Component } from "react";
import "./styles.css";

import Result from "./Result";
import Stats from "./Stats";

class Victory extends Component {
  render() {
    return (
      <table className="main">
        <tbody>
          <Result
            emoticon={this.props.emoticon}
            idDefi={this.props.idDefi}
            trophy={this.props.trophy}
            timeFinal={this.props.timeFinal}
            essais={this.props.essais}
            lineMvt={this.props.lineMvt}
            historicalMoves={this.props.historicalMoves}
            nbTry={this.props.nbTry}
            textToCopy={this.props.textToCopy}
          />
          <tr>
            <td colSpan="3">
              <Stats
                nbHist={this.props.nbHist}
                moyHist={this.props.moyHist}
                streakHist={this.props.streakHist}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Victory;
