import React, {useState} from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button=(props) => {

    const[isClicked, setisClicked] = useState({clicked:false, uneValue:0});
    console.log(props);

    return (<div onClick={(evt) => {
        setisClicked({...isClicked, clicked:true});
        setTimeout(()=>{
            setisClicked({...isClicked, clicked:false});
        },300);

        props.onButtonClick();
        console.log(evt);
      }} className={`${style.Button}${isClicked.clicked?' '+style.clicked:''}`}
      style={{backgroundColor:props.bgColor, color:props.color, ...props.style}}
      type={props.type}
      >{props.children}</div>);
}

Button.propTypes={
    type: PropTypes.string,
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object
};
Button.defaultProps={
    children: "Aucun texte",
    bgColor: '#00f',
    color: '#0ff'
};
export default Button;