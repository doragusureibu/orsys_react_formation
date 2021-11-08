import React from 'react';
import './App.css';
import MemeViewer from './components/MemeViewer/MemeViewer';

class App extends React.Component {
  state:any;
  constructor(props){
    super(props);
    this.state={
      currentMeme:{
        titre:'titre',
        text:'texte',
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
      ]
    };
  }
  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <MemeViewer meme={this.state.currentMeme} img={this.state.images.find((i) => this.state.currentMeme.imageId === i.id)}></MemeViewer>
      </div>
    );
   }
}

export default App;
