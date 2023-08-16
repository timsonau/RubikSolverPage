/* Imports */
import React from "react";
import CubeFace from "./CubeFace";
import { DEFAULT_CUBE } from "../../util/constants";
import CubeControllerButton from "./CubeControllerButton";
/* Constants */

interface CubeControllerProps {}

function CubeController() {
  const cwRotations = "FRBLUD";
  const ccwRotations = "frblud";
  return (
    <div className="cube-controller">
      <div className="cw-rotations">
        {Array.from(cwRotations).map((char, index) => (
          <CubeControllerButton key={index} rotation={char} />
        ))}
      </div>
      <div className="ccw-rotations">
        {Array.from(ccwRotations).map((char, index) => (
          <CubeControllerButton key={index} rotation={char} />
        ))}
      </div>
    </div>
  );
}

export default CubeController;
