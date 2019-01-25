import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { updateUser } from "./../../ducks/reducer";
import { connect } from "react-redux";
// import swal from "sweetalert2";
import Axios from "axios";

class Nav extends Component {
  async componentDidMount() {
    try {
      const res = await Axios.get("/api/user-data");
      this.props.updateUser(res.data);
    } catch (e) {
      console.log("error: not logged in", e);
      // swal({
      //   title: "Oops...",
      //   text: "You aren't logged in!",
      //   type: "error",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Login!"
      // }).then(result => {
      //   if (result.value) {
      //     this.props.history.push("/Auth");
      //   }
      // });
    }
  }
  render() {
    const { user } = this.props;
    return (
      <div className="Nav">
        <div className="logo">
          <Link to="/">Lacrosse</Link>
        </div>
        {/* <div id="username">{user.username}{user.id}</div> */}
        <div className="bar">
          <div className="navbar">
            <Link to="/">Home </Link>
            <Link to="/Auth"> Login </Link>
            <Link to="/StringMain"> String Menu </Link>
            <Link to="/Mens"> Mens </Link>
            <Link to="/Womens"> Womens </Link>
            <Link to="/Cart"> Cart </Link>
            <Link to="/User">User</Link>

          </div>
          {/* <div className="hamburger">
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <Link to="/">Home </Link>
            <Link to="/Auth">| Login </Link>
            <Link to="/StringMain">| String Menu </Link>
            <Link to="/Mens">| Mens </Link>
            <Link to="/Womens">| Womens </Link>
            <Link to="Cart">| Cart </Link>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => reduxStore;

export default connect(
  mapStateToProps,
  { updateUser }
)(Nav);
