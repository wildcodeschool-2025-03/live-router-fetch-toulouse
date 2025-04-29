import { useData } from "../contexts/DataContext";
import type { FuturamaData } from "../services/Types";
import RealContainer from "./RealContainer";

function Container5() {
  const { data } = useData();

  return (
    <>
      {data.map((elem: FuturamaData) => {
        return <RealContainer key={elem.id} data={elem} />;
      })}
    </>
  );
}

export default Container5;
