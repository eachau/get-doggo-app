import React from "react";
import './Dog.css';

const Dog = (props) => {

    const url = props.url;
    const type = url.slice(url.length - 4);
    if (type === ".mp4") {
      return (
        <video
          className="dog-child"
          autoPlay={true}
          loop
          muted={true}
          key={url}
          controls
        >
          <source src={url} type="video/mp4" />
        </video>
      );
    } else if (type === "webm") {
      return (
        <video
          className="dog-child"
          autoPlay={true}
          loop
          muted={true}
          key={url}
          controls
        >
          <source src={url} type="video/webm" />
        </video>
      );
    } else if (type === null) {
      return <p />;
    } else {
      return (
        <img className="dog-child" src={url} key={url} alt="Broken Dog Link" />
      );
    }
}

export default Dog;