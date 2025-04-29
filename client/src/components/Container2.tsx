import type { FuturamaDataProps } from "../services/Types";
import Container3 from "./Container3";

function Container2({ data }: FuturamaDataProps) {
  return <Container3 data={data} />;
}

export default Container2;
