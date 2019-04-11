import React from 'react';

class Login extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     email: '',
     password: ''
   };
 }
 handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
 //    fetch(“http://localhost:3000/api/v1/login“, {
 //      method: “POST”,
 //      headers: {
 //        Accept: “application/json”,
 //        “Content-Type”: “application/json”
 //      },
 //      body: JSON.stringify({
 //        email: this.state.email,
 //        password: this.state.password
 //      })
 //    })
 //      .then(res => res.json())
 //      .then(data => {
 //        console.log(data);
 //        localStorage.setItem(“token”, data.jwt);
 //      });
    // this.props.history.push(“/”);
  };

 render() {
   const { password, email } = this.state;
   return (
     <form onSubmit={this.handleSubmit}>
       <input
         name='email'
         placeholder='Enter email'
         value={email}
         onChange={this.handleChange}
       />

       <input
         name='password'
         placeholder='Enter your password'
         value={password}
         onChange={this.handleChange}
       />

       <input type='submit' value='Login' />
     </form>
   );
 }
 
}

export default Login;
