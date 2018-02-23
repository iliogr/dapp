import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';

class Wallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            protectors: [
                {id: 1, name: "Justin", visible: true},
                {id: 2, name: "Justin1sad asd", visible: false},
                {id: 3, name: "Justin2", visible: false},
                {id: 4, name: "Justin3", visible: false},
                {id: 5, name: "Justin4", visible: false}
            ]
        }
    }



    toggleProtector = (index) => {
        let newProtectors = [...this.state.protectors];
        newProtectors[index].visible = !newProtectors[index].visible;
        this.setState({protectors: newProtectors})
    }



    render() {
        return (
            <div className="wallet">
                <h1>Juwon's Toshi</h1>
                <p>Protected by:</p>
                {this.state.protectors.map((protector, index) =>
                    <div className="fl-row" key={protector.id} onClick={() => { this.toggleProtector(index)}}>
                        <div className="fl-100 key-row">
                            <div className="fl-row">
                                <div className="fl-90">
                                    <span>{protector.name}</span>
                                    <span className="status-ball active"></span>
                                </div>
                                <div className="fl-10">
                                    <img alt="" src={require("../Assets/images/dashboard/next.svg")} />
                                </div>
                            </div>
                            {
                                protector.visible &&
                                <div className="fl-row collapsed-content">
                                    <div className="fl-100">
                                        <p className="collapsed-message">Nick has not checked in for over 2 months. We recommend connecting with your guardian so they can check in at least once a week. <Link to="">Learn More</Link></p>
                                        <p className="collapsed-contact">Work<br/>303-294-0178</p>
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
