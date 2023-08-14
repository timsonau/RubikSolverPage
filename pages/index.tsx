import React, { useEffect, useState } from "react";
import CubeApp from "./components/CubeApp";
import Title from "./components/Title";
import { CUBE_API_BASE } from "./util/constants";
function Index() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch(CUBE_API_BASE)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return (
    <div id="index">
      <Title />
      <CubeApp />
    </div>
  );
}

export default Index;
