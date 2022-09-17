import type { NextPage } from "next";
import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createGlobalStyle } from "styled-components";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const GloablStyles = createGlobalStyle`
  body{
    background-color: black;
  }
`;

const Home: NextPage = () => {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "Build/testNext.loader.js",
    dataUrl: "Build/testNext.data",
    frameworkUrl: "Build/testNext.framework.js",
    codeUrl: "Build/testNext.wasm",
  });
  if (isBrowser) {
    console.log("desktop");
    sendMessage("GameManager", "DesktopFn");
  } else {
    console.log("mobilefn");
    sendMessage("GameManager", "MobileFn");
  }
  return (
    <>
      <GloablStyles />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          WebGl Test 0917 #1
        </h1>
        <Unity
          style={{
            height: "90%",
            width: "100%",
          }}
          unityProvider={unityProvider}
        />
      </div>
    </>
  );
};

export default Home;
