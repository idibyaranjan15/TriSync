import React, { useState } from "react";

const BgChanger = () => {
 const [colors, setColor] = useState("bg-yellow-500"); // Initialize with a default color

 return (
    <div className={`w-full h-screen duration-150 ${colors}`}> {/* Use the colors state variable here */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl ">
          <button onClick={()=>setColor('bg-red-500')} className="outline-none px-4 py-1 rounded-full bg-red-400">Red</button>
          <button onClick={()=>setColor('bg-green-500')} className="outline-none px-4 py-1 rounded-full bg-green-400">Green</button>
          <button onClick={()=>setColor('bg-pink-500')} className="outline-none px-4 py-1 rounded-full bg-pink-400">Pink</button>
        </div>
      </div>
    </div>
 );
};

export default BgChanger;