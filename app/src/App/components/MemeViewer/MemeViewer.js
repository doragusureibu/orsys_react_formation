import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer"  width={props.img.w} height={props.img.h}>

    <image href={props.img.url} width={props.img.w} height={props.img.h} />
    <text x={props.meme.x} y={props.meme.x} fill={props.meme.color}>{props.meme.text}</text>
  </svg>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  img: PropTypes.object
};

MemeViewer.defaultProps = {};

export default MemeViewer;
