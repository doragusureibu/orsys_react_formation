import React from 'react';
import './App.css';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import store, { ACTIONS_RESSOURCES } from './store/store';
import { ADR_REST, RESOURCES } from './config/config';
import { connect } from 'react-redux';
import ThumbnailLayout from './components/ThumbnailLayout/ThumbnailLayout';
import { Switch, Route, useParams} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';


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
      <div className="nav">
        <Navbar/>

        <Switch>
          <Route path="/" exact><h1>Bienvenue !</h1></Route>
          <Route path="/thumbnail">
            <ThumbnailLayout>
                {props.memes.map((e, i) => (<MemeViewer meme={e} img={props.images.find((i) => e.imageId === i.id)} key={"thumbnail-"+i}/>))}
            </ThumbnailLayout>
          </Route>
          <Route path="/editor" exact>
            <MemeViewer meme={props.current} img={props.images.find((i) => props.current.imageId === i.id)} />
            <MemeForm />
          </Route>
          <Route path="/editor/:idmeme">
          {console.log('AEZAEZAEZAEZA' + JSON.stringify(useParams()))}
          <h1>Editor 123</h1>
            <MemeViewer meme={props.current} img={props.images.find((i) => props.current.imageId === i.id)} />
            <MemeForm />
          </Route>
          <Route path="/"><h1>404</h1></Route>
        </Switch>
       
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
