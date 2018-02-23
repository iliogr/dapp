import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class AddKey extends Component {
    render() {
        return (
            <div className="addkey">
                <Route exact path="/add-key/step1" component={Step1}/>
                <Route exact path="/add-key/step2" component={Step2}/>
                <Route exact path="/add-key/step3" component={Step3}/>
                <Route exact path="/add-key/done" component={Step4}/>
            </div>
        )
    }
}

export default AddKey;

class Step1 extends Component {
    render() {
        return (
            <div className="step1">
                <div className="fl-row fl-space-between">
                    <div className="fl-32 step-meter checked">
                    </div>
                    <div className="fl-32 step-meter">
                    </div>
                    <div className="fl-32 step-meter">
                    </div>
                </div>
                <h1>Add Seed Words</h1>
                <p>KeySplit helps you to store your seed words safely by creating five keys you share with your trusty guardians.  Let’s start!</p>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <h4>Nickname</h4>
                        <input placeholder="Nickname for the seed words" type="text" name="text" />
                        <textarea placeholder="Your 12-word seed words" />
                    </div>
                </div>
                <center><button onClick={() => { this.props.history.push('/add-key/step2') }}>CONTINUE</button></center>
            </div>
        )
    }
}

class Step2 extends Component {
    render() {
        return (
            <div className="step2">
                <div className="fl-row fl-space-between">
                    <div className="fl-32 step-meter checked">
                    </div>
                    <div className="fl-32 step-meter checked">
                    </div>
                    <div className="fl-32 step-meter">
                    </div>
                </div>
                <h1>Add Guardians</h1>
                <p>Appoint your five guardians who will protect and help you restore your seed words. Each guardian needs to be from different community.</p>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <h4>Guardian 1</h4>
                        <input placeholder="Guardian 1's name" type="text" name="text" />
                        <input placeholder="Guardian 1's phone number" type="text" name="text" />
                        <input placeholder="Community" type="text" name="text" />
                    </div>
                </div>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <h4>Guardian 3</h4>
                        <input placeholder="Guardian 2's name" type="text" name="text" />
                        <input placeholder="Guardian 2's phone number" type="text" name="text" />
                        <input placeholder="Community" type="text" name="text" />
                    </div>
                </div>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <h4>Guardian 3</h4>
                        <input placeholder="Guardian 3's name" type="text" name="text" />
                        <input placeholder="Guardian 3's phone number" type="text" name="text" />
                        <input placeholder="Community" type="text" name="text" />
                    </div>
                </div>


                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <h4>Guardian 4</h4>
                        <input placeholder="Guardian 4's name" type="text" name="text" />
                        <input placeholder="Guardian 4's phone number" type="text" name="text" />
                        <input placeholder="Community" type="text" name="text" />
                    </div>
                </div>


                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <h4>Guardian 5</h4>
                        <input placeholder="Guardian 5's name" type="text" name="text" />
                        <input placeholder="Guardian 5's phone number" type="text" name="text" />
                        <input placeholder="Community" type="text" name="text" />
                    </div>
                </div>


                <center><button onClick={() => { this.props.history.push('/add-key/step3') }}>CONTINUE</button></center>

            </div>
        )
    }
}

class Step3 extends Component {
    render() {
        return (
            <div className="step3">
                <div className="fl-row fl-space-between">
                    <div className="fl-32 step-meter checked">
                    </div>
                    <div className="fl-32 step-meter checked">
                    </div>
                    <div className="fl-32 step-meter checked">
                    </div>
                </div>
                <h1>Share Keys</h1>
                <p>Send the unique keys to your guardians. KeySplit recommends contacting the guardians personally after to make sure they got it.</p>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <div className="share-tile">
                            <div className="fl-row">
                                <div className="fl-80">
                                    <h3>Russell</h3>
                                    <h4>Family</h4>
                                    <p>keysplit.dapp/2slNhs9a</p>
                                </div>
                                <div className="fl-20">
                                    <img alt="" src={require("../Assets/images/dashboard/share-arrow.svg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <div className="share-tile">
                            <div className="fl-row">
                                <div className="fl-80">
                                    <h3>Russell</h3>
                                    <h4>Family</h4>
                                    <p>keysplit.dapp/2slNhs9a</p>
                                </div>
                                <div className="fl-20">
                                    <img alt="" src={require("../Assets/images/dashboard/share-arrow.svg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <div className="share-tile">
                            <div className="fl-row">
                                <div className="fl-80">
                                    <h3>Russell</h3>
                                    <h4>Family</h4>
                                    <p>keysplit.dapp/2slNhs9a</p>
                                </div>
                                <div className="fl-20">
                                    <img alt="" src={require("../Assets/images/dashboard/share-arrow.svg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <div className="share-tile">
                            <div className="fl-row">
                                <div className="fl-80">
                                    <h3>Russell</h3>
                                    <h4>Family</h4>
                                    <p>keysplit.dapp/2slNhs9a</p>
                                </div>
                                <div className="fl-20">
                                    <img alt="" src={require("../Assets/images/dashboard/share-arrow.svg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fl-row">
                    <div className="fl-offset-5 fl-90">
                        <div className="share-tile">
                            <div className="fl-row">
                                <div className="fl-80">
                                    <h3>Russell</h3>
                                    <h4>Family</h4>
                                    <p>keysplit.dapp/2slNhs9a</p>
                                </div>
                                <div className="fl-20">
                                    <img alt="" src={require("../Assets/images/dashboard/share-arrow.svg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <center><button onClick={() => { this.props.history.push('/add-key/done') }}>DONE</button></center>
            </div>
        )
    }
}

class Step4 extends Component {
    render() {
        return (
            <div className="step4">
                <h1>Done!</h1>
                <div className="fl-row">
                    <div className="fl-20">
                        <img alt="" src={require("../Assets/images/dashboard/happy_logo.png")} />
                    </div>
                    <div className="fl-20">
                        <img alt="" className="low-opacity" src={require("../Assets/images/dashboard/happy_logo.png")} />
                    </div>
                    <div className="fl-20">
                        <img alt="" className="low-opacity" src={require("../Assets/images/dashboard/happy_logo.png")} />
                    </div>
                    <div className="fl-20">
                        <img alt="" className="low-opacity" src={require("../Assets/images/dashboard/happy_logo.png")} />
                    </div>
                    <div className="fl-20">
                        <img alt="" className="low-opacity" src={require("../Assets/images/dashboard/happy_logo.png")} />
                    </div>
                </div>
                <p>You will get notified once your guardians check in. We recommend you connecting with your guardians regularly to make sure that they have your keys safe.</p>
                <center><button onClick={() => { this.props.history.push('/dashboard') }}>VIEW MY KEY</button></center>
            </div>
        )
    }
}
