import {createStore, combineReducers} from 'redux';
import { ADR_REST } from '../config/config';

const initialCurrentMeme = {
    titre:"",
    text:"",
    x:50,
    y:50,
color:"#f00",
fontWeight:900,
fontSize:48,
fx:100,
fy:100,
imageId:0
}; 

export const ACTIONS_CURRENT=Object.freeze({
    UPDATE_CURRENT:'UPDATE_CURRENT',
    CLEAR_CURRENT:'CLEAR_CURRENT',
});

const currentReducer = (state = initialCurrentMeme, action) => {
    console.log('call de currentReducer', action.type)
    switch (action.type) {
  
      case ACTIONS_CURRENT.UPDATE_CURRENT:
          return { ...state, images:[...action.values] };
      case ACTIONS_CURRENT.CLEAR_CURRENT:
          return { ...initialCurrentMeme };    
      default:
          return state
    }
  }


const initialState = {
    memes:[],
    images:[]
}

export const ACTIONS_RESSOURCES=Object.freeze({
    ADD_IMAGES:'ADD_IMAGES',
    FILL_MEMES:'FILL_MEMES',
    ADD_MEME:'ADD_MEME',

});



const ressourcesReducer = (state = initialState, action) => {
    console.log('call de ressourcesReducer', action.type)

  switch (action.type) {
    case 'INIT':
        const f1=fetch(`${ADR_REST}${ACTIONS_RESSOURCES.memes}`).then((f)=>f.json());
        const f2=fetch(`${ADR_REST}${ACTIONS_RESSOURCES.images}`).then((f)=>f.json());
        Promise.all([f1,f2]).then((arrResp)=>{
            store.dispatch({type:'FILL_ALL', vaules:[arrResp[1], arrResp[0]]});
        })
        return state;

    case 'FILL_ALL':
        return {...state, 
            images: [...action.values[0]],
            memes: [...action.values[1]]}
       
    case ACTIONS_RESSOURCES.ADD_IMAGES:
        return { ...state, images:[...action.values] };
    case ACTIONS_RESSOURCES.ADD_MEME:
        return { ...state, memes:[...state.memes, action.value] };    
    case ACTIONS_RESSOURCES.FILL_MEMES:
        return { ...state, memes:[...action.values] };    
    default:
        return state
  }
}

const store = createStore(combineReducers({ressources:ressourcesReducer, current:currentReducer}));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type:ACTIONS_RESSOURCES.ADD_IMAGES, values:[{id:0}, {id:1}]});
store.dispatch({type:ACTIONS_RESSOURCES.FILL_MEMES, values:[{id:89}, {id:21}]});
store.dispatch({type:ACTIONS_RESSOURCES.ADD_MEME, value:{id:89}});

export default store;