import React from 'react'
import img from '../image/img.png'

const AmtButtons = (props) => {
    return (
        <div id="price_but">
            <div>
                <img id="image" src={img} />
            </div>
            <div className="buttons">
                <div>
                    <input onClick={props.addMoneyPressed} id="bp_1" type="button" value="$ 1" />
                    <input onClick={props.addMoneyPressed} id="bp_5" type="button" value="$ 5" />
                </div>
                <div><input onClick={props.addMoneyPressed} id="bp_10" type="button" value="$ 10" />
                <input onClick={props.addMoneyPressed} id="bp_20" type="button" value="$ 20" /></div>
            </div>
        </div>

    )
}

export default AmtButtons
