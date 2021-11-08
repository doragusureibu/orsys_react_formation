import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ClassCmp.module.css';

class ClassCmp extends Component {
    /**
     * Constructeur du composant Templatename
     * @param {Object} props 
     */
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className={style.ClassCmp} data-testid="ClassCmp">
                classCmp component
            </div>
        );
    }
}


ClassCmp.propTypes = {

};


export default ClassCmp;
