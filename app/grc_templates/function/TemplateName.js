import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.css';

export const initialState = {};

const TemplateName = (props) => {

    const [state, setstate] = useState(initialState)
    useEffect(() => {
        
        return () => {
            
        }
    }, [state]);

    return (
        <div className={style.TemplateName} data-testid="TemplateName">
            templateName hook function component
        </div>
    )
};

TemplateName.propTypes = {

};

TemplateName.defaultProps = {

};

export default TemplateName

