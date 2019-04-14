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

class App_header extends React.Component{
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

class Click_count extends React.Component{
    constructor(props){
        super(props);

        this.state = {count: 0};
        this.add_click = this.add_click.bind(this);
    }

    add_click(){
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.add_click}>click this shit</button>
            </div>
        );
    };
}

class App extends Component {
  render() {
    return(
        <div>
            <App_header />
            <hr></hr>
            <div className='App'>
                <p className='App-content'>
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                </p>
                <p className='App-content'>
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa
                khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf
                </p>
                <Click_count />
                <hr></hr>
                <Clock />
            </div>
        </div>           
  );
  }
}

export default App;
