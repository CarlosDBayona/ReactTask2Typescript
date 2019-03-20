import React, { Props } from 'react';
import './Char.css'

function Char(props: any) {
    return(
        <div className="Char" onClick={props.click}>
            <p>{props.char}</p>
        </div>
    );
}
export default Char