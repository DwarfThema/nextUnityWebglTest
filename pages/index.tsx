import type { NextPage } from "next";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Home: NextPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/tesxNext.loader.js",
    dataUrl: "Build/tesxNext.data",
    frameworkUrl: "Build/tesxNext.framework.js",
    codeUrl: "Build/tesxNext.wasm",
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
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
      <style jsx>{`
        div {
        }
      `}</style>
    </>
  );
};

export default Home;
