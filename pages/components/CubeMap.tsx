import React from 'react';
import CubeFace from './CubeFace'

interface CubeMapProps{
  cubeString: string
}
function CubeMap(props: CubeMapProps) {
  console.log("Cube Map Rendered")
  return (
    <div className="cube-mapping">
        <CubeFace side='up' colors={props.cubeString.substring(36,45)} />
        <div className="side-faces flex">
            <CubeFace side='left' colors={props.cubeString.substring(27,36)}/>
            <CubeFace side='front' colors={props.cubeString.substring(0,9)}/>
            <CubeFace side='right' colors={props.cubeString.substring(9,18)}/>
            <CubeFace side='back' colors={props.cubeString.substring(18,27)}/>
        </div>
        
        <CubeFace side='down' colors={props.cubeString.substring(45,54)}/>
    </div>
  )
}

export default CubeMap