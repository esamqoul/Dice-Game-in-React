import React from "react";
import { BetAdd } from "./Style";

import Plus from "./images/plus.svg";
import Minus from "./images/minus.svg";

function Betamount({ count, setCount }) {
  const increment = () => {
    setCount(count + 100);
  };
  const decrement = () => {
    if (count - 100 >= 0) {
      setCount(count - 100);
    }
  };

  return (
    <BetAdd>
      <button onClick={increment}>
        <img src={Plus} alt="Dice Plus" />
      </button>
      <h2>{count}</h2>
      <button onClick={decrement}>
        <img src={Minus} alt="Dice Minus" />
      </button>
    </BetAdd>
  );
}

export default Betamount;
