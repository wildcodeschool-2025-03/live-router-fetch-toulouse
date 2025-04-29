import { useEffect, useState } from "react";
import DataContext from "./contexts/DataContext";
import type { FuturamaData } from "./services/Types";
import "./App.css";
import Container1 from "./components/Container1";

function App() {
  const [data, setData] = useState<FuturamaData[] | undefined>();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://api.sampleapis.com/futurama/characters",
        );
        const jsonResponse = await response.json();
        setData(jsonResponse);
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return data ? (
    <DataContext value={{ data }}>
      <Container1 />
    </DataContext>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
