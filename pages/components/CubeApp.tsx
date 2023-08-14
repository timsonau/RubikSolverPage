import CubeMap from "./CubeMap";
import CubeForm from "./CubeForm";
import CubeSolution from "./CubeSolution";
import React, { useState } from "react";

import { DEFAULT_CUBE } from "../../util/constants";

function CubeApp() {
  /* State Variables */
  const [cubeString, setCubeString] = useState(DEFAULT_CUBE);
  const [solution, setSolution] = useState("");

  console.log("Cube App Rendered");
  return (
    <div className="cube-app">
      <CubeForm
        setCubeString={setCubeString}
        cubeString={cubeString}
        setSolution={setSolution}
      />
      <CubeMap cubeString={cubeString} />
      <CubeSolution solution={solution} />
    </div>
  );
}
export default CubeApp;
