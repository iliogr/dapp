import React, { Component } from 'react';
import { div } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classNames from 'classnames';

class Wallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            protectors: [
                {id: 1, name: "Justin", visible: false},
                {id: 2, name: "Justin1", visible: false},
                {id: 3, name: "Justin2", visible: false},
                {id: 4, name: "Justin3", visible: false},
                {id: 5, name: "Justin4", visible: false}
            ]
        }
    }



    toggleProtector = (id) => {
        console.log(id);
        this.setState({ expandedTicket: !this.state.expandedTicket, });
    }



    render() {

        // const showClass = classNames('collapsed-content', {
        //     'show': this.state
        // })

        return (
            <div className="wallet">
                <h1>Juwon's Toshi</h1>
                <p>Protected by:</p>


                {this.state.protectors.map((protector) =>
                    <div className="fl-row" key={protector.id} onClick={() => {this.toggleProtector(protector.id)}}>
                        <div className="fl-100 key-row">
                            <div className="fl-row">
                                <div className="fl-90">
                                    <span>{protector.name}</span>
                                    <span className="status-ball active"></span>
                                </div>
                                <div className="fl-10">
                                    <img src={require("../Assets/images/dashboard/next.svg")} />
                                </div>
                            </div>
                            {
                                protector.visible &&
                                <div className="fl-row collapsed-content">
                                    <div className="fl-100">
                                        hello
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                )}

                <center><button onClick={() => { this.props.history.push('/dashboard') }} className="create-account">ASK FOR KEY</button></center>
            </div>
        )
    }
}

export default Wallet;
