import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quotes from "./components/query/Quotes";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const [count, setCount] = useState(0);
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* using suspense ans swr */}
      {/* <Suspense fallback={<h1>Loading....</h1>}>
        <Quotes></Quotes>
      </Suspense> */}

      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>data is loading</h1>}>
          <Quotes></Quotes>
          <Quotes></Quotes>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
