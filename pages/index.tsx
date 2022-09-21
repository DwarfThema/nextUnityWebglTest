import type { NextPage } from "next";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createGlobalStyle } from "styled-components";
import { isBrowser } from "react-device-detect";

const GloablStyles = createGlobalStyle`
  body{
    background-color: black;
  }
`;
const DATAURL = "/Build/testNext.data";

const Home: NextPage = () => {
  const { unityProvider, sendMessage, isLoaded, loadingProgression } =
    useUnityContext({
      loaderUrl: "Build/testNext.loader.js",
      dataUrl: DATAURL,
      frameworkUrl: "Build/testNext.framework.js",
      codeUrl: "Build/testNext.wasm",
      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
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
          height: "100vh",
        }}
      >
        <Unity
          style={{
            position: "absolute",
            visibility: isLoaded ? "visible" : "hidden",
            width: "100%",
          }}
          unityProvider={unityProvider}
        />

        {isLoaded ? null : (
          <div
            style={{
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "center",
                marginBottom: "20px",
              }}
            >
              <img src="ebsLogo.png" style={{ height: "80px" }} />
              <img
                src="Prime.png"
                style={{ height: "50px", marginLeft: "10px" }}
              />
            </div>
            <div
              style={{
                width: `${loadingProgression * 1.15 * 100}%`,
                height: "10px",
                backgroundColor: "white",
                alignSelf: "center",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
