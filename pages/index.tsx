import type { NextPage } from "next";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Home: NextPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/testNext.loader.js",
    dataUrl: "Build/testNext.data",
    frameworkUrl: "Build/testNext.framework.js",
    codeUrl: "Build/testNext.wasm",
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        height: "100%",
        width: "100%",
      }}
    >
      <h1>WebGl Test</h1>
      <Unity
        style={{
          height: "90%",
          width: "100%",
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
};

export default Home;
