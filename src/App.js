import CouplePanel from "./components/CouplePanel";
import { children } from "./input_data";

function App() {
  return (
    <div className="App nowrap overflow-y-auto">
      <CouplePanel children={children} />
    </div>
  );
}

export default App;
