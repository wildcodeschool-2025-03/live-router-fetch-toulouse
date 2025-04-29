import type { FuturamaData } from "../services/Types";

interface FuturamaProps {
  data: FuturamaData;
}

function RealContainer({ data }: FuturamaProps) {
  return (
    <div>
      <h2>
        {data.name.first} {data.name.middle} {data.name.last}
      </h2>
      <p>{data.age} ans</p>
      <img
        src={data.images.main}
        alt={`${data.name.first} ${data.name.last}`}
      />
    </div>
  );
}

export default RealContainer;
