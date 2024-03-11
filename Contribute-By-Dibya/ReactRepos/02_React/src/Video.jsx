import React from "react";
import "./App.css";
export default function Video({
  title,
  bgColor,
  channel,
  views,
  time,
  verified,
}) {
  let topic = "React-JS Component";
  let bg = "dark";
  let channelJsx;

  // if(verified){ channelJsx=<div className="channel">{channel}✅</div> }
  // else{
  //   channelJsx=<div className="channel">{channel}</div> }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src="https://picsum.photos/id/2/160/90"
            alt="Girl in a jacket"
            width="300"
            height="150"
          />
        </div>

        <div className="title">{title}</div>
        <div className="channel">{channel}{verified && '✅'}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}
