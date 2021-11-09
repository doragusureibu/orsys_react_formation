import React from 'react';
import './App.css';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';

class App extends React.Component {
  state:any;
  constructor(props){
    super(props);
    this.state={
      currentMeme:{
        titre:'titre',
        text:'SURPRISED PIKACHU FACE',
        x:50,
        y:50,
        color:'#00f',
        underline:true,
        italic:true,
        fontWeight:'900',
        fontSize:24,
        fx:100,
        fy:100,
        imageId:0
      },
      images:[
        {id:0, title:'pikachu', url:'img/pikachu.jpg', w:801, h:410},
        {id:1, title:'wot', url:'img/wot.png', w:1600, h:1067},
        {id:2, title:'Red Dragon', url:'img/Red Dragon.jpg', w:504, h:407},
      ]
    };
  }
  componentDidUpdate() {

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
