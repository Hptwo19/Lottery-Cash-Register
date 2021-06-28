import React from 'react';
import NumberSelected from './NumberSelected';
import CostSelected from './AmtSelect';
import Numbuttons from './NumButtons';
import AmtButtons from './AmtButton';
const Main = (props) => {
    return (
        <main>
            <AmtButtons addMoneyPressed={props.addMoneyPressed} />
            <Numbuttons  numbers={props.numbers}  numberPressed={props.numberPressed}  ClearPressed={props.ClearPressed}  RandomPressed={props.RandomPressed} CashPressed={props.CashPressed} ></Numbuttons>
            <div id="display">
                <NumberSelected numbers={props.numbers} randomNumber={props.randomNumber} wonGame={props.wonGame} ></NumberSelected>
                <CostSelected money={props.money}></CostSelected>
            </div>

            <div className="clear"></div>
        </main>
    )
}

export default Main
