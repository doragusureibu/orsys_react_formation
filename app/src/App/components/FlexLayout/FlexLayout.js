import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexLayout.module.scss';

const FlexLayout = (props) => (
  <div className={styles.FlexLayout} data-testid="FlexLayout">
    {props.children}
  </div>
);

FlexLayout.propTypes = {
  children: PropTypes.array.isRequired
};

FlexLayout.defaultProps = {};

export default FlexLayout;
