import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { updateUser } from "./../../ducks/reducer";
import { connect } from "react-redux";
import swal from "sweetalert2";
import Axios from "axios";
import { Link } from "react-router-dom";

class Main extends Component {
  async componentDidMount() {
    try {
      const res = await Axios.get("/api/user-data");
      this.props.updateUser(res.data);
    } catch (e) {
      console.log("error: not logged in", e);
      swal({
        title: "Oops...",
        text: "You aren't logged in!",
        type: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!"
      }).then(result => {
        if (result.value) {
          this.props.history.push("/Auth");
        }
      });
    }
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <div>
        <Nav />
        {user ? (
          <div>{user.username}</div>
        ) : (
          <p>
            Please log in <Link to="/Auth">Login</Link>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => reduxStore;

export default connect(mapStateToProps, {updateUser})(Main);
