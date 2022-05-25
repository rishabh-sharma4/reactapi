import React from 'react';
import './App.css';
class App extends React.Component {
  
  
  constructor(props){
    super(props);
    this.state={users:null,id:'',temp:''}
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(
      (res)=>{res.json().then((res)=>{
       // console.warn(res[4])
       this.setState({users:res})
      })
      })
  }
    submitClick = (e)=>{
    e.preventDefault();
    this.setState({id:this.state.temp})
    
  }

  handleId =(e)=>{
    this.setState({temp:e.target.value})
   // this.setState({id:e.target.value})
  }
    

  
  render() {
    return (
      <div className="App">
        <h1>
          fetch API data
        </h1>
        <form onSubmit={this.submitClick}>
        <input type="number" onChange={this.handleId}/>
        <input type="submit"/>
        </form>
          {
           this.state.users ?
           this.state.users.map((item,i)=>
           <div>
             {item.id==this.state.id ?(<div>
               <p>userId:{item.userId}</p>
               <p>id:{item.id}</p>
               <p>title:{item.title}</p>
               <p>completed:{String(item.completed)}</p>
               </div>):
             ("")}
           </div>
          
           )

           :
           null
          }
        
      </div>
    );
  }
}

export default App;
