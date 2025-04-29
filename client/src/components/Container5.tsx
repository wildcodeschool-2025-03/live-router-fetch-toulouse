import type { FuturamaDataProps } from "../services/Types";
import RealContainer from "./RealContainer";

function Container5({ data }: FuturamaDataProps) {
  return (
    <>
      {data.map((elem) => {
        return <RealContainer key={elem.id} data={elem} />;
      })}
    </>
  );
}

export default Container5;
