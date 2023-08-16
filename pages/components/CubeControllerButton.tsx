/* Imports */
import React from "react";
import { DEFAULT_CUBE } from "../../util/constants";

/* Constants */

interface CubeControllerButtonProps {
  rotation: string;
}

function CubeControllerButton(props: CubeControllerButtonProps) {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-blue-500 w-10 h-10 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm text-center mr-2 mb-2 "
    >
      {props.rotation}
    </button>
  );
}

export default CubeControllerButton;
