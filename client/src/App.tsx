import { DataProvider } from "./contexts/DataContext";
import "./App.css";
import Container1 from "./components/Container1";

function App() {
  return (
    <DataProvider>
      <Container1 />
    </DataProvider>
  );
}

export default App;
