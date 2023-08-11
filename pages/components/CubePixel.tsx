import React from 'react';

interface CubePixelProps {
  color: string;
}

function getColor(char: string) {
  if ('b1234567890'.includes(char)) return 'blue'
  if ('w'.includes(char)) return 'white'
  if ('o'.includes(char)) return 'orange'
  if ('r'.includes(char)) return 'red'
  if ('y'.includes(char)) return 'yellow'
  if ('g'.includes(char)) return 'green'
  if ('t'.includes(char)) return 'teal'
  if ('i'.includes(char)) return 'indigo'
  if ('p'.includes(char)) return 'purple'
  return 'gray';
}

function CubePixel(props: CubePixelProps) {
  return (
    <div className={`cube-pixel w-14 h-14`} style={{backgroundColor: getColor(props.color)}}>
    </div>
  )
}

export default CubePixel