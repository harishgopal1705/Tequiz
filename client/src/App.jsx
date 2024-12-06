import { useState } from "react";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Guide from "./pages/Guide";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <section>
          <Home />
        </section>
        <section>
          <Explore />
        </section>
        <section>
          <Guide />
        </section>
      </main>
    </>
  );
}

export default App;
