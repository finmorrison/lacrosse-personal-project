import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { Carousel } from "react-bootstrap";
import "./Main.scss";
import ReactPlayer from "react-player";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              alt="900x500"
              src="https://www.uslaxmagazine.com/sites/default/files/images/articles/paul-rabil-usa.jpg"
            />
            <Carousel.Caption>
              <h3>Play Better!</h3>
              <p />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="900x500"
              src="http://dailyorange.com/resize/800/wp-content/uploads/2017/03/29232800/unnamed-1.jpg"
            />
            <Carousel.Caption>
              <h3>Shoot Faster!</h3>
              <p />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="900x500"
              src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/11061303_976906158994993_1873105833065833867_o.jpg?_nc_cat=100&_nc_ht=scontent.fmkc1-1.fna&oh=1a9e4386a4fda421aa8e7eb2e07d9605&oe=5CC32977"
            />
            <Carousel.Caption>
              <h3>Look Great!</h3>
              <p />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div id="belowTheCar">
          <div className="tiles">
            <ReactPlayer style = {playerStyle} url="https://www.youtube.com/watch?v=VxTYMmILjP4" />
          </div>
          <div className="tiles">
            <ReactPlayer style = {playerStyle} url="https://www.youtube.com/watch?v=oRYrLLYtfRs" />
          </div>
          <div className="tiles">
            <ReactPlayer style = {playerStyle} url="https://www.youtube.com/watch?v=tmgqaBo3x3I" />
          </div>
        </div>
      </div>
    );
  }
}

const playerStyle = {
  height: 175,
  width: 325,

}

export default Main;
