import React, { Component } from 'react';

class Signup extends Component {
 constructor(props) {
   super(props);
   this.state = {
     email: '',
     name: '',
     password: ''
   };
 }

 handleChange = (e, { name, value }) => this.setState({ [name]: value });

 handleReset = () =>
   this.setState({
     email: '',
     name: '',
     password: ''
   });

   handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    console.log('user state', this.state);
    e.preventDefault();
    // this.props.createUser(this.state);
    this.handleReset();
  };
 
 render() {
   const {
    email, name, password
   } = this.state;

   return (
     <form onSubmit={this.handleSubmit}>
        <input
         placeholder='Email'
         name='email'
         value={email}
         onChange={this.handleChange}
       />
       <input
         placeholder='Name'
         name='name'
         value={name}
         onChange={this.handleChange}
       />
       <input
         placeholder='Password'
         name='password'
         value={password}
         onChange={this.handleChange}
       />
       <input type='submit' value='Sign Up' />
     </form>
   );
 }
 
}

export default Signup;
