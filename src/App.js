import React,{ Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  state = { 
    show:true,
    counterApp:0,
    Person: {
      fullName: "Fatma Daly",
      bio: "Love web developping",
      imgSrc: "fatma_daly.jpg",
      profession:"Web Developper"
    }
   } 
   componentDidMount(){
    setInterval(()=>{
      this.setState({counterApp:this.state.counterApp+1})
    },1000);
   }
  render() { 
    return (
    <div className='card-container'>
          {this.state.show && (
            <>
              <span class="pro">PRO</span>
              <h1>{this.state.Person.fullName}</h1>
              <h3>{this.state.Person.bio}</h3>
              <img src={this.state.Person.imgSrc} className="round" alt="profile_pic"></img>
              <h2>{this.state.Person.profession}</h2>
              <br></br>

            </>
          )}
          <p>CounterApp: {this.state.counterApp}</p>
          <div >
          <button className='primary' onClick={() => this.setState({ show: !this.state.show })} style={{ width: "200px", marginLeft: "10px", marginTop:"10px", marginBottom:"10px" }}>{!this.state.show?"Show":"Hide"}</button>
          {!this.state.show ? <Counter style={{ marginLeft: "0" }} /> : null}
          </div>
        </div>
 ) }
}
 
export default App;
