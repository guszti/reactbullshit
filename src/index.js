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
);*/

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

ReactDOM.render(more_names(), document.getElementById('root'));