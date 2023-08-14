import React from "react";
import CubePixel from "./CubePixel";

interface CubeFaceProps {
  side: string;
  colors: string;
}

function CubeFace(props: CubeFaceProps) {
  if (!props.colors) {
    props.colors = "bbbbbbbbb";
  }
  return (
    <div className={`cube-face ${props.side}-face`}>
      {Array.from(props.colors).map((char, index) => (
        <CubePixel key={index} color={char} />
      ))}
    </div>
  );
}

export default CubeFace;
