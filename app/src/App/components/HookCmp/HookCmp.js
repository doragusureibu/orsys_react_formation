import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './HookCmp.module.css';

export const initialState = {};

const HookCmp = (props) => {

    const [state, setstate] = useState(initialState)
    useEffect(() => {
        
        return () => {
            
        }
    }, [state]);

    return (
        <div className={style.HookCmp} data-testid="HookCmp">
            hookCmp hook function component
        </div>
    )
};

HookCmp.propTypes = {

};

HookCmp.defaultProps = {

};

export default HookCmp

