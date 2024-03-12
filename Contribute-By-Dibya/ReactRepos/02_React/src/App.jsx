import React, { useState } from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import { videos } from "./data/data"; // Ensure this is the correct path and matches the export from data.js
import AddVideo from "./components/AddVideo";

function App() {
 const [videosState, setVideosState] = useState(videos); // Use a different name for the state variable to avoid confusion

 return (
    <>
      <div>
      <AddVideo/>
        {videosState.map((video) => (
          <div key={video.id}>
            <Video
              views={video.views}
              title={video.title}
              time={video.time}
              verified={video.verified}
            />
            <PlayButton
              onPlay={() => console.log(video.title, "played")}
              onPause={() => console.log(video.title, "paused")}
            >
              {video.title}
            </PlayButton>
          </div>
        ))}
      </div>
    </>
 );
}

export default App;