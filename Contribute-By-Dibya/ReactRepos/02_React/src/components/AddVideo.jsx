import React, { useState } from "react";
import "./AddVideo.css"; // Import the CSS file for styling

function AddVideo() {
  const [video, setVideo] = useState({
    time: "1 month ago",
    channel: "Coder dost",
    verified: "true",
  });
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({...video,[e.target.name]:[e.target.value]})
  }
  return (
    <form className="add-video-form">
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        className="input-field"
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="Views"
        className="input-field"
      />
      <button className="add-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default AddVideo;
