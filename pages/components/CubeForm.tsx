import React, { useState, useEffect } from 'react';

interface CubeFormProps {
  setCubeString: React.Dispatch<React.SetStateAction<string>>;
  cubeString: string;
  setSolution: React.Dispatch<React.SetStateAction<string>>;
}



function CubeForm(props: CubeFormProps) {
  
  const [currentInput, setCurrentInput] = useState('bbbbbbbbbrrrrrrrrrgggggggggoooooooooyyyyyyyyywwwwwwwww');

  const handleConfigure = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    props.setCubeString(currentInput)
  }
  const solveCube = () => {
    fetch(`http://localhost:8080/rubik/solve?cube=${props.cubeString}`)
      .then(response => response.json())
      .then(data => {

        console.log(data);
        if(data.hasOwnProperty("solution")) {
          props.setSolution(data.solution)
        }else{
          props.setSolution(data.status)
        }
      })
      .catch(error => {
        console.error('Error Fetching Solution:', error);
      });
  }
  
  const scramble =  () => {
    const directions = "FfRrBbLlUuDd"

    let scrambleRotations = ''

    const numRotations = 30

    for (let i = 0; i < numRotations; i++) {
      let randInt =  Math.floor(Math.random() * directions.length)
      scrambleRotations += directions.charAt(randInt)
    }

    fetch(`http://localhost:8080/rubik/rotate?cube=${props.cubeString}&dir=${scrambleRotations}`)
    .then(response => response.json())
    .then(data => {

      console.log(data);
      if(data.hasOwnProperty("cube")) {
        props.setCubeString(data.cube)
      }else{
        console.log(data.stauts)
      }
    })
    .catch(error => {
      console.error('Error Fetching Cube:', error);
    });
  }
  
  console.log("Cube Form Rendered")
  return (
    <div className="cube-form-wrapper">
      <form className="cube-form">
        <div className='cube-input'>
          <button className="button" type="button" onClick={scramble}>Scramble</button>
          <input className="input-box"
                  id="cube-input-box" 
                  type="text" 
                  placeholder="Cube Input String"
                  onChange={((event) => setCurrentInput(event.target.value))}
                  value={props.cubeString}
                  >
          
                  
          </input>
          <button className="button" type="button" onClick={handleConfigure} >Configure</button>
          <button className="button" type="button" onClick={solveCube}>Solve</button>
        </div>
        
      </form>
    </div>
  )
}

export default CubeForm


































