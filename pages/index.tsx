import React, { useEffect, useState } from "react";
import CubeApp from "./components/CubeApp";
import Title from "./components/Title";
import { CUBE_API_BASE } from "../util/constants";
import Head from "next/head";
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
    <>
      <Head>
        <link rel="icon" href="/RubikSolverPage/public/favicon.ico" />
      </Head>
      <div id="index">
        <Title />
        <CubeApp />
      </div>
    </>
  );
}

export default Index;
