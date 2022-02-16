import CouplePanel from "./components/CouplePanel";
import { children } from "./input_data";

function App() {
  return (
    <div className="App nowrap overflow-y-auto">
      <CouplePanel children={children} colorIndex={0} />
    </div>
  );
}

export default App;
