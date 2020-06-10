import React, { Component } from "react";
import Header from "./Header";
import Betamount from "./Betamount";
import { StartingPage, Main, Fotter, Dise, Button } from "./Style";

//import Logo from "./images/dice-logo.svg";
import dice_1 from "./images/dice_1.svg";
import dice_2 from "./images/dice_2.svg";
import dice_3 from "./images/dice_3.svg";
import dice_4 from "./images/dice_4.svg";
import dice_5 from "./images/dice_5.svg";
import dice_6 from "./images/dice_6.svg";
//<img src={Logo} alt="Dice Logo" />

class Start extends Component {
  state = {
    dice: 6,
  };
  play = () => {
    const diceV = Math.floor(Math.random() * 6 + 1);
    this.setState({
      dice: diceV,
    });
  };
  shoot() {
    alert("Great Shot!");
  }

  render() {
    return (
      <StartingPage>
        <>
          <Header />
          <Main>
            <img
              src={require(`./images/dice_${this.state.dice}.svg`)}
              alt="dice"
            />
          </Main>

          <Fotter>
            <p>more things to go here </p>
            <Dise>
              <img onClick={this.shoot} src={dice_1} alt="Dice 1" />
              <img onClick={this.changeColor} src={dice_2} alt="Dice 2" />
              <img src={dice_3} alt="Dice 3" />
              <img src={dice_4} alt="Dice 4" />
              <img src={dice_5} alt="Dice 5" />
              <img src={dice_6} alt="Dice 6" />
            </Dise>
            <Betamount />

            <>
              <Button
                style={{ background: this.state.color }}
                onClick={this.play}
                className="cta"
              >
                Roll the Dice Man
              </Button>
            </>
          </Fotter>
        </>
      </StartingPage>
    );
  }
}

export default Start;
