import React, { useState, useEffect } from "react";
import Header from "./Header";
import Betamount from "./Betamount";
import { StartingPage, Main, Fotter, Dise, Button } from "./Style";

import Logo from "./images/dice-logo.svg";
import dice_1 from "./images/dice_1.svg";
import dice_2 from "./images/dice_2.svg";
import dice_3 from "./images/dice_3.svg";
import dice_4 from "./images/dice_4.svg";
import dice_5 from "./images/dice_5.svg";
import dice_6 from "./images/dice_6.svg";

const Images = {
  1: dice_1,
  2: dice_2,
  3: dice_3,
  4: dice_4,
  5: dice_5,
  6: dice_6,
};

function Start() {
  const [selected, setSelected] = useState(null);
  const [serverSelected, setServerSelected] = useState({});
  const [user, setUser] = useState("robouser");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    getUserBalance();
  }, []);

  function play() {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        betAmount: count,
        sideSelected: selected,
      }),
    };
    fetch(`http://localhost:5000/roll-dice`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setServerSelected(data);
        console.log(data);
        getUserBalance();
        setLoading(false);
      });
  }
  function getUserBalance() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:5000/get-user/${user}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setUserBalance(data.balance));
  }
  function generateTitle() {
    console.log(1213);
    if (loading) {
      return "Loading...";
    }
    return serverSelected.result ? "Play Again?" : "Roll the Dice Man";
  }
  function handlePlay() {
    if (serverSelected.result) {
      setSelected(null);
      setServerSelected({});
      setCount(0);
    } else {
      play();
    }
  }
  function handleSelect(value) {
    if (serverSelected.result) return;
    setSelected(value);
  }
  return (
    <StartingPage>
      <>
        <Header userBalance={userBalance} />
        <Main>
          <img
            src={
              serverSelected.result
                ? serverSelected.sideGenerated
                  ? Images[serverSelected.sideGenerated]
                  : Images[selected]
                : Logo
            }
            alt="dice"
          />
          {serverSelected && (
            <p
              style={{
                marginTop: 40,
                fontSize: 30,
                color: serverSelected.result === "LOST" ? "red" : "green",
              }}
            >
              {serverSelected.result}
            </p>
          )}
        </Main>

        <Fotter>
          <p>more things to go here </p>
          <Dise>
            <img
              onClick={() => handleSelect(1)}
              src={dice_1}
              style={{ opacity: selected === 1 ? 1 : 0.5 }}
              alt="Dice 1"
            />
            <img
              onClick={() => handleSelect(2)}
              src={dice_2}
              style={{ opacity: selected === 2 ? 1 : 0.5 }}
              alt="Dice 2"
            />
            <img
              onClick={() => handleSelect(3)}
              src={dice_3}
              style={{ opacity: selected === 3 ? 1 : 0.5 }}
              alt="Dice 3"
            />
            <img
              onClick={() => handleSelect(4)}
              src={dice_4}
              style={{ opacity: selected === 4 ? 1 : 0.5 }}
              alt="Dice 4"
            />
            <img
              onClick={() => handleSelect(5)}
              src={dice_5}
              style={{ opacity: selected === 5 ? 1 : 0.5 }}
              alt="Dice 5"
            />
            <img
              onClick={() => handleSelect(6)}
              src={dice_6}
              style={{ opacity: selected === 6 ? 1 : 0.5 }}
              alt="Dice 6"
            />
          </Dise>
          <Betamount count={count} setCount={setCount} />
          <>
            <Button
              style={selected && count ? {} : { background: "gray" }}
              onClick={handlePlay}
              className="cta"
            >
              {generateTitle()}
            </Button>
          </>
        </Fotter>
      </>
    </StartingPage>
  );
}

export default Start;
