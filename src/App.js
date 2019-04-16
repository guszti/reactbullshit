import React, { Component } from 'react';
import './App.css';

/*const guy = {
    name: 'mr. guy',
    age: '8'
};

function get_data(someone){
    return someone.name + ' ' + someone.age;
}

const element = (
    <h1>
        {get_data(guy)}
    </h1>
);

///////////////////////////////////////////////////////////////////////////

class Welcome extends React.Component{
    render(){
        return <h1>{this.props.name}</h1>;
    };
}

function more_names(){
    return(
        <div>
            <Welcome name='guy1' />
            <Welcome name='guy2' />
            <Welcome name='guy3' />
        </div>
    );
}
*/

///////////////////////////////////////////////////////////////////////////

class AppHeader extends React.Component{
    render(){
        return(
            <div className='App-header'>
                <h1>The title</h1>
            </div>
        );
    }
}

class Clock extends React.Component{
  //1.
  constructor(props){
      super(props);
      // this.state can only be used in a constructor
      this.state = {date: new Date()};
  }

  //3.
  //lifecycle method
  //runs after the component output has been rendered to the DOM
  componentDidMount(){
      this.timerID = setInterval(
          () => this.tick(),
          1000
      );
  }

  //lifecycle method
  // stops the counter if the component
  // is removed from the dom
  componentWillUnmount(){
      clearInterval(this.timerID);
  }

  //4. then setState calls render again that contains a different
  //   this.state.date and updates it
  tick(){
      this.setState({
          date: new Date()
      });
  }

  //2.
  render(){
      return(
           <p className='App-clock'>{ this.state.date.toLocaleTimeString() }</p>
      );
  }
}

class ClickCount extends React.Component{
    constructor(props){
        super(props);

        this.state = {count: 0};
        this.add_click = this.add_click.bind(this);
        this.remove_click = this.remove_click.bind(this);
    }

    add_click(){
        this.setState({
            count: this.state.count + 1
        });
    }

    remove_click(){
        this.setState({
            count: this.state.count - 1
        });
    }

    render(){
        return(
            <div className='App-counters'>
                <p>{this.state.count}</p>
                <button style={{fontSize: 50}} onClick={this.add_click}>+</button>
                <button style={{fontSize: 50}} onClick={this.remove_click}>-</button>
            </div>
        );
    };
}

function ContentMain(){
    return(
        <div>
            <p className='App-content'>
            What Are We Building?<br></br>
            In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.
            You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, 
            or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to 
            help you understand React and its syntax.
            We recommend that you check out the tic-tac-toe game before continuing with the tutorial. 
            One of the features that you’ll notice is that there is a numbered list to the right of 
            the game’s board. This list gives you a history of all of the moves that have occurred in 
            the game, and is updated as the game progresses.
            You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a 
            simpler template in this tutorial. Our next step is to set you up so that you can start building the game.
            </p>
            <p className='App-content'>
            Prerequisites<br></br>
            We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to 
            follow along even if you’re coming from a different programming language. We’ll also assume that 
            you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, 
            classes.
            If you need to review JavaScript, we recommend reading this guide. Note that we’re also using some 
            features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, 
            classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to.
            </p>
        </div>
    );
}

function ContentAbout(){
    return(
        <h1 className='App-content'>About</h1>
    );
}

class ContentControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {isok: true};
        this.changer = this.changer.bind(this);
    }

    changer(){
        this.setState({
            isok: !this.state.isok
        });
    }

    render(){
        let content;
        if(this.state.isok){
            content = <ContentMain />;
        } else {
            content = <ContentAbout />;
        }
        return(
            <div>
                {content}
                <div className='App-switch'>
                    <button onClick={this.changer}>change content</button>
                </div>
            </div>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.names = [];
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      this.names.push(this.state.value)
      this.setState({ names: this.names});
      event.preventDefault();
    }

    render() {
      return (
        <div className='App-name'>
            <p>{this.state.value}</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ul>
                {this.names.map(item => <li>{item}</li>)}
            </ul>
        </div>
      );
    }
}

class Btn extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.handleClick();
    }

    render(){
        return(
            <div>
                <button onClick={this.handleChange} style={{fontSize: 50}}>click hyeeer</button>
            </div>
        );
    }

}

class BtnControl extends React.Component{
    constructor(props){
        super(props);

        this.state = {ison: true}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            ison: !this.state.ison
        });
    }

    render(){

        let t;

        if(this.state.ison === true){
            t = 'ON';
        } else {
            t = 'OFF';
        }

        return(
            <div className='App-btn'>
                <button style={{fontSize: 30}}>{t}</button>
                <Btn handleClick={this.handleClick} />
            </div>
        );
    }
}

class App extends Component {
  render() {
    return(
        <div className='App'>
            <AppHeader />
            <hr></hr>
            <div>
                <ContentControl />
                <br></br>
                <ClickCount />
                <br></br>
                <NameForm />
                <br></br>
                <BtnControl />
                <br></br>
                <hr></hr>
                <Clock />
            </div>
        </div>           
  );
  }
}

export default App;
