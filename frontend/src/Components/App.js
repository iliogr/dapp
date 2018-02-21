import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Terms from './Terms';
import Create from './Create';
import Privacy from './Privacy';
import Dashboard from './Dashboard';
import AddKey from './AddKey';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <Header/>
                <div className="main">
                    <div className="fl">
                        <div className="fl-100">
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/terms" component={Terms}/>
                            <Route exact path="/create" component={Create}/>
                            <Route exact path="/privacy" component={Privacy}/>
                            <Route exact path="/dashboard" component={Dashboard}/>
                            <Route path="/add-key" component={AddKey}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default App;
