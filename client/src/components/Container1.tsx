import type { FuturamaDataProps } from "../services/Types";
import Container2 from "./Container2";

function Container1({ data }: FuturamaDataProps) {
  return <Container2 data={data} />;
}

export default Container1;
