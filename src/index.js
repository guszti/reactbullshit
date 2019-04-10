import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

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
             <p style={{backgroundColor:'teal'}}>{ this.state.date.toLocaleTimeString() }</p>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div style={{textAlign:'center',backgroundColor:'grey'}}>
                <h1 style={{color:'green'}}>The title</h1>
                <p>
                    fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa<br></br>
                    khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf<br></br>
                    fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa<br></br>
                    khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf<br></br>
                    fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa<br></br>
                    khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf<br></br>
                    fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa<br></br>
                    khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf<br></br>
                    fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa<br></br>
                    khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf<br></br>
                    fds fjdis jjd dij fdsj fdioj fdj dsf jdfijds ofjds ofdsj fiodsj fsijdof io jfodsa<br></br>
                    khsd hfkds fkjdsfkj oivfdv fniofailkdsjfdsjfkdjfdslkjfkdshfkudshfudshfkdshfkhdkjf<br></br>
                </p>
                <hr></hr>
                <Clock />
            </div>           
        );
    }
}

///////////////////////////////////////////////////////////////////////////


ReactDOM.render(<Content />, document.getElementById('root'));