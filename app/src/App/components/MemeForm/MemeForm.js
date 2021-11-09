import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './MemeForm.module.scss';
import Button from '../Button/Button';

export const initialState = {};

const MemeForm = (props) => {

    const [state, setstate] = useState(initialState)
    useEffect(() => {
        
        return () => {
            
        }
    }, [state]);

    return (
        <div className={style.MemeForm} data-testid="MemeForm">
            <form>
                <input type="text" placeholder="Saisissez le titre"
                value={props.currentMeme.titre} 
                onChange={(evt) => {props.onCurrentChange({...props.currentMeme, titre:evt.target.value})}}
                ></input>
                <hr/>
                <h2>text</h2>
                <input type="text" placeholder="Texte du meme" value={props.currentMeme.text}  
                    onChange={(evt) => {props.onCurrentChange({...props.currentMeme, text:evt.target.value})}}
                />
                <div className={style.col2}>
                    <div>
                        <label htmlFor="">X :</label><br/>
                        <input className={style.smallInput} type="number" name="x" text={props.currentMeme.x} 
                            value={props.currentMeme.x}  
                            onChange={(evt) => {props.onCurrentChange({...props.currentMeme, x:evt.target.value})}}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Y :</label><br/>
                        <input className={style.smallInput} type="number" name="y" text={props.currentMeme.y} 
                            value={props.currentMeme.y}  
                            onChange={(evt) => {props.onCurrentChange({...props.currentMeme, y:evt.target.value})}}
                        />
                    </div>
                </div>
                <div className={style.col2}>
                    <div>
                        <label htmlFor="color">Color :</label><br/>
                        <input className={style.smallInput} type="text" name="color" text={props.currentMeme.color} 
                            value={props.currentMeme.color}  
                            onChange={(evt) => {props.onCurrentChange({...props.currentMeme, color:evt.target.value})}}
                        />
                    </div>
                </div>
                <div className={style.col2}>
                    <div>
                        <label htmlFor="color">font Weight :</label><br/>
                        <input className={style.smallInput} type="number" name="weight" text={props.currentMeme.fontWeight} 
                            value={props.currentMeme.fontWeight}  
                            onChange={(evt) => {props.onCurrentChange({...props.currentMeme, fontWeight:evt.target.value})}}
                        />
                    </div>
                    <div>
                        <label htmlFor="fontSize">font size :</label><br/>
                        <input className={style.smallInput} type="number" name="fontSize" text={props.currentMeme.fontSize} 
                            value={props.currentMeme.fontSize}  
                            onChange={(evt) => {props.onCurrentChange({...props.currentMeme, fontSize:evt.target.value})}}
                        />
                    </div>
                </div>
                <select value={props.currentMeme.imageId} 
                    onChange={(evt) => {props.onCurrentChange({...props.currentMeme, imageId:Number(evt.target.value)})}}>
                    {
                        props.images.map((e, i) => (<option value={e.id}>{e.title}</option>))
                    }
                </select>

                <div className={style.col2}>
                    <div>
                        <label htmlFor="">Frame X :</label><br/>
                        <input className={style.smallInput} type="number" name="fx" text={props.currentMeme.fx} 
                            value={props.currentMeme.fx}  
                            onChange={(evt) => {props.onCurrentChange({...props.currentMeme, fx:evt.target.value})}}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Frame Y :</label><br/>
                        <input className={style.smallInput} type="number" name="fy" text={props.currentMeme.fy} 
                            value={props.currentMeme.fy}  
                            onChange={(evt) => {props.onCurrentChange({...props.currentMeme, fy:evt.target.value})}}
                        />
                    </div>
                </div>
                
                <Button type="reset" bgColor="tomato" onButtonClick={() => {}}>Clear</Button>
                <Button type="submit" onButtonClick={() => {}}>Save</Button>
            </form>
        </div>
    )
};

MemeForm.propTypes = {
    currentMeme: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,
    onCurrentChange: PropTypes.func,
};

MemeForm.defaultProps = {

};

export default MemeForm

