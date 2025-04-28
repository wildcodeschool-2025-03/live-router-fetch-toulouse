import { useEffect, useState } from "react";
import type { FuturamaData } from "./services/Types";
import "./App.css";

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

  return (
    <>
      {data?.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>
              {elem.name.first} {elem.name.middle} {elem.name.last}
            </h2>
            <p>{elem.age} ans</p>
            <img
              src={elem.images.main}
              alt={`${elem.name.first} ${elem.name.last}`}
            />
          </div>
        );
      })}
    </>
  );
}

export default App;
