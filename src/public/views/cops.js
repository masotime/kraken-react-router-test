'use strict';

var React = require('react'),
	Button = require('react-bootstrap').Button,
	Input = require('react-bootstrap').Input;
var Immutable = require('immutable');
var Panel = require('react-bootstrap').Panel;
var STYLES = {
	input:{
		marginTop:'1em'
	},
	nextBtn: {
		marginTop: '2em',
		width: '100%'
	}
};

module.exports = React.createClass({
	  getInitialState: function() {
		return {
		  addedFields: Immutable.List(),
		  undoCache: Immutable.List()
		};
	  },
	  undo: function() {
		var self = this;
		this.setState(function(prev) {
		  return {
			undoCache: prev.undoCache.pop(),
			addedFields: prev.undoCache.last()
		  }
		}, self.updateSerialization);
	  },
	  updateSerialization: function() {
		var self = this;
		console.log("in updateSerialization");		
	  },
	  onSubmit: function(event) {
		var self = this;
		console.log("in onSubmit");		
		event.preventDefault();
		

	  },
	  addNewfield: function() {
		var fieldIndex = this.state.addedFields.size;
		var fieldKey = 'people[' + fieldIndex + ']';
		console.log("in addNewfield");
		console.log(fieldIndex);
		var fieldEle = (
			<div>
			<div className="row">
	            <div className="col-md-1"></div>
	            <div className="col-md-10">
	                <Panel header="Field">
						<div className="row">
							<div className="col-md-1"></div>
							<div className="col-md-10">
								<Input type="select" label="Field Name" placeholder="select" name={fieldKey + '[fieldName]'}>
								<option value="PERSON_FULL_NAME">PERSON_FULL_NAME</option>
								<option value="DATE_OF_BIRTH">DATE_OF_BIRTH</option>
								<option value="CPF">CPF</option>
								<option value="HOME_ADDRESS">HOME_ADDRESS</option>
								<option value="HOME_PHONE_NUMBER">HOME_PHONE_NUMBER</option>
								<option value="OCCUPATION">OCCUPATION</option>
								</Input>

							</div>
							<div className="col-md-1"></div>
						</div>

				        <div className="row">
				            <div className="col-md-1"></div>
				            <div className="col-md-10">
				                <Input type="select" label="Input type" placeholder="select" name={fieldKey + '[inputType]'}>
				                  <option value="UPLOADED_DOCUMENT">UPLOADED_DOCUMENT</option>
				                  <option value="INPUT_TEXT">INPUT_TEXT</option>
				                </Input>
				                
				            </div>
				            <div className="col-md-1"></div>
				        </div>

				        <div className="row">
				            <div className="col-md-1"></div>
				            <div className="col-md-10">
				                <Input type="select" label="constriant" placeholder="select" name={fieldKey + '[constraint]'}>
				                  <option value="ALL_OF">ALL_OF</option>
				                  <option value="ONE_OF">ONE_OF</option>
				                </Input>                        
				            </div>
				            <div className="col-md-1"></div>
				        </div>

				        <div className="row">
				            <div className="col-md-1"></div>
				            <div className="col-md-10">

				                <Input type="select" label="Access Mode" placeholder="select" name={fieldKey + '[accessMode]'}>
				                  <option value="READ_ONLY">READ_ONLY</option>
				                  <option value="READ_WRITE">READ_WRITE</option>
				                </Input>
				                
				            </div>
				            <div className="col-md-1"></div>
				        </div>    
				    </Panel>                  
	            </div>	            
	            <div className="col-md-1"></div>	            
	        </div>
	       </div>
        );
		
		this.setState(function(prev) {
		  return {
			undoCache: prev.undoCache.push(this.state.addedFields),
			addedFields: prev.addedFields.push(fieldEle)
		  };
		});
	  },

	  render: function() {
		return (
		<form className="fieldsForm" onSubmit={this.onSubmit}>
			<input type="hidden" name="_csrf" value="{this.props._csrf}"/>
			<div id="decisionInfoContainer" >
				
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1></h1><br/>
                        <Panel header='ADD DECISION DETAILS AND FIELDS...'>    
                        	<div className="row">
			                    <div className="col-md-3"></div>
			                    <div className="col-md-6">

			                        <Input type="select" label="Decision code" placeholder="NEED_MORE_DATA">
			                          <option value="cip">ALLOW</option>
			                          <option value="kyc">NEED_MORE_DATA</option>
			                          <option value="kyc">DENY</option>
			                        </Input>
			                        
			                    </div>
			                    <div className="col-md-3"></div>
			                </div>

			                <div className="row">
			                    <div className="col-md-3"></div>
			                    <div className="col-md-6">
			                        <Input type="select" label="Retry count" placeholder="select">
			                          <option value="1">1</option>
			                          <option value="2">2</option>
			                          <option value="3">3</option>
			                        </Input>                        
			                    </div>
			                    <div className="col-md-3"></div>
			                </div>

			                <div className="row">
			                    <div className="col-md-3"></div>
			                    <div className="col-md-6">
			                        <Input type="select" label="Verification status" placeholder="select">
			                          <option value="VERIFICATION_FAILURE">VERIFICATION_FAILURE</option>
			                          <option value="VERIFICATION_SUCCESS">VERIFICATION_SUCCESS</option>
			                        </Input>                        
			                    </div>
			                    <div className="col-md-3"></div>
			                </div>
               
                         </Panel>                
                    </div>
                    <div className="col-md-3"></div>
                </div>
                
                
            </div>

            <div id="fieldsContainer">  
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1></h1><br/>
                        <Panel header='Add Fields details'>  
			            	<div className="row">
			                    <div className="col-md-1"></div>
			                    <div className="col-md-10">
			                        <button onClick={this.addNewfield} type='button'>Add a new field</button>
								  	<button onClick={this.undo} type='button' disabled={!this.state.addedFields.size}>Undo</button>
								  	{this.state.addedFields.map(function(field) {
						                return field;
						            })}                   
			                    </div>
			                    <div className="col-md-1"></div>
			                </div>
			            	
			                <div className="row">
			                    <div className="col-md-3"></div>
			                    <div className="col-md-6">
			                        <Button type='submit' bsStyle="primary" bsSize="small" style={STYLES.nextBtn}>Next</Button>                        
			                    </div>
			                    <div className="col-md-3"></div>
			                </div>
			            </Panel>                
                    </div>
                    <div className="col-md-3"></div>
                </div>                
            </div>
        </form>
		  
		);
	  }
	});