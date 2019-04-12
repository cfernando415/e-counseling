import React from "react";
import { withRouter } from "react-router-dom";
import Peer from "simple-peer";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.loginHandler(this.state.role);
    // const peer = new Peer({ initiator: true });

    if (this.state.role === "counselor") {
      this.props.loginHandler({
        email: this.state.email,
        role: this.state.role
      });
      this.props.history.push({
        pathname: "/session",
        state: {
          peer: this.state.email
        }
      });
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { password, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <input
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="role"
              id="patient"
              value="patient"
              onChange={this.handleChange}
              checked={this.state.role === "patient"}
            />
            Patient
          </label>
          <label>
            <input
              type="radio"
              name="role"
              id="counselor"
              value="counselor"
              onChange={this.handleChange}
              checked={this.state.role === "counselor"}
            />
            Counselor
          </label>
        </p>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default withRouter(Login);
// export default Login;
