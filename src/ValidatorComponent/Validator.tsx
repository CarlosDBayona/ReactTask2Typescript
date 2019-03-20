import React from 'react'
function Validator(props: any){
    let text='';
    if(props.length<5){
        text= 'Text too short'
    } else {
        text = 'Text long enough'
    }
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}
export default Validator;