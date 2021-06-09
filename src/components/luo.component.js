// luo.component.js
import React, {Component} from 'react';

export default class Luo extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGuestNumber = this.onChangeGuestNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state =  {
            person_name: '',
            business_name: '',
            business_guest_number: ''
        }
    }

    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value //How works e.target.value
        })
    }

    onChangeBusinessName(e) {
        this.setState({
            business_name: e.target.value
        })
    }

    onChangeGuestNumber(e) {                        // work every time when change value inside block scope
        this.setState({
            business_guest_number: e.target.value
        })
        //console.log(e)                 //e.target.valu= return input value; e.target = <input type="text" className="form-control" value ={this.state.person_name} onChange={this.onChangePersonName} />
                                               // e = SyntheticBaseEvent {_reactName: "onChange", _targetInst: null, type: "change", nativeEvent: InputEvent, target: input.form-control, …}bubbles: truecancelable: falsecurrentTarget: nulldefaultPrevented: falseeventPhase: 3isDefaultPrevented: ƒ functionThatReturnsFalse()isPropagationStopped: ƒ functionThatReturnsFalse()isTrusted: truenativeEvent: InputEvent {isTrusted: true, data: "1", isComposing: false, inputType: "insertText", dataTransfer: null, …}target: input.form-controltimeStamp: 585036.6000000001type: "change"_reactName: "onChange"_targetInst: null__proto__: Object

    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`The value are ${this.state.person_name},
        ${this.state.business_name}, ${this.state.business_guest_number}`)
        this.setState({
            person_name:'',             // why that works with empty string?
            business_name:'',
            business_guest_number:''

        })
    }

    render() {
        return ( 
            <div style = {{marginTop: 10}}>
                <h3>Add information in the database</h3> 
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>The name of the person: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value ={this.state.person_name}
                            onChange={this.onChangePersonName}
                            />
                    </div>    
                    <div className="form-group">
                        <label>Company: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value = {this.state.business_name}
                            onChange={this.onChangeBusinessName}
                        />
                    </div>    
                    <div className="form-group">
                        <label>Number: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value = {this.state.business_guest_number}
                            onChange = {this.onChangeGuestNumber}
                        />
                    </div>  
                    <br/>  
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>    
                </form> 
            </div>
        )
    }
}