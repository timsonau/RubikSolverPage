import React, { useState, useEffect } from "react";
import * as c from "../../util/constants";
import {
  rotate_F,
  rotate_f,
  rotate_R,
  rotate_r,
  rotate_B,
  rotate_b,
  rotate_L,
  rotate_l,
  rotate_U,
  rotate_u,
} from "@/util/rotations";
interface CubeFormProps {
  setCubeString: React.Dispatch<React.SetStateAction<string>>;
  cubeString: string;
  setSolution: React.Dispatch<React.SetStateAction<string>>;
}

function CubeForm(props: CubeFormProps) {
  /* State Variables*/
  const [currentInput, setCurrentInput] = useState(c.DEFAULT_CUBE);

  /* Event Handlers */
  const configureCube = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setCubeString(currentInput);
  };

  const solveCube = () => {
    fetch(`${c.CUBE_API_BASE}${c.SOLVE_SERVER_PATH}?cube=${props.cubeString}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.hasOwnProperty("solution")) {
          startSolveCubeAnimation(data.solution);
        } else {
          props.setSolution(data.status);
        }
      })
      .catch((error) => {
        console.error("Error Fetching Solution:", error);
      });
  };

  const startSolveCubeAnimation = async (rotations: string) => {
    const delay = 100;
    let curCubeString = props.cubeString;
    let curRotations = "";
    for (const rotation of rotations) {
      let newCubeString = "";
      switch (rotation) {
        case "F":
          newCubeString = rotate_F(curCubeString);
          break;
        case "f":
          newCubeString = rotate_f(curCubeString);
          break;
        case "R":
          newCubeString = rotate_R(curCubeString);
          break;
        case "r":
          newCubeString = rotate_r(curCubeString);
          break;
        case "L":
          newCubeString = rotate_L(curCubeString);
          break;
        case "l":
          newCubeString = rotate_l(curCubeString);
          break;
        case "B":
          newCubeString = rotate_B(curCubeString);
          break;
        case "b":
          newCubeString = rotate_b(curCubeString);
          break;
        case "U":
          newCubeString = rotate_U(curCubeString);
          break;
        case "u":
          newCubeString = rotate_u(curCubeString);
          break;
        case "D":
          break;
        case "d":
          break;
      }
      curCubeString = newCubeString;
      // Update the state to trigger a re-render
      props.setCubeString(newCubeString);
      props.setSolution((curRotations += rotation));
      // Delay before the next rotation
      await new Promise((resolve) => setTimeout(resolve, delay));

      curCubeString = newCubeString;
    }
  };

  const scrambleCube = async () => {
    let scrambleRotations = generateRandomRotations();
    try {
      const response = await fetch(
        `${c.CUBE_API_BASE}${c.ROTATE_SERVER_PATH}?cube=${props.cubeString}&dir=${scrambleRotations}`
      );
      const data = await response.json();
      console.log(data);
      if (data.hasOwnProperty("cube")) {
        props.setCubeString(data.cube);
      } else {
        console.log(data.stauts);
      }
    } catch (error) {
      console.error("Error Fetching Cube:", error);
    }
  };

  /* Helper Functions */
  const generateRandomRotations = () => {
    const NUM_ROTATIONS = 30;
    let randRotations = "";
    for (let i = 0; i < NUM_ROTATIONS; i++) {
      let randInt = Math.floor(Math.random() * c.VALID_ROTATIONS.length);
      randRotations += c.VALID_ROTATIONS.charAt(randInt);
    }
    return randRotations;
  };

  console.log("Cube Form Rendered");
  return (
    <div className="cube-form-wrapper">
      <form className="cube-form">
        <input
          className="input-box"
          id="cube-input-box"
          type="text"
          placeholder={props.cubeString}
          onChange={(event) => setCurrentInput(event.target.value)}
        ></input>
        <div className="cube-options">
          <button className="button" type="button" onClick={configureCube}>
            Configure
          </button>
          <button className="button" type="button" onClick={solveCube}>
            Solve
          </button>
          <button className="button" type="button" onClick={scrambleCube}>
            Scramble
          </button>
        </div>
      </form>
    </div>
  );
}

export default CubeForm;
