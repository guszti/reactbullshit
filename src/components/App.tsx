import React from 'react';
import {Router, Route} from 'react-router-dom';
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path={"/"} exact component={StreamList} />
                    <Route path={"/stream/new"} component={StreamCreate} />
                    <Route path={"/stream/edit/:id"} component={StreamEdit} />
                    <Route path={"/stream/delete/:id"} component={StreamDelete} />
                    <Route path={"/stream/show/:id"} component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;