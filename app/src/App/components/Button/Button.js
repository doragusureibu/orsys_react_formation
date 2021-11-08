import React from 'react';
import './Button.css';

const Button=(props) => {

    console.log(props);

    return (<div className="Button">{props.text}</div>);
}

export default Button;