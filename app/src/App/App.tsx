import React from 'react';
import './App.css';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import store, { ACTIONS_RESSOURCES } from './store/store';
import { ADR_REST, RESOURCES } from './config/config';
import { connect } from 'react-redux';

const initialCurrentMeme = {}; 

const App=(props) => {

  // componentDidMount() {

  //   console.log(store);


  //   const f1=fetch(`${ADR_REST}${RESOURCES.memes}`).then(f=>f.json());
  //   const f2=fetch(`${ADR_REST}${RESOURCES.images}`).then(f=>f.json());
  //   Promise.all([f1, f2]).then(arrResp => {
  //     this.setState({memes: arrResp[0]});
  //     this.setState({images: arrResp[1]});
  //     this.setState({initialCurrentMeme: this.state.memes[0]});
  //   });
  // }

    return (
      <div className="App">
        <FlexLayout>
          <MemeViewer meme={props.current} img={props.images.find((i) => props.current.imageId === i.id)} />
          <MemeForm />
        </FlexLayout>
        
      </div>
    )
   }

function mapStateToProps(state, ownProps){
  return {...ownProps, images:state.ressources.images, memes:state.ressources.memes, current:state.current};
}
function mapDispatchToProps(dispatch){
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
