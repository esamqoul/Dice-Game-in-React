import React from "react";
import Header from "./Header";
import { HistoryPage, StartingPage, HistoryPageFotter, HistoryPageDise, Button } from "./Style"

import dice1 from "./images/dice1.svg";
import dice2 from "./images/dice1.svg";
import dice3 from "./images/dice2.svg";
import dice4 from "./images/dice3.svg";
import dice5 from "./images/dice4.svg";
import dice6 from "./images/dice5.svg";



function History() {
    return (
        <StartingPage>
            <>
                <Header />
                <HistoryPage>
                    <h1> some text</h1>
                    <Button className="cta">Roll the Dice Man</Button>
                    <h2> some text</h2>
                </HistoryPage>
                <HistoryPageFotter>
                    <p>more things to go here </p>
                    <HistoryPageDise>
                        <img src={dice1} alt="Dice 1" />
                        <span>
                            <em>Lost</em>
                            <em>Date 02/02/2020</em>
                        </span>
                        <img src={dice2} alt="Dice 2" />
                        <span>
                            <em>-500</em>
                        </span>
                        <span>
                            <p>2000</p>
                        </span>
                        <img src={dice3} alt="Dice 1" />
                        <span>
                            <em>Lost</em>
                            <em>Date 02/02/2020</em>
                        </span>
                        <img src={dice4} alt="Dice 2" />
                        <span>
                            <em>-500</em>
                        </span>
                        <span>
                            <p>2000</p>
                        </span>
                        <img src={dice5} alt="Dice 1" />
                        <span>
                            <em>Lost</em>
                            <em>Date 02/02/2020</em>
                        </span>
                        <img src={dice6} alt="Dice 2" />
                        <span>
                            <em>-500</em>
                        </span>
                        <span>
                            <p>2000</p>
                        </span>
                    </HistoryPageDise>
                </HistoryPageFotter>
            </>
        </StartingPage >
    )
};

export default History;
