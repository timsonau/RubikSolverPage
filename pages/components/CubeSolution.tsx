import React from "react";

interface CubeSolutionProps {
  solution: string;
}

const CubeSolution = React.memo((props: CubeSolutionProps) => {
  console.log("Cube Solution Rendered");
  return (
    <div className="cube-solution-wrapper">
      <div className="cube-solution">Solution: {props.solution}</div>
    </div>
  );
});

CubeSolution.displayName = "CubeSolution";
export default CubeSolution;
