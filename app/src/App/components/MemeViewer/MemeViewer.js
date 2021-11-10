import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${props.img?props.img.w:1000} ${props.img?props.img.h:1000}`}>

    {props.img && <image href={'/'+ props.img.url}/>}

    <text x={props.meme.x} y={props.meme.y} fill={props.meme.color} 
    fontWeight={props.meme.fontWeight}
    fontSize={props.meme.fontSize}
    >{props.meme.text}</text>
  </svg>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  img: PropTypes.object
};

MemeViewer.defaultProps = {
  
};

export default MemeViewer;
