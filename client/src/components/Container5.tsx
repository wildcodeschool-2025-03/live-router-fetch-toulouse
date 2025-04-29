import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import type { FuturamaData } from "../services/Types";
import RealContainer from "./RealContainer";

function Container5() {
  const context = useContext(DataContext);

  if (context == null) return null;

  const { data } = context;

  return (
    <>
      {data.map((elem: FuturamaData) => {
        return <RealContainer key={elem.id} data={elem} />;
      })}
    </>
  );
}

export default Container5;
