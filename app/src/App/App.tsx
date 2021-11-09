import React from 'react';
import './App.css';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import { ADR_REST, RESOURCES } from './config/config';

const initialCurrentMeme = {}; 

class App extends React.Component {
  state:any;
  constructor(props){
    super(props);
    this.state={
      currentMeme: initialCurrentMeme,
      memes:[],
      images:[]
    };
  }

  componentDidMount() {
    const f1=fetch(`${ADR_REST}${RESOURCES.memes}`).then(f=>f.json());
    const f2=fetch(`${ADR_REST}${RESOURCES.images}`).then(f=>f.json());
    Promise.all([f1, f2]).then(arrResp => {
      this.setState({memes: arrResp[0]});
      this.setState({images: arrResp[1]});
      this.setState({initialCurrentMeme: this.state.memes[0]});
    });
  }

  render() {
    return (
      <div className="App">
        <FlexLayout>
          <MemeViewer meme={this.state.currentMeme} img={this.state.images.find((i) => this.state.currentMeme.imageId === i.id)} />
          <MemeForm currentMeme={this.state.currentMeme} images={this.state.images} onCurrentChange={(updatedMeme) => {
           this.setState({currentMeme: updatedMeme});}}></MemeForm>          
        </FlexLayout>
        
      </div>
    );
   }
}

export default App;
