import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { FuturamaData, FuturamaDataProps } from "../services/Types";

const DataContext = createContext<FuturamaDataProps | null>(null);

interface ContextProps {
  children: ReactNode;
}

export function DataProvider({ children }: ContextProps) {
  const [data, setData] = useState<FuturamaData[]>([]);

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

  return <DataContext value={{ data }}>{children}</DataContext>;
}

export const useData = () => {
  const value = useContext(DataContext);

  if (value == null)
    throw new Error("useData has to be used within `DataContext` provider");

  return value;
};
