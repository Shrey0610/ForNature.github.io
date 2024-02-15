import React from 'react';



class App5 extends React.Component{
  constructor(props){
    super(props);
    this.state= {apiResponse:""};
  }


  callAPI(){
    fetch('http://localhost:9004/testapi')
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  }

  componentDidMount() {
    this.callAPI();
  }
  
render() {
  return (
    <div>
      <header className="App-header">
        <p>{this.state.apiResponse}</p>

      </header>
    </div>
  );
}
}




export default App5;
