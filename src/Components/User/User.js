import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Axios from "axios";
import { updateUser } from "./../../ducks/reducer";
import { connect } from "react-redux";
// import { userInfo } from "os";
const serverLogout = process.env.REACT_APP_SERVER_LOGOUT;

export class User extends Component {
  constructor() {
    super();

    this.state = {
      usernameInput: ""
    };
  }
  async componentDidMount() {
    try {
      const res = await Axios.get("/api/user-data");
      this.props.updateUser(res.data);
    } catch (e) {
      console.log("error: not logged in", e);
    }
  }

  async handleNameUpdate (){
    const { id, username } = this.props.user;
    console.log(id);
    console.log(this.props.user);
    try {const res = await Axios.put(`/api/updateUser/${id}`, {
      username: this.state.usernameInput || username
    })
      this.props.updateUser(res.data);}
    catch (e){console.log('messed up')}
  };

  render() {
    // const { user } = this.props;
    return (
      <div>
        <Nav />
        <span>Change Username:</span>
        <input
          // placeholder={user.username}
          onChange={e => this.setState({ usernameInput: e.target.value })}
          type="text"
        />
        <button onClick={() => this.handleNameUpdate()}>Submit</button>
        <a href={serverLogout}>
          <button>Logout</button>
        </a>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => reduxStore;

export default connect(
  mapStateToProps,
  { updateUser }
)(User);
