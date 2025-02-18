import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'react-dropdown/style.css';
import CountrySelector from './helper/countryselector.jsx'
import StateSelector from './helper/stateselector.jsx'
import Form from 'react-bootstrap/Form'
import {Col} from 'reactstrap';
import './css_stuff/memberedit.css';


class DependentEdit extends Component {
  state = {
    errors: []
  };

  handleSave = (e) => {
    if(this.props.myAccount){
      console.log('1')
      this.props.onSave(this.props.member, false);
    } else{
      this.props.addDependent(this.props.member);
    }
    this.props.onCancel();
  }
  
  handleCancel = () => {
    this.props.onCancel();
  }

  resetErrors = () => {
    this.setState({errors: []}, this.checkErrors())
  }

  checkErrors = () => {
    let errorArr = [];
    if(!this.props.member.Firstname){
      errorArr.push("Enter First Name!");
    }

    if(!this.props.member.Lastname){
      errorArr.push("Enter Last Name!");
    }

    if(this.props.member.PhoneNum){
      if(this.props.member.PhoneNum.length < 10 || this.props.member.PhoneNum.length > 11){errorArr.push("Invalid Phone Number!");}
    }
    
    if(this.props.member.Email){
      if(!this.props.member.Email.includes('@')){errorArr.push("Invalid Email!");}
    } 

    if(!this.props.member.HouseNo){
      errorArr.push("Enter House Number!");
    }

    if(!this.props.member.Street){
      errorArr.push("Enter Street Name!");
    }

    if(!this.props.member.City){
      errorArr.push("Enter City Name!");
    }
    
    if(!this.props.member.Country){
      errorArr.push("Select Country!");
    }
    
    if(!this.props.member.Postcode){
      errorArr.push("Enter Zipcode!");
    } else if(this.props.member.Postcode.length !== 5){errorArr.push("Invalid Zipcode!");}

    if(!this.props.member.DateOfBirth){
      errorArr.push("Enter Date of Birth!");
    } else if(this.props.member.DateOfBirth.indexOf('/') !== 2 || this.props.member.DateOfBirth.lastIndexOf('/') !== 5){errorArr.push("Invalid Date of Birth! Use format mm/dd/yyyy")}

    if(!this.props.member.Relationship){
      errorArr.push("Enter Relationship!");
    }

    this.state.errors = errorArr;
    this.setState({errors: errorArr});
  }

