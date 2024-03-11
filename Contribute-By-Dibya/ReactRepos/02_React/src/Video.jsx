import React from "react";
import "./App.css";
export default function Video({
  title,
  bgColor,
  channel,
  views,
  time,
  verified,
  children
}) {




  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src="https://fastly.picsum.photos/id/2/160/90.jpg?hmac=_DFSqevgBLPBnibjOu-3HM4eKVkBxnoe790gFxb_DGo"
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
        <div>{children}</div>
      </div>
    </>
  );
}
