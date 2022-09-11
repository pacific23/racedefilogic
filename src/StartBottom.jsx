import { Component } from "react";
import "./styles.css";

import buttonStart from "./images/ButtonStart.png";

class StartBottom extends Component {
  render() {
    return (
      <tr>
        <td></td>
        <td>
          <div className="white">
            <h4>
              Vous allez devoir enchaîner les 7 défilogics de la semaine.
              <br />
              <br />
              L'objectif est de les réaliser le plus rapidement possible.
              <br />
              <br />
              Attention, aucune pause n'est possible !
              <br />
              <br />
              Dès que vous réussissez un défi le suivant s'affiche
              automatiquement.
              <br />
              <br />
              Chaque mouvement incorrect vous fait perdre du temps.
              <br />
              <br />
              Chaque tentative erronnée vous fait perdre du temps.
            </h4>
          </div>
          <input
            alt="start"
            type="image"
            src={buttonStart}
            onClick={this.props.play}
            width="250px"
            height="52px"
          />
        </td>
        <td></td>
      </tr>
    );
  }
}

export default StartBottom;
