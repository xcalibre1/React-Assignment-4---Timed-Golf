import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={time: 0, x: 0, y: 0 ,top:0,left:0,srartTime:0};
    this.buttonClickHandler=this.buttonClickHandler.bind(this);
    this.handeleventlistner=this.handeleventlistner.bind(this);
    this.tick=this.tick.bind(this);
  }
  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }
  buttonClickHandler(){
    document.addEventListener("keydown",this.handeleventlistner);
    clearInterval(this.timerID);
    this.setState({time: 0, x: 0, y: 0 ,top:0,left:0,startTime:Date.now()})
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    if(!(this.state.x ==250 &&this.state.y==250)){
      let timePassed= Date.now() - this.state.startTime ;
      let sec=Math.floor(timePassed/(1000));
      this.setState({
      time:sec
      });
    }
  }
  handeleventlistner(e){
    let code=e.keyCode;
    
    if(code==39 && !(this.state.x ==250 &&this.state.y==250)){
        this.setState({
            x: this.state.left+5, y: this.state.top ,top:this.state.top,left:this.state.left+5
        });
    }
    if(code==37  && !(this.state.x ==250 &&this.state.y==250)){
        
        this.setState({
          
         x: this.state.left-5, y: this.state.top ,top:this.state.top,left:this.state.left-5
      });
    }
    if(code==38 && !(this.state.x ==250 &&this.state.y==250)){
        this.setState({
          
          x: this.state.left, y:this.state.top-5 ,top:this.state.top-5,left:this.state.left
      });
    }
    if(code==40 && !(this.state.x ==250 &&this.state.y==250)){
        this.setState({
          
          x:this.state.left, y: this.state.top+5 ,top:this.state.top+5,left:this.state.left
      });
    }
    if(this.state.x==250 && this.state.y==250){
      clearInterval(this.timerID);
      //alert("matched");
      document.removeEventListener("keydown",this.handeleventlistner);
    }
    //console.log(this.state.x, this.state.y);

  }
  render() {
    return (
    <>
    <div className="playground">
    <div className="ball" style={{ position:"absolute",top:this.state.top +"px",
      left:this.state.left +"px",
      }}></div>
      <button className="start" onClick={this.buttonClickHandler} >Start timer</button>
      <div className="hole" ></div>
      <div className="heading-timer">{this.state.time}</div>
    </div>
    </>
    );
  }
}

export default App;
