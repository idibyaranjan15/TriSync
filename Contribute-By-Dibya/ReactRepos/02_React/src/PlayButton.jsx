import "./App.css";

function PlayButton({message,name,onPlay,onPause,children}) {
    let playing=false;

  const handleClick = () => {
    playing ? onPause():onPlay();
    playing=!playing;
  };

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default PlayButton;
