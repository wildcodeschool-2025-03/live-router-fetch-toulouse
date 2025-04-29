import { createContext } from "react";
import type { FuturamaDataProps } from "../services/Types";

const DataContext = createContext<FuturamaDataProps | null>(null);

export default DataContext;
