import React from "react";
import Header from "./Header";
import Betamount from "./Betamount";
import { StartingPage, Main, Fotter, Dise, Button } from "./Style";

import Logo from "./images/dice-logo.svg";
import dice1 from "./images/dice1.svg";
import dice2 from "./images/dice1.svg";
import dice3 from "./images/dice2.svg";
import dice4 from "./images/dice3.svg";
import dice5 from "./images/dice4.svg";
import dice6 from "./images/dice5.svg";

import Plus from "./images/plus.svg";
import Minus from "./images/minus.svg";

function Start() {
  return (
    <StartingPage>
      <>
        <Header />
        <Main>
          <img src={Logo} alt="Dice Logo" />
        </Main>

        <Fotter>
          <p>more things to go here </p>
          <Dise>
            <img src={dice1} alt="Dice 1" />
            <img src={dice2} alt="Dice 2" />
            <img src={dice3} alt="Dice 3" />
            <img src={dice4} alt="Dice 4" />
            <img src={dice5} alt="Dice 5" />
            <img src={dice6} alt="Dice 6" />
          </Dise>
          <Betamount />

          <>
            <Button className="cta">Roll the Dice Man</Button>
          </>
        </Fotter>
      </>
    </StartingPage>
  );
}

export default Start;
