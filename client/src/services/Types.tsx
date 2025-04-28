interface Image {
  main: string;
}

interface Name {
  first: string;
  middle: string;
  last: string;
}

export interface FuturamaData {
  images: Image;
  id: number;
  age: string;
  name: Name;
}
