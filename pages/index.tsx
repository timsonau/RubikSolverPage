import React, {useEffect, useState} from 'react'
import CubeApp from './components/CubeApp'
import Title from './components/Title'
function Index() {

  const [message, setMessage] = useState('Loading')
  
  useEffect(()=> {
    fetch("https://timsonau.pythonanywhere.com/api/home")
      .then(response => response.json())
      .then(data => {
          console.log(data)
          setMessage(data.message)
      })
  }, [])

  
  return (
    <div id='index'>
      <Title/>
      <CubeApp />
    </div>
  )
}

export default Index