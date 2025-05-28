// App.tsx
import { useEffect } from "react";
import ConnectMenu from "./components/ConnectMenu";

function App() {
  useEffect(() => {
    // Any other initialization logic can go here if needed
  }, []);

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
