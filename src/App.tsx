// App.tsx
import { sdk } from "@farcaster/frame-sdk";
import { useEffect, useState } from "react";
import ConnectMenu from "./components/ConnectMenu";

function App() {
  const [isMiniApp, setIsMiniApp] = useState<boolean | null>(null);

  useEffect(() => {
    sdk.actions.ready();

    const checkMiniApp = async () => {
      const result = await sdk.isInMiniApp();
      setIsMiniApp(result);
    };

    checkMiniApp();
  }, []);

  if (isMiniApp === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isMiniApp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-center p-6">
        <p>
          🚫 This app can only be accessed from the Farcaster Mini App.
          <br />
          Please open it within Farcaster. if you open in farcaster refresh the app at the three dots on the top right
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-md">
        🎯SPIN & WIN
      </h1>
      <ConnectMenu />
    </div>
  );
}

export default App;
