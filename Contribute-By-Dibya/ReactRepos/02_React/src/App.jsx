import React from "react";
import Video from "./Video"; // Correctly import the Video component

function App() {
  let channel = " youtube ";
  let videos = [{
    id:1,
    title: "JavaScript Basics",
    views: "10k",
    time: "1 year ago",
    verified: true // Use boolean value instead of string
  },{
    title: "React Crash Course",
    views: "20k",
    time: "6 months ago",
    verified: false // Use boolean value instead of string
  },{
    title: "Node.js Tutorial",
    views: "15k",
    time: "2 years ago",
    verified: true // Use boolean value instead of string
  },{
    title: "CSS Tricks",
    views: "12k",
    time: "8 months ago",
    verified: false // Use boolean value instead of string
  },{
    title: "Python for Beginners",
    views: "18k",
    time: "1.5 years ago",
    verified: true // Use boolean value instead of string
  },{
    title: "HTML5 Fundamentals",
    views: "22k",
    time: "2.5 years ago",
    verified: false // Use boolean value instead of string
  },{
    title: "Responsive Web Design",
    views: "25k",
    time: "3 years ago",
    verified: true // Use boolean value instead of string
  }];

  return (
    <div>
      <div>Videos</div>
      {videos.map((video, index) => (
        <Video
          key={index}
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified}
        />
      ))}
    </div>
  );
}

export default App;