  render() {
    // console.log("DEPMEM", this.props)
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Dependent details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup>
              <Form.Group as={Col} md="6">
                <Form.Label id="Firstname">First Name</Form.Label>
                <FormControl
                  placeholder="First name"
                  aria-label="Firstname"
                  aria-describedby="firstname"
                  onChange={e => this.props.member.Firstname = e.target.value.toLocaleUpperCase() }
                  defaultValue={(this.props.member.Firstname) ? this.props.member.Firstname : ""}
                  className="mr-2"
                />
              </Form.Group>            

              <Form.Group as={Col} md="6">
                <Form.Label id="Lastname">Last Name</Form.Label>
                <FormControl
                  placeholder="Last name"
                  aria-label="Lastname"
                  aria-describedby="lastname"
                  onChange={e => this.props.member.Lastname = e.target.value.toLocaleUpperCase() }
                  defaultValue={(this.props.member.Lastname) ? this.props.member.Lastname : ""}
                />
              </Form.Group>
            </InputGroup>

            <InputGroup>
              <Form.Group as={Col} md="6">
                <Form.Label id="PhoneNum" >Phone Number</Form.Label>
                <FormControl
                  placeholder="Phone Number"
                  aria-label="PhoneNum"
                  aria-describedby="phonenum"
                  onChange={e => this.props.member.PhoneNum = e.target.value.toLocaleUpperCase() }
                  defaultValue={(this.props.member.PhoneNum) ? this.props.member.PhoneNum : ""}
                  className="mr-3"
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label id="Email" >Email</Form.Label>
                <FormControl
                  placeholder="email"
                  aria-label="Email"
                  aria-describedby="email"
                  onChange={e => this.props.member.Email = e.target.value }
                  defaultValue={(this.props.member.Email) ? this.props.member.Email : ""}
                />
              </Form.Group>
            </InputGroup>
          <br/>
            <InputGroup>
              <Form.Group as={Col} md="6">
                <Form.Label id="HouseNo">House Number</Form.Label>
                <FormControl
                  placeholder="House number or name"
                  aria-label="House #"
                  aria-describedby="house"
                  onChange={e => this.props.member.HouseNo = e.target.value.toLocaleUpperCase() }
                  defaultValue={this.props.member.HouseNo}
                  className="mr-2"
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label id="Village">Village</Form.Label>
                <FormControl
                  placeholder="Village name"
                  aria-label="Village"
                  aria-describedby="village"
                  onChange={e => this.props.member.Village = e.target.value.toLocaleUpperCase() }
                  defaultValue={this.props.member.Village}
                  className="mr-2"
                />
              </Form.Group>
            </InputGroup>

            <InputGroup>
              <Form.Group as={Col} md="6">
                <Form.Label id="Street" >Street</Form.Label>
                <FormControl
                  placeholder="Street name"
                  aria-label="Street"
                  aria-describedby="street"
                  onChange={e => this.props.member.Street = e.target.value.toLocaleUpperCase() }
                  defaultValue={this.props.member.Street}
                  className="w-125"
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label id="City" >City</Form.Label>
                <FormControl
                  placeholder="City Name"
                  aria-label="City"
                  aria-describedby="city"
                  onChange={e => this.props.member.City = e.target.value.toLocaleUpperCase() }
                  defaultValue={this.props.member.City}
                  className="w-100"
                />
              </Form.Group>
            </InputGroup>

            <InputGroup>
              <Form.Group as={Col} md="5">
                <Form.Label id="State" >State</Form.Label>
                <FormControl
                  placeholder="State Name"
                  aria-label="State"
                  aria-describedby="state"
                  as="select"
                  onChange={e => this.props.member.State = e.target.value.toLocaleUpperCase() }
                  defaultValue={this.props.member.State}
                >
                  <StateSelector />
                </FormControl>   
              </Form.Group>

              <Form.Group as={Col} md="5">
                <Form.Label id="Country" >Country</Form.Label>
                <FormControl
                  placeholder="Select Country"
                  aria-label="Country"
                  aria-describedby="country"
                  as="select"
                  onChange={e => this.props.member.Country = e.target.value.toLocaleUpperCase() }
                  className=""
                  defaultValue={this.props.member.Country}
                >
                  <CountrySelector/>
                </FormControl>
              </Form.Group>
          
              <Form.Group as={Col} md="2">
                <Form.Label id="Zipcode" >Zipcode</Form.Label>
                <FormControl
                  placeholder="Zipcode"
                  aria-label="Zipcode"
                  aria-describedby="zipcode"
                  onChange={e => this.props.member.Postcode = e.target.value.toLocaleUpperCase() }
                  defaultValue={this.props.member.Postcode}
                />
              </Form.Group>
            </InputGroup>
          <br/>
            <InputGroup>
              <Form.Group as={Col} md="4">
                <Form.Label id="DoB" >Date of Birth</Form.Label>
                <FormControl
                  placeholder="mm/dd/yyyy"
                  aria-label="DoB"
                  aria-describedby="DoB"
                  onChange={e => {
                    if(e.target.value.length > 1){
                      if(e.target.value.indexOf('/') === -1 || e.target.value.length > 4 && !e.target.value.substr(4).includes('/')){
                        e.target.value += "/"
                      }
                    }
                    this.props.member.DateOfBirth = e.target.value; 
                  }}
                  defaultValue={(this.props.member.DateOfBirth) ? this.props.member.DateOfBirth : ""}
                  className="mr-2"
                />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label id="Relationship" >Relationship</Form.Label>
                <FormControl
                  placeholder="Ex: Son, Daughter"
                  aria-label="Relationship"
                  aria-describedby="Relationship"
                  onChange={e => this.props.member.Relationship = e.target.value.toLocaleUpperCase() }
                  defaultValue={(this.props.member.Relationship) ? this.props.member.Relationship : ""}
                  className="mr-2"
                />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label id="Gender" >Gender</Form.Label>
                <FormControl
                  placeholder="Gender"
                  aria-label="Gender"
                  aria-describedby="gender"
                  as="select"
                  onChange={e => this.props.member.Gender = e.target.value.toLocaleUpperCase() }
                  className="mr-2"
                  defaultValue={(this.props.member.Gender) ? this.props.member.Gender : "n/a"}
                >
                  <option>n/a</option>
                  <option value="FEMALE">Female</option>
                  <option value="MALE">Male</option>
                </FormControl>
              </Form.Group>
            </InputGroup>

            {/* NO NEED FOR THE VOTER OR SPOUSE SINCE THEY ARE DEPENDENTS */}
            
            {/* <InputGroup>
              <Form.Group as={Col} md="6">
                <Form.Label id="Voter" >Voter</Form.Label>
                <FormControl
                  placeholder="Voter"
                  aria-label="Voter"
                  aria-describedby="voter" 
                  as="select" 
                  onChange={e => this.props.member.Voter = e.target.value.toLocaleUpperCase() }
                  defaultValue="No"
                  className="mr-3"
                >
                  <option>n/a</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </FormControl>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label id="Spouse" >Spouse</Form.Label>
                <FormControl
                  placeholder="Spouse Name"
                  aria-label="Spouse"
                  aria-describedby="spouse"
                  as="select"
                  onChange={e => this.props.member.Spouse = e.target.value.toLocaleUpperCase() }
                  defaultValue="No"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </FormControl>
              </Form.Group>
            </InputGroup> */}
          </Form>

      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="link" className="depButton">Add Dependent</Button> */}
        <Button variant="secondary" onClick={this.handleCancel}>Cancel</Button>
        <Button variant="primary" onClick={
          () => {
            this.resetErrors(); 
            
            if(this.state.errors.length > 0){
              let allErrors = "";
              let error = this.state.errors;
              for(var i = 0; i < this.state.errors.length; ++i){
                allErrors += error[i];
                if(i + 1 !== this.state.errors.length){
                  allErrors += '\n'
                }
              }
              alert(allErrors);
            }
            else{
              this.handleSave();
            }
          }
        }>Save</Button>
      </Modal.Footer>
    </Modal>
  );}
}

export default DependentEdit;