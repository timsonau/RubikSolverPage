import React, { useState, useEffect } from "react";
import {
  DEFAULT_CUBE,
  CUBE_API_BASE,
  SOLVE_SERVER_PATH,
  ROTATE_SERVER_PATH,
  VALID_ROTATIONS,
} from "../../util/constants";

interface CubeFormProps {
  setCubeString: React.Dispatch<React.SetStateAction<string>>;
  cubeString: string;
  setSolution: React.Dispatch<React.SetStateAction<string>>;
}

function CubeForm(props: CubeFormProps) {
  /* State Variables*/
  const [currentInput, setCurrentInput] = useState(DEFAULT_CUBE);

  /* Event Handlers */
  const configureCube = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setCubeString(currentInput);
  };

  const solveCube = () => {
    fetch(`${CUBE_API_BASE}${SOLVE_SERVER_PATH}?cube=${props.cubeString}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.hasOwnProperty("solution")) {
          props.setSolution(data.solution);
        } else {
          props.setSolution(data.status);
        }
      })
      .catch((error) => {
        console.error("Error Fetching Solution:", error);
      });
  };

  const scrambleCube = async () => {
    let scrambleRotations = generateRandomRotations();
    try {
      const response = await fetch(
        `${CUBE_API_BASE}${ROTATE_SERVER_PATH}?cube=${props.cubeString}&dir=${scrambleRotations}`
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
      let randInt = Math.floor(Math.random() * VALID_ROTATIONS.length);
      randRotations += VALID_ROTATIONS.charAt(randInt);
    }
    return randRotations;
  };

  console.log("Cube Form Rendered");
  return (
    <div className="cube-form-wrapper">
      <form className="cube-form">
        <div className="cube-input">
          <button className="button" type="button" onClick={scrambleCube}>
            Scramble
          </button>
          <input
            className="input-box"
            id="cube-input-box"
            type="text"
            placeholder={props.cubeString}
            onChange={(event) => setCurrentInput(event.target.value)}
          ></input>
          <button className="button" type="button" onClick={configureCube}>
            Configure
          </button>
          <button className="button" type="button" onClick={solveCube}>
            Solve
          </button>
        </div>
      </form>
    </div>
  );
}

export default CubeForm;
