import "./App.css";
import React,{useState} from 'react';
function PlayButton({onPlay,onPause,children}) {
 
 const [playing,setPalying]=useState(false);
 


  const handleClick = () => {
    playing ? onPause():onPlay();
    setPalying(!playing)
  };

  return (
    <>
      <button onClick={handleClick}>{children}:{playing?'playing':'paused'}</button>
    </>
  );
}

export default PlayButton;
