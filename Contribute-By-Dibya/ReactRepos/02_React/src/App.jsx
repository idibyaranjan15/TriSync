import React from "react";
import Video from "./Video"; // Correctly import the Video component
import PlayButton from "./PlayButton";

function App() {
 
  let videos = [
    {
      id: 1,
      title: "JavaScript Basics",
      views: "10k",
      time: "1 year ago",
      verified: true, // Use boolean value instead of string
    },
    {
      id: 2,
      title: "React Crash Course",
      views: "20k",
      time: "6 months ago",
      verified: false, // Use boolean value instead of string
    },
    {
      id: 3,
      title: "Node.js Tutorial",
      views: "15k",
      time: "2 years ago",
      verified: true, // Use boolean value instead of string
    },
    {
      id: 4,
      title: "CSS Tricks",
      views: "12k",
      time: "8 months ago",
      verified: false, // Use boolean value instead of string
    },
    {
      id: 5,
      title: "Python for Beginners",
      views: "18k",
      time: "1.5 years ago",
      verified: true, // Use boolean value instead of string
    },
    {
      id: 6,
      title: "HTML5 Fundamentals",
      views: "22k",
      time: "2.5 years ago",
      verified: false, // Use boolean value instead of string
    },
    {
      id: 7,
      title: "Responsive Web Design",
      views: "25k",
      time: "3 years ago",
      verified: true, // Use boolean value instead of string
    },
  ];

  return (
    <>
      <div>
        {videos.map((video) => (
          <div key={video.id}>
          <Video
            key={video.id}
            views={video.views}
            title={video.title}
            time={video.time}
            verified={video.verified}
          />
          <PlayButton   onPlay={()=>console.log(video.title," played")} onPause={()=>console.log(video.title,"")}> {video.title} </PlayButton>
        </div>
        ))}
      </div>
     
      {/* <PlayButton  name="hello" onClick={()=>console.log("hello Dibya")} />
      <PlayButton name="hollaa" onClick={()=>console.log("Hollaa Dibya")} /> */}

    </>
  );
}

export default App;












