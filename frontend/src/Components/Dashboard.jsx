import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keys: false
        }
    }

    componentDidMount = () => {

        this.setState({
            keys: true
        });
    }

    render() {

        let panel = null;
        if(!this.state.keys) {
            panel = <NoKeysPanel />
        }
        else{
            panel = <KeysPanel />
        }


        return (
            <div className="dashboard">
                <Tabs>
                    <TabList>
                        <Tab>My Keys</Tab>
                        <Tab>Key Ring</Tab>
                    </TabList>

                    <TabPanel>
                        {panel}
                    </TabPanel>

                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>

            </div>
        )
    }
}

export default Dashboard;


class NoKeysPanel extends Component {
    render() {
        return (
            <div>
                <div className="fl-row panel">
                    <div className="fl-30">
                        <img src={require("../Assets/images/dashboard/sad_logo.png")} />
                    </div>
                    <div className="fl-70">
                        <p className="mykeys-par">You have no seed words securely stored with KeySplit.</p>
                        <Link to="">I want to save my seed words</Link>
                    </div>
                </div>
                <center><button onClick={() => { this.props.history.push('/add-key') }} className="create-account">ADD KEY</button></center>
            </div>
        )
    }
}

class KeysPanel extends Component {
    render() {
        return (
            <div>
                <Link to="/wallet/toshi" className="fl-row">
                    <div className="fl-100">
                        <div className="fl-row key-row">
                            <div className="fl-90">
                                <span>Juwon's Toshi</span>
                                <span className="status-ball active"></span>
                            </div>
                            <div className="fl-10">
                                <img src={require("../Assets/images/dashboard/next.svg")} />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/wallet/toshi" className="fl-row">
                    <div className="fl-100">
                        <div className="fl-row key-row">
                            <div className="fl-90">
                                <span>Juwon's Toshi</span>
                                <span className="status-ball warning"></span>
                            </div>
                            <div className="fl-10">
                                <img src={require("../Assets/images/dashboard/next.svg")} />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/wallet/toshi" className="fl-row">
                    <div className="fl-100">
                        <div className="fl-row key-row">
                            <div className="fl-90">
                                <span>Juwon's Toshi</span>
                                <span className="status-ball inactive"></span>
                            </div>
                            <div className="fl-10">
                                <img src={require("../Assets/images/dashboard/next.svg")} />
                            </div>
                        </div>
                    </div>
                </Link>
                <center><button onClick={() => { this.props.history.push('/add-key') }} className="create-account">ADD KEY</button></center>
            </div>
        )
    }
}
