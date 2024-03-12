import React from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";

export const App = () => {
 let data = [
    {
      userName: "idibyaranjan15",
      desc: "lorem ipsum dipsum",
      btn: "Read",
    },
    {
      userName: "igdibya_",
      desc: "ipsum dipusm lorem",
      btn: "Update",
    },
    {
      userName: "dibyasahoo",
      desc: "dipsum lorem ipsum",
      btn: "Delete",
    },
 ];

 return (
    <>
      {/* {data.map((item, index) => (
        <Card key={item.userName} userName={item.userName} desc={item.desc} btn={item.btn} />
      ))} */}
      <Counter />
    </>
 );
};

export default App;