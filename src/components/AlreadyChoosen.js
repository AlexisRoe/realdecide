import React from "react";
import Realdecide from "./RealDecide";

export default function AlreadyChoosen({ alreadyChoosen, setAlreadyChoosen }) {
  return (
    <div className="alreadyChoosen">
      <h2>🎯 Already Choosen 🎯</h2>
      <Realdecide values={alreadyChoosen} setValues={setAlreadyChoosen} />
    </div>
  );
}
