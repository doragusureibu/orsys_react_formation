import {createStore, combineReducers} from 'redux';
import { ADR_REST, RESOURCES } from '../config/config';

const initialCurrentMeme = {
    titre:"",
    text:"test",
    x:50,
    y:50,
color:"#ff0000",
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
          return { ...state, ...action.value};
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
        const f1=fetch(`${ADR_REST}${RESOURCES.memes}`).then((f)=>f.json());
        const f2=fetch(`${ADR_REST}${RESOURCES.images}`).then((f)=>f.json());
        Promise.all([f1,f2]).then((arrResp)=>{
            store.dispatch({type:'FILL_ALL', values:[arrResp[1], arrResp[0]]});
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

store.dispatch({type:'INIT'});


store.subscribe(() => {
    console.log(store.getState());
});



export default store;