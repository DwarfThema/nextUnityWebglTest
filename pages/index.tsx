import type { NextPage } from "next";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createGlobalStyle } from "styled-components";
import { isBrowser } from "react-device-detect";

const GloablStyles = createGlobalStyle`
  body{
    background-color: black;
  }
`;
/* const DATAURL = "http://127.0.0.1:3000/"; */
/* const DATAURL =
  "https://drive.google.com/u/0/uc?id=1qF5A-JvKjigIbGlDEYbj9HVQFG3Vm594&export=download"; */
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
            height: "100%",
            width: "100%",
          }}
          unityProvider={unityProvider}
        />
        {isLoaded ? null : (
          <div style={{ alignSelf: "center" }}>
            <h1
              style={{
                color: "white",
              }}
            >
              loading now...
            </h1>
            <div
              style={{
                width: `${loadingProgression * 100}%`,
                height: "10px",
                backgroundColor: "white",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
