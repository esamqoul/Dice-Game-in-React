import React from "react";
import { BetAdd } from "./Style";

import Plus from "./images/plus.svg";
import Minus from "./images/minus.svg";

function Betamount() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 100);
  };
  const decrement = () => {
    setCount(count - 100);
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
