import React, { Component } from "react";
import axios from "axios";
import "./Auth.scss";
import Nav from "../Nav/Nav";

export class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  async register() {
    const { username, password } = this.state;
    let res = await axios.post("/auth/register", {
      username: username,
      password: password
    });
    if (res.data.loggedIn) {
      this.props.history.push("/");
    }
  }

  async login() {
    const { username, password } = this.state;
    let res = await axios.post("/auth/login", {
      username: username,
      password: password
    });
    if (res.data.loggedIn) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <Nav />

        <div className="login">
          <h2>Sign in</h2>
          <p>
            <input
              placeholder="username"
              onChange={e => this.setState({ username: e.target.value })}
              type="text"
            />
          </p>
          <p>
            <input
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              type="text"
            />
          </p>
          <button
            onClick={() => {
              this.register();
            }}
          >
            Register
          </button>
          <button
            onClick={() => {
              this.login();
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;
