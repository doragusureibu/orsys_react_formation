import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  <div className={styles.MemeViewer} data-testid="MemeViewer">
  <h1>{props.meme.titre}</h1>
  <img src={props.img.url} />
  </div>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  img: PropTypes.object
};

MemeViewer.defaultProps = {};

export default MemeViewer;
