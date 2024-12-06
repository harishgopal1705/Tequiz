import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <main>
      <section>
        <Home/>
      </section>
      <section>
        <Home/>
      </section>
      <section>
        <Home/>
      </section>
     </main>
    </>
  );
}

export default App;
